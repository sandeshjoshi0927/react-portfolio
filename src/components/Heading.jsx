const Heading = ({ eyebrow, title, subTitle }) => {
  return (
    <div className="space-y-3">
      {eyebrow && <p className="eyebrow">{eyebrow}</p>}
      <h2 className="text-big font-semibold tracking-tight">{title}</h2>
      {subTitle && (
        <p className="text-small" style={{ color: "var(--color-muted)" }}>
          {subTitle}
        </p>
      )}
    </div>
  );
};

export default Heading;
