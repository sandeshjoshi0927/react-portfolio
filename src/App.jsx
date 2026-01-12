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
      duration: 800,
      easing: "ease-out",
      once: false,
    });
  }, []);

  return (
    <div>
      <Navigation />
      <div className="container m-auto">
        <section data-aos="fade-down">
          <AboutSection />
        </section>
        <section data-aos="fade-down">
          <SkillSection />
        </section>
        <section data-aos="fade-down">
          <PortfolioSection />
        </section>
        <section data-aos="fade-down">
          <ServiceSection />
        </section>
        <ContactSection />
      </div>
      <FooterSection />
    </div>
  );
}

export default App;
