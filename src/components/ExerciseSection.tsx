import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Clock, Star, Users, ArrowRight } from "lucide-react";

const exercises = [
  {
    id: 1,
    title: "Two Sum Problem",
    difficulty: "Easy",
    time: "15 min",
    rating: 4.8,
    participants: 1250,
    description: "Find two numbers in an array that sum to a target value.",
    tags: ["Arrays", "Hash Tables"]
  },
  {
    id: 2,
    title: "Binary Tree Traversal",
    difficulty: "Medium",
    time: "30 min",
    rating: 4.6,
    participants: 890,
    description: "Implement in-order, pre-order, and post-order traversal.",
    tags: ["Trees", "Recursion"]
  },
  {
    id: 3,
    title: "Dynamic Programming: Knapsack",
    difficulty: "Hard",
    time: "45 min",
    rating: 4.7,
    participants: 567,
    description: "Solve the classic 0/1 knapsack problem using dynamic programming.",
    tags: ["Dynamic Programming", "Optimization"]
  },
  {
    id: 4,
    title: "String Manipulation",
    difficulty: "Easy",
    time: "20 min",
    rating: 4.9,
    participants: 2100,
    description: "Practice common string operations and pattern matching.",
    tags: ["Strings", "Regex"]
  }
];

const getDifficultyColor = (difficulty: string) => {
  switch (difficulty) {
    case "Easy": return "success";
    case "Medium": return "warning";
    case "Hard": return "destructive";
    default: return "secondary";
  }
};

export const ExerciseSection = () => {
  return (
    <section className="py-16 px-6 bg-secondary/30">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-foreground mb-4">
            Practice with Real Problems
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Solve coding challenges with instant feedback, hints, and multiple solution approaches.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {exercises.map((exercise) => (
            <Card key={exercise.id} className="group hover:shadow-lg transition-all duration-300">
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div className="space-y-2">
                    <CardTitle className="text-xl group-hover:text-primary transition-colors">
                      {exercise.title}
                    </CardTitle>
                    <div className="flex items-center space-x-3">
                      <Badge variant={getDifficultyColor(exercise.difficulty) as any}>
                        {exercise.difficulty}
                      </Badge>
                      <div className="flex items-center space-x-1 text-sm text-muted-foreground">
                        <Clock className="h-4 w-4" />
                        <span>{exercise.time}</span>
                      </div>
                    </div>
                  </div>
                  <div className="text-right space-y-1">
                    <div className="flex items-center space-x-1 text-sm">
                      <Star className="h-4 w-4 text-warning fill-current" />
                      <span>{exercise.rating}</span>
                    </div>
                    <div className="flex items-center space-x-1 text-sm text-muted-foreground">
                      <Users className="h-4 w-4" />
                      <span>{exercise.participants}</span>
                    </div>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">{exercise.description}</p>
                <div className="flex items-center justify-between">
                  <div className="flex flex-wrap gap-2">
                    {exercise.tags.map((tag) => (
                      <Badge key={tag} variant="outline" className="text-xs">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                  <Button className="group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                    Start
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button size="lg" variant="outline">
            View All Exercises
          </Button>
        </div>
      </div>
    </section>
  );
};