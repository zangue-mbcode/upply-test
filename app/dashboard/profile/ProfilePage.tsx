'use client';

import * as React from "react"

import { Button, buttonVariants } from '@/components/ui/button';
import { useUserStore } from '@/store/UserStore';
// import { ContentTextArea } from '@/src/features/post/ContentTextArea';
// import { PostWrapper } from '@/src/features/post/PostWrapper';
// import { User } from '@prisma/client';
import { useRouter } from 'next/navigation';
import { getUserProfile } from "@/lib/db/query/user.query";
import { useQuery } from "@tanstack/react-query";
import { supabase } from "@/lib/supabase";
import { Post } from "@/components/features/post/Post";
import { Profile } from "../users/[userId]/Profile";
import Link from "next/link";

export const ProfilePage = () => {
  const [isLoading, setIsLoading] = React.useState<boolean>(false)
  
  const { user, setUser } = useUserStore();
  const router = useRouter();
  

  const { isPending, isError, data, error, refetch } = useQuery({
    queryKey: ["profile"],
    queryFn: getUserProfile,
  });
  

  
  const userProfile = data?.data?.find((userProfile: any) => userProfile?.id === user?.id);
  console.log("userProfile", userProfile)

  
  return (
    <>
       <Profile userProfile={userProfile} />
      <div className="mt-4 border-b border-accent pb-4">
        <Link
          href="/dashboard/profile/edit"
          className={buttonVariants({
            variant: 'outline',
          })}
        >
          Edit profile
        </Link>
        
      </div>
      <div className="divide-y divide-accent">
        {userProfile?.post.map((post) => (
          <Post key={post.id} post={post} />
        ))}
      </div>
    </>
  );
};
