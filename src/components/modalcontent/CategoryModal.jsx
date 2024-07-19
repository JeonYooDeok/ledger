import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import useModalStore from "../../store/modal";
import TextBox from "../form/TextBox";
import MonotoneButton from "../buttons/MonotoneButton";
import PrimaryButton from "../buttons/PrimaryButton";
import SelectBox from "../SelectBox";

function CategoryModal() {
  const { closeModal } = useModalStore();
  const [startDate, setStartDate] = useState(new Date());

  const optionData = [
    { key: 1, value: "옵션 1" },
    { key: 2, value: "옵션 2" },
    { key: 3, value: "옵션 3" },
  ];

  return (
    <div className="flex flex-col gap-4">
      <p className="text-grey00 text-2xl font-bold">대분류 등록</p>
      <TextBox label="이름" placeholder="이름 입력" className="w-full" />
      <div className="flex justify-end gap-2">
        <MonotoneButton label="취소" onClick={closeModal} />
        <PrimaryButton label="확인" onClick={closeModal} />
      </div>
    </div>
  );
}

export default CategoryModal;
