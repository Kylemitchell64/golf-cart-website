import PageTransition from "../components/layout/PageTransition";
import Button from "../components/ui/Button";

export default function NotFoundPage() {
  return (
    <PageTransition>
      <section className="min-h-screen flex items-center justify-center bg-brand-white">
        <div className="text-center px-4">
          <p className="text-8xl font-bold text-brand-accent/20">404</p>
          <h1 className="text-3xl font-bold text-brand-dark mt-4">
            Page Not Found
          </h1>
          <p className="text-brand-muted mt-2 max-w-md mx-auto">
            The page you&apos;re looking for doesn&apos;t exist or has been moved.
          </p>
          <div className="mt-8">
            <Button to="/">Back to Home</Button>
          </div>
        </div>
      </section>
    </PageTransition>
  );
}
