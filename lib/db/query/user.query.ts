
import { supabase } from '@/lib/supabase';


export const getUserProfile = async () => {
    return await supabase
      .from("profile")
      .select(`
      id,
      name,
      email,
      username,
      emailVerified,
      createdAt,
      image,
      link,
      bio,
      createdAt,
      follower:follow_followerId_fkey(id, followerId, followingId),
      following:follow_followingId_fkey(id, followerId, followingId),
      post (
        id, 
        content, 
        createdAt,
        profile (
          id, 
          username,
          name,
          image
        ),
        post (
          id,
          content,
          createdAt
        ),
        like (
          id,
          createdAt
        )
      )
      `);
  };

  