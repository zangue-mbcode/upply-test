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
