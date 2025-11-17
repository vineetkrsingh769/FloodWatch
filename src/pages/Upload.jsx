import { useState } from "react";
import UploadBox from "@/components/UploadBox";
import ResultCard from "@/components/ResultCard";
import { useToast } from "@/hooks/use-toast";

const Upload = () => {
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [result, setResult] = useState(null);
  const { toast } = useToast();

  const handleAnalyze = (file) => {
    setIsAnalyzing(true);
    toast({
      title: "Analyzing image...",
      description: "AI model is processing the location data",
    });

    // Simulate AI analysis (replace with actual API call)
    setTimeout(() => {
      const risks = ["safe", "moderate", "high"];
      const randomResult = risks[Math.floor(Math.random() * risks.length)];
      setResult(randomResult);
      setIsAnalyzing(false);
      
      toast({
        title: "Analysis complete",
        description: "Flood risk assessment ready",
      });
    }, 2500);
  };

  const handleReset = () => {
    setResult(null);
  };

  return (
    <div className="min-h-screen py-12 px-4">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">Upload & Analyze</h1>
          <p className="text-lg text-muted-foreground">
            Upload an image of any location to get instant flood risk analysis
          </p>
        </div>

        {!result && !isAnalyzing && <UploadBox onAnalyze={handleAnalyze} />}
        
        {isAnalyzing && (
          <div className="text-center py-12">
            <div className="w-16 h-16 border-4 border-primary border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
            <h3 className="text-xl font-semibold mb-2">Analyzing Image...</h3>
            <p className="text-muted-foreground">
              Our AI model is processing terrain, water patterns, and historical data
            </p>
          </div>
        )}

        {result && (
          <div className="space-y-6">
            <ResultCard riskLevel={result} />
            <div className="text-center">
              <button
                onClick={handleReset}
                className="text-primary hover:underline font-medium"
              >
                Analyze Another Location →
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Upload;




