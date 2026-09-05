type JobItemProps = {
  company: string;
  description: string;
  period: string;
  current: boolean;
};

export default function JobItem({ company, description, period, current }: JobItemProps) {
  return (
    <div className="relative pl-6 pb-8 border-b border-gray-800/50 light:border-gray-300 last:border-0">
      <div
        className={`absolute left-[-5px] top-1.5 w-2 h-2 rounded-full ${
          current ? "bg-blue-500" : "bg-gray-600 light:bg-gray-400"
        } ring-4 ring-[#111] light:ring-[#f5f5f5]`}
      />
      <div>
        <h4 className="text-xl font-bold mb-2">{company}</h4>
        <p className="text-gray-400 light:text-gray-600 text-sm leading-relaxed mb-4 max-w-lg">
          {description}
        </p>
        <span className="text-gray-600 light:text-gray-500 text-xs font-semibold">
          {period}
        </span>
      </div>
    </div>
  );
}
