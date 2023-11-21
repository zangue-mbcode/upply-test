import { Metadata } from "next"
import Link from "next/link"

import { cn } from "@/lib/utils"
import { buttonVariants } from "@/components/ui/button"
import { ForgotPasswordForm } from "./forgot-password-form"
import { ForgotPasswordAction } from "./forgot-password.action"

export const metadata: Metadata = {
  title: "Authentication",
  description: "Authentication forms built using the components.",
}

export default function AuthenticationPage() {
  return (
    <>
     
      <div className="container relative hidden h-screen flex-col items-center justify-center md:grid lg:max-w-none lg:grid-cols-2 lg:px-0">
        <Link
          href="/"
          className={cn(
            buttonVariants({ variant: "ghost" }),
            "absolute right-4 top-4 md:right-8 md:top-8"
          )}
        >
          Login
        </Link>
        <div className="relative hidden h-full flex-col bg-muted p-10 text-white dark:border-r lg:flex">
          <div className="absolute inset-0 h-full bg-zinc-900" />
          <div className="relative z-20 flex items-center text-lg font-medium">
            Upply Test
          </div>
          
        </div>
        <div className="lg:p-8">
          <div className="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px]">
            <div className="flex flex-col space-y-2 text-center">
              <h1 className="text-2xl font-semibold tracking-tight">
              Create an account
              </h1>
              <p className="text-sm text-muted-foreground">
              Enter your email below to create your account
              </p>
            </div>
            <ForgotPasswordForm    onSubmit={ForgotPasswordAction}/>
            
          </div>
        </div>
      </div>
    </>
  )
}