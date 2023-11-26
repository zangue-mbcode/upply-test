
import { useUserStore } from '@/store/UserStore';
import { ProfileForm } from './ProfileForm';
import notFound from '../../users/[userId]/not-found';
import { EditProfilePage } from './EditProfilePage';

export default async function EditUser() {
  // const session = await getAuthSession();

  // const userId = session?.user.id;
  // if (!userId) {
  //   notFound();
  //   return;
  // }

  // const user = await getUserEdit(userId);
  
  // const { user, setUser } = useUserStore();

  // if (!user) {
  //   notFound();
  //   return;
  // }

  return (
    <div className="h-full container flex items-center">
      <div className="bg-card border rounded-md border-border p-4 flex-1">
        <EditProfilePage  />
      </div>
    </div>
  );
}
