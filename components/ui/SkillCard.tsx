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
      className={`${bg} rounded-2xl p-6 sm:p-8 flex flex-col justify-between aspect-square group cursor-pointer relative overflow-hidden transition-transform hover:-translate-y-1`}
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
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
            />
          </svg>
        ) : (
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
            />
          </svg>
        )}
      </div>
      <div className="relative z-10">
        <h3
          className={`${textColor} font-bold text-xl uppercase leading-tight mb-4 whitespace-pre-line`}
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
