import Navigation from "@/components/ui/navigation"
import Hero from "@/components/ui/hero"
import Features from "@/components/ui/features"
import CTASection from "@/components/ui/cta-section"
import Footer from "@/components/ui/footer"

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main>
        <Hero />
        <Features />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
