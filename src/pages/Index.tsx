import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { UrlScanner } from "@/components/UrlScanner";
import { EducationSection } from "@/components/EducationSection";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <UrlScanner />
        <EducationSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
