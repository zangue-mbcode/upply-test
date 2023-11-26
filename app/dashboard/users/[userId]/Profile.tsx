'use client'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
// import { UserProfile } from '@/src/db/query/userProfile?.query';
import Link from 'next/link';
import { PropsWithChildren } from 'react';
import { useQuery } from '@tanstack/react-query';
import { getUserProfile } from '@/lib/db/query/user.query';

const removeHttp = (url: string) => {
  return url.replace(/(^\w+:|^)\/\//, '');
};

type ProfileProps = PropsWithChildren<{
  userProfile: any;
}>;

export const Profile = ({ userProfile, children }: ProfileProps) => {  
  
  

  return (
    <div className="mt-4">
      <div className="flex gap-2 items-start justify-between">
        <div className="flex flex-col gap-0.5">
          <h3 className="text-2xl font-bold">{userProfile?.name}</h3>
          <p>{userProfile?.username}</p>
        </div>
        <Avatar size="lg">
          {userProfile?.image ? <AvatarImage src={userProfile?.image} alt={userProfile?.username} /> : null}
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
      </div>
      {userProfile?.bio ? (
        <p>{userProfile?.bio}</p>
      ) : (
        <p className="text-muted-foreground">no bio</p>
      )}
      <div className="flex items-center gap-2 mt-4">
        <div className="flex -space-x-2">
          {userProfile?.followed?.map((f: any) => (
            <Avatar
              size="sm"
              className="border-2 border-background"
              key={f.follower.id}
            >
              {f.follower.image ? (
                <AvatarImage src={f.follower.image} alt={f.follower.id} />
              ) : null}
              <AvatarFallback>
                {(f.follower.username[0] + f.follower.username[1]).toUpperCase()}
              </AvatarFallback>
            </Avatar>
          ))}
        </div>
        <p className="text-muted-foreground">{' ‧ '}</p>
        {/* <p className="text-muted-foreground">{userProfile?._count.followed} followers</p> */}

        {userProfile?.link ? (
          <>
            <p className="text-muted-foreground">{' ‧ '}</p>
            <Link className="text-muted-foreground hover:underline" href={userProfile?.link}>
              {removeHttp(userProfile?.link)}
            </Link>
          </>
        ) : null}
      </div>
      {children}
    </div>
  );
};
