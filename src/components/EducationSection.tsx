import { Shield, Eye, Lock, AlertCircle, CheckCircle, XCircle } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export const EducationSection = () => {
  const phishingTips = [
    {
      icon: <Eye className="h-6 w-6 text-primary" />,
      title: "Check the URL carefully",
      description: "Look for misspellings, unusual domains, or suspicious characters in the web address.",
    },
    {
      icon: <Lock className="h-6 w-6 text-success" />,
      title: "Look for HTTPS",
      description: "Legitimate sites use HTTPS encryption. Check for the lock icon in your browser.",
    },
    {
      icon: <AlertCircle className="h-6 w-6 text-warning" />,
      title: "Be wary of urgent requests",
      description: "Phishing sites often create false urgency to pressure you into quick action.",
    },
    {
      icon: <Shield className="h-6 w-6 text-primary" />,
      title: "Verify the sender",
      description: "Always verify emails and messages through official channels before clicking links.",
    },
  ];

  const exampleUrls = [
    {
      url: "https://paypa1-secure.com/login",
      status: "dangerous",
      reason: "Suspicious domain with character substitution (1 instead of l)",
    },
    {
      url: "https://amazon-security-alert.net",
      status: "dangerous", 
      reason: "Fake Amazon domain with suspicious subdomain",
    },
    {
      url: "http://update-account.microsoft-login.com",
      status: "dangerous",
      reason: "No HTTPS and fake Microsoft domain",
    },
    {
      url: "https://github.com/user/repository",
      status: "safe",
      reason: "Legitimate GitHub URL with proper domain",
    },
  ];

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "safe":
        return <CheckCircle className="h-5 w-5 text-success" />;
      case "dangerous":
        return <XCircle className="h-5 w-5 text-destructive" />;
      default:
        return <AlertCircle className="h-5 w-5 text-warning" />;
    }
  };

  return (
    <section id="education" className="py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Learn to Identify Phishing Attempts
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Education is your first line of defense against cybercriminals. Learn how to spot and avoid phishing attacks.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            <div>
              <h3 className="text-2xl font-bold mb-6">Essential Security Tips</h3>
              <div className="space-y-6">
                {phishingTips.map((tip, index) => (
                  <Card key={index} className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="p-2 bg-muted rounded-lg">
                        {tip.icon}
                      </div>
                      <div>
                        <h4 className="font-semibold mb-2">{tip.title}</h4>
                        <p className="text-sm text-muted-foreground">{tip.description}</p>
                      </div>
                    </div>
                  </Card>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-bold mb-6">URL Examples</h3>
              <div className="space-y-4">
                {exampleUrls.map((example, index) => (
                  <Card key={index} className="p-4">
                    <div className="flex items-start justify-between gap-4 mb-3">
                      <div className="flex items-center gap-2 min-w-0">
                        {getStatusIcon(example.status)}
                        <code className="text-sm bg-muted px-2 py-1 rounded text-foreground truncate flex-1">
                          {example.url}
                        </code>
                      </div>
                      <Badge 
                        variant={example.status === "safe" ? "secondary" : "destructive"}
                        className="shrink-0"
                      >
                        {example.status === "safe" ? "Safe" : "Dangerous"}
                      </Badge>
                    </div>
                    <p className="text-xs text-muted-foreground">{example.reason}</p>
                  </Card>
                ))}
              </div>
            </div>
          </div>

          <Card className="p-8 bg-gradient-to-r from-primary/10 to-blue-600/10 border-primary/20">
            <div className="text-center">
              <Shield className="h-12 w-12 text-primary mx-auto mb-4" />
              <h3 className="text-2xl font-bold mb-4">Stay Protected</h3>
              <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                Remember: When in doubt, don't click. Always verify suspicious links through official channels 
                and use our scanner to check URLs before visiting them.
              </p>
              <div className="flex flex-wrap justify-center gap-4 text-sm">
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-success" />
                  <span>Always verify sender identity</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-success" />
                  <span>Check URLs before clicking</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-success" />
                  <span>Use our scanner tool</span>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};