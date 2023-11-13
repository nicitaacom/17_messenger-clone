import supabaseAdmin from "@/app/libs/supabaseAdmin"
import bcrypt from 'bcrypt'
import NextAuth, {AuthOptions} from 'next-auth'
import CredentialsProvider from "next-auth/providers/credentials"
import GithubProvider from 'next-auth/providers/github'
import GoogleProvider from 'next-auth/providers/google'

export const authOptions:AuthOptions = {
  providers:[
    GoogleProvider({
      clientId:process.env.GOOGLE_CLIENT_ID as string,
      clientSecret:process.env.GOOGLE_CLIENT_SECRET as string
    })
  ],
  //and how to:
  //1. send verification email?
  //2. make throw error if user login with OAuth and then with email with the same as in OAuth
  //3. insert row in table public.users (I use uspabase and auth.users its not editable to user in user_metadata role)
}