'use server';

import { supabase } from "@/lib/supabase";
import { LoginFormType } from "./login-form";


export const loginAction = async (values: LoginFormType) => {
  
  try {
    const { data, error } = await supabase.auth.signInWithPassword({
      email: values?.email,
      password: values?.password
    })
    if (error) {
      console.log('error', error)
     } else {
      console.log('data', data)
     }
    
    
   } catch (error: any) {
    console.log('error', error)
  }

  return '/dashboard';
};
