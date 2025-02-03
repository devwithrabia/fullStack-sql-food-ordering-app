import { PrismaAdapter } from '@next-auth/prisma-adapter'
import { NextAuthOptions, User, getServerSession } from 'next-auth'

import GoogleProvider from 'next-auth/providers/google'
import { prisma } from './connect'

//declare admin type in jwt and session:

declare module 'next-auth' {
  interface Session {
    user: User & {
      isAdmin: Boolean
    }
  }
}

declare module 'next-auth/jwt' {
  interface JWT {
    isAdmin: Boolean
  }
}

export const authOptions: NextAuthOptions = {
  //here we use prisma thats why we use prisma adapter and prisma adopter automatic
  //save user in db by different accounts

  adapter: PrismaAdapter(prisma),

  //strategy for callbacks:

  session: {
    strategy: 'jwt'
  },

  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_ID!,
      clientSecret: process.env.GOOGLE_SECRET!
    })
  ],

  callbacks: {
    async session({ token, session }) {
      if (token) {
        session.user.isAdmin = token.isAdmin
      }

      return session
    },

    async jwt({ token }) {
      const userInDb = await prisma.user.findUnique({
        where: {
          email: token.email as string
        }
      })

      token.isAdmin = userInDb?.isAdmin!

      return token
    }
  }
}

//here we make session for server side means making getServerSession to take session on server componenets:

export const getAuthSession = () => getServerSession(authOptions)
