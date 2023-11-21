'use server';


import { RegisterFormType } from "./register-form";


export const RegisterAction = async (values: RegisterFormType) => {

 console.log("user login form", values)

  return '/login';
};
