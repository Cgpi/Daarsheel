import { projects } from '../data/company'
import AboutSection from '../components/home/AboutSection.jsx'
import EnquirySection from '../components/home/EnquirySection.jsx'
import HeroSection from '../components/home/HeroSection.jsx'
import LocationsSection from '../components/home/LocationsSection.jsx'
import ProcessSection from '../components/home/ProcessSection.jsx'
import ProjectsSection from '../components/home/ProjectsSection.jsx'
import StatsSection from '../components/home/StatsSection.jsx'
import WhyChooseSection from '../components/home/WhyChooseSection.jsx'

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
      <WhyChooseSection />
      <ProjectsSection
        onOpenProjectDetails={onOpenProjectDetails}
        onPrefillProject={onPrefillProject}
        projects={projects}
      />
      <ProcessSection />
      <LocationsSection />
      <EnquirySection />
    </>
  )
}

export default HomePage
