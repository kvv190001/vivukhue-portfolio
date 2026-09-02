import FigmaIcon from "./FigmaIcon";
import type { Tool } from "@/data/tools";

const iconMap: Record<Tool["icon"], React.ReactNode> = {
  framer: <i className="fab fa-framer text-2xl" />,
  figma: <FigmaIcon />,
  lemon: <i className="fas fa-lemon text-xl" />,
  chatgpt: <i className="fas fa-robot text-xl" />,
  notion: (
    <span className="font-serif font-bold text-xl border-2 border-black rounded px-1">
      N
    </span>
  ),
  nextjs: <i className="fab fa-react text-2xl" />,
};

const iconColorMap: Record<Tool["icon"], string> = {
  framer: "text-black",
  figma: "",
  lemon: "text-[#FFC83D]",
  chatgpt: "text-[#10A37F]",
  notion: "text-black",
  nextjs: "text-black",
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
