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
      <i className="fas fa-arrow-up-right text-orange-500 opacity-0 group-hover:opacity-100 transform -translate-y-2 translate-x-2 group-hover:translate-y-0 group-hover:translate-x-0 transition-all" />
    </a>
  );
}
