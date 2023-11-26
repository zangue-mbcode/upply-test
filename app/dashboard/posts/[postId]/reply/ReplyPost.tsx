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
import { getPost, getPostOne } from "@/lib/db/query/post.query";
import { Post } from "@/components/features/post/Post";
import { PostType } from "@/store/PostStore";
import { ReplyPostForm } from "./ReplyPostForm";

export const ReplyPost = ({postId}: any) => {
  
  const router = useRouter();
  const [isLoading, setIsLoading] = React.useState<boolean>(false)
  
  const { user, setUser } = useUserStore();
  const { toast } = useToast();
  
  // const { isPending, isError, data, error, refetch } = useQuery({
  //   queryKey: ["post", postId],
  //   queryFn: getPostOne(postId),
  // });

  const { isPending, isError, data, error, refetch } = useQuery({
    queryKey: ["post"],
    queryFn: getPost,
  });


  const post = data?.data?.find((post: any) => post?.id === postId);
  console.log("data", data)
  console.log("post", post)
  console.log("post", post?.id)
  
  return (
    <>
      <div>
      <Post post={post} key={post?.id} />
      <ReplyPostForm postId={post?.id}
      />
    </div>
    </>
  );
};
