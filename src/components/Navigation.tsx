import { Button } from "@/components/ui/button";
import { Code, BookOpen, Target, Zap } from "lucide-react";

export const Navigation = () => {
  return (
    <nav className="bg-card border-b border-border px-6 py-4">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <Code className="h-8 w-8 text-primary" />
          <span className="text-2xl font-bold text-foreground">CodeLearn</span>
        </div>
        
        <div className="hidden md:flex items-center space-x-6">
          <Button variant="ghost" className="flex items-center space-x-2">
            <BookOpen className="h-4 w-4" />
            <span>Tutorials</span>
          </Button>
          <Button variant="ghost" className="flex items-center space-x-2">
            <Target className="h-4 w-4" />
            <span>Exercises</span>
          </Button>
          <Button variant="ghost" className="flex items-center space-x-2">
            <Zap className="h-4 w-4" />
            <span>Practice</span>
          </Button>
        </div>

        <div className="flex items-center space-x-4">
          <Button variant="outline">Sign In</Button>
          <Button>Get Started</Button>
        </div>
      </div>
    </nav>
  );
};