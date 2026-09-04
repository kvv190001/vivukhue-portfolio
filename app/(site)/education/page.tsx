import type { Metadata } from "next";
import Education from "@/components/sections/Education";
import Contact from "@/components/sections/Contact";

export const metadata: Metadata = {
  title: "Education - Khue Vu",
  description: "Education and certifications of Khue Vu, Software Engineer.",
};

export default function EducationPage() {
  return (
    <>
      <div className="mt-2 lg:mt-12">
        <Education />
      </div>
      <Contact />
    </>
  );
}
