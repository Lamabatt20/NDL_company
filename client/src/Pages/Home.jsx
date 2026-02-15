import HeroSection from "../Components/HeroSection";
import AboutSection from "../Components/AboutSection";
import StatsSection from "../Components/StatsSection";
import ProjectsSection from "../Components/ProjectsSection";
import OurClients from "../Components/OurClients";
import OurServices from "../Components/OurServices";
import RemoteConnectivity from "../Components/RemoteConnectivity";
import WhyChooseNDL from "../Components/WhyChooseNDL";

function Home() {
  return (
    <>
      <HeroSection />
      <div className="hero-about-connector">
      <div className="connector-circle">
        <img
          src={require("../assets/images/logob.png")}
          alt="Nexus Logo"
        />
      </div>
    </div>

      <AboutSection />
      <OurServices />
      <StatsSection />
      <WhyChooseNDL />
      <ProjectsSection/>
      <OurClients />
      <RemoteConnectivity />
    </>
  );
}

export default Home;
