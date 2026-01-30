import Navbar from "@/components/landing/Navbar";
import Hero from "@/components/landing/Hero";
import HowItWorks from "@/components/landing/HowItWorks";
import Features from "@/components/landing/Features";
import WhatsAppMockup from "@/components/landing/WhatsAppMockup";
import Differentials from "@/components/landing/Differentials";
import Trust from "@/components/landing/Trust";
import CTA from "@/components/landing/CTA";
import Footer from "@/components/landing/Footer";

const Index = () => {
  return (
    <main className="min-h-screen bg-background overflow-x-hidden">
      <Navbar />
      <Hero />
      <HowItWorks />
      <Features />
      <WhatsAppMockup />
      <Differentials />
      <Trust />
      <CTA />
      <Footer />
    </main>
  );
};

export default Index;
