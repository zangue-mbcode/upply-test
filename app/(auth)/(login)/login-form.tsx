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

const FormScheme = z.object({
  email: z.string().min(1).max(50).email(),
  password: z.string().min(1).max(50)
});

export type LoginFormType = z.infer<typeof FormScheme>;

type LoginFormProps = {
  onSubmit: (values: LoginFormType) => Promise<string | void>;
};


export const UserLoginForm = ({ onSubmit }: LoginFormProps) => {
  const [isLoading, setIsLoading] = React.useState<boolean>(false)
  const router = useRouter();

  const form = useZodForm({
    schema: FormScheme,
    defaultValues: {
      email: '',
      password: '',
    },
  });


  return (
    <Form
      className="space-y-4"
      form={form}
      onSubmit={async (values) => {
        const url = await onSubmit(values);

        if (url) {
          router.push(url);
          router.refresh();
        }
      }}
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
        <Button type="submit">Login</Button>
      </div>
    </Form>
  )
}