'use server';

import { ChangePasswordFormType } from "./change-password-form";


export const changePasswordAction = async (values: ChangePasswordFormType) => {

 console.log("user login form", values)

  return '/login';
};
