import { create } from "zustand";

export type LikesType = {
  id: string;
  createdAt: string;

}

export type PostType = {
  id: string;
  content: string;
  post: any[] | null;
  like: LikesType[];
  profile: any;
  createdAt: string;
};

type PostStore = {
  posts: PostType | null;
  setPosts: (posts: PostType | null) => void;
};

export const useUserProfileStore = create<PostStore>((set) => ({
  posts: null,
  setPosts: (posts: PostType | null) => set({ posts }),
  
  
}));
