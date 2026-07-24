const ServiceCard = ({ service }) => {
  return (
    <div className="h-full flex flex-col gap-4 p-6 rounded-md border border-line bg-paper hover:border-accent transition-colors">
      <span
        className="inline-flex w-fit px-2.5 py-1 rounded text-smallest bg-accent-soft"
        style={{ fontFamily: "var(--font-mono)", color: "var(--color-accent)" }}
      >
        {service.tag}
      </span>

      <div className="space-y-2">
        <h3 className="text-normal font-semibold tracking-tight">{service.title}</h3>
        <p className="text-smaller" style={{ color: "var(--color-muted)" }}>
          {service.desc}
        </p>
      </div>
    </div>
  );
};

export default ServiceCard;
