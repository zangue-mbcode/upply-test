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
import { useUserStore } from "@/store/UserStore";

const FormScheme = z.object({
  firstName: z.string(),
  lastName: z.string().min(1).max(50),
  email: z.string().min(1).max(50).email(),
})

export type RegisterFormType = z.infer<typeof FormScheme>;



export const RegisterForm = () => {
  const [isLoading, setIsLoading] = React.useState<boolean>(false)
  const router = useRouter();
  const { toast } = useToast()
  const { user, setUser } = useUserStore();

  const form = useZodForm({
    schema: FormScheme,
    defaultValues: {
      firstName: '',
      lastName: '',
      email: '',
    },
  });

  
  const onSubmit: SubmitHandler<FieldValues> = async (values, event) => {
    event?.preventDefault();
    
    setIsLoading(true);
   
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

    
      <div className="grid gap-2">
      <Button type="submit">
      {isLoading && (
              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
            )}
        Update account
        </Button>
      </div>
      
    </Form>
  )
}