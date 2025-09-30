import { useState } from "react";
import { Search, Shield, AlertTriangle, CheckCircle, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useToast } from "@/hooks/use-toast";

interface ScanResult {
  url: string;
  status: "safe" | "suspicious" | "dangerous";
  score: number;
  threats: string[];
  details: {
    domain: string;
    ip: string;
    country: string;
    registrar: string;
    created: string;
  };
}

export const UrlScanner = () => {
  const [url, setUrl] = useState("");
  const [isScanning, setIsScanning] = useState(false);
  const [result, setResult] = useState<ScanResult | null>(null);
  const { toast } = useToast();

  const mockScanResult = (inputUrl: string): ScanResult => {
    // Simple heuristic for demo - check for suspicious patterns
    const suspiciousPatterns = [
      'paypal', 'amazon', 'google', 'microsoft', 'apple', 'facebook',
      'login', 'secure', 'verify', 'update', 'suspended', 'account'
    ];
    
    const isSuspicious = suspiciousPatterns.some(pattern => 
      inputUrl.toLowerCase().includes(pattern) && 
      !inputUrl.includes('.com') && 
      !inputUrl.includes('.org')
    );
    
    const isDangerous = inputUrl.includes('bit.ly') || 
                       inputUrl.includes('tinyurl') || 
                       isSuspicious;

    let status: "safe" | "suspicious" | "dangerous" = "safe";
    let score = 95;
    let threats: string[] = [];

    if (isDangerous) {
      status = "dangerous";
      score = 15;
      threats = ["Phishing attempt detected", "Suspicious domain", "Known malicious IP"];
    } else if (isSuspicious) {
      status = "suspicious";
      score = 45;
      threats = ["Suspicious domain pattern", "Recent registration"];
    }

    return {
      url: inputUrl,
      status,
      score,
      threats,
      details: {
        domain: new URL(inputUrl).hostname,
        ip: "192.168.1.1",
        country: "United States",
        registrar: "Example Registrar",
        created: "2023-01-15"
      }
    };
  };

  const handleScan = async () => {
    if (!url) {
      toast({
        title: "Error",
        description: "Please enter a URL to scan",
        variant: "destructive",
      });
      return;
    }

    try {
      new URL(url);
    } catch {
      toast({
        title: "Error", 
        description: "Please enter a valid URL",
        variant: "destructive",
      });
      return;
    }

    setIsScanning(true);
    
    // Simulate API call
    setTimeout(() => {
      const scanResult = mockScanResult(url);
      setResult(scanResult);
      setIsScanning(false);
      
      toast({
        title: "Scan Complete",
        description: `Security score: ${scanResult.score}/100`,
        variant: scanResult.status === "safe" ? "default" : "destructive",
      });
    }, 2000);
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case "safe": return "success";
      case "suspicious": return "warning";
      case "dangerous": return "destructive";
      default: return "secondary";
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "safe": return <CheckCircle className="h-5 w-5" />;
      case "suspicious": return <AlertTriangle className="h-5 w-5" />;
      case "dangerous": return <AlertTriangle className="h-5 w-5" />;
      default: return <Shield className="h-5 w-5" />;
    }
  };

  return (
    <section id="scanner" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              URL Security Scanner
            </h2>
            <p className="text-lg text-muted-foreground">
              Enter any URL to check for phishing and malicious content
            </p>
          </div>

          <Card className="p-8 mb-8">
            <div className="flex flex-col sm:flex-row gap-4 mb-6">
              <Input
                type="url"
                placeholder="https://example.com"
                value={url}
                onChange={(e) => setUrl(e.target.value)}
                className="flex-1"
                onKeyDown={(e) => e.key === "Enter" && handleScan()}
              />
              <Button 
                variant="security" 
                onClick={handleScan} 
                disabled={isScanning}
                className="px-8"
              >
                <Search className="mr-2 h-4 w-4" />
                {isScanning ? "Scanning..." : "Scan URL"}
              </Button>
            </div>

            {isScanning && (
              <div className="text-center py-8">
                <div className="inline-flex items-center gap-2 text-muted-foreground">
                  <div className="animate-spin rounded-full h-4 w-4 border-2 border-primary border-t-transparent"></div>
                  Analyzing URL security...
                </div>
              </div>
            )}

            {result && !isScanning && (
              <div className="space-y-6">
                <div className="flex items-center justify-between p-4 bg-card rounded-lg border">
                  <div className="flex items-center gap-3">
                    {getStatusIcon(result.status)}
                    <div>
                      <div className="font-semibold">Security Status</div>
                      <div className="text-sm text-muted-foreground">{result.url}</div>
                    </div>
                  </div>
                  <Badge variant={getStatusColor(result.status) as any} className="text-sm">
                    {result.status.toUpperCase()}
                  </Badge>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <Card className="p-6">
                    <h3 className="font-semibold mb-4 flex items-center gap-2">
                      <Shield className="h-5 w-5" />
                      Security Score
                    </h3>
                    <div className="space-y-3">
                      <div className="flex items-center justify-between">
                        <span>Overall Score</span>
                        <span className={`font-bold ${
                          result.score >= 80 ? 'text-success' :
                          result.score >= 50 ? 'text-warning' : 'text-destructive'
                        }`}>
                          {result.score}/100
                        </span>
                      </div>
                      <div className="w-full bg-muted rounded-full h-2">
                        <div 
                          className={`h-2 rounded-full ${
                            result.score >= 80 ? 'bg-success' :
                            result.score >= 50 ? 'bg-warning' : 'bg-destructive'
                          }`}
                          style={{ width: `${result.score}%` }}
                        />
                      </div>
                    </div>
                  </Card>

                  <Card className="p-6">
                    <h3 className="font-semibold mb-4">Domain Details</h3>
                    <div className="space-y-2 text-sm">
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Domain:</span>
                        <span>{result.details.domain}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">IP Address:</span>
                        <span>{result.details.ip}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Country:</span>
                        <span>{result.details.country}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Created:</span>
                        <span>{result.details.created}</span>
                      </div>
                    </div>
                  </Card>
                </div>

                {result.threats.length > 0 && (
                  <Card className="p-6 border-destructive/20 bg-destructive/5">
                    <h3 className="font-semibold mb-4 text-destructive flex items-center gap-2">
                      <AlertTriangle className="h-5 w-5" />
                      Security Threats Detected
                    </h3>
                    <ul className="space-y-2">
                      {result.threats.map((threat, index) => (
                        <li key={index} className="flex items-center gap-2 text-sm">
                          <div className="w-1 h-1 bg-destructive rounded-full" />
                          {threat}
                        </li>
                      ))}
                    </ul>
                  </Card>
                )}

                <div className="text-center">
                  <Button variant="outline" asChild>
                    <a href={result.url} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="mr-2 h-4 w-4" />
                      Visit Website (Use Caution)
                    </a>
                  </Button>
                </div>
              </div>
            )}
          </Card>
        </div>
      </div>
    </section>
  );
};