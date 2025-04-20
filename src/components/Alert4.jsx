import clsx from "clsx";
import "./Alert4.css";

export const Alert4 = ({ variant, outlined, elevated, children }) => {
  return (
    <p
      className={clsx("alert4", variant, {
        "is-outlined": outlined,
        "is-elevated": elevated,
      })}
    >
      {children}
    </p>
  );
};

// Less preferable way, where the static and varied (i.e. calculated) components are not separated (i.e. "alert4" and variant versus outlined and elevated):

// export const Alert4 = ({ variant, outlined, elevated, children }) => {
//   return (
//     <p
//       className={clsx(
//         "alert4",
//         variant,
//         outlined && "is-outlined",
//         elevated && "is-elevated"
//       )}
//     >
//       {children}
//     </p>
//   );
// };
