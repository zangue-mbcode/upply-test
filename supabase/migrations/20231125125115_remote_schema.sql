set check_function_bodies = off;

CREATE OR REPLACE FUNCTION next_auth.uid()
 RETURNS uuid
 LANGUAGE sql
 STABLE
AS $function$
  select
  	coalesce(
		nullif(current_setting('request.jwt.claim.sub', true), ''),
		(nullif(current_setting('request.jwt.claims', true), '')::jsonb ->> 'sub')
	)::uuid
$function$
;


alter table "public"."Follow" drop constraint "Follow_followerId_fkey";

alter table "public"."Follow" drop constraint "Follow_followingId_fkey";

alter table "public"."Like" drop constraint "Like_postId_fkey";

alter table "public"."Like" drop constraint "Like_userId_fkey";

alter table "public"."Post" drop constraint "Post_parentId_fkey";

alter table "public"."Post" drop constraint "Post_userId_fkey";

alter table "public"."Profile" drop constraint "Profile_id_fkey";

alter table "public"."Follow" drop constraint "Follow_pkey";

alter table "public"."Like" drop constraint "Like_pkey";

alter table "public"."Post" drop constraint "Post_pkey";

alter table "public"."Profile" drop constraint "Profile_pkey";

drop index if exists "public"."Follow_pkey";

drop index if exists "public"."Like_pkey";

drop index if exists "public"."Post_pkey";

drop index if exists "public"."Profile_email_key";

drop index if exists "public"."Profile_pkey";

drop index if exists "public"."Profile_username_key";

drop table "public"."Follow";

drop table "public"."Like";

drop table "public"."Post";

drop table "public"."Profile";

create table "public"."follow" (
    "id" text not null,
    "followerId" uuid not null,
    "followingId" uuid not null,
    "createdAt" timestamp(3) without time zone not null default CURRENT_TIMESTAMP
);


create table "public"."like" (
    "id" text not null,
    "userId" uuid not null,
    "postId" uuid not null,
    "createdAt" timestamp(3) without time zone not null default CURRENT_TIMESTAMP
);


create table "public"."post" (
    "id" uuid not null,
    "content" text not null,
    "parentId" uuid,
    "userId" uuid not null,
    "createdAt" timestamp(3) without time zone not null default CURRENT_TIMESTAMP
);


create table "public"."profile" (
    "id" uuid not null,
    "name" text,
    "email" text,
    "emailVerified" timestamp(3) without time zone,
    "image" text,
    "passwordHash" text,
    "username" text not null,
    "bio" text,
    "link" text,
    "createdAt" timestamp(3) without time zone not null default CURRENT_TIMESTAMP
);


CREATE UNIQUE INDEX "Follow_pkey" ON public.follow USING btree (id);

CREATE UNIQUE INDEX "Like_pkey" ON public."like" USING btree (id);

CREATE UNIQUE INDEX "Post_pkey" ON public.post USING btree (id);

CREATE UNIQUE INDEX "Profile_email_key" ON public.profile USING btree (email);

CREATE UNIQUE INDEX "Profile_pkey" ON public.profile USING btree (id);

CREATE UNIQUE INDEX "Profile_username_key" ON public.profile USING btree (username);

alter table "public"."follow" add constraint "Follow_pkey" PRIMARY KEY using index "Follow_pkey";

alter table "public"."like" add constraint "Like_pkey" PRIMARY KEY using index "Like_pkey";

alter table "public"."post" add constraint "Post_pkey" PRIMARY KEY using index "Post_pkey";

alter table "public"."profile" add constraint "Profile_pkey" PRIMARY KEY using index "Profile_pkey";

alter table "public"."follow" add constraint "follow_followerId_fkey" FOREIGN KEY ("followerId") REFERENCES profile(id) not valid;

alter table "public"."follow" validate constraint "follow_followerId_fkey";

alter table "public"."follow" add constraint "follow_followingId_fkey" FOREIGN KEY ("followingId") REFERENCES profile(id) not valid;

alter table "public"."follow" validate constraint "follow_followingId_fkey";

alter table "public"."like" add constraint "like_postId_fkey" FOREIGN KEY ("postId") REFERENCES post(id) not valid;

alter table "public"."like" validate constraint "like_postId_fkey";

alter table "public"."like" add constraint "like_userId_fkey" FOREIGN KEY ("userId") REFERENCES profile(id) not valid;

alter table "public"."like" validate constraint "like_userId_fkey";

alter table "public"."post" add constraint "post_parentId_fkey" FOREIGN KEY ("parentId") REFERENCES post(id) not valid;

alter table "public"."post" validate constraint "post_parentId_fkey";

alter table "public"."post" add constraint "post_userId_fkey" FOREIGN KEY ("userId") REFERENCES profile(id) not valid;

alter table "public"."post" validate constraint "post_userId_fkey";

alter table "public"."profile" add constraint "profile_id_fkey" FOREIGN KEY (id) REFERENCES auth.users(id) not valid;

alter table "public"."profile" validate constraint "profile_id_fkey";

set check_function_bodies = off;

CREATE OR REPLACE FUNCTION public.create_public_user_for_singup()
 RETURNS trigger
 LANGUAGE plpgsql
 SECURITY DEFINER
AS $function$BEGIN
  INSERT INTO public.Profile (id, email, username)
  VALUES (NEW.id, NEW.email, NEW.email);
  RETURN NEW;
END;$function$
;


