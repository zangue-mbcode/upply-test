'use client';


import { WritePostForm, WritePostFormType } from '@/app/dashboard/write/WritePostForm';
import { Dialog, DialogContent } from '@/components/ui/dialog';
import { User } from '@supabase/supabase-js';
import { usePathname, useRouter } from 'next/navigation';
import { useState } from 'react';

export const ReplyModal = ({
  user,
  createPostReply,
}: {
  user: any;
  // user: User;
  createPostReply: (values: WritePostFormType) => Promise<string | void>;
}) => {
  const router = useRouter();
  const pathname = usePathname();
  return (
    <Dialog
      open={pathname?.includes('/reply')}
      onOpenChange={() => {
        router.back();
      }}
    >
      <DialogContent>
        <WritePostForm
          user={user}
          onSubmit={async (values) => {
            const result = await createPostReply(values);
            return result;
          }}
        />
      </DialogContent>
    </Dialog>
  );
};
