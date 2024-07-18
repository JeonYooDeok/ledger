import React from "react";

const SecondaryButton = ({
  className,
  label = "SecondaryButton",
  onClick,
  ...props
}) => {
  return (
    <button
      className={`px-3 py-[7px] leading-4 text-primary font-semibold rounded hover:bg-secondaryBtnHvr border-[1px] border-secondaryBtn ${className}`}
      onClick={onClick}
      {...props}
    >
      {label}
    </button>
  );
};

export default SecondaryButton;
