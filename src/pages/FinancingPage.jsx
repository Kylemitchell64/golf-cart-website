import { motion } from "framer-motion";
import { useScrollReveal, staggerContainer, fadeUp } from "../hooks/useScrollReveal";
import PageTransition from "../components/layout/PageTransition";
import Button from "../components/ui/Button";

const steps = [
  {
    number: "01",
    title: "Apply Online",
    description:
      "Pre-qualify through Sheffield Financial in minutes. Quick, simple, and no impact on your credit score.",
  },
  {
    number: "02",
    title: "Get Approved",
    description:
      "Receive your approval and financing terms. 0% interest available for up to 36 months for qualifying customers.",
  },
  {
    number: "03",
    title: "Drive Away",
    description:
      "Pick your cart, sign the paperwork, and ride off. Free delivery within 150 miles included.",
  },
];

export default function FinancingPage() {
  const { ref, isInView } = useScrollReveal();

  return (
    <PageTransition>
      <section className="relative pt-28 lg:pt-36 pb-28 lg:pb-32 bg-brand-dark text-white">
        <div className="max-w-4xl mx-auto px-6 sm:px-10 lg:px-12 text-center">
          <motion.div initial="hidden" animate="visible" variants={fadeUp}>
            <p className="text-brand-accent font-semibold text-sm uppercase tracking-widest mb-4">
              Sheffield Financial
            </p>
            <h1 className="text-5xl md:text-6xl font-bold leading-tight tracking-tight">
              0% Interest
              <br />
              <span className="text-brand-accent">for 36 Months</span>
            </h1>
            <p className="mt-6 text-gray-400 text-lg max-w-xl mx-auto">
              For qualifying customers. Pre-qualify online in minutes with no
              impact on your credit score.
            </p>
            <div className="mt-10">
              <Button
                href="https://prequalify.sheffieldfinancial.com/Apply/Dealer/59675"
                size="lg"
              >
                Pre-Qualify Now
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="py-24 bg-brand-white">
        <div className="max-w-5xl mx-auto px-6 sm:px-8 lg:px-12">
          <motion.div
            ref={ref}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            {steps.map((step) => (
              <motion.div
                key={step.number}
                variants={fadeUp}
                className="text-center"
              >
                <div className="w-16 h-16 bg-brand-accent/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-brand-accent">
                    {step.number}
                  </span>
                </div>
                <h3 className="text-xl font-bold text-brand-dark">
                  {step.title}
                </h3>
                <p className="text-brand-muted mt-3 leading-relaxed">
                  {step.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <section className="py-16 bg-brand-light">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <p className="text-sm text-brand-muted leading-relaxed">
            Financing provided by Sheffield Financial. Terms and conditions
            apply. 0% APR for 36 months available to qualifying customers. Subject
            to credit approval. Contact us at (706) 221-4653 for details.
          </p>
        </div>
      </section>
    </PageTransition>
  );
}
