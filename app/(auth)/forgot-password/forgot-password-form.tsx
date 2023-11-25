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
  email: z.string().min(1).max(50).email()
});

export type ForgotPasswordType = z.infer<typeof FormScheme>;



export const ForgotPasswordForm = () => {
  const [isLoading, setIsLoading] = React.useState<boolean>(false)
  const router = useRouter();
  const { toast } = useToast();

  const form = useZodForm({
    schema: FormScheme,
    defaultValues: {
      email: '',
    },
  });

  const onSubmit: SubmitHandler<FieldValues> = async (values, event) => {
    event?.preventDefault();
    
    setIsLoading(true);
   
    const { data, error } = await supabase.auth.resetPasswordForEmail(values.email, {
      redirectTo: 'http://localhost:3001/change-password',
    })

    if (data) {
      console.log("forgot password data", data)
      toast({
        title: "Un mail à été envoyer consulter le pour changer votre mot de passe",
      });
    }
    if (error) {
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
        name="email"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Email</FormLabel>
            <FormControl>
              <Input placeholder="zanulrich@gmail.com" {...field} />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />


     

      <div className="grid gap-2">
        <Button type="submit">
      {isLoading && (
              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
            )}Forgot Password</Button>
      </div>
    </Form>
  )
}