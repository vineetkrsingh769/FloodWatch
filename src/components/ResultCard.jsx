import { CheckCircle, AlertTriangle, XCircle } from "lucide-react";
import { Card } from "@/components/ui/card";

const ResultCard = ({ riskLevel }) => {
  const riskConfig = {
    safe: {
      color: "hsl(var(--safe))",
      icon: CheckCircle,
      title: "Safe Zone",
      description: "Low flood risk detected. Area appears safe with minimal water accumulation indicators.",
      tips: [
        "Continue monitoring during heavy rainfall seasons",
        "Ensure proper drainage systems are maintained",
        "Keep emergency contact numbers handy"
      ]
    },
    moderate: {
      color: "hsl(var(--moderate))",
      icon: AlertTriangle,
      title: "Moderate Risk",
      description: "Moderate flood risk detected. Some indicators suggest potential water accumulation.",
      tips: [
        "Monitor weather forecasts regularly",
        "Prepare emergency evacuation plan",
        "Store important documents in waterproof containers",
        "Keep emergency supplies ready"
      ]
    },
    high: {
      color: "hsl(var(--high))",
      icon: XCircle,
      title: "High Risk Zone",
      description: "High flood risk detected! Area shows strong indicators of potential flooding.",
      tips: [
        "Evacuate to higher ground immediately if rainfall increases",
        "Contact local authorities for emergency assistance",
        "Move valuables and important items to higher floors",
        "Do not attempt to cross flowing water",
        "Stay tuned to emergency broadcasts"
      ]
    }
  };

  const config = riskConfig[riskLevel];
  const Icon = config.icon;

  return (
    <Card className="p-8 max-w-2xl mx-auto">
      <div className="text-center mb-6">
        <div 
          className="w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4"
          style={{ backgroundColor: `${config.color}20` }}
        >
          <Icon className="w-10 h-10" style={{ color: config.color }} />
        </div>
        <h2 className="text-3xl font-bold mb-2" style={{ color: config.color }}>
          {config.title}
        </h2>
        <p className="text-muted-foreground">
          {config.description}
        </p>
      </div>

      <div className="mt-8">
        <h3 className="font-semibold text-lg mb-4">Safety Recommendations:</h3>
        <ul className="space-y-3">
          {config.tips.map((tip, index) => (
            <li key={index} className="flex gap-3">
              <span className="text-primary font-bold">•</span>
              <span className="text-sm text-muted-foreground">{tip}</span>
            </li>
          ))}
        </ul>
      </div>

      <div className="mt-8 p-4 rounded-lg bg-muted/50 text-sm text-muted-foreground">
        <p className="font-medium mb-1">Note:</p>
        <p>This is an AI-based prediction. For critical decisions, please consult local authorities 
        and official weather services.</p>
      </div>
    </Card>
  );
};

export default ResultCard;




