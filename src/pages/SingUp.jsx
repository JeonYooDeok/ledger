import React from "react";
import TextBox from "../components/form/TextBox";
import PrimaryButton from "../components/buttons/PrimaryButton";
import MonotoneButton from "../components/buttons/MonotoneButton";
import SecondaryButton from "../components/buttons/SecondaryButton";
import useGoBack from "../hooks/useGoBack";

function SignUp() {
  const goBack = useGoBack();

  return (
    <div className="flex flex-col justify-center h-screen bg-bg00">
      <div className="w-[440px] bg-white shadow-lg rounded-lg overflow-hidden">
        <div className="bg-headerBg px-6 py-4 text-white">로고</div>
        <div className="p-8">
          <div className="flex flex-col gap-4">
            <p className="text-grey00 text-xl font-bold">회원가입</p>
            <div className="flex items-end gap-2">
              <TextBox
                label="이메일"
                placeholder="이메일 입력"
                className="w-full flex-auto"
              />
              <SecondaryButton label="인증번호 전송" className="w-40" />
            </div>
            <div className="flex items-end gap-2">
              <TextBox
                label="인증번호"
                placeholder="인증번호 입력"
                className="w-full flex-auto"
              />
              <SecondaryButton label="인증번호 확인" className="w-40" />
            </div>
            <TextBox
              label="비밀번호"
              placeholder="비밀번호 입력"
              className="w-full"
            />
            <TextBox
              label="비밀번호 확인"
              placeholder="비밀번호 확인"
              className="w-full"
            />
            <PrimaryButton label="회원가입" className="h-16" />
            <MonotoneButton label="취소" className="h-10" onClick={goBack} />
            <div></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SignUp;
