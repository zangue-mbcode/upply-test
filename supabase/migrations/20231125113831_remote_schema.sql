create schema if not exists "next_auth";

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


drop function if exists "public"."create_public_user_for_new_auth_user"();


