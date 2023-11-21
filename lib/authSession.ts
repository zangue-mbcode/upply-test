import { useRouter } from "next/navigation";
import { supabase } from "./supabase";


export const getAuthSession = async () => {
    const router = useRouter()
    
        const { data, error } = await supabase.auth.getSession()
        if (error) {
         return data;
        } else {
         if (!data.session) {
          router.push("/")
          return data;
         }
    
         localStorage.setItem("user", JSON.stringify(data))
        }
       
  };