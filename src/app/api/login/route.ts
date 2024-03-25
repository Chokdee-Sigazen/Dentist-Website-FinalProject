import connectDB from "@/lib/connectDB";
import {User} from "next-auth"
import User2 from "@/models/User";
import { NextResponse } from "next/server";


type LoginFn = (email: string, password: string)  => Promise<User>;

export const login:LoginFn = async (email,password) => {
    try{
        await connectDB();
        if(!email || !password) {
            throw new Error('Please provide email and password')
        }
        const user = await User2.findOne({email}).select('+password');
        if(!user) {
            throw new Error('Invalid credentails')    
        }
        const isMatch = await user.matchPassword(password);
        if(!isMatch) {
            throw new Error('Invalid credentails')    
        }
        NextResponse.json({success: true, login: true, token: user.getSignedJwtToken()})
        user.password = ""
        return user;
    }
    catch(err){
        console.log(err);
        return NextResponse.json({success: false, msg: err})
    }
    
   
}