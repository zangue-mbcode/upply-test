

export default function Dashboard() {
  // const session = await getAuthSession();
  // const last10Posts = await get20LastPosts(session?.user.id);
  return (
    <>
    <span className="font-bold text-4xl">Dashboard</span>
    <div className="border-dashed border border-zinc-500 w-full h-12 rounded-lg"></div>
    <div className="border-dashed border border-zinc-500 w-full h-64 rounded-lg"></div>
    {/* <div className="divide-y divide-accent">
      {last10Posts.map((post) => {
        return <Post post={post} key={post.id} />;
      })}
    </div> */}
  </>
  )
}
