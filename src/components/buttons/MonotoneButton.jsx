import React from "react";

const MonotoneButton = ({
  className,
  label = "MonotonButton",
  onClick,
  ...props
}) => {
  return (
    <button
      className={`px-3 py-[7px] leading-4 text-monoToneBtn font-semibold rounded hover:bg-monoToneBtnHvr border-[1px] border-monoToneBtn ${className}`}
      onClick={onClick}
      {...props}
    >
      {label}
    </button>
  );
};

export default MonotoneButton;
