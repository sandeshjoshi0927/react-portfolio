const Button = ({ children, className, color, to, ...rest }) => {
  const defaultClassName =
    "px-6 py-2 text-white rounded-md text-smaller cursor-pointer inline";

  const handleClick = () => {
    if (to) {
      window.location.href = to;
    }
  };

  return (
    <button
      className={`${color} ${defaultClassName} ${className}`}
      {...rest}
      onClick={to ? handleClick : undefined}
    >
      {children}
    </button>
  );
};

export default Button;
