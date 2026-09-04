"use client";

import Image from "next/image";
import { usePathname } from "next/navigation";
import { profile } from "@/data/profile";
import Reveal from "@/components/ui/Reveal";

export default function Sidebar() {
  const pathname = usePathname();
  const isHome = pathname === "/";

  return (
    <aside
      className={`w-full lg:w-80 flex-shrink-0 lg:sticky lg:top-34 h-fit z-10 ${
        isHome ? "order-1" : "order-2 lg:order-1"
      }`}
    >
      <Reveal className="bg-white text-black rounded-3xl p-8 shadow-2xl relative overflow-hidden text-center">
        {/* Profile Image */}
        <div className="relative w-48 h-56 mx-auto mb-6 rounded-2xl overflow-hidden bg-orange-600">
          <Image
            alt={profile.name}
            src={profile.avatarUrl}
            fill
            sizes="192px"
            className="object-cover"
          />
        </div>

        <h1 className="text-2xl font-bold mb-2">{profile.name}</h1>

        <div className="flex justify-center mb-4">
          <div className="bg-orange-500 text-white rounded-full p-1.5 shadow-lg shadow-orange-500/30">
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
              />
            </svg>
          </div>
        </div>

        <p className="text-gray-500 text-sm mb-8 leading-relaxed">
          A <strong className="text-black font-semibold">{profile.role}</strong>{" "}
          {profile.bio}
        </p>

        {/* Social Links */}
        <div className="flex justify-center gap-4 text-orange-500">
          {profile.socials.map((social) => (
            <a
              key={social.label}
              className="hover:text-orange-600 transition-colors"
              href={social.href}
              aria-label={social.label}
            >
              <i className={`${social.icon} text-xl`} />
            </a>
          ))}
        </div>
      </Reveal>
    </aside>
  );
}
