import React from "react";
import Heading from "@components/Heading";
import ServiceCard from "@components/ServiceCard";

const ServiceSection = () => {
  const services = [
    {
      title: "UI / UX Design",
      desc: "Creating intuitive, user-friendly interfaces with a focus on usability, accessibility, and modern design principles.",
    },
    {
      title: "Responsive Design",
      desc: "Building fully responsive layouts that adapt seamlessly across desktops, tablets, and mobile devices.",
    },
    {
      title: "Development",
      desc: "Converting designs and ideas into high-quality, scalable code using modern frontend technologies.",
    },
    {
      title: "Web Performance Optimization",
      desc: "Optimizing websites for speed, performance, and smooth user experience using best practices.",
    },
  ];

  return (
    <div className="space-y-10" id="service">
      <Heading title="Services" subTitle="What I Provide" />

      <div className="grid grid-cols-12 gap-6">
        {services.map((service, index) => (
          <ServiceCard key={index} service={service} index={index} />
        ))}
      </div>
    </div>
  );
};

export default ServiceSection;
