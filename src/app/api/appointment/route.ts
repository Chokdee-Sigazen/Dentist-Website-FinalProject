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


export const POST = async (req: { json: () => any; },res: { status: (arg0: number) => { (): any; new(): any; json: { (arg0: { success: boolean; message: string; }): any; new(): any; }; }; }) => {
    try {
        await connectDB();
        const body = await req.json();
        const appointment = await Appointment.create(body);
        console.log("finish")
        return NextResponse.json({success:true,data:appointment})
    } catch (err) {
        console.log(err);
        return res.status(500).json({ success: false, message: "Cannot create Appointment" });
    }
}