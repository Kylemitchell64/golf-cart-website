import PageTransition from "../components/layout/PageTransition";
import HeroSection from "../components/home/HeroSection";
import FeaturedCarts from "../components/home/FeaturedCarts";
import ClientLogos from "../components/home/ClientLogos";
import DeliveryPromo from "../components/home/DeliveryPromo";
import FinancingBanner from "../components/home/FinancingBanner";
import CTASection from "../components/home/CTASection";

export default function HomePage() {
  return (
    <PageTransition>
      <HeroSection />
      <FeaturedCarts />
      <ClientLogos />
      <DeliveryPromo />
      <FinancingBanner />
      <CTASection />
    </PageTransition>
  );
}
