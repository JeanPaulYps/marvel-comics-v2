import styles from "./styles.module.css";
import type { AllHTMLAttributes, PropsWithChildren } from "react";

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
