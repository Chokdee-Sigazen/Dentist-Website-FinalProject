import connectDB from "@/lib/connectDB";
import Appointment from "@/models/Appointment";
import { NextRequest, NextResponse } from "next/server";

export const GET =  async (_: NextRequest, { params }: { params: { id: string } }) => {
    try{
        await connectDB();
        const appointment = await Appointment.findById(params.id);
        console.log(params)
        return NextResponse.json({data:appointment})
    }catch(err){
        return NextResponse.json({error: err})
    }
}