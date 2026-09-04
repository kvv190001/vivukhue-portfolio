import Image from "next/image";

type ProjectRowProps = {
  name: string;
  description: string;
  imageUrl: string;
  href: string;
};

export default function ProjectRow({ name, description, imageUrl, href }: ProjectRowProps) {
  return (
    <a
      className="group flex items-center gap-6 p-4 -mx-4 rounded-2xl hover:bg-white/5 light:hover:bg-black/5 transition-colors"
      href={href}
      target="_blank"
      rel="noopener noreferrer"
    >
      <div className="w-24 h-24 rounded-xl overflow-hidden flex-shrink-0 bg-gray-800 relative">
        <Image
          alt={`${name} Project`}
          src={imageUrl}
          fill
          sizes="96px"
          className="object-cover opacity-80 group-hover:opacity-100 transition-opacity"
        />
      </div>
      <div className="flex-1">
        <h4 className="text-xl font-bold mb-1 group-hover:text-orange-500 transition-colors">
          {name}
        </h4>
        <p className="text-gray-500 light:text-gray-600 text-sm">{description}</p>
      </div>
      <svg
        className="w-5 h-5 flex-shrink-0 self-start -ml-8 text-orange-500 transition-transform duration-300 group-hover:-translate-y-2 group-hover:translate-x-2"
        fill="none"
        stroke="currentColor"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
        viewBox="0 0 24 24"
        aria-hidden="true"
      >
        <path d="M7 17L17 7M17 7H9M17 7V15" />
      </svg>
    </a>
  );
}
