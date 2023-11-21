'use server';

import { ForgotPasswordType } from "./forgot-password-form";


export const ForgotPasswordAction = async (values: ForgotPasswordType) => {

 console.log("forgot password form", values)

  return '/change-password';
};
