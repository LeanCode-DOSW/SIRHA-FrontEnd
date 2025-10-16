import { forwardRef } from "react";

interface Props {
  styles?: string;
  placeholder: string;
  type?: string;
  label?: string;
  name?: string;
}

export const Input = forwardRef<HTMLInputElement, Props>(
  ({ styles = "", placeholder, type = "text", label, name }, ref) => {
    return (
      <div className={`flex flex-col ${styles}`}>
        {label && (
          <label
            htmlFor={name}
            className="mb-1 text-sm font-medium text-gray-700"
          >
            {label}
          </label>
        )}
        <input
          ref={ref}
          id={name}
          name={name}
          type={type}
          placeholder={placeholder}
          className="w-full h-[46px] px-3 rounded-lg border border-gray-300 bg-rose-100 text-gray-800 placeholder-gray-500 focus:ring-2 focus:ring-rose-400 focus:border-rose-400 outline-none transition"
        />
      </div>
    );
  }
);

Input.displayName = "Input";
