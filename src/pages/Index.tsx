import { Navigation } from "@/components/Navigation";
import { HeroSection } from "@/components/HeroSection";
import { FeatureSection } from "@/components/FeatureSection";
import { CodeEditor } from "@/components/CodeEditor";
import { ExerciseSection } from "@/components/ExerciseSection";
import { TutorialSection } from "@/components/TutorialSection";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <HeroSection />
      <FeatureSection />
      
      <section className="py-16 px-6 bg-secondary/30">
        <div className="max-w-7xl mx-auto mb-12 text-center">
          <h2 className="text-4xl font-bold text-foreground mb-4">
            Try Our Code Analysis
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Experience real-time error detection and intelligent debugging suggestions.
          </p>
        </div>
        <CodeEditor />
      </section>
      
      <TutorialSection />
      <ExerciseSection />
      
      <footer className="bg-primary text-primary-foreground py-8 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-lg mb-2">Ready to start your coding journey?</p>
          <p className="text-primary-foreground/80">Join thousands of developers learning with CodeLearn</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;