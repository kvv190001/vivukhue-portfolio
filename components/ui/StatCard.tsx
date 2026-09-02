type StatCardProps = {
  value: string;
  label: string;
};

export default function StatCard({ value, label }: StatCardProps) {
  return (
    <div>
      <div className="text-4xl sm:text-5xl font-bold mb-1">{value}</div>
      <div className="text-xs text-gray-500 light:text-gray-600 uppercase tracking-widest font-semibold whitespace-pre-line">
        {label}
      </div>
    </div>
  );
}
