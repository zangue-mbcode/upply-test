
import { supabase } from '@/lib/supabase';


export const getPost = async () => {
    return await supabase
      .from("post")
      .select(`
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
        createdAt,
        user_id
      )
    `
      )
      .eq('is_child', false)
      .eq('is_active', true);
  };

  export const getPostOne = async (postId: string) => {
    return await supabase
      .from("post")
      .select(`
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
    `
        )
        .eq('id', postId);
  };