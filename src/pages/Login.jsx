import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import PrimaryButton from "../components/buttons/PrimaryButton";
import TextBox from "../components/form/TextBox";

function Login() {
  // 로딩 상태 관리 훅
  const [isLoading, setIsLoading] = useState(false);

  // 입력 필드 값 관리 훅
  const [values, setValues] = useState({
    id: "",
    password: "",
  });

  // 유효성 검사 메시지 관리 훅
  const [message, setMessage] = useState({
    id: "",
    password: "",
  });

  // 폼 유효성 관리 훅
  const [isFormValid, setIsFormValid] = useState(false);

  // 페이지 이동 훅
  const navigate = useNavigate();

  // 아이디 정규식
  const idReg =
    /^[A-Za-z0-9]([-_.]?[A-Za-z0-9])*@[A-Za-z0-9]([-_.]?[A-Za-z0-9])*\.[A-Za-z]{2,3}$/;
  //  정규식 설명:

  //  ^[A-Za-z0-9]
  //  - 문자열의 시작을 의미함 (^)
  //  - 첫 글자는 영어 대문자(A-Z), 소문자(a-z), 숫자(0-9) 중 하나

  //  ([-_.]?[A-Za-z0-9])*
  //  - 영문, 숫자, '-', '_', '.'이 0번 또는 1번 등장 가능하며
  //  - 뒤에 영어 대문자(A-Z), 소문자(a-z), 숫자(0-9)가 이어질 수 있음
  //  - 이 패턴이 0번 이상 반복됨 (*)

  //  @
  //  - '@' 문자가 반드시 포함됨

  //  [A-Za-z0-9]
  //  - '@' 뒤에는 영어 대문자(A-Z), 소문자(a-z), 숫자(0-9)가 하나 이상 옴

  //  ([-_.]?[A-Za-z0-9])*
  //  - '@' 뒤에 다시 영문, 숫자, '-', '_', '.'이 0번 또는 1번 등장 가능하며
  //  - 뒤에 영어 대문자(A-Z), 소문자(a-z), 숫자(0-9)가 이어질 수 있음
  //  - 이 패턴이 0번 이상 반복됨 (*)

  //  \.[A-Za-z]{2,3}$
  //  - '.' 문자 뒤에 영어 대문자(A-Z), 소문자(a-z)가 2~3글자 옴
  //  - 문자열의 끝을 의미함 ($)

  // 패스워드 정규식
  const passwordReg = /^(?=.*[a-zA-Z])(?=.*[!@#$%^*+=-])(?=.*[0-9]).{8,15}$/;
  // 정규식 설명:

  // ^
  // - 문자열의 시작을 의미함

  // (?=.*[a-zA-Z])
  // - 영문 대소문자 중 적어도 한 글자가 포함됨을 의미함

  // (?=.*[!@#$%^*+=-])
  // - 지정된 특수문자(!@#$%^*+=-) 중 적어도 한 글자가 포함됨을 의미함

  // (?=.*[0-9])
  // - 숫자(0-9) 중 적어도 한 글자가 포함됨을 의미함

  // .{8,15}$
  // - 임의의 문자 8자 이상 15자 이하가 포함됨을 의미함
  // - 문자열의 끝을 의미함

  // 입력 필드에 대한 유효성 검사 및 에러 메시지 설정
  const handleValidation = (field, value) => {
    let errorMsg = ""; // 에러 메시지 초기화
    switch (field) {
      case "id":
        errorMsg =
          value.trim() === "" // 입력 값이 비어있는지 확인
            ? "이메일을 입력해주세요." // 입력 값이 비어있을 때 에러메시지
            : idReg.test(value) // 정규식 검사
            ? "" // 이메일 형식이 올바른 경우
            : "올바른 이메일을 입력해주세요."; // 이메일 형식이 올바르지 않은 경우
        break;
      case "password":
        errorMsg =
          value.trim() === "" // 입력 값이 비어있는지 확인
            ? "비밀번호를 입력해주세요." // 입력 값이 비어있을 때 에러메시지
            : passwordReg.test(value) // 정규식 검사
            ? "" // 비밀번호 형식이 올바른 경우
            : "영문,숫자,특수문자 포함 8자 이상 입력해주세요."; // 비밀번호 형식이 올바르지 않은 경우
        break;
      default:
        break;
    }
    setMessage((prev) => ({ ...prev, [field]: errorMsg })); // 에러 메시지 상태 업데이트
  };

  useEffect(() => {
    // 모든 입력 값이 채워져 있는지 확인
    const areAllValuesProvided = Object.values(values).every(
      (value) => value.trim() !== ""
    );
    // 모든 메시지가 비어있는지 확인하여 폼의 유효성 상태를 설정
    const isEveryMessageEmpty = Object.values(message).every(
      (msg) => msg === ""
    );
    // 입력 값이 모두 제공되었고, 모든 유효성 검사 메시지가 비어있다면 폼이 활성화됨
    setIsFormValid(areAllValuesProvided && isEveryMessageEmpty);
  }, [values, message]);

  const logInHandler = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    // 입력 필드가 비어 있는 경우 에러 메시지 설정
    handleValidation("id", values.id);
    handleValidation("password", values.password);

    if (!isFormValid) {
      setIsLoading(false); // 폼 유효성 검사 실패 시 로딩 상태 비활성화
      return;
    }

    try {
      // const response = await fetch("/public-api/v1/member/login", {
      //   body: JSON.stringify(formData),
      // });
      // const { secretKey, memberId, role } = response.data.data;
      // setCookie("secretKey", secretKey, { path: "/" });
      // setCookie("memberId", memberId, { path: "/" });
      // setCookie("role", role, { path: "/" });
      // setLoginUser({ secretKey });
      // setMemberId({ memberId });
      // setRole({ role });
      navigate("/day");
    } catch (error) {
      if (axios.isAxiosError(error)) {
        const errorMessage = error.response?.data.message;
        if (errorMessage === "가입된 이메일이 이미 존재합니다.") {
          setMessage((prev) => ({
            ...prev,
            id: "이미 가입된 이메일입니다.",
          }));
        }
      }
    } finally {
      setIsLoading(false); // 로그인 프로세스 종료, 텍스트 복원을 위한 상태 변경
    }
  };

  // 입력 값 변경 핸들러
  const handleInputChange = (e) => {
    const { name, value } = e.target; // 입력 필드 이름과 값 추출
    setValues((prev) => ({ ...prev, [name]: value })); // 입력 값 상태 업데이트
    handleValidation(name, value); // 입력 값에 대한 유효성 검사
  };

  return (
    <div className="flex flex-col justify-center h-screen bg-bg00">
      <div className="w-[440px] bg-white shadow-lg rounded-lg overflow-hidden">
        <div className="bg-headerBg px-6 py-4 text-white">로고</div>
        <div className="p-8">
          <div className="flex flex-col gap-4">
            <p className="text-grey00 text-xl font-bold">로그인</p>
            <div className="flex flex-col gap-4">
              <TextBox
                showLabel={false}
                placeholder="아이디"
                name="id"
                type="text"
                errorMessage={message.id}
                onChange={handleInputChange}
                className="w-full"
                required
              />
              <TextBox
                showLabel={false}
                placeholder="비밀번호"
                name="password"
                type={"password"}
                errorMessage={message.password}
                className="w-full"
                onChange={handleInputChange}
                required
              />
              <PrimaryButton
                label="로그인"
                className="h-16"
                onClick={logInHandler}
                isLoading={isLoading}
              />
            </div>

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
