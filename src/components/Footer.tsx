import { Shield, Github, Twitter, Mail } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="bg-muted/50 border-t border-border">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <Shield className="h-6 w-6 text-primary" />
              <span className="text-xl font-bold">PhishGuard</span>
            </div>
            <p className="text-sm text-muted-foreground">
              Advanced phishing detection to keep you safe online. Protecting users from cyber threats since 2024.
            </p>
          </div>
          
          <div>
            <h3 className="font-semibold mb-4">Tools</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="#scanner" className="text-muted-foreground hover:text-primary transition-colors">URL Scanner</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Browser Extension</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">API Access</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Security Reports</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold mb-4">Resources</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="#education" className="text-muted-foreground hover:text-primary transition-colors">Security Education</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Threat Database</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Security Blog</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Documentation</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold mb-4">Connect</h3>
            <div className="flex gap-4">
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Github className="h-5 w-5" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Mail className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>
        
        <div className="border-t border-border mt-8 pt-8 text-center text-sm text-muted-foreground">
          <p>&copy; 2024 PhishGuard. All rights reserved. | Privacy Policy | Terms of Service</p>
        </div>
      </div>
    </footer>
  );
};