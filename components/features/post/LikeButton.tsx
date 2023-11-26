'use client';


import { Loader } from '@/components/ui/loader';
import { supabase } from '@/lib/supabase';
import { useUserStore } from '@/store/UserStore';
import clsx from 'clsx';
import { Heart } from 'lucide-react';
import * as React from "react"

export const LikeButton = ({
  post,
  isLiked,
}: {
  post: any;
  isLiked: boolean;
}) => {  
  const [isLoading, setIsLoading] = React.useState<boolean>(false)

  const { user, setUser } = useUserStore();

  const likePost = async () => {
    setIsLoading(true);
    const { data, error } = await supabase
      .from("like")
      .insert([
        {
          post_id: post?.id,
          user_id: user?.id,
        },
      ]);

      console.log("like", data)
      setIsLoading(false);
  }

  return (
    <button
      className={clsx('rounded-md hover:bg-accent flex gap-1 items-center', {
        'text-red-500': isLiked,
      })}
      onClick={() => likePost()}
    >
      {isLoading ? <Loader size={20} /> : <Heart size={20} />}
    </button>
  );
};
