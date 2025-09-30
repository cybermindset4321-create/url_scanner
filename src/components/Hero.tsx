import { Shield, AlertTriangle, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/security-hero.jpg";

export const Hero = () => {
  return (
    <section className="relative py-20 overflow-hidden">
      {/* Background with gradient overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-background/95 via-background/90 to-primary/20" />
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <div className="flex justify-center mb-6">
            <div className="p-4 bg-primary/10 rounded-full">
              <Shield className="h-16 w-16 text-primary" />
            </div>
          </div>
          
          <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-foreground via-primary to-blue-600 bg-clip-text text-transparent">
            Protect Yourself from
            <span className="block text-destructive">Phishing Attacks</span>
          </h1>
          
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Advanced AI-powered detection to identify malicious websites and protect your personal information from cybercriminals.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button variant="security" size="lg" className="text-lg px-8">
              <Shield className="mr-2 h-5 w-5" />
              Scan URL Now
            </Button>
            <Button variant="outline" size="lg" className="text-lg px-8">
              Learn About Phishing
            </Button>
          </div>
          
          {/* Security stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl mx-auto">
            <div className="bg-card/50 backdrop-blur-sm border border-border/50 rounded-lg p-6">
              <div className="flex items-center justify-center mb-4">
                <CheckCircle className="h-8 w-8 text-success" />
              </div>
              <div className="text-2xl font-bold text-foreground mb-2">99.9%</div>
              <div className="text-sm text-muted-foreground">Detection Accuracy</div>
            </div>
            
            <div className="bg-card/50 backdrop-blur-sm border border-border/50 rounded-lg p-6">
              <div className="flex items-center justify-center mb-4">
                <Shield className="h-8 w-8 text-primary" />
              </div>
              <div className="text-2xl font-bold text-foreground mb-2">1M+</div>
              <div className="text-sm text-muted-foreground">URLs Scanned Daily</div>
            </div>
            
            <div className="bg-card/50 backdrop-blur-sm border border-border/50 rounded-lg p-6">
              <div className="flex items-center justify-center mb-4">
                <AlertTriangle className="h-8 w-8 text-warning" />
              </div>
              <div className="text-2xl font-bold text-foreground mb-2">50K+</div>
              <div className="text-sm text-muted-foreground">Threats Blocked</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};