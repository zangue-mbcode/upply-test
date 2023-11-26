'use client';

import * as React from "react"

import { ContentTextArea } from '@/components/features/post/ContentTextArea';
import { Button } from '@/components/ui/button';
import {
  Form,
  FormField,
  FormItem,
  FormMessage,
  useZodForm,
} from '@/components/ui/form';
import { useUserStore } from '@/store/UserStore';
import { FieldValues, SubmitHandler } from "react-hook-form";
import { useRouter } from 'next/navigation';
import { z } from 'zod';
import { supabase } from "@/lib/supabase";
import { useToast } from "@/components/ui/use-toast";

const FormScheme = z.object({
  content: z.string().min(1).max(500),
});

export type WritePostFormType = z.infer<typeof FormScheme>;

export const ReplyPostForm = ({postId}: any) => {
  const form = useZodForm({
    schema: FormScheme,
  });
  const router = useRouter();
  const [isLoading, setIsLoading] = React.useState<boolean>(false)
  
  const { user, setUser } = useUserStore();
  const { toast } = useToast();
  

  
  console.log("postId", postId)
  const onSubmit: SubmitHandler<FieldValues> = async (values, event) => {
    event?.preventDefault();
    
    setIsLoading(true);
    const { data: post, error } = await supabase
      .from("post")
      .insert([
        {
          user_id: user?.id,
          parent_id: postId,
          content: values.content,
          is_child: true,
        },
      ]);

      console.log("postId", postId)
      console.log("post", post)

      toast({
        title: "Le post à été ajouté avec succès",
      });
      
    
    setIsLoading(false);
  };

  return (
    <div className="w-full">
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
    </div>
  );
};
