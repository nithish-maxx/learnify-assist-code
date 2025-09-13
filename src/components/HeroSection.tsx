import { Button } from "@/components/ui/button";
import { ArrowRight, Play, Code2 } from "lucide-react";

export const HeroSection = () => {
  return (
    <section className="relative bg-gradient-to-br from-background to-secondary/30 py-20 px-6">
      <div className="max-w-7xl mx-auto text-center">
        <div className="max-w-3xl mx-auto space-y-8">
          <h1 className="text-5xl md:text-6xl font-bold text-foreground leading-tight">
            Master Programming with
            <span className="block text-primary">AI-Powered Learning</span>
          </h1>
          
          <p className="text-xl text-muted-foreground leading-relaxed">
            Get real-time code analysis, intelligent error detection, and personalized debugging suggestions. 
            Learn faster with our interactive tutorials and dynamic exercise generation.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button size="lg" className="group">
              Start Learning
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
            <Button variant="outline" size="lg" className="group">
              <Play className="mr-2 h-4 w-4" />
              Watch Demo
            </Button>
          </div>
        </div>
        
        <div className="mt-16 relative">
          <div className="bg-code-bg rounded-lg p-6 mx-auto max-w-4xl text-left shadow-2xl">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-3 h-3 bg-destructive rounded-full"></div>
              <div className="w-3 h-3 bg-warning rounded-full"></div>
              <div className="w-3 h-3 bg-success rounded-full"></div>
              <Code2 className="ml-auto h-4 w-4 text-code-foreground/60" />
            </div>
            <pre className="text-code-foreground text-sm leading-relaxed">
              <code>{`function fibonacci(n) {
  if (n <= 1) return n;
  return fibonacci(n - 1) + fibonacci(n - 2);
}

// ✨ AI Suggestion: Consider memoization for better performance
const fibonacciOptimized = (n, memo = {}) => {
  if (n in memo) return memo[n];
  if (n <= 1) return n;
  return memo[n] = fibonacciOptimized(n - 1, memo) + 
                   fibonacciOptimized(n - 2, memo);
};`}</code>
            </pre>
          </div>
        </div>
      </div>
    </section>
  );
};