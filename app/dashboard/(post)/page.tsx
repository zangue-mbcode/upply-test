import { Post } from "@/components/features/post/Post";
import { getPost } from "@/lib/db/query/post.query";
import { useQuery } from "@tanstack/react-query";
import { PostList } from "./PostList";


export default function Dashboard() {
  // const session = await getAuthSession();
  // const last10Posts = await get20LastPosts(session?.user.id);
  
 
  return (
    <>
    
    <div className="divide-y divide-accent">
      <PostList />
    </div>
  </>
  )
}
