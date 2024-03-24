import connectDB from "@/lib/connectDB";
import User from "@/models/User";
import { NextResponse } from "next/server";

export const GET =  async () => {
    try{
        await connectDB();
        const user = await User.find();
        return NextResponse.json({data:user})
    }catch(err){
        return NextResponse.json({error: err})
    }
}