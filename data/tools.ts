export type Tool = {
  name: string;
  category: string;
  icon: "react" | "nodejs" | "aws" | "docker" | "java";
};

export const tools: Tool[] = [
  { name: "React", category: "Frontend Library", icon: "react" },
  { name: "Node.js", category: "Backend Runtime", icon: "nodejs" },
  { name: "AWS", category: "Cloud Platform", icon: "aws" },
  { name: "Docker", category: "Containerization", icon: "docker" },
  { name: "Java / Spring Boot", category: "Backend Framework", icon: "java" },
];
