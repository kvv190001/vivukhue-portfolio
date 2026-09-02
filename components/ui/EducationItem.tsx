type EducationItemProps = {
  school: string;
  degree: string;
  period: string;
  detail: string;
};

export default function EducationItem({ school, degree, period, detail }: EducationItemProps) {
  return (
    <div className="relative pl-6 pb-8 border-b border-gray-800/50 light:border-gray-300 last:border-0 group">
      <div className="absolute left-[-5px] top-1.5 w-2 h-2 rounded-full bg-orange-500 ring-4 ring-[#111] light:ring-[#f5f5f5]" />
      <h4 className="text-xl font-bold mb-2 group-hover:text-orange-500 transition-colors">
        {school}
      </h4>
      <p className="text-gray-400 light:text-gray-600 text-sm leading-relaxed mb-2 max-w-lg">
        {degree}
      </p>
      <div className="flex items-center gap-3 text-gray-600 light:text-gray-500 text-xs font-semibold">
        <span>{period}</span>
        <span>&bull;</span>
        <span>{detail}</span>
      </div>
    </div>
  );
}
