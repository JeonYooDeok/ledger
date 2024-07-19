import React, { useState, useRef, useEffect } from "react";

function SelectBox({ label, showLabel = true, optionData }) {
  const [currentValue, setCurrentValue] = useState(optionData[0].value);
  const [showOptions, setShowOptions] = useState(false);
  const selectBoxRef = useRef(null);

  const handleOnChangeSelectValue = (value) => {
    setCurrentValue(value);
    setShowOptions(false); // 옵션 선택 후 목록 닫기
  };

  const handleClickOutside = (event) => {
    if (selectBoxRef.current && !selectBoxRef.current.contains(event.target)) {
      setShowOptions(false); // 박스 외부 클릭 시 목록 닫기
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div ref={selectBoxRef} className="relative">
      {showLabel && <p className="text-sm text-label mb-1">{label}</p>}
      <div
        className="relative px-3 py-1 bg-gray-100 rounded hover:bg-gray-200 cursor-pointer"
        onClick={() => setShowOptions((prev) => !prev)}
      >
        <label>{currentValue}</label>
        {showOptions && (
          <ul className="absolute w-full top-8 left-0 bg-white rounded shadow z-10">
            {optionData.map((data) => (
              <li
                key={data.key}
                onClick={(e) => {
                  e.stopPropagation(); // 이벤트 전파 방지
                  handleOnChangeSelectValue(data.value);
                }}
                className="text-grey00 p-2 hover:bg-gray-200 cursor-pointer"
              >
                {data.value}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}

export default SelectBox;
