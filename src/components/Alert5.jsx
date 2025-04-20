import css from "./Alert5.module.css";
import clsx from "clsx";

export const Alert5 = ({ variant, outlined, elevated, children }) => {
  return (
    <p
      className={clsx(css[variant], {
        "is-outlined": outlined,
        "is-elevated": elevated,
      })}
    >
      {children}
    </p>
  );
};

// ======================= CSS modules compose different names for style components. See in console.log:
// console.log(css);

// Alternative syntax:

// export const Alert5 = ({ variant, outlined, elevated, children }) => {
//   return (
//     <p
//       className={clsx(
//         css[variant],
//         outlined && css.isOutlined,
//         elevated && css.isElevated
//       )}
//     >
//       {children}
//     </p>
//   );
// };
