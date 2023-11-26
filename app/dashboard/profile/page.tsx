import { buttonVariants } from '@/components/ui/button';
// import { getAuthSession } from '@/src/auth/nextauth-option';
// import { getUserProfile } from '@/src/db/query/user.query';
// import { Post } from '@/src/features/post/Post';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { Profile } from '../users/[userId]/Profile';
import { Post } from '@/components/features/post/Post';
import { useUserStore } from '@/store/UserStore';
import { ProfilePage } from './ProfilePage';

export default async function User({
  params,
}: {
  params: {
    userId: string;
  };
}) {
  
  

  return (
    <div className="container">
      <ProfilePage  />
      
    </div>
  );
}
