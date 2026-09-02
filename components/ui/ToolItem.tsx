import type { Tool } from "@/data/tools";

const iconMap: Record<Tool["icon"], React.ReactNode> = {
  react: <i className="fab fa-react text-2xl" />,
  nodejs: <i className="fab fa-node-js text-2xl" />,
  aws: <i className="fab fa-aws text-2xl" />,
  docker: <i className="fab fa-docker text-2xl" />,
  java: <i className="fab fa-java text-2xl" />,
};

const iconColorMap: Record<Tool["icon"], string> = {
  react: "text-[#61DAFB]",
  nodejs: "text-[#539E43]",
  aws: "text-[#FF9900]",
  docker: "text-[#2496ED]",
  java: "text-[#EA2D2E]",
};

export default function ToolItem({ name, category, icon }: Tool) {
  return (
    <div className="flex items-center gap-4 p-3 -mx-3 rounded-xl hover:bg-white/5 light:hover:bg-black/5 transition-colors">
      <div
        className={`w-12 h-12 bg-white rounded-xl flex items-center justify-center shadow-lg light:border light:border-black/10 ${iconColorMap[icon]}`}
      >
        {iconMap[icon]}
      </div>
      <div>
        <h5 className="font-bold">{name}</h5>
        <p className="text-xs text-gray-500 light:text-gray-600">{category}</p>
      </div>
    </div>
  );
}
