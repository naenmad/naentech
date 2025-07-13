import { Navigation } from "@/components/navigation";
import { HeroSection } from "@/components/hero-section";
import { AboutSection } from "@/components/about-section";
import { EducationSection } from "@/components/education-section";
import { ProjectsSection } from "@/components/projects-section";
import { ContactSection } from "@/components/contact-section";
import { Footer } from "@/components/footer";
import { CodeBlockDemo } from "@/components/codeBlock";
import { ScrollProgress } from "@/components/scroll-progress";
import { CursorFollower } from "@/components/cursor-follower";
import { BackToTop } from "@/components/back-to-top";
import { FloatingActionButtons } from "@/components/floating-action-buttons";
import { ToastProvider } from "@/components/toast-provider";
import { EnhancedLoading } from "@/components/enhanced-loading";
import { InteractiveStats } from "@/components/interactive-stats";
import { AnimatedSkills } from "@/components/animated-skills";

export default function Home() {
  return (
    <ToastProvider>
      <EnhancedLoading />
      <main className="min-h-screen relative">
        <ScrollProgress />
        <CursorFollower />
        <Navigation />
        <HeroSection />

        {/* Stats Section */}
        <section className="py-20 bg-white dark:bg-gray-900">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
                My <span className="bg-gradient-to-r from-purple-600 to-pink-600 dark:from-purple-400 dark:to-pink-400 bg-clip-text text-transparent">Journey</span>
              </h2>
              <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                Numbers that reflect my academic and professional progress
              </p>
            </div>
            <InteractiveStats />
          </div>
        </section>

        <AboutSection />

        {/* Skills Section */}
        <section className="py-20 bg-slate-50 dark:bg-slate-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
                Technical <span className="bg-gradient-to-r from-purple-600 to-pink-600 dark:from-purple-400 dark:to-pink-400 bg-clip-text text-transparent">Skills</span>
              </h2>
              <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                My expertise across different technologies and platforms
              </p>
            </div>
            <AnimatedSkills />
          </div>
        </section>

        <EducationSection />
        <ProjectsSection />

        {/* Code Block Demo Section */}
        <section className="py-20 bg-slate-50 dark:bg-slate-900">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
                Business <span className="bg-gradient-to-r from-purple-600 to-pink-600 dark:from-purple-400 dark:to-pink-400 bg-clip-text text-transparent">Card</span>
              </h2>
              <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                Here&apos;s my professional information in JSON format
              </p>
            </div>
            <CodeBlockDemo />
          </div>
        </section>

        <ContactSection />
        <Footer />

        {/* Floating UI Elements */}
        <BackToTop />
        <FloatingActionButtons />
      </main>
    </ToastProvider>
  );
};  
