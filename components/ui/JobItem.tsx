type JobItemProps = {
  company: string;
  description: string;
  period: string;
  current: boolean;
  href: string;
};

export default function JobItem({ company, description, period, current, href }: JobItemProps) {
  return (
    <div className="relative pl-6 pb-8 border-b border-gray-800/50 light:border-gray-300 last:border-0 group">
      <div
        className={`absolute left-[-5px] top-1.5 w-2 h-2 rounded-full ${
          current ? "bg-orange-500" : "bg-gray-600 light:bg-gray-400"
        } ring-4 ring-[#111] light:ring-[#f5f5f5]`}
      />
      <a className="flex justify-between items-start gap-4" href={href}>
        <div>
          <h4 className="text-xl font-bold mb-2 group-hover:text-orange-500 transition-colors">
            {company}
          </h4>
          <p className="text-gray-400 light:text-gray-600 text-sm leading-relaxed mb-4 max-w-lg">
            {description}
          </p>
          <span className="text-gray-600 light:text-gray-500 text-xs font-semibold">
            {period}
          </span>
        </div>
        <i className="fas fa-arrow-up-right text-orange-500 opacity-0 group-hover:opacity-100 transition-opacity mt-1" />
      </a>
    </div>
  );
}
