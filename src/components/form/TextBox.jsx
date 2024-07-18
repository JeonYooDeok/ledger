import React from "react";

function TextBox({
  label,
  placeholder,
  className,
  showLabel = true,
  ...props
}) {
  return (
    <div className={`${className}`}>
      {showLabel && <p className="text-sm text-lable mb-1">{label}</p>}
      <input
        className={`w-full px-3 h-8 leading-4 bg-gray-100 font-light rounded hover:bg-gray-200`}
        placeholder={placeholder}
        {...props}
      />
    </div>
  );
}

export default TextBox;
