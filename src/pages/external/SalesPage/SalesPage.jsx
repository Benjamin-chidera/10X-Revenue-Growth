import { NewSliders } from "./Carousel/NewSlider"; 
import HeroSection from "./HeroSection/HeroSection";
import Section1 from "./Section1/Section1";

const SalesPage = () => {
  return (
    <div className="pt-20">
      <HeroSection />
      <Section1 />
      <NewSliders />
    </div>
  );
};

export default SalesPage;