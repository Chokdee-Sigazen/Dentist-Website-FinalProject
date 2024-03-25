import connectDB from "@/lib/connectDB";
import User from "@/models/User";
import { NextResponse } from "next/server";

const sendTokenResponse = (user:any, statusCode:any, res: { status: (arg0: NextResponse<unknown>) => { (): any; new(): any; cookie: { (arg0: string, arg1: any, arg2: { expires: Date; httpOnly: boolean; }): { (): any; new(): any; json: { (arg0: { success: boolean; token: any; }): void; new(): any; }; }; new(): any; }; }; }) => {
    const token = user.getSignedJwtToken();
    const option = {
        expires: new Date(Date.now() + 30 * 24 * 60 * 60 * 1000),
        httpOnly: true
    };
    res.status(statusCode).cookie('token', token, option).json({
        success: true,
        token
    })
}


export const GET =  async () => {
    try{
        await connectDB();
        const user = await User.find();
        return NextResponse.json({data:user})
    }catch(err){
        return NextResponse.json({error: err})
    }
}

export const POST = async (req: any,res:any)=>{
    try{
        await connectDB();
        const user = await User.create({
            name: req.body.name,
            email: req.body.email,
            password: req.body.password,
            tel: req.body.tel,
            role: req.body.role
        });
        sendTokenResponse(user, 200, res)
        return NextResponse.json({data:user})
    }catch(err){
        return NextResponse.json({error: err})
    }
}