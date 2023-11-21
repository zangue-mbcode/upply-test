
import { supabase } from "./supabase";


export const getAuthSession = async () => {
    
        const { data, error } = await supabase.auth.getSession()
        if (error) {
         return data;
        } else {
         if (!data.session) {
          return data;
         }
    
         localStorage.setItem("user", JSON.stringify(data))
        }
       
  };