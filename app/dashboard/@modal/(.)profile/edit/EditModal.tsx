'use client';

import { ProfileForm, ProfileFormType } from '@/app/dashboard/profile/edit/ProfileForm';
import { Dialog, DialogContent } from '@/components/ui/dialog';
// import { UserEdit } from '@/src/db/query/user.query';
import { usePathname, useRouter } from 'next/navigation';

export const EditModal = ({
  user,
  editProfile,
}: {
  user: any;
  editProfile: (values: ProfileFormType) => Promise<string | void>;
}) => {
  const router = useRouter();
  const pathname = usePathname();

  return (
    <Dialog
      open={pathname?.includes('/edit')}
      onOpenChange={() => {
        router.back();
      }}
    >
      <DialogContent>
        <ProfileForm
          user={user}
          onSubmit={async (values) => {
            const result = await editProfile(values);
            router.back();
            return result;
          }}
        />
      </DialogContent>
    </Dialog>
  );
};
