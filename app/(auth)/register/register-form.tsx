"use client"

import * as React from "react"

import { z } from "zod";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
  useZodForm,
} from '@/components/ui/form';
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import { Loader2 } from "lucide-react";
import { useToast } from "@/components/ui/use-toast";
import { FieldValues, SubmitHandler } from "react-hook-form";
import { supabase } from "@/lib/supabase";

const FormScheme = z.object({
  firstName: z.string(),
  lastName: z.string().min(1).max(50),
  email: z.string().min(1).max(50).email(),
  password: z.string().min(6).max(50),
  confirm_password: z.string().min(6).max(50)
})
.refine((obj) => obj.password === obj.confirm_password, {
  path: ["confirm_password"],
  message: "Les mots de passe ne corresponde pas",
});

export type RegisterFormType = z.infer<typeof FormScheme>;



export const RegisterForm = () => {
  const [isLoading, setIsLoading] = React.useState<boolean>(false)
  const router = useRouter();
  const { toast } = useToast()

  const form = useZodForm({
    schema: FormScheme,
    defaultValues: {
      firstName: '',
      lastName: '',
      email: '',
      password: '',
      confirm_password: '',
    },
  });

  
  const onSubmit: SubmitHandler<FieldValues> = async (values, event) => {
    event?.preventDefault();
    
    setIsLoading(true);
    const { data: user, error } = await supabase.auth.signUp({
      email: values?.email,
      password: values?.password,
    options: {
      data: {
        first_name: values?.firstName,
        last_name: values?.lastName
      }
    }
    })

    if (user?.user) {
      console.log('register user', user?.user)
      toast({
        title: "Compte crée avec succèss",
      });
      router.push('/')
      router.refresh()
    }
    if (error) {
      toast({
        title: "Votre compte n'a pas été crée",
      });
    }
    setIsLoading(false);
  };

  return (
    <Form
      className="space-y-4"
      form={form}
        onSubmit={onSubmit}
    >
      <FormField
        control={form.control}
        name="firstName"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Prénom</FormLabel>
            <FormControl>
              <Input placeholder="Entrer votre prénom" {...field} />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
      <FormField
        control={form.control}
        name="lastName"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Nom</FormLabel>
            <FormControl>
              <Input placeholder="Entrer votre nom" {...field} />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
      <FormField
        control={form.control}
        name="email"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Email</FormLabel>
            <FormControl>
              <Input placeholder="Entrer votre mail" {...field} />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />

      <FormField
        control={form.control}
        name="password"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Password</FormLabel>
            <FormControl>
              <Input type="password" placeholder="Enter your password" {...field} />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />

      <FormField
        control={form.control}
        name="confirm_password"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Confirm Password</FormLabel>
            <FormControl>
              <Input type="password" placeholder="Confirm your password" {...field} />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />

     
      <div className="grid gap-2">
      <Button type="submit">
      {isLoading && (
              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
            )}
        Create account
        </Button>
      </div>
      
    </Form>
  )
}