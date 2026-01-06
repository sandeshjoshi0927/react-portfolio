import React from "react";
import LinkItem from "@components/LinkItem";

const FooterSection = () => {
  return (
    <>
      <div className="container m-auto">
        <div className="mx-10 my-5">
          <ul>
            <LinkItem />
          </ul>

          <p className="text-center">
            Built by <span className="text-primary">Sandesh Joshi</span>
          </p>
        </div>
      </div>
      <div className="bg-secondary h-6"></div>
    </>
  );
};

export default FooterSection;
