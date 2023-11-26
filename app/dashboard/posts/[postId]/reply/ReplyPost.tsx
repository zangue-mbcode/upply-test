'use client';

import * as React from "react"

import { useRouter } from 'next/navigation';
import { useQuery } from "@tanstack/react-query";
import { useToast } from "@/components/ui/use-toast";
import { getPost } from "@/lib/db/query/post.query";
import { Post } from "@/components/features/post/Post";
import { ReplyPostForm } from "./ReplyPostForm";

export const ReplyPost = ({postId}: any) => {
  
  const router = useRouter();
  const [isLoading, setIsLoading] = React.useState<boolean>(false)
  
  const { toast } = useToast();

    
  const { isPending, isError, data, error, refetch } = useQuery({
    queryKey: ["post"],
    queryFn: getPost,
  });


  const post = data?.data?.find((post: any) => post?.id === postId);
  
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
