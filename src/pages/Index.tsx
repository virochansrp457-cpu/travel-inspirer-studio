import Header from "@/components/Header";
import Hero from "@/components/Hero";
import TourCategories from "@/components/TourCategories";
import FeaturedTours from "@/components/FeaturedTours";
import WhyChooseUs from "@/components/WhyChooseUs";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <TourCategories />
      <FeaturedTours />
      <WhyChooseUs />
      <Footer />
    </div>
  );
};

export default Index;
