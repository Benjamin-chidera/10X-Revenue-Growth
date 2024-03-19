import ColumnCarousel from "./Carousel/ColumnCarousel";
import HeroSection from "./HeroSection/HeroSection";
// import PurchaseForm from "./PurchaseForm/PurchaseForm";
import Section1 from "./Section1/Section1";

const SalesPage = () => {
  return (
    <div className="pt-20">
      <HeroSection />
      <Section1 />
      <ColumnCarousel />
    </div>
  );
};

export default SalesPage;
