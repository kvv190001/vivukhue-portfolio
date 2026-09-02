type SectionTitleProps = {
  lines: [string, string];
};

export default function SectionTitle({ lines }: SectionTitleProps) {
  const [first, second] = lines;
  return (
    <h2 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold uppercase leading-[0.95] tracking-tight mb-8">
      <span className="block text-white light:text-black">{first}</span>
      <span className="block text-neutral-700 light:text-neutral-400">{second}</span>
    </h2>
  );
}
