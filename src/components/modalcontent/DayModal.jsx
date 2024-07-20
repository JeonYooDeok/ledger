import React, { useState } from "react";
import DatePicker from "react-datepicker";
import { registerLocale, setDefaultLocale } from "react-datepicker";
import { ko } from "date-fns/locale/ko";
registerLocale("ko", ko);
import "react-datepicker/dist/react-datepicker.css";
import useModalStore from "../../store/modal";
import TextBox from "../form/TextBox";
import MonotoneButton from "../buttons/MonotoneButton";
import PrimaryButton from "../buttons/PrimaryButton";
import SelectBox from "../SelectBox";

function DayModal() {
  const { closeModal } = useModalStore();
  const [startDate, setStartDate] = useState(new Date());

  const lgOptionData = [
    { key: 1, value: "대분류 1" },
    { key: 2, value: "대분류 2" },
    { key: 3, value: "대분류 3" },
  ];

  const smOptionData = [
    { key: 1, value: "소분류 1" },
    { key: 2, value: "소분류 2" },
    { key: 3, value: "소분류 3" },
  ];

  return (
    <div className="flex flex-col gap-4">
      <p className="text-grey00 text-2xl font-bold">등록</p>
      <DatePicker
        locale="ko"
        enableTabLoop={false}
        selected={startDate}
        onChange={(date) => setStartDate(date)}
        className="flex w-full px-3 py-1 bg-gray-100 rounded"
      />
      <SelectBox label="대분류" optionData={lgOptionData} />
      <SelectBox label="소분류" optionData={smOptionData} />
      <TextBox label="메모" placeholder="메모 입력" className="w-full" />
      <TextBox label="금액" placeholder="금액 입력" className="w-full" />
      <div className="flex justify-end gap-2">
        <MonotoneButton label="취소" onClick={closeModal} />
        <PrimaryButton label="확인" onClick={closeModal} />
      </div>
    </div>
  );
}

export default DayModal;
