import connectDB from "@/lib/connectDB";
import Appointment from "@/models/Appointment";
import { NextResponse } from "next/server";

export const GET =  async () => {
    try{
        await connectDB();
        const appointment = await Appointment.find();
        return NextResponse.json({data:appointment})
    }catch(err){
        return NextResponse.json({error: err})
    }
}