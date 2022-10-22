import NextAuth from "next-auth"
import GoogleProvider from "next-auth/providers/google"
import { FirestoreAdapter } from "@next-auth/firebase-adapter"
// https://next-auth.js.org/adapters/firebase
export const authOptions = {
    providers: [
        GoogleProvider({
            clientId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
            clientSecret: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
        }),
    ],
};

export default NextAuth(authOptions);
