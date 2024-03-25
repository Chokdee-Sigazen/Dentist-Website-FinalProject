import { Document } from 'mongoose';
import Dentist from './models/Dentist';

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

export interface Dentist extends Document{
    image?: string;
    name: string;
    yearsOfExperience: number;
    areaOfExpertise: string[];
    createdAt?: Date;
}

export interface Appointment //???
{
    appointmentDate: Date;
    user: string;
    dentist: string;
    finish: boolean;
    createdAt: Date;
}

export interface RegisterUser{
    name: string;
    email: string;
    tel: string;
    password: string;
    confirmPassword: string;
}

export const allArea = ["ทันตรังสีวิทยา", "จัดฟัน", "ศัลยกรรมช่องปาก", "รักษาโรคเหงือก", "ทำฟันเด็ก", "ทำฟันปลอม"];