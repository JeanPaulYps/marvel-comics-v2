import React, { AllHTMLAttributes, PropsWithChildren } from "react";
import styles from "./styles.module.css";

type Props = AllHTMLAttributes<HTMLDivElement>;

function FormSection({
  children,
  className,
  ...props
}: PropsWithChildren<Props>): JSX.Element {
  const styleClasses = `${styles.Section} ${className || ""}`.trimEnd();
  return (
    <div className={styleClasses} {...props}>
      {children}
    </div>
  );
}

export { FormSection };
