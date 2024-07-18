import React from "react";

const PrimaryButton = ({
  className,
  label = "PrimaryButton",
  onClick,
  ...props
}) => {
  return (
    <button
      className={`px-3 py-2 leading-4 text-white font-semibold rounded bg-primaryBtn hover:bg-primaryBtnHvr ${className}`}
      onClick={onClick}
      {...props}
    >
      {label}
    </button>
  );
};

export default PrimaryButton;
