import React from "react";

const ServiceCard = ({ service, index }) => {
  return (
    <div className="bg-secondary text-white p-10 col-span-4 place-items-start border-l-8 border-transparent hover:border-l-8 hover:border-primary hover:transition-discrete duration-300 hover:drop-shadow-2xl ease-in-out flex flex-col">
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
