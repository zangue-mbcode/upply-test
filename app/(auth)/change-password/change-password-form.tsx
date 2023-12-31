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
import { FieldValues, SubmitHandler } from "react-hook-form";
import { supabase } from "@/lib/supabase";
import { useToast } from "@/components/ui/use-toast";

const FormScheme = z.object({
  confirm_password: z.string().min(6).max(50),
  password: z.string().min(6).max(50)
})
.refine((obj) => obj.password === obj.confirm_password, {
  path: ["confirm_password"],
  message: "Les mots de passe ne corresponde pas",
});

export type ChangePasswordFormType = z.infer<typeof FormScheme>;



export const ChangePasswordForm = () => {
  const [isLoading, setIsLoading] = React.useState<boolean>(false)
  const router = useRouter();
  const { toast } = useToast();

  const form = useZodForm({
    schema: FormScheme,
    defaultValues: {
      confirm_password: '',
      password: '',
    },
  });

  const onSubmit: SubmitHandler<FieldValues> = async (values, event) => {
    event?.preventDefault();
    
    setIsLoading(true);
   
    const { data, error } = await supabase.auth.updateUser({
      password: values?.password
    })

    if (data) {
      console.log('change password data', data)
      toast({
        title: "Mot de passe changer avec succès",
      });
    }
    if (error) {
      console.log('change password error', error)
      toast({
        title: "Une erreur est survenue",
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
            )}Change Password</Button>
      </div>
    </Form>
  )
}