import { connectDB } from "@/utils/database";
import { MongoDBAdapter } from "@next-auth/mongodb-adapter";
import NextAuth from "next-auth";
import GithubProvider from "next-auth/providers/github";

export const authOptions = {
    providers : [
        GithubProvider({
            clientId : 'Ov23litJ5IxcHfzTPcgu',
            clientSecret : '49dfa3f8a1987336a4903149cd6c6037235be3c6'
        }),
    ],
    secret : '1q1q-www3',
    adapter : MongoDBAdapter(connectDB)
};
export default NextAuth(authOptions);