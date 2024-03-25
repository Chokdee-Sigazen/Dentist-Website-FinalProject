import React from "react";
import LoginPanel from '@/components/AuthPage/LoginPanel'

const SignInPage = () => {
    return (
        <div className="w-[60%] bg-white rounded-md drop-shadow-md flex flex-col justify-center mx-auto my-10 px-10 py-8">
            <div className="text-[#128281] text-md mb-7">
                <div className="text-2xl font-bold">Sign In</div>
                ยินดีต้อนรับสู่ หมอฟันการแพทย์ สุดทันสมัย
            </div>
            <LoginPanel/>
        </div>
    );
};

export default SignInPage;
