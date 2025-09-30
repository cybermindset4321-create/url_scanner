import { Shield, Menu } from "lucide-react";
import { Button } from "@/components/ui/button";

export const Header = () => {
  return (
    <header className="sticky top-0 z-50 bg-background/80 backdrop-blur-sm border-b border-border">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Shield className="h-8 w-8 text-primary" />
            <h1 className="text-2xl font-bold bg-gradient-to-r from-primary to-blue-600 bg-clip-text text-transparent">
              PhishGuard
            </h1>
          </div>
          
          <nav className="hidden md:flex items-center gap-6">
            <a href="#scanner" className="text-foreground hover:text-primary transition-colors">
              Scanner
            </a>
            <a href="#about" className="text-foreground hover:text-primary transition-colors">
              About
            </a>
            <a href="#education" className="text-foreground hover:text-primary transition-colors">
              Learn
            </a>
            <Button variant="security" size="sm">
              Get Started
            </Button>
          </nav>
          
          <Button variant="ghost" size="icon" className="md:hidden">
            <Menu className="h-5 w-5" />
          </Button>
        </div>
      </div>
    </header>
  );
};