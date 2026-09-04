import Hero from "@/components/sections/Hero";
import Projects from "@/components/sections/Projects";
import Experience from "@/components/sections/Experience";
import Education from "@/components/sections/Education";
import Tools from "@/components/sections/Tools";
import Contact from "@/components/sections/Contact";

export default function Home() {
  return (
    <>
      <Hero />
      <Projects limit={3} />
      <Experience limit={3} />
      <Education />
      <Tools />
      <Contact />
    </>
  );
}
