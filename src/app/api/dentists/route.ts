import connectDB from "@/lib/connectDB";
import Dentist from "@/models/Dentist";
import { NextResponse } from "next/server";

export const GET =  async () => {
    try{
        await connectDB();
        const dentist = await Dentist.find();
        return NextResponse.json({data:dentist})
    }catch(err){
        return NextResponse.json({error: err})
    }
}