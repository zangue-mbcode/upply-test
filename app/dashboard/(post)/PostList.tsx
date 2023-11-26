'use client';

import * as React from "react"

import { useQuery } from "@tanstack/react-query";
import { getPost } from "@/lib/db/query/post.query";
import { Post } from "@/components/features/post/Post";
import { PostType, usePostStore } from "@/store/PostStore";
import { PostPlaceholder } from "@/components/features/post/PostPlaceholder";

export const PostList = () => {
  
  const { posts, setPosts, refetchPost, setRefetchPost } = usePostStore();
  
  const { isPending, isError, data, error, refetch } = useQuery({
    queryKey: ["post"],
    queryFn: getPost,
  });
  

  setRefetchPost(refetch);
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
