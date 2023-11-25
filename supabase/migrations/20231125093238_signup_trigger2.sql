
-- trigger the function every time a user is created
CREATE OR REPLACE TRIGGER create_public_user_for_signup
  AFTER INSERT ON auth.users
  FOR each ROW EXECUTE PROCEDURE public.create_public_user_for_singup();
