import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { BookOpen, Play, CheckCircle, Clock } from "lucide-react";

const tutorials = [
  {
    id: 1,
    title: "JavaScript Fundamentals",
    description: "Master the basics of JavaScript programming from variables to functions.",
    level: "Beginner",
    lessons: 12,
    duration: "3 hours",
    progress: 75,
    completed: 9,
    image: "🟨"
  },
  {
    id: 2,
    title: "Data Structures & Algorithms",
    description: "Learn essential data structures and algorithmic thinking patterns.",
    level: "Intermediate",
    lessons: 18,
    duration: "6 hours",
    progress: 40,
    completed: 7,
    image: "🔗"
  },
  {
    id: 3,
    title: "React Development",
    description: "Build modern web applications with React and its ecosystem.",
    level: "Intermediate",
    lessons: 15,
    duration: "5 hours",
    progress: 0,
    completed: 0,
    image: "⚛️"
  }
];

const getLevelColor = (level: string) => {
  switch (level) {
    case "Beginner": return "success";
    case "Intermediate": return "warning";
    case "Advanced": return "destructive";
    default: return "secondary";
  }
};

export const TutorialSection = () => {
  return (
    <section className="py-16 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-foreground mb-4">
            Interactive Learning Paths
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Follow structured tutorials with hands-on coding exercises and real-time feedback.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {tutorials.map((tutorial) => (
            <Card key={tutorial.id} className="group hover:shadow-xl transition-all duration-300">
              <CardHeader>
                <div className="flex items-center space-x-3 mb-3">
                  <div className="text-3xl">{tutorial.image}</div>
                  <Badge variant={getLevelColor(tutorial.level) as any}>
                    {tutorial.level}
                  </Badge>
                </div>
                <CardTitle className="text-xl group-hover:text-primary transition-colors">
                  {tutorial.title}
                </CardTitle>
                <p className="text-muted-foreground text-sm">
                  {tutorial.description}
                </p>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center justify-between text-sm text-muted-foreground">
                  <div className="flex items-center space-x-1">
                    <BookOpen className="h-4 w-4" />
                    <span>{tutorial.lessons} lessons</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Clock className="h-4 w-4" />
                    <span>{tutorial.duration}</span>
                  </div>
                </div>

                {tutorial.progress > 0 && (
                  <div className="space-y-2">
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-muted-foreground">Progress</span>
                      <span className="font-medium">{tutorial.progress}%</span>
                    </div>
                    <Progress value={tutorial.progress} className="h-2" />
                    <div className="flex items-center space-x-1 text-sm text-muted-foreground">
                      <CheckCircle className="h-4 w-4 text-success" />
                      <span>{tutorial.completed} of {tutorial.lessons} completed</span>
                    </div>
                  </div>
                )}

                <Button className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                  {tutorial.progress > 0 ? (
                    <>
                      <Play className="mr-2 h-4 w-4" />
                      Continue Learning
                    </>
                  ) : (
                    <>
                      <BookOpen className="mr-2 h-4 w-4" />
                      Start Tutorial
                    </>
                  )}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};