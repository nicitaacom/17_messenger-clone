import { NextAuthOptions } from "next-auth";
import {PrismaAdapter} from '@next-auth/prisma-adapter'
import { db } from "./db";
import GoogleProvider from 'next-auth/providers/google'

const authOptions:NextAuthOptions = {
adapter:PrismaAdapter(db),
session:{
  strategy:'jwt'
},
pages:{
  signIn:'/sign-in',
},
providers:[
  GoogleProvider:({
    clientId:process.env.GOOGLE_CLIENT_ID!,
    clientSecret:process.env.GOOGLE_CLIENT_SECRET!
  })
]
}