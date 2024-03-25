import connectDB from "@/lib/connectDB";
import User from "@/models/User";
import { NextResponse } from "next/server";

const sendTokenResponse = (user: { getSignedJwtToken: () => any; }, statusCode: number, res: { status: any; }) => {
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

export const POST = async (req: { body: any; },res: { status: (arg0: number) => { (): any; new(): any; json: { (arg0: { success: boolean; msg: string; }): any; new(): any; }; }; }) => {
    const {email, password} = req.body;

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

    // const token = user.getSignedJwtToken();
    // res.status(200).json({success: true, token});
    sendTokenResponse(user, 200, res);
}