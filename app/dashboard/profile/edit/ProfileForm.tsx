'use client';

import * as React from "react"
import { Button } from '@/components/ui/button';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
  useZodForm,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { getUserProfile } from '@/lib/db/query/user.query';
import { useUserStore } from '@/store/UserStore';
import { useQuery } from '@tanstack/react-query';
// import { UserEdit } from '@/src/db/query/userProfile?.query';
import { useRouter } from 'next/navigation';
import { FieldValues, SubmitHandler } from 'react-hook-form';
import { z } from 'zod';
import { supabase } from "@/lib/supabase";

const FormScheme = z.object({
  name: z.string().min(1).max(50),
  username: z.string().min(1).max(50),
  bio: z.string().max(500),
  link: z
    .string()
    .max(50)

    .regex(/^(https?:\/\/)?([\w-]+\.)?\w{0,6}(\/[\w \.-]*)*\/?(\?\w+=\w+)?$/, {
      message: 'Please enter a valid domain',
    }),
});

export type ProfileFormType = z.infer<typeof FormScheme>;


export const ProfileForm = ({userProfile}: any) => {
  const [isLoading, setIsLoading] = React.useState<boolean>(false)


  const form = useZodForm({
    schema: FormScheme,
    defaultValues: {
      name: userProfile?.name ?? '',
      username: userProfile?.username,
      bio: userProfile?.bio ?? '',
      link: userProfile?.link ?? '',
    },
  });
  const router = useRouter();

  const onSubmit: SubmitHandler<FieldValues> = async (values, event) => {
    event?.preventDefault();
    
    setIsLoading(true);

    const { error } = await supabase
    .from('profile')
  .update({ name: values?.name, username: values?.username, bio: values?.bio, link: values?.link })
  .eq('id', userProfile?.id)

  
  router.push("/dashboard/profile")
  router.refresh()
   
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
        name="name"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Name</FormLabel>
            <FormControl>
              <Input placeholder="Name" {...field} />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />

      <FormField
        control={form.control}
        name="username"
        render={({ field }) => (
          <FormItem>
            <FormLabel>username</FormLabel>
            <FormControl>
              <Input placeholder="Username" {...field} />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />

      <FormField
        control={form.control}
        name="bio"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Bio</FormLabel>
            <FormControl>
              <Textarea placeholder="Bio" {...field} />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />

      <FormField
        control={form.control}
        name="link"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Link</FormLabel>
            <FormControl>
              <Input placeholder="google.com" {...field} />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />

      <div className="flex w-full justify-end">
        <Button size="sm">Post</Button>
      </div>
    </Form>
  );
};
