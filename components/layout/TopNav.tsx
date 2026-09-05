"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { navLinks } from "@/data/profile";

export default function TopNav() {
  const pathname = usePathname();

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (pathname === href) {
      e.preventDefault();
      window.scrollTo(0, 0);
    }
  };

  return (
    <nav className="flex justify-center">
      <div className="flex items-center gap-4 sm:gap-6 lg:gap-8 bg-[#1a1a1a] light:bg-white border border-white/5 light:border-black/10 rounded-full px-4 sm:px-5 lg:px-6 py-2.5 lg:py-3 shadow-lg text-gray-400 light:text-gray-500 max-w-full overflow-x-auto">
        {navLinks.map((link) => {
          const isActive = pathname === link.href;

          return (
            <Link
              key={link.label}
              className={`transition-colors ${
                isActive
                  ? "text-blue-500"
                  : "hover:text-blue-500"
              }`}
              href={link.href}
              onClick={(e) => handleClick(e, link.href)}
              aria-label={link.label}
              aria-current={isActive ? "page" : undefined}
              title={link.label}
            >
              <i className={link.icon} />
            </Link>
          );
        })}
      </div>
    </nav>
  );
}
