'use client';


import { Loader } from '@/components/ui/loader';
import { supabase } from '@/lib/supabase';
import { useUserStore } from '@/store/UserStore';
import clsx from 'clsx';
import { Delete, Heart, Trash2 } from 'lucide-react';
import * as React from "react"
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog"
import { useRouter } from 'next/navigation';
import { usePostStore } from '@/store/PostStore';

export const DeleteButton = ({
  post,
}: {
  post: any;
}) => {  
  const [isLoading, setIsLoading] = React.useState<boolean>(false)
  const { posts, setPosts, refetchPost, setRefetchPost } = usePostStore();

  const router = useRouter();
  const { user, setUser } = useUserStore();

  const deletePost = async () => {
    setIsLoading(true);

      const { error } = await supabase
    .from('post')
  .update({ is_active: false})
  .eq('id', post?.id)

  refetchPost ? refetchPost() : null
      setIsLoading(false);
  }

  return (

    <>
      {
        post?.profile?.id === user?.id ? (
          <AlertDialog>
      <AlertDialogTrigger>
      <button
          className={clsx('rounded-md hover:bg-accent flex gap-1 items-center text-red-500')}
        >
          {isLoading ? <Loader size={20} /> : <Trash2 size={20} />}
        </button>
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Voulez vous vraiment supprimer ce post?</AlertDialogTitle>
          <AlertDialogDescription>
            Le post ne sera plus référencé sur la plateforme après sa suppression
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>Annuler</AlertDialogCancel>
          <AlertDialogAction onClick={() => deletePost()}>Continuer</AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
        ) : (
          <></>
        )
      }
      
    </>
    
    
  );
};
