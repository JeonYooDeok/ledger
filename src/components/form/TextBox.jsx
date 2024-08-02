import React from "react";

function TextBox({
  label,
  placeholder,
  className,
  showLabel = true,
  errorMessage = "",
  ...props
}) {
  return (
    <div className={`${className}`}>
      {showLabel && <p className="text-sm text-lable mb-1">{label}</p>}
      <input
        className={`w-full px-3 h-8 leading-4 bg-gray-100 rounded hover:bg-gray-200`}
        placeholder={placeholder}
        {...props}
      />
      {errorMessage && (
        <p className="text-red-500 text-sm mt-1">{errorMessage}</p>
      )}
    </div>
  );
}

export default TextBox;
