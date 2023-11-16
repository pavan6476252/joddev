import React, { InputHTMLAttributes } from 'react';

interface CustomInputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
  ref?:   React.RefObject<HTMLInputElement>;
}

const CustomInputField: React.FC<CustomInputProps> = ({
  label,
  error,
  className,
  ref,
  ...inputProps
}) => {
  return (
    <div className={`mb-4 ${className }`}>
      {label && <label className="block text-gray-700 text-sm font-bold mb-2">{label}</label>}
      <input
      ref={ref}
        className={`border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline ${
          error ? 'border-red-500' : 'border-gray-300'
        }`}
        {...inputProps}
      />
      {error && <p className="text-red-500 text-xs italic">{error}</p>}
    </div>
  );
};

export default CustomInputField;
