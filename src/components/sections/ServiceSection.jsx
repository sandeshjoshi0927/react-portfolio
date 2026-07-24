import Heading from "@/components/Heading";
import ServiceCard from "@/components/ServiceCard";
import { services } from "@/constants/index";

const ServiceSection = () => {
  return (
    <div className="space-y-10 w-full" id="service">
      <Heading eyebrow="// services" title="What I Provide" />

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
        {services.map((service, index) => (
          <ServiceCard key={index} service={service} />
        ))}
      </div>
    </div>
  );
};

export default ServiceSection;
