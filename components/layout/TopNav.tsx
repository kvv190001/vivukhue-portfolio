import { navLinks } from "@/data/profile";

export default function TopNav() {
  return (
    <nav className="hidden lg:flex justify-center">
      <div className="flex items-center gap-8 bg-[#1a1a1a] light:bg-white border border-white/5 light:border-black/10 rounded-full px-6 py-3 shadow-lg text-gray-400 light:text-gray-500">
        {navLinks.map((link) => (
          <a
            key={link.label}
            className="hover:text-orange-500 transition-colors"
            href={link.href}
            aria-label={link.label}
          >
            <i className={link.icon} />
          </a>
        ))}
      </div>
    </nav>
  );
}
