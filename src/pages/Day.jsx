import React from "react";
import PrimaryButton from "../components/buttons/PrimaryButton";

function Day() {
  return (
    <div className="p-4 flex-1">
      <div className="bg-white rounded-lg">
        <div className="flex justify-between items-center p-4 border-b border-divider">
          <span className="text-3xl text-grey00 font-bold leading-10">
            일별
          </span>
          <PrimaryButton className="h-10" label="등록" />
        </div>
        <div className="flex bg-tableHeaderBg border-b border-divider">
          <div className="flex flex-1 justify-center p-2 text-grey00 text-sm font-bold">
            날짜
          </div>
          <div className="flex flex-1 justify-center p-2 text-grey00 text-sm font-bold">
            항목
          </div>
          <div className="flex flex-1 justify-center p-2 text-grey00 text-sm font-bold">
            메모
          </div>
          <div className="flex flex-1 justify-center p-2 text-grey00 text-sm font-bold">
            금액
          </div>
        </div>
        <div className="flex border-b border-divider">
          <div className="flex flex-1 justify-center p-4 text-grey text-sm">
            2024.12.12 12:12:12
          </div>
          <div className="flex flex-1 justify-center p-4 text-grey text-sm">
            항목1
          </div>
          <div className="flex flex-1 justify-center p-4 text-grey text-sm">
            메모1
          </div>
          <div className="flex flex-1 justify-center p-4 text-grey text-sm">
            999,999,999
          </div>
        </div>
      </div>
    </div>
  );
}

export default Day;
