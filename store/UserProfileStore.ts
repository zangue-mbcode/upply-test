import { create } from "zustand";

export type UserProfile = {
  id: string;
  name: string;
  username: string;
  image: string;
  bio: string;
  createdAt: string;
  link: string;
};

type UserProfileStore = {
  user: UserProfile | null;
  setUser: (user: UserProfile | null) => void;
};

export const useUserProfileStore = create<UserProfileStore>((set) => ({
  user: null,
  setUser: (user: UserProfile | null) => set({ user }),
  
  
}));
