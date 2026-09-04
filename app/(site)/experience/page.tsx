import type { Metadata } from "next";
import Experience from "@/components/sections/Experience";
import Contact from "@/components/sections/Contact";

export const metadata: Metadata = {
  title: "Experience - Khue Vu",
  description: "Work experience of Khue Vu, Software Engineer.",
};

export default function ExperiencePage() {
  return (
    <>
      <div className="mt-12">
        <Experience />
      </div>
      <Contact />
    </>
  );
}
