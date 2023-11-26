
import { ReplyPost } from './ReplyPost';

export default async function page({
  params,
}: {
  params: {
    postId: string;
  };
}) {
  
  return (
    <ReplyPost postId={params.postId} />
  );
}
