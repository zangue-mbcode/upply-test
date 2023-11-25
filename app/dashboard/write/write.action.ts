'use server';

// import { getAuthSession } from '@/src/auth/nextauth-option';
// import { prisma } from '@/src/db/prisma';
import { redirect } from 'next/navigation';
import { WritePostFormType } from './WritePostForm';

export const createPost = async (values: WritePostFormType) => {
  // const session = await getAuthSession();

  // if (!session?.user.id) {
  //   throw new Error('You must be logged in to do this.');
  // }

  // const post = await prisma.post.create({
  //   data: {
  //     content: values.content,
  //     userId: session.user.id,
  //   },
  // });

  // fake timer because sqlite is too fast
  await new Promise((resolve) => setTimeout(resolve, 500));

  // try {
  //   redirect(`/posts/${post.id}`);
  // } catch (error) {
  //   return `/posts/${post.id}`;
  // }
};
