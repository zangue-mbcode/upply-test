'use client';

import * as React from "react"

import { Button, buttonVariants } from '@/components/ui/button';
import { useUserStore } from '@/store/UserStore';
import { useRouter } from 'next/navigation';
import { getUserProfile } from "@/lib/db/query/user.query";
import { useQuery } from "@tanstack/react-query";
import { supabase } from "@/lib/supabase";
import { Post } from "@/components/features/post/Post";
import { Profile } from "./Profile";
import Link from "next/link";
export const UserPage = ({userId} : any) => {
  const [isLoading, setIsLoading] = React.useState<boolean>(false)
  
  const { user, setUser } = useUserStore();
  const router = useRouter();
  
  const isCurrent = user?.id === userId;

  const { isPending, isError, data, error, refetch } = useQuery({
    queryKey: ["profile"],
    queryFn: getUserProfile,
  });
  

  
  const userProfile = data?.data?.find((userProfile: any) => userProfile?.id === userId);
  console.log("userProfile", userProfile)

  console.log("isCurrent", isCurrent)
  const follow = userProfile?.following.find((follow) => follow?.followerId === user?.id)
  const isFollower = follow ? true : false;

  console.log("follow", follow)
  const followUser = async () => {
    setIsLoading(true);
    if (isFollower) {
      const { error } = await supabase
      .from('follow')
      .delete()
      .eq('id', follow?.id)
    }else{
      const { data, error } = await supabase
      .from("follow")
      .insert([
        {
          followerId: user?.id,
          followingId: userId,
        },
      ]);
      
      refetch ? refetch() : null
      console.log("like", data)
    }
    
      setIsLoading(false);
  }
  
  return (
    <>
       <Profile userProfile={userProfile} />
      <div className="mt-4 border-b border-accent pb-4">
        {isCurrent ? (
          <Link
            href="/dashboard/profile/edit"
            className={buttonVariants({
              variant: 'outline',
            })}
          >
            Edit profile
          </Link>
        ) : null}
        {!isCurrent ? (
          <form>
            <Button
              formAction={() => followUser()}
              variant="outline"
            >
              {isFollower ? 'Unfollow' : 'Follow'}
            </Button>
          </form>
        ) : null}
      </div>
      <div className="divide-y divide-accent">
        {userProfile?.post.map((post) => (
          <Post key={post.id} post={post} />
        ))}
      </div>
    </>
  );
};
