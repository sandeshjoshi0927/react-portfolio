import Navigation from "@components/Navigation";
import AboutSection from "@sections/AboutSection";
import PortfolioSection from "@sections/PortfolioSection";
import SkillSection from "@sections/SkillSection";
import ServiceSection from "@sections/ServiceSection";
import ContactSection from "@sections/ContactSection";
import FooterSection from "@sections/FooterSection";

function App() {
  return (
    <div>
      <Navigation />
      <div className="container m-auto">
        <section>
          <AboutSection />
        </section>
        <section>
          <SkillSection />
        </section>
        <section>
          <PortfolioSection />
        </section>
        <section>
          <ServiceSection />
        </section>
        <ContactSection />
      </div>
      <FooterSection />
    </div>
  );
}

export default App;
