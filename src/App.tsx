import React, { useState } from 'react';
import type { Project } from './types/portfolio';
import { useScrollTimeline } from './hooks/useScrollTimeline';
import { ScrollVideoBackground } from './components/video/ScrollVideoBackground';
import { ScrollProgressIndicator } from './components/video/ScrollProgressIndicator';
import { Navbar } from './components/Navbar';
import { Scene01Rooftop } from './components/scenes/Scene01Rooftop';
import { Scene02DeveloperStory } from './components/scenes/Scene02DeveloperStory';
import { Scene03ProjectWeb } from './components/scenes/Scene03ProjectWeb';
import { Scene04Arsenal } from './components/scenes/Scene04Arsenal';
import { Scene05FinalRooftop } from './components/scenes/Scene05FinalRooftop';
import { CaseStudyModal } from './components/CaseStudyModal';
import { ResumeModal } from './components/ResumeModal';
import { Footer } from './components/Footer';

export const App: React.FC = () => {
  const {
    progress,
    activeScene,
    activeProjectIndex,
    reducedMotion,
    scrollToScene,
  } = useScrollTimeline();

  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [isResumeOpen, setIsResumeOpen] = useState<boolean>(false);

  return (
    <div className="relative min-h-screen bg-[#030712] text-slate-100 selection:bg-red-500/30 selection:text-cyan-200">
      {/* Scroll-Driven Spider-Verse Cinematic Video Background */}
      <ScrollVideoBackground
        scrollProgress={progress}
        videoSrc="/assets/spiderverse-scroll.mp4"
        reducedMotion={reducedMotion}
      />

      {/* Floating Web-Slinger Header */}
      <Navbar
        activeScene={activeScene}
        scrollProgress={progress}
        onNavigate={scrollToScene}
        onOpenResume={() => setIsResumeOpen(true)}
      />

      {/* Live Spider-Verse Scroll Progress Indicator */}
      <ScrollProgressIndicator
        progress={progress}
        activeScene={activeScene}
      />


      {/* Main Continuous Cinematic Scroll Timeline */}
      <main className="relative z-10 flex flex-col">
        {/* Scene 01: Rooftop Overlook & Introduction (0 - 15%) */}
        <div id="rooftop" className="min-h-screen">
          <Scene01Rooftop
            onOpenResume={() => setIsResumeOpen(true)}
            onExplore={() => scrollToScene('story')}
          />
        </div>

        {/* Scene 02: Swing into Developer Story (15 - 35%) */}
        <div id="story" className="min-h-screen">
          <Scene02DeveloperStory />
        </div>

        {/* Scene 03: The Project Web - 6 High-Rise Locations (35 - 65%) */}
        <div id="projects" className="min-h-[140vh] flex flex-col justify-center">
          <Scene03ProjectWeb
            activeProjectIndex={activeProjectIndex}
            onSelectProject={(project) => setSelectedProject(project)}
          />
        </div>

        {/* Scene 04: The Developer's Arsenal - Rooftop Vantage (65 - 82%) */}
        <div id="arsenal" className="min-h-screen flex flex-col justify-center">
          <Scene04Arsenal />
        </div>

        {/* Scene 05: The Final Rooftop & Contact (82 - 100%) */}
        <div id="contact" className="min-h-screen flex flex-col justify-center">
          <Scene05FinalRooftop
            onOpenResume={() => setIsResumeOpen(true)}
            onReturnToTop={() => scrollToScene('rooftop')}
          />
        </div>
      </main>

      {/* Clean Comic Footer */}
      <Footer onOpenResume={() => setIsResumeOpen(true)} />

      {/* Detailed Technical Case Study Modal */}
      <CaseStudyModal
        key={selectedProject?.id ?? 'none'}
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />

      {/* Official Verified Resume PDF Viewer Modal */}
      <ResumeModal
        isOpen={isResumeOpen}
        onClose={() => setIsResumeOpen(false)}
      />
    </div>
  );
};

export default App;
