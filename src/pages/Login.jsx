import React from "react";
import { Link, useNavigate } from "react-router-dom";
import PrimaryButton from "../components/buttons/PrimaryButton";
import TextBox from "../components/form/TextBox";

function Login() {
  const navigate = useNavigate();
  const logIn = () => {
    navigate("/day");
  };

  return (
    <div className="flex flex-col justify-center h-screen bg-bg00">
      <div className="w-[440px] bg-white shadow-lg rounded-lg overflow-hidden">
        <div className="bg-headerBg px-6 py-4 text-white">로고</div>
        <div className="p-8">
          <div className="flex flex-col gap-4">
            <p className="text-grey00 text-xl font-bold">로그인</p>
            <TextBox
              showLabel={false}
              placeholder="아이디"
              className="w-full"
            />
            <TextBox
              showLabel={false}
              placeholder="비밀번호"
              className="w-full"
            />
            <PrimaryButton label="로그인" className="h-16" onClick={logIn} />

            <Link
              to="/signup"
              className="text-link hover:text-linkHvr underline text-center"
            >
              이메일로 회원가입
            </Link>
            <div>
              <div className="w-full h-6 justify-center items-center gap-2 inline-flex">
                <div className="grow shrink basis-0 h-[0px] border border-divider"></div>
                <div className="text-center text-zinc-400 text-sm font-normal font-['Pretendard Variable'] leading-normal">
                  또는
                </div>
                <div className="grow shrink basis-0 h-[0px] border border-divider"></div>
              </div>
            </div>
            <div>
              <div>구글</div>
              <div>카카오</div>
              <div>네이버</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
