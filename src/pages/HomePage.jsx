import { projects } from '../data/company'
import AboutSection from '../components/home/AboutSection.jsx'
import HeroSection from '../components/home/HeroSection.jsx'
import ProjectsSection from '../components/home/ProjectsSection.jsx'
import StatsSection from '../components/home/StatsSection.jsx'

function HomePage({ onOpenProjectDetails, onOpenVideoModal, onPrefillProject, onSetSlide }) {
  return (
    <>
      <HeroSection
        onOpenVideoModal={onOpenVideoModal}
        onPrefillProject={onPrefillProject}
        onSetSlide={onSetSlide}
      />
      <StatsSection />
      <AboutSection />
      <ProjectsSection
        onOpenProjectDetails={onOpenProjectDetails}
        onPrefillProject={onPrefillProject}
        projects={projects}
      />
    </>
  )
}

export default HomePage
