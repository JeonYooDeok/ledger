import React from "react";
import { useNavigate } from "react-router";
import PrimaryButton from "../components/buttons/PrimaryButton";

function SingUpComplete() {
  const navigate = useNavigate();
  const goToLogIn = () => {
    navigate("/");
  };

  return (
    <div className="flex flex-col justify-center h-screen bg-bg00">
      <div className="w-[440px] bg-white shadow-lg rounded-lg overflow-hidden">
        <div className="bg-headerBg px-6 py-4 text-white">로고</div>
        <div className="p-8">
          <div className="flex flex-col gap-4">
            <p className="text-grey00 text-xl font-bold">회원가입 완료</p>
            <p className="text-grey00 text-lg">
              회원가입이 성공적으로 완료되었습니다.
            </p>
            <PrimaryButton
              label="로그인"
              className="h-16"
              onClick={goToLogIn}
            />
            <div></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SingUpComplete;
