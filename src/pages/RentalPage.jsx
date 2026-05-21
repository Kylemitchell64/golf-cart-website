import PageTransition from "../components/layout/PageTransition";
import RentalHero from "../components/rental/RentalHero";
import RentalSteps from "../components/rental/RentalSteps";
import RentalForm from "../components/rental/RentalForm";

export default function RentalPage() {
  return (
    <PageTransition>
      <RentalHero />
      <RentalSteps />
      <RentalForm />
    </PageTransition>
  );
}
