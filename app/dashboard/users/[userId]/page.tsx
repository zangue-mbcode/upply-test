
import { UserPage } from "./UserPage";


export default async function User({
  params,
}: {
  params: {
    userId: string;
  };
}) {
 

  return (
    <div className="container">
      <UserPage userId={params?.userId} />
    </div>
  );
}
