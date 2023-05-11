import styles from "./styles.module.css";
import type { PropsWithChildren, ButtonHTMLAttributes } from "react";

type ButtonNativeTypes = ButtonHTMLAttributes<HTMLButtonElement>;

const Button = ({
  children,
  className,
  ...props
}: PropsWithChildren<ButtonNativeTypes>): JSX.Element => {
  const stylesClasses = `${styles.button} ${className || ""}`.trimEnd();
  return (
    <button className={stylesClasses} {...props}>
      {children}
    </button>
  );
};

export { Button };
