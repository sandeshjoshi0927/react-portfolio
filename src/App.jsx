import Navigation from "@components/Navigation";
import AboutSection from "@sections/AboutSection";
import PortfolioSection from "@sections/PortfolioSection";
import SkillSection from "@sections/SkillSection";
import ServiceSection from "@sections/ServiceSection";
import ContactSection from "@sections/ContactSection";
import FooterSection from "@sections/FooterSection";
import "aos/dist/aos.css";
import AOS from "aos";
import { useEffect } from "react";

function App() {
  useEffect(() => {
    AOS.init({
      offset: 400,
      duration: 1000,
      easing: "ease-out",
      once: false,
    });
  }, []);

  return (
    <div>
      <Navigation />
      <div className="container m-auto">
        <section data-aos="fade-up">
          <AboutSection />
        </section>
        <section data-aos="fade-up">
          <SkillSection />
        </section>
        <section data-aos="fade-up">
          <PortfolioSection />
        </section>
        <section data-aos="fade-up">
          <ServiceSection />
        </section>
        <ContactSection />
      </div>
      <FooterSection />
    </div>
  );
}

export default App;
