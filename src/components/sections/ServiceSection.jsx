import React from "react";
import Heading from "@components/Heading";
import ServiceCard from "@components/ServiceCard";
import { services } from "@/constants";

const ServiceSection = () => {
  return (
    <div className="space-y-10" id="service">
      <Heading title="Services" subTitle="What I Provide" />

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 place-items-center">
        {services.map((service, index) => (
          <ServiceCard key={index} service={service} index={index} />
        ))}
      </div>
    </div>
  );
};

export default ServiceSection;
