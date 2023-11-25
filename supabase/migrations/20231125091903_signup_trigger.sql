CREATE OR REPLACE FUNCTION public.create_public_user_for_singup()
 RETURNS trigger
 LANGUAGE plpgsql
 SECURITY DEFINER
AS $function$BEGIN
  INSERT INTO public.Profile (id, email, first_name, last_name)
  VALUES (NEW.id, NEW.email, NEW.raw_user_meta_data->>'first_name', NEW.raw_user_meta_data->>'last_name');
  RETURN NEW;
END;$function$
;

CREATE OR REPLACE TRIGGER create_public_profile_for_signup
  AFTER INSERT ON auth.users
  FOR each ROW EXECUTE PROCEDURE public.create_public_user_for_singup();
