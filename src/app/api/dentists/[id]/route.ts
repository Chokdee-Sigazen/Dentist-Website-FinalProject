import connectDB from "@/lib/connectDB";
import Dentist from "@/models/Dentist";
import { NextRequest, NextResponse } from "next/server";

export const GET =  async (_: NextRequest, { params }: { params: { id: string } }) => {
    try{
        await connectDB();
        const dentist = await Dentist.findById(params.id);
        console.log(params)
        return NextResponse.json({data:dentist})
    }catch(err){
        return NextResponse.json({error: err})
    }
}