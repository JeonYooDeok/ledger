import React from "react";
import PrimaryButton from "../components/buttons/PrimaryButton";
import useModalStore from "../store/modal";

function CategorySetting() {
  const { openModal } = useModalStore();
  const handleOpenModal = () => {
    openModal("category");
  };

  return (
    <div className="p-4 flex-1">
      <div className="bg-white rounded-lg">
        <div className="flex justify-between items-center p-4 border-b border-divider">
          <span className="text-3xl text-grey00 font-bold leading-10">
            카테고리 관리
          </span>
          <PrimaryButton
            className="h-10"
            label="대분류 등록"
            onClick={handleOpenModal}
          />
        </div>
        <div className="flex border-b border-divider">
          <p className="flex justify-center w-40 p-4 text-grey00 text-sm font-bold bg-tableHeaderBg">
            대분류 아이템 1
          </p>
          <div className="flex gap-2 items-center text-sm p-2">
            <span>소분류 아이템 1-1</span>
            <span>소분류 아이템 1-2</span>
            <span>소분류 아이템 1-3</span>
            <span>소분류 아이템 1-4</span>
            <span>소분류 아이템 1-5</span>
          </div>
        </div>
        <div className="flex border-b border-divider">
          <p className="flex justify-center w-40 p-4 text-grey00 text-sm font-bold bg-tableHeaderBg">
            대분류 아이템 2
          </p>
          <div className="flex gap-2 items-center text-sm p-2">
            <span>소분류 아이템 2-1</span>
            <span>소분류 아이템 2-2</span>
            <span>소분류 아이템 2-3</span>
            <span>소분류 아이템 2-4</span>
            <span>소분류 아이템 2-5</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CategorySetting;
