import React, { InputHTMLAttributes } from "react";
import styles from "./styles.module.css";

type NativeInputProps = InputHTMLAttributes<HTMLInputElement>;
type CustomProps = {
  name: InputHTMLAttributes<HTMLInputElement>["name"],
  label: string,
  labelClassName?: string | undefined,
};
type Props = NativeInputProps & CustomProps;

const defaultLabelClassName = styles.Label;
const defaultInputClassName = styles.Input;

function InputText({
  name,
  className,
  label,
  labelClassName,
  ...props
}: Props) {
  const labelStyles = `${defaultLabelClassName} ${labelClassName || ""}`.trimEnd();
  const inputStyles = `${defaultInputClassName} ${className || ""}`.trimEnd();
  return (
    <label
      htmlFor={name}
      className={labelStyles}
    >
      <span className={styles.Text}>{label}</span>
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
