const Button = ({ children, className, color, to, ...rest }) => {
  const defaultClassName =
    "px-3 py-1 lg:px-6 lg:py-2 text-white rounded-md text-smaller cursor-pointer inline text-center";

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
