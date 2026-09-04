import type { Metadata } from "next";
import Contact from "@/components/sections/Contact";

export const metadata: Metadata = {
  title: "Contact - Khue Vu",
  description: "Get in touch with Khue Vu, Software Engineer.",
};

export default function ContactPage() {
  return (
    <div className="mt-2 lg:mt-12">
      <Contact />
    </div>
  );
}
