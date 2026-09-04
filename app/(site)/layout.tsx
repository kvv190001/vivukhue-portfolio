import Sidebar from "@/components/layout/Sidebar";
import TopNav from "@/components/layout/TopNav";
import Footer from "@/components/layout/Footer";
import ThemeToggle from "@/components/ui/ThemeToggle";
import ScrollToTop from "@/components/layout/ScrollToTop";

export default function SiteLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <ScrollToTop />
      <div className="sticky top-0 z-50 bg-background/95 backdrop-blur-sm">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 pb-4 relative">
          <TopNav />
          <div className="absolute top-8 right-4 sm:right-6 lg:right-8">
            <ThemeToggle />
          </div>
        </div>
      </div>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pb-12 mt-4 lg:mt-0 flex flex-col lg:flex-row gap-12 lg:gap-24 relative">
        <Sidebar />
        <main className="w-full flex-1 space-y-32 pb-24">
          {children}
          <Footer />
        </main>
      </div>
    </>
  );
}
