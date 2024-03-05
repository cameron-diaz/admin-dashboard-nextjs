import NextAuth from 'next-auth';
import { authConfig } from './authconfig';
import CredentialsProvider from "next-auth/providers/credentials";
import { connectToDB } from './lib/utils';
import { User } from "./lib/models";
import bcrypt from 'bcrypt'


const login = async (credentials) => {
    try {
        connectToDB()
        const user = await User.findOne({ username: credentials.username})


        if (!user) throw new Error("Wrong Credentials")

        const isPasswordCorrect = await bcrypt.compare(credentials.password, user.password)
        const isPasswordPassword = credentials.password === user.password

        if (!isPasswordCorrect && !isPasswordPassword) throw new Error("Wrong password")
        // if (!isPasswordCorrect) throw new Error("Wrong password")

        return user
    } catch (error) { 
        console.log(error)
        throw new Error("Failed to log in")
    }
}

export const { signIn, signOut, auth } = NextAuth({
    ...authConfig,
    providers: [
        CredentialsProvider({
        async authorize(credentials) {
            try {
                const user = await login(credentials)
                return user
            } catch (error) {
                console.log(error)
                return null
            }
        },
    }),
    ],
    callbacks: {
        async jwt({ token, user}) {
            if (user) {
                token.username = user.username
                token.img = user.img
            }
            return token
        },
        async session({ session, token}) {
            if (token) {
                session.user.username = token.username
                session.user.img = token.img
            }
            return session
        },
    },
});