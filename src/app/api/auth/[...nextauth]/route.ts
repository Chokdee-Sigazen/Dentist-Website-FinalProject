import NextAuth from "next-auth/next";
import { AuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { login } from "../../login/route";

export const authOptions: AuthOptions = {
    providers: [
        CredentialsProvider({
          name: "Hello",
          credentials: {
            email: { label: "Email", type: "email", placeholder: "email" },
            password: { label: "Password", type: "password" }
          },
          async authorize(credentials, req) {
            if(!credentials)   return null;
            const user = await login(credentials.email, credentials.password);
            console.log(user);
            if (user) {
              return user
            } else {
              return null
            }
          }
        })
      ],
    session:{strategy:"jwt"},
    callbacks:{
        async jwt({token, user}){
            return {...token, ...user};
        },
        async session({session, token,user}){
            session.user = token as any
            return session;
        }
    
    }
}

const handler = NextAuth(authOptions);
export { handler as GET, handler as POST}