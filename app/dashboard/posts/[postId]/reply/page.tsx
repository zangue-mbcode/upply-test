
import { signIn } from 'next-auth/react';
import { useUserStore } from '@/store/UserStore';
import { WritePostForm } from '@/app/dashboard/write/WritePostForm';
import { Post } from '@/components/features/post/Post';
import { ReplyPost } from './ReplyPost';

export default async function page({
  params,
}: {
  params: {
    postId: string;
  };
}) {
  // const session = await getAuthSession();

  // if (!session?.user.id) {
  //   await signIn();
  //   return null;
  // }
  // const { user, setUser } = useUserStore();

  // const user = await prisma.user.findUnique({
  //   where: {
  //     id: session?.user.id,
  //   },
  // });

  // if (!user) {
  //   throw new Error('User not found');
  // }

  // const post = await getPost(params.postId, session.user.id);

  // if (!post) {
  //   return <div>Post not found</div>;
  // }

  return (
    <ReplyPost postId={params.postId} />
  );
}
