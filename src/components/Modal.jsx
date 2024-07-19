import React from "react";
import useModalStore from "../store/modal";
import DayModal from "./modalcontent/DayModal";
import CategoryModal from "./modalcontent/CategoryModal";

function Modal() {
  const { isOpen, content } = useModalStore();

  return (
    <>
      {isOpen && (
        <div className="fixed flex justify-center items-center w-full h-screen bg-modalBg">
          <div className="min-w-80 p-6 bg-white rounded-lg">
            <div>
              {content === "day" && <DayModal />}
              {content === "category" && <CategoryModal />}
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Modal;
