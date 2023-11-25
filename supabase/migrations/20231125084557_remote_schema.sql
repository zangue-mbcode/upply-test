
alter table "public"."Follow" drop constraint "Follow_followerId_fkey";

alter table "public"."Follow" drop constraint "Follow_followingId_fkey";

alter table "public"."Like" drop constraint "Like_postId_fkey";

alter table "public"."Like" drop constraint "Like_userId_fkey";

alter table "public"."Post" drop constraint "Post_parentId_fkey";

alter table "public"."Post" drop constraint "Post_userId_fkey";

alter table "public"."Follow" alter column "followerId" set data type uuid using "followerId"::uuid;

alter table "public"."Follow" alter column "followingId" set data type uuid using "followingId"::uuid;

alter table "public"."Like" alter column "postId" set data type uuid using "postId"::uuid;

alter table "public"."Like" alter column "userId" set data type uuid using "userId"::uuid;

alter table "public"."Post" alter column "id" set data type uuid using "id"::uuid;

alter table "public"."Post" alter column "parentId" set data type uuid using "parentId"::uuid;

alter table "public"."Post" alter column "userId" set data type uuid using "userId"::uuid;

alter table "public"."Profile" alter column "id" set data type uuid using "id"::uuid;

alter table "public"."Profile" add constraint "Profile_id_fkey" FOREIGN KEY (id) REFERENCES auth.users(id) not valid;

alter table "public"."Profile" validate constraint "Profile_id_fkey";

alter table "public"."Follow" add constraint "Follow_followerId_fkey" FOREIGN KEY ("followerId") REFERENCES "Profile"(id) not valid;

alter table "public"."Follow" validate constraint "Follow_followerId_fkey";

alter table "public"."Follow" add constraint "Follow_followingId_fkey" FOREIGN KEY ("followingId") REFERENCES "Profile"(id) not valid;

alter table "public"."Follow" validate constraint "Follow_followingId_fkey";

alter table "public"."Like" add constraint "Like_postId_fkey" FOREIGN KEY ("postId") REFERENCES "Post"(id) not valid;

alter table "public"."Like" validate constraint "Like_postId_fkey";

alter table "public"."Like" add constraint "Like_userId_fkey" FOREIGN KEY ("userId") REFERENCES "Profile"(id) not valid;

alter table "public"."Like" validate constraint "Like_userId_fkey";

alter table "public"."Post" add constraint "Post_parentId_fkey" FOREIGN KEY ("parentId") REFERENCES "Post"(id) not valid;

alter table "public"."Post" validate constraint "Post_parentId_fkey";

alter table "public"."Post" add constraint "Post_userId_fkey" FOREIGN KEY ("userId") REFERENCES "Profile"(id) not valid;

alter table "public"."Post" validate constraint "Post_userId_fkey";

set check_function_bodies = off;

CREATE OR REPLACE FUNCTION public.create_public_user_for_new_auth_user()
 RETURNS trigger
 LANGUAGE plpgsql
 SECURITY DEFINER
AS $function$BEGIN
  INSERT INTO public.Profile (id, email, first_name, last_name)
  VALUES (NEW.id, NEW.email, NEW.raw_user_meta_data->>'first_name', NEW.raw_user_meta_data->>'last_name');
  RETURN NEW;
END;$function$
;

