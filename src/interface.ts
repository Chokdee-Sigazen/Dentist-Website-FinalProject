import { Document } from 'mongoose';

export interface User extends Document {
    image?: string;
    name: string;
    email: string;
    tel: string;
    role: 'user' | 'admin';
    password: string;
    resetPasswordToken?: string;
    resetPasswordExpire?: Date;
    createdAt?: Date;
}