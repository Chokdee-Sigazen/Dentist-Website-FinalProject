import connectDB from "@/lib/connectDB";
import User from "@/models/User";
import { NextResponse } from "next/server";


export const POST = async (req: any, res: { status: (arg0: number) => { (): any; new(): any; json: { (arg0: { success: boolean; msg: string; }): any; new(): any; }; }; }) => {
    try{
        await connectDB();
        const body = await req.json();
        const {email, password} = body;

        if(!email || !password) {
            return res.status(400).json({
                success: false,
                msg: 'Please provide an email and password'
            });
        }
        const user = await User.findOne({email}).select('+password');
        if(!user) {
            return res.status(400).json({
                success: false,
                msg: 'Invalid credentails'
            });
        }
        const isMatch = await user.matchPassword(password);
        if(!isMatch) {
            return res.status(401).json({
                success: false,
                msg: 'Invalid credentails'
            });
        }
        return NextResponse.json({success: true, login: true, token: user.getSignedJwtToken()})
    }
    catch(err){
        console.log(err);
        return NextResponse.json({success: false, msg: err})
    }
    
   
}