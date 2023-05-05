import React, { InputHTMLAttributes } from "react";
import "./styles.module.css";

type NativeInputProps = InputHTMLAttributes<HTMLInputElement>;
type CustomProps = {
  name: InputHTMLAttributes<HTMLInputElement>["name"],
  label: string,
  labelClassName?: string | undefined,
};
type Props = NativeInputProps & CustomProps;

const defaultLabelClassName = "Form__Label";
const defaultInputClassName = "Form__Input";

function InputText({
  name,
  className,
  label,
  labelClassName,
  ...props
}: Props) {
  const labelStyles = !labelClassName
    ? defaultLabelClassName
    : `${defaultLabelClassName} ${labelClassName}`;
  const inputStyles = !className
    ? defaultInputClassName
    : `${defaultInputClassName} ${className}`
  return (
    <label
      htmlFor={name}
      className={labelStyles}
    >
      <span className="Form__Text">{label}</span>
      <input
        type="text"
        name={name}
        className={inputStyles}
        {...props}
      />
    </label>
  );
}

export { InputText };
