import React from "react";
import useModalStore from "../store/modal";
import MonotoneButton from "./buttons/MonotoneButton";
import PrimaryButton from "./buttons/PrimaryButton";

const Modal = () => {
  const { isOpen, closeModal } = useModalStore();

  return (
    <>
      {isOpen && (
        <div className="fixed flex justify-center items-center w-full h-screen bg-modalBg">
          <div className="min-w-80 p-6 bg-white rounded-lg">
            <p className="text-grey00 text-2xl font-bold">등록</p>
            <div>
              <p>Modal Content</p>
            </div>
            <div className="flex justify-end gap-2">
              <MonotoneButton label="취소" onClick={closeModal} />
              <PrimaryButton label="확인" onClick={closeModal} />
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Modal;
