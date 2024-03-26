import connectDB from "@/lib/connectDB";
import User from "@/models/User";
import { NextResponse } from "next/server";

export const GET =  async (req: Request) => {
    try{
        await connectDB();
        const data = await req.json()
        console.log("hi")
        console.log(data)
        const user = await User.find({email: data.email})
        return NextResponse.json({data:user})
    }catch(err){
        console.group(err)
        return NextResponse.json({error: err})
    }
}