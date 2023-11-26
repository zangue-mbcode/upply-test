'use client';

import * as React from "react"

import { ContentTextArea } from '@/components/features/post/ContentTextArea';
import { PostWrapper } from '@/components/features/post/PostWrapper';
import { Button } from '@/components/ui/button';
import {
  Form,
  FormField,
  FormItem,
  FormMessage,
  useZodForm,
} from '@/components/ui/form';
import { useUserStore } from '@/store/UserStore';
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
// import { ContentTextArea } from '@/src/features/post/ContentTextArea';
// import { PostWrapper } from '@/src/features/post/PostWrapper';
// import { User } from '@prisma/client';
import { useRouter } from 'next/navigation';
import { z } from 'zod';
import { getUserProfile } from "@/lib/db/query/user.query";
import { useQuery } from "@tanstack/react-query";
import { useUserProfileStore } from "@/store/UserProfileStore";
import { supabase } from "@/lib/supabase";
import { useToast } from "@/components/ui/use-toast";
import { getPost } from "@/lib/db/query/post.query";
import { Post } from "@/components/features/post/Post";
import { PostType } from "@/store/PostStore";
import { PostPlaceholder } from "@/components/features/post/PostPlaceholder";

export const PostList = () => {
  
  const router = useRouter();
  const [isLoading, setIsLoading] = React.useState<boolean>(false)
  
  const { user, setUser } = useUserStore();
  const { toast } = useToast();
  
  const { isPending, isError, data, error, refetch } = useQuery({
    queryKey: ["post"],
    queryFn: getPost,
  });

  
  console.log('post data', data?.data)
  
  return (
    <>
      {
        isPending ? (
          <>
          <div className="divide-y divide-accent">
      {Array.from({ length: 20 }).map((_, index) => {
        return <PostPlaceholder key={index} />;
      })}
    </div>
          </>
        ) : (
          <>
            {data?.data?.map((post: PostType) => {
        return <Post post={post} key={post.id} />;
      })}
          </>
        )
      }
      
    </>
  );
};
