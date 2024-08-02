import React from "react";

const PrimaryButton = ({
  className,
  label = "PrimaryButton",
  disabled = false,
  onClick,
  ...props
}) => {
  return (
    <button
      className={`px-3 py-2 leading-4 text-white font-semibold rounded bg-primaryBtn hover:bg-primaryBtnHvr ${
        disabled ? "opacity-50 cursor-not-allowed" : ""
      } ${className}`}
      onClick={onClick}
      disabled={disabled}
      {...props}
    >
      {label}
    </button>
  );
};

export default PrimaryButton;
