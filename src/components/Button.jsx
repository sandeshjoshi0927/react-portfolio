const variants = {
  primary:
    "bg-ink text-paper hover:bg-accent",
  outline:
    "border border-ink text-ink hover:bg-ink hover:text-paper",
  ghost:
    "text-ink hover:text-accent underline decoration-line underline-offset-4 hover:decoration-accent",
};

const Button = ({
  children,
  className = "",
  variant = "primary",
  href,
  download,
  ...rest
}) => {
  const base =
    "inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-md text-smaller cursor-pointer transition-colors text-center";
  const classes = `${base} ${variants[variant] || variants.primary} ${className}`;

  if (href) {
    return (
      <a href={href} download={download} className={classes} {...rest}>
        {children}
      </a>
    );
  }

  return (
    <button className={classes} {...rest}>
      {children}
    </button>
  );
};

export default Button;
