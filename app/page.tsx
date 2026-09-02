import Sidebar from "@/components/layout/Sidebar";
import TopNav from "@/components/layout/TopNav";
import Footer from "@/components/layout/Footer";
import ThemeToggle from "@/components/ui/ThemeToggle";
import Hero from "@/components/sections/Hero";
import Projects from "@/components/sections/Projects";
import Experience from "@/components/sections/Experience";
import Tools from "@/components/sections/Tools";
import Blog from "@/components/sections/Blog";
import Contact from "@/components/sections/Contact";

export default function Home() {
  return (
    <>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 relative">
        <TopNav />
        <div className="absolute top-8 right-4 sm:right-6 lg:right-8">
          <ThemeToggle />
        </div>
      </div>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pb-12 flex flex-col lg:flex-row gap-12 lg:gap-24 relative">
        <Sidebar />
        <main className="w-full flex-1 space-y-32 pb-24">
          <Hero />
          <Projects />
          <Experience />
          <Tools />
          <Blog />
          <Contact />
          <Footer />
        </main>
      </div>
    </>
  );
}
