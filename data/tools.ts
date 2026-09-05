export type Tool = {
  name: string;
  category: string;
  icon: "react" | "nodejs" | "aws" | "docker" | "java" | "fastapi" | "azure" | "postgresql";
};

export const tools: Tool[] = [
  { name: "React", category: "Frontend Library", icon: "react" },
  { name: "Node.js", category: "Backend Runtime", icon: "nodejs" },
  { name: "FastAPI", category: "Backend Framework", icon: "fastapi" },
  { name: "Java / Spring Boot", category: "Backend Framework", icon: "java" },
  { name: "AWS", category: "Cloud Platform", icon: "aws" },
  { name: "Azure", category: "Cloud Platform", icon: "azure" },
  { name: "PostgreSQL", category: "Database", icon: "postgresql" },
  { name: "Docker", category: "Containerization", icon: "docker" },
];
