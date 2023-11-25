// import { createPost } from '@/app/write/write.action';
// import { getAuthSession } from '@/src/auth/nextauth-option';
// import { prisma } from '@/src/db/prisma';
import { signIn } from 'next-auth/react';
import { WriteModal } from './WriteModal';
import { createPost } from '../../write/write.action';
import { useUserStore } from '@/store/UserStore';

export default async function Modal() {
  // const session = await getAuthSession();
  const { user, setUser } = useUserStore();

  // if (!session?.user.id) {
  //   await signIn();
  // }

  // const user = await prisma.user.findUnique({
  //   where: {
  //     id: session?.user.id,
  //   },
  // });

  if (!user) {
    throw new Error('User not found');
  }

  return <WriteModal user={user} createPost={createPost} />;
}
