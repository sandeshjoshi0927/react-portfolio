import React from "react";

const ServiceCard = ({ service, index }) => {
  return (
    <div className="bg-secondary text-white p-6 flex h-full flex-col justify-between rounded-xl">
      <h1 className="text-main-heading text-primary brightness-150 flex flex-start tracking-wider">
        0{index + 1}
      </h1>

      <div className="space-y-2">
        <h1 className="text-small font-bold tracking-wide">{service.title}</h1>
        <p className="text-smaller opacity-80">{service.desc}</p>
      </div>
    </div>
  );
};

export default ServiceCard;
