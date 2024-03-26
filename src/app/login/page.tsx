import React from "react";
import LoginPanel from "@/components/AuthPage/LoginPanel";

type Props = {
  searchParams?: Record<"callbackUrl" | "error", string>;
};

const SignInPage = (props: Props) => {
  return (
    <div className="w-[60%] bg-white rounded-md drop-shadow-md flex flex-col justify-center mx-auto my-10 px-10 py-8">
      <div className="text-[#128281] text-md mb-7">
        <div className="text-2xl font-bold">Sign In</div>
        ยินดีต้อนรับสู่ หมอฟันการแพทย์ สุดทันสมัย
      </div>
      <LoginPanel
        error={props.searchParams?.error}
        callbackUrl={props.searchParams?.callbackUrl}
      />
    </div>
  );
};

export default SignInPage;
