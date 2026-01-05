const Button = ({ children, className, color, to }) => {
  const defaultClassName =
    "px-6 py-2 text-white rounded-md text-smaller cursor-pointer";

  return (
    <div className={`${color} ${defaultClassName} ${className}`}>
      <a href={to}>{children}</a>
    </div>
  );
};

export default Button;
