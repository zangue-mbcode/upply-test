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
  confirm_password: z.string().min(1).max(50),
  password: z.string().min(1).max(50)
})
.refine((obj) => obj.password === obj.confirm_password, {
  path: ["confirm_password"],
  message: "Les mots de passe ne corresponde pas",
});

export type ChangePasswordFormType = z.infer<typeof FormScheme>;

type ChangePasswordFormProps = {
  onSubmit: (values: ChangePasswordFormType) => Promise<string | void>;
};


export const ChangePasswordForm = ({ onSubmit }: ChangePasswordFormProps) => {
  const [isLoading, setIsLoading] = React.useState<boolean>(false)
  const router = useRouter();

  const form = useZodForm({
    schema: FormScheme,
    defaultValues: {
      confirm_password: '',
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
      <Button type="submit">Change Password</Button>
      </div>
    </Form>
  )
}