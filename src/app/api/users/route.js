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

export const POST = async (req,res) => {
    try{
        await connectDB();
        const body = await req.json();
        const {name, email, password, tel, role} = body;
        console.log(body    )
        console.log("hi")
        const user = await User.create({
            name,
            email,
            password,
            tel,
            role
        });
        return NextResponse.json({success:true,data:user})
    }catch(err){
        
        return NextResponse.json({success:false, error:"Have something wrong"})
    }
}