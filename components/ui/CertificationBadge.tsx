type CertificationBadgeProps = {
  name: string;
};

export default function CertificationBadge({ name }: CertificationBadgeProps) {
  return (
    <div className="flex items-center gap-3 bg-[#1A1A1A] light:bg-white border border-white/5 light:border-black/10 rounded-xl px-4 py-3 shadow-lg">
      <span className="bg-orange-500 text-white rounded-full p-1.5 flex-shrink-0">
        <i className="fas fa-award text-xs" />
      </span>
      <span className="text-sm font-medium text-gray-200 light:text-gray-800">{name}</span>
    </div>
  );
}
