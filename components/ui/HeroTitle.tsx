type HeroTitleProps = {
  lines: [string, string];
};

export default function HeroTitle({ lines }: HeroTitleProps) {
  const [first, second] = lines;
  return (
    <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold uppercase leading-[0.95] tracking-tight mb-6">
      <span className="block text-white light:text-black">{first}</span>
      <span className="block text-neutral-700 light:text-neutral-400">{second}</span>
    </h1>
  );
}
