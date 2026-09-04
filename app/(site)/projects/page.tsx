import type { Metadata } from "next";
import Projects from "@/components/sections/Projects";
import Contact from "@/components/sections/Contact";

export const metadata: Metadata = {
  title: "Projects - Khue Vu",
  description: "Projects built by Khue Vu, Software Engineer.",
};

export default function ProjectsPage() {
  return (
    <>
      <div className="mt-12">
        <Projects />
      </div>
      <Contact />
    </>
  );
}
