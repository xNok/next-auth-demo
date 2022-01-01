import NextAuth from "next-auth"
import CredentialsProvider from "next-auth/providers/credentials";
import GoogleProvider from "next-auth/providers/google";
import { custom } from 'openid-client';

custom.setHttpOptionsDefaults({
    timeout: 20000,
})

export default NextAuth({
  providers: [
    CredentialsProvider({
        name: "Credentials",
        credentials: {
          email: { label: "Email", type: "email" },
          password: {  label: "Password", type: "password" }
        },
        async authorize(credentials, req) {
        
            const res = await fetch("http://localhost:3000/api/signin", {
                method: 'POST',
                body: JSON.stringify(credentials),
                headers: { "Content-Type": "application/json" }
            })
        
            if (res.ok) {
                const user = await res.json();
                return user;
            } else {
                return null;
            }
        }
      }),
      GoogleProvider({
        clientId: process.env.GOOGLE_ID,
        clientSecret: process.env.GOOGLE_SECRET,
      })
  ],
  session: {
      strategy: 'jwt'
  }
})