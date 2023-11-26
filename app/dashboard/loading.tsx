import { PostPlaceholder } from "@/components/features/post/PostPlaceholder";


export const Loader = () => {
  return (
    <div className="divide-y divide-accent">
      {Array.from({ length: 20 }).map((_, index) => {
        return <PostPlaceholder key={index} />;
      })}
    </div>
  );
}
