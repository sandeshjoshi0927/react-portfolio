import React from "react";

const ServiceCard = ({ service, index }) => {
  return (
    <div className="bg-secondary text-white p-4 flex h-full flex-col justify-between rounded-xl">
      <h1 className="text-main-heading text-primary brightness-150 flex flex-start">
        0{index + 1}
      </h1>

      <div className="space-y-2">
        <h1 className="text-small font-bold">{service.title}</h1>
        <p className="text-smaller">{service.desc}</p>
      </div>
    </div>
  );
};

export default ServiceCard;
