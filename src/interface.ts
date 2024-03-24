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