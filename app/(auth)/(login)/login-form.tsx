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
import { useUserStore } from "@/store/UserStore";
import { useToast } from "@/components/ui/use-toast";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import { supabase } from "@/lib/supabase";
import { zodResolver } from "@hookform/resolvers/zod";

const FormScheme = z.object({
  email: z.string().min(1).max(50).email(),
  password: z.string().min(6).max(50)
});

export type LoginFormType = z.infer<typeof FormScheme>;



export const UserLoginForm = () => {
  const [isLoading, setIsLoading] = React.useState<boolean>(false)
  const router = useRouter();
  const { user, setUser } = useUserStore();
  const { toast } = useToast();

  const form = useZodForm({
    schema: FormScheme,
    defaultValues: {
      email: '',
      password: '',
    },
  });
  

  const onSubmit: SubmitHandler<FieldValues> = async (values, event) => {
    event?.preventDefault();
    
    setIsLoading(true);
    const { data: user, error } = await supabase.auth.signInWithPassword({
      email: values.email,
      password: values.password,
    });

    if (user.user) {
      setUser(user.user);
      localStorage.setItem("UpplyTestUser", JSON.stringify(user.user))
      console.log('user.user', user.user)
      router.push('/dashboard')
      router.refresh()
    }
    if (error) {
      toast({
        title: "Echec et connexion",
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

     

      <div className="grid gap-2">
        <Button type="submit">
      {isLoading && (
              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
            )}Login</Button>
      </div>
    </Form>
  )
}