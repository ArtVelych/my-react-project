import "./Alert3.css";

export const Alert3 = ({ variant, outlined, elevated, children }) => {
  const classNames = ["alert3", variant];

  if (outlined) {
    classNames.push("is-outlined");
  }

  if (elevated) {
    classNames.push("is-elevated");
  }

  return <p className={classNames.join(" ")}>{children}</p>;
};
