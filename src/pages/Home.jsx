import Hero from "@/components/Hero";
import { Card } from "@/components/ui/card";
import { Droplets, TrendingUp, Shield, MapPin } from "lucide-react";

const Home = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-5xl">
          <h2 className="text-3xl font-bold text-center mb-12">
            Why Flood Prediction Matters
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            <Card className="p-6">
              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-full bg-destructive/10 flex items-center justify-center flex-shrink-0">
                  <Droplets className="w-6 h-6 text-destructive" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-2">Growing Threat</h3>
                  <p className="text-sm text-muted-foreground">
                    Floods are one of the most frequent and destructive natural disasters, 
                    especially in North India, causing massive damage every year.
                  </p>
                </div>
              </div>
            </Card>
            
            <Card className="p-6">
              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <TrendingUp className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-2">Early Detection</h3>
                  <p className="text-sm text-muted-foreground">
                    AI-powered analysis of satellite imagery and terrain data enables 
                    early identification of flood-prone locations.
                  </p>
                </div>
              </div>
            </Card>
            
            <Card className="p-6">
              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center flex-shrink-0">
                  <Shield className="w-6 h-6 text-accent" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-2">Prevention</h3>
                  <p className="text-sm text-muted-foreground">
                    Preventive awareness and timely alerts can help reduce disaster impact 
                    through early detection and preparedness.
                  </p>
                </div>
              </div>
            </Card>
            
            <Card className="p-6">
              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-full bg-secondary/10 flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-6 h-6 text-secondary" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-2">Location Analysis</h3>
                  <p className="text-sm text-muted-foreground">
                    Upload images of any location to receive risk level predictions and 
                    location-specific safety recommendations.
                  </p>
                </div>
              </div>
            </Card>
          </div>

          <div className="bg-gradient-to-r from-primary/10 to-accent/10 rounded-lg p-8 text-center">
            <h3 className="text-2xl font-bold mb-4">How It Works</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
              <div>
                <div className="w-12 h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center mx-auto mb-3 font-bold text-xl">
                  1
                </div>
                <h4 className="font-semibold mb-2">Upload Image</h4>
                <p className="text-sm text-muted-foreground">
                  Upload a photo or satellite image of the location
                </p>
              </div>
              <div>
                <div className="w-12 h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center mx-auto mb-3 font-bold text-xl">
                  2
                </div>
                <h4 className="font-semibold mb-2">AI Analysis</h4>
                <p className="text-sm text-muted-foreground">
                  Our CNN model analyzes terrain, water, and historical data
                </p>
              </div>
              <div>
                <div className="w-12 h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center mx-auto mb-3 font-bold text-xl">
                  3
                </div>
                <h4 className="font-semibold mb-2">Get Results</h4>
                <p className="text-sm text-muted-foreground">
                  Receive risk level and personalized safety recommendations
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;




