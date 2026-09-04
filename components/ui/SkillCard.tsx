type SkillCardProps = {
  title: string;
  bg: string;
  textColor: string;
  variant: "orange" | "lime";
};

export default function SkillCard({ title, bg, textColor, variant }: SkillCardProps) {
  const isOrange = variant === "orange";
  return (
    <div
      className={`${bg} rounded-2xl p-6 sm:p-8 flex flex-col justify-between aspect-[5/3] sm:aspect-[4/3] group cursor-pointer relative overflow-hidden transition-transform hover:-translate-y-1`}
    >
      {isOrange ? (
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white to-transparent" />
      ) : (
        <svg
          className="absolute inset-0 w-full h-full text-black/10"
          fill="none"
          preserveAspectRatio="none"
          viewBox="0 0 100 100"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0 100L100 0M50 100L100 50M0 50L50 0"
            stroke="currentColor"
            strokeWidth="1"
          />
        </svg>
      )}
      <div
        className={`${textColor} ${
          isOrange ? "bg-white/20" : "bg-black/10"
        } w-fit p-3 rounded-xl backdrop-blur-sm relative z-10`}
      >
        {isOrange ? (
          <svg
            className="w-6 h-6"
            fill="currentColor"
            viewBox="0 0 640 640"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M296.5 69.2C311.4 62.3 328.6 62.3 343.5 69.2L562.1 170.2C570.6 174.1 576 182.6 576 192C576 201.4 570.6 209.9 562.1 213.8L343.5 314.8C328.6 321.7 311.4 321.7 296.5 314.8L77.9 213.8C69.4 209.8 64 201.3 64 192C64 182.7 69.4 174.1 77.9 170.2L296.5 69.2zM112.1 282.4L276.4 358.3C304.1 371.1 336 371.1 363.7 358.3L528 282.4L562.1 298.2C570.6 302.1 576 310.6 576 320C576 329.4 570.6 337.9 562.1 341.8L343.5 442.8C328.6 449.7 311.4 449.7 296.5 442.8L77.9 341.8C69.4 337.8 64 329.3 64 320C64 310.7 69.4 302.1 77.9 298.2L112 282.4zM77.9 426.2L112 410.4L276.3 486.3C304 499.1 335.9 499.1 363.6 486.3L527.9 410.4L562 426.2C570.5 430.1 575.9 438.6 575.9 448C575.9 457.4 570.5 465.9 562 469.8L343.4 570.8C328.5 577.7 311.3 577.7 296.4 570.8L77.9 469.8C69.4 465.8 64 457.3 64 448C64 438.7 69.4 430.1 77.9 426.2z" />
          </svg>
        ) : (
          <svg
            className="w-6 h-6"
            fill="currentColor"
            viewBox="0 0 640 640"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M64 160C64 124.7 92.7 96 128 96L512 96C547.3 96 576 124.7 576 160L576 400L512 400L512 160L128 160L128 400L64 400L64 160zM0 467.2C0 456.6 8.6 448 19.2 448L620.8 448C631.4 448 640 456.6 640 467.2C640 509.6 605.6 544 563.2 544L76.8 544C34.4 544 0 509.6 0 467.2zM281 273L250 304L281 335C290.4 344.4 290.4 359.6 281 368.9C271.6 378.2 256.4 378.3 247.1 368.9L199.1 320.9C189.7 311.5 189.7 296.3 199.1 287L247.1 239C256.5 229.6 271.7 229.6 281 239C290.3 248.4 290.4 263.6 281 272.9zM393 239L441 287C450.4 296.4 450.4 311.6 441 320.9L393 368.9C383.6 378.3 368.4 378.3 359.1 368.9C349.8 359.5 349.7 344.3 359.1 335L390.1 304L359.1 273C349.7 263.6 349.7 248.4 359.1 239.1C368.5 229.8 383.7 229.7 393 239.1z" />
          </svg>
        )}
      </div>
      <div className="relative z-10">
        <h3
          className={`${textColor} font-normal text-lg uppercase leading-tight mb-4 whitespace-pre-line`}
        >
          {title}
        </h3>
        <div className="flex justify-end">
          <span
            className={`w-8 h-8 rounded-full border ${
              isOrange ? "border-white/50" : "border-black/50"
            } flex items-center justify-center ${textColor} transition-colors ${
              isOrange
                ? "group-hover:bg-white group-hover:text-[#F26A3A]"
                : "group-hover:bg-black group-hover:text-[#B9FF36]"
            }`}
          >
            <i className="fas fa-arrow-right text-sm" />
          </span>
        </div>
      </div>
    </div>
  );
}
