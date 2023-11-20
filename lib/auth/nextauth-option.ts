
import { NextApiRequest, NextApiResponse } from 'next';
import { AuthOptions, getServerSession } from 'next-auth';
import { env } from '../env';
import { SupabaseAdapter } from "@auth/supabase-adapter"
import EmailProvider from "next-auth/providers/email";

export const authOptions: (
  req?: NextApiRequest,
  res?: NextApiResponse
) => AuthOptions = (req, res) => ({
  adapter: SupabaseAdapter({
    url: env.SUPABASE_URL,
    secret: env.SUPABASE_ROLE_KEY,
  }),
  providers: [
    EmailProvider({
      server: process.env.EMAIL_SERVER,
      from: process.env.EMAIL_FROM
    }),
  ],

  callbacks: {
    session({ session, user }) {
      if (!session?.user) return session;
      session.user.id = user.id;
      session.user.image = user.image;
      return session;
    },
  },
});

export const getAuthSession = async () => {
  const session = await getServerSession(authOptions());
  return session;
};


// export const getAuthSession = async () => {
//   const session: {user: {id: number; name: string}} = {
//     user: {id: 1, name: "Ulrich"}
//   }
//   return session;
// };
