export type Tool = {
  name: string;
  category: string;
  icon: "framer" | "figma" | "lemon" | "chatgpt" | "notion" | "nextjs";
};

export const tools: Tool[] = [
  { name: "Framer", category: "Website Builder", icon: "framer" },
  { name: "Figma", category: "Design Tool", icon: "figma" },
  { name: "Lemon Squeezy", category: "Payments Provider", icon: "lemon" },
  { name: "ChatGPT", category: "AI Assistant", icon: "chatgpt" },
  { name: "Notion", category: "Productivity Tool", icon: "notion" },
  { name: "Nextjs", category: "React framework", icon: "nextjs" },
];
