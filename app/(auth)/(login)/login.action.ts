'use server';

import { LoginFormType } from "./login-form";


export const loginAction = async (values: LoginFormType) => {

 console.log("user login form", values)

  return '/dashboard';
};
