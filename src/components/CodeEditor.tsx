import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Play, RotateCcw, AlertTriangle, CheckCircle, Lightbulb } from "lucide-react";

export const CodeEditor = () => {
  const [code, setCode] = useState(`function factorial(n) {
  if (n = 0) return 1; // Error: Assignment instead of comparison
  return n * factorial(n - 1);
}

console.log(factorial(5));`);

  const [errors] = useState([
    {
      line: 2,
      type: "error",
      message: "Assignment in condition (use === instead of =)",
      suggestion: "Change '=' to '===' for comparison"
    }
  ]);

  const [suggestions] = useState([
    "Add input validation to check if n is a positive integer",
    "Consider iterative approach for better performance",
    "Add JSDoc comments for better documentation"
  ]);

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 max-w-7xl mx-auto px-6">
      {/* Code Editor */}
      <div className="lg:col-span-2">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between">
            <CardTitle className="flex items-center space-x-2">
              <span>Code Editor</span>
              <Badge variant="outline">JavaScript</Badge>
            </CardTitle>
            <div className="flex space-x-2">
              <Button size="sm" variant="outline">
                <RotateCcw className="h-4 w-4" />
              </Button>
              <Button size="sm">
                <Play className="h-4 w-4 mr-2" />
                Run
              </Button>
            </div>
          </CardHeader>
          <CardContent>
            <div className="bg-code-bg rounded-lg p-4">
              <div className="flex text-xs text-code-foreground/60 mb-2">
                <span className="w-8 text-right mr-4">1</span>
                <span className="w-8 text-right mr-4">2</span>
                <span className="w-8 text-right mr-4">3</span>
                <span className="w-8 text-right mr-4">4</span>
                <span className="w-8 text-right mr-4">5</span>
                <span className="w-8 text-right mr-4">6</span>
              </div>
              <textarea
                value={code}
                onChange={(e) => setCode(e.target.value)}
                className="w-full h-64 bg-transparent text-code-foreground font-mono text-sm resize-none focus:outline-none"
                spellCheck={false}
              />
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Analysis Panel */}
      <div className="space-y-6">
        {/* Errors */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <AlertTriangle className="h-5 w-5 text-destructive" />
              <span>Issues Found</span>
              <Badge variant="destructive">{errors.length}</Badge>
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            {errors.map((error, index) => (
              <div key={index} className="p-3 bg-destructive/10 rounded-lg">
                <div className="flex items-center space-x-2 mb-1">
                  <Badge variant="destructive">Line {error.line}</Badge>
                  <span className="text-sm font-medium">{error.type}</span>
                </div>
                <p className="text-sm text-muted-foreground mb-2">{error.message}</p>
                <p className="text-sm text-accent font-medium">💡 {error.suggestion}</p>
              </div>
            ))}
          </CardContent>
        </Card>

        {/* Suggestions */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <Lightbulb className="h-5 w-5 text-warning" />
              <span>AI Suggestions</span>
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            {suggestions.map((suggestion, index) => (
              <div key={index} className="p-3 bg-warning/10 rounded-lg">
                <div className="flex items-start space-x-2">
                  <CheckCircle className="h-4 w-4 text-success mt-0.5" />
                  <span className="text-sm">{suggestion}</span>
                </div>
              </div>
            ))}
          </CardContent>
        </Card>
      </div>
    </div>
  );
};