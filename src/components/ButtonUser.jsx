import clsx from "clsx";
import css from "./ButtonUser.module.css";

export const ButtonUser = ({ variant, children }) => {
  return <button className={clsx(css, css[variant])}>{children}</button>;
};
