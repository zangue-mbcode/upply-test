'use client';

import * as React from "react"

import { ContentTextArea } from '@/components/features/post/ContentTextArea';
import { PostWrapper } from '@/components/features/post/PostWrapper';
import { Button } from '@/components/ui/button';
import {
  Form,
  FormField,
  FormItem,
  FormMessage,
  useZodForm,
} from '@/components/ui/form';
import { useUserStore } from '@/store/UserStore';
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
// import { ContentTextArea } from '@/src/features/post/ContentTextArea';
// import { PostWrapper } from '@/src/features/post/PostWrapper';
// import { User } from '@prisma/client';
import { useRouter } from 'next/navigation';
import { z } from 'zod';
import { getUserProfile } from "@/lib/db/query/user.query";
import { useQuery } from "@tanstack/react-query";
import { useUserProfileStore } from "@/store/UserProfileStore";
import { supabase } from "@/lib/supabase";
import { useToast } from "@/components/ui/use-toast";

const FormScheme = z.object({
  content: z.string().min(1).max(500),
});

export type WritePostFormType = z.infer<typeof FormScheme>;

export const WritePostForm = () => {
  const form = useZodForm({
    schema: FormScheme,
  });
  const router = useRouter();
  const [isLoading, setIsLoading] = React.useState<boolean>(false)
  
  const { user, setUser } = useUserStore();
  const { toast } = useToast();
  

  const { isPending, isError, data, error, refetch } = useQuery({
    queryKey: ["profile"],
    queryFn: getUserProfile,
  });
  

  
  const userProfile = data?.data?.find((userProfile: any) => userProfile?.id === user?.id);

  
  const onSubmit: SubmitHandler<FieldValues> = async (values, event) => {
    event?.preventDefault();
    
    setIsLoading(true);
    const { data: post, error } = await supabase
      .from("post")
      .insert([
        {
          user_id: user?.id,
          content: values.content,
        },
      ]);

      console.log("post", post)

      toast({
        title: "Le post à été ajouté avec succès",
      });
      router.push("/dashboard")
        router.refresh()
    
    setIsLoading(false);
  };

  return (
    <div className="w-full">
      <PostWrapper user={userProfile} className="w-full">
        <Form
    form={form}
      onSubmit={onSubmit}
        >
          <FormField
            control={form.control}
            name="content"
            render={({ field }) => (
              <FormItem>
                <ContentTextArea {...field} rows={4} />
                <FormMessage />
              </FormItem>
            )}
          />

          <div className="flex w-full justify-end">
            <Button>Post</Button>
          </div>
        </Form>
      </PostWrapper>
    </div>
  );
};
