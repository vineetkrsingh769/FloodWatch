import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { AlertTriangle, Shield } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative py-20 px-4 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-accent/5 to-background -z-10" />
      
      <div className="container mx-auto max-w-5xl text-center">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
          <Shield className="w-4 h-4" />
          AI-Powered Flood Detection
        </div>
        
        <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
          Predict & Prevent Flood Disasters
        </h1>
        
        <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
          Upload images of any location and get instant AI-powered flood risk analysis. 
          Early detection saves lives and property.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Link to="/upload">
            <Button size="lg" className="gap-2">
              <AlertTriangle className="w-5 h-5" />
              Analyze Location Now
            </Button>
          </Link>
        </div>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
          <div className="p-6 rounded-lg bg-card border border-border">
            <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
              <span className="text-2xl">🤖</span>
            </div>
            <h3 className="font-semibold text-lg mb-2">AI Detection</h3>
            <p className="text-sm text-muted-foreground">
              CNN-based model analyzes terrain, water presence, and historical data
            </p>
          </div>
          
          <div className="p-6 rounded-lg bg-card border border-border">
            <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
              <span className="text-2xl">⚡</span>
            </div>
            <h3 className="font-semibold text-lg mb-2">Instant Results</h3>
            <p className="text-sm text-muted-foreground">
              Get risk level predictions in seconds with color-coded indicators
            </p>
          </div>
          
          <div className="p-6 rounded-lg bg-card border border-border">
            <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
              <span className="text-2xl">📍</span>
            </div>
            <h3 className="font-semibold text-lg mb-2">Preventive Tips</h3>
            <p className="text-sm text-muted-foreground">
              Location-specific safety measures and flood prevention guidance
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

