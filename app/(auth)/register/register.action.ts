'use server';


import { supabase } from "@/lib/supabase";
import { RegisterFormType } from "./register-form";


export const RegisterAction = async (values: RegisterFormType) => {

  
  // instantiate supabase client
  try {
    const { data, error } = await supabase.auth.signUp({
      email: values?.email,
      password: values?.password,
    options: {
      data: {
        first_name: values?.firstName,
        last_name: values?.lastName
      }
    }
    })
    if (error) {
      console.log('error', error)
     } else {
      console.log('data', data)
     }
    
    
   } catch (error: any) {
    console.log('error', error)
  }
 console.log("user login form", values)

  return '/';
};
