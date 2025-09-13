import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { 
  Brain, 
  Bug, 
  Lightbulb, 
  Target, 
  Code2, 
  TrendingUp 
} from "lucide-react";

const features = [
  {
    icon: Brain,
    title: "AI-Powered Analysis",
    description: "Advanced code analysis with intelligent suggestions and optimization recommendations."
  },
  {
    icon: Bug,
    title: "Real-time Error Detection",
    description: "Instant identification of syntax errors, logic bugs, and potential issues in your code."
  },
  {
    icon: Lightbulb,
    title: "Smart Debugging",
    description: "Context-aware debugging suggestions with step-by-step solutions and explanations."
  },
  {
    icon: Target,
    title: "Dynamic Exercises",
    description: "Personalized coding challenges that adapt to your skill level and learning progress."
  },
  {
    icon: Code2,
    title: "Interactive Tutorials",
    description: "Hands-on learning experiences with immediate feedback and guided practice."
  },
  {
    icon: TrendingUp,
    title: "Progress Tracking",
    description: "Detailed analytics of your coding journey with skill assessments and recommendations."
  }
];

export const FeatureSection = () => {
  return (
    <section className="py-16 px-6 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-foreground mb-4">
            Powerful Learning Features
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Everything you need to master programming efficiently and effectively.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card key={index} className="group hover:shadow-lg transition-all duration-300 hover:border-primary/20">
              <CardHeader>
                <div className="mb-4">
                  <div className="inline-flex items-center justify-center w-12 h-12 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors">
                    <feature.icon className="h-6 w-6 text-primary" />
                  </div>
                </div>
                <CardTitle className="text-xl group-hover:text-primary transition-colors">
                  {feature.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};