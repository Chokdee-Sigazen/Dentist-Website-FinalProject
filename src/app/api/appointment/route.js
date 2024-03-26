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


export const POST = async (req,res) => {
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

export const DELETE = async (req,res) => {
    try {
        await connectDB();
        const body = await req.json();
        await Appointment.findOneAndDelete({'_id':body._id}, (err, data) => {
            if(err){
                console.log(err);
                return response.status(500).send();
            }
            else{
                return response.json({data});
            }
        })
        return res.status(200).json({ success: true, data: {} });
    } catch (err) {
        console.log(err);
        return res.status(500).json({ success: false, message: "Cannot delete Appointment" });
    }
}