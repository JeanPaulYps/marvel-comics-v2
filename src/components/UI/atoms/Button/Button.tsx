import { useMemo } from "react";
import type { PropsWithChildren, ButtonHTMLAttributes } from "react";
import "./styles.module.css";

type ButtonNativeTypes = ButtonHTMLAttributes<HTMLButtonElement>;

const Button = ({
  children,
  className,
  ...props
}: PropsWithChildren<ButtonNativeTypes>): JSX.Element => {
  const styles = useMemo<string>(() => className ?? "button", [className]);
  return (
    <button className={styles} {...props}>
      {children}
    </button>
  );
};

export { Button };
