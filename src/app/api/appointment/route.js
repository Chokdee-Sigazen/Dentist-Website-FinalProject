import connectDB from "@/lib/connectDB";
import Appointment from "@/models/Appointment";
import User from "@/models/User";
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
        console.log("body")
        console.log(body)
        const user = await User.findById(body.user);
        const existedAppointments = await Appointment.find({ user: body.user,finish:false });
        console.log("role : ",user.role)
        console.log("existedAppointments : ",existedAppointments.length)
        if(existedAppointments.length >= 1 && user.role !== "admin"){
            return NextResponse.error("You have already an appointment")
        }
        const appointment = await Appointment.create(body);
        console.log("finish")
        return NextResponse.json({success:true,data:appointment})
    } catch (err) {
        console.log(err);
        return NextResponse.json({error: err})
    }
}

export const PUT = async (req,res) => {
    try {
        await connectDB();
        const body = await req.json();
        console.log("body")
        console.log(body)
        const TargetedAppointments = await Appointment.findByIdAndUpdate(body.appointmentId, {//Maybe wrong here
            appointmentDate: body.appointmentDate,
            user: body.user,
            dentist: body.dentist,
            createdAt: body.createdAt,
            finish: body.finish
        }, function (err, docs) { 
            if (err){ 
                console.log(err) 
            } 
            else{ 
                console.log("Updated Appt : ", docs); 
            } 
        });//Fix me if it's bugged
        if(TargetedAppointments.length < 1){
            return NextResponse.error("Cant find appointment")
        }
        console.log(TargetedAppointments);
        console.log("finish")
        return NextResponse.json({success:true,data:appointment})
    } catch (err) {
        console.log(err);
        return NextResponse.json({error: err})
    }
}

export const DELETE = async (req,res) => {
    try {
        await connectDB();
        const body = await req.json();
        await Appointment.findOneAndDelete({'_id':body.appointmentId}, (err, data) => {
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