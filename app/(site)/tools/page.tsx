import type { Metadata } from "next";
import Tools from "@/components/sections/Tools";
import Contact from "@/components/sections/Contact";

export const metadata: Metadata = {
  title: "Tools - Khue Vu",
  description: "Tech stack and tools used by Khue Vu, Software Engineer.",
};

export default function ToolsPage() {
  return (
    <>
      <div className="mt-2 lg:mt-12">
        <Tools />
      </div>
      <Contact />
    </>
  );
}
