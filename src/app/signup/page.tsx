import React from "react";
import SignupPanel from '@/components/AuthPage/SignupPanel'

const SignInPage = () => {
    return (
        <div className="w-[60%] bg-white rounded-md drop-shadow-md flex flex-col justify-center mx-auto my-10 px-10 py-8">
            <div className="text-[#128281] text-sm mb-7">
                <div className="text-xl font-bold">Sign Up</div>
                เปิดประสบการณ์โลกใบใหม่ ด้วยรอยยิ้มที่สดใสกว่าเดิม
            </div>
            <SignupPanel/>
        </div>
    );
};

export default SignInPage;
