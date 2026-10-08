import { useMemo, useState } from 'react'
import { Link } from 'react-router-dom'
import Reveal from '../components/Reveal.jsx'
import { projects } from '../data/company'

const filterOptions = ['all', 'ongoing', 'upcoming', 'completed']

function ProjectsPage({ onOpenProjectDetails, onPrefillProject }) {
  const [activeFilter, setActiveFilter] = useState('all')

  const filteredProjects = useMemo(
    () => (activeFilter === 'all' ? projects : projects.filter((project) => project.category === activeFilter)),
    [activeFilter],
  )

  return (
    <div className="mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8">
      <div className="mb-12 flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
        <Reveal as="div" className="max-w-3xl" delay={100} direction="hero">
          <p className="text-xs font-bold uppercase tracking-[0.3em] text-brandRed">Our portfolio</p>
          <h1 className="mt-3 text-4xl font-extrabold sm:text-6xl">Luxurious living.<br />Precision in every detail.</h1>
          <p className="mt-5 text-lg text-gray-300">Explore residences and landmark developments designed to elevate everyday life and create lasting value.</p>
        </Reveal>
        <Reveal as={Link} className="inline-flex items-center gap-3 self-start rounded-full border border-brandRed/30 bg-darkCard px-6 py-3 text-sm font-bold uppercase tracking-wider text-brandRed transition-all duration-300 hover:-translate-y-0.5 hover:bg-brandRed hover:text-white" delay={180} direction="up" to="/contact">Book a site visit <i className="fa-solid fa-arrow-right-long" /></Reveal>
      </div>

      <div className="mb-10 flex flex-wrap gap-3">
        {filterOptions.map((filter, index) => (
          <Reveal as="button" className={`rounded-full border px-5 py-2.5 text-xs font-bold uppercase tracking-wider transition-all duration-300 ${activeFilter === filter ? 'border-brandRed bg-brandRed text-white' : 'border-white/10 bg-darkCard text-gray-300 hover:-translate-y-0.5 hover:border-brandRed/50 hover:text-white'}`} delay={index * 70 + 160} direction="up" key={filter} onClick={() => setActiveFilter(filter)} type="button">
            {filter === 'all' ? 'All Projects' : filter}
          </Reveal>
        ))}
      </div>

      <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
        {filteredProjects.map((project, index) => (
          <Reveal as="article" className="group overflow-hidden rounded-3xl border border-brandRed/20 bg-darkCard transition-all duration-300 hover:-translate-y-1 hover:border-brandRed/50" delay={index * 90 + 180} direction={index % 2 === 0 ? 'up' : 'left'} key={project.id}>
            <div className="relative h-72 overflow-hidden"><img alt={project.name} className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110" src={project.image} /><div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-transparent" /><span className="absolute left-4 top-4 rounded-full bg-darkBg/80 px-3 py-1 text-[10px] font-bold uppercase text-brandRed">{project.status}</span></div>
            <div className="p-6">
              <div className="mb-4 flex items-center justify-between gap-4"><h2 className="text-xl font-bold text-white">{project.name}</h2><span className="text-xs font-bold uppercase text-brandRed">{project.category}</span></div>
              <p className="mb-5 flex items-center gap-2 text-sm text-gray-400"><i className="fa-solid fa-location-dot text-brandRed" /> {project.location}</p>
              <p className="mb-5 text-sm leading-relaxed text-gray-300">{project.description}</p>
              <div className="grid grid-cols-2 gap-3 border-y border-white/10 py-4 text-xs">
                <div><span className="block text-[10px] uppercase text-gray-500">Type</span><span className="font-bold text-white">{project.type}</span></div>
                <div><span className="block text-[10px] uppercase text-gray-500">Starting</span><span className="font-bold text-brandRed">{project.price}</span></div>
              </div>
              <div className="mt-5 flex gap-3">
                <button className="flex-1 rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-xs font-bold uppercase text-white transition-all duration-300 hover:-translate-y-0.5 hover:border-brandRed hover:bg-brandRed" onClick={() => onOpenProjectDetails(project.name, project.location, project.price, project.type, project.image)} type="button">View Details</button>
                <button className="rounded-xl border border-brandRed/30 bg-brandRed/10 px-4 py-3 text-brandRed transition-all duration-300 hover:-translate-y-0.5 hover:bg-brandRed hover:text-white" onClick={() => onPrefillProject(project.name)} title="Enquire" type="button"><i className="fa-solid fa-paper-plane" /></button>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </div>
  )
}

export default ProjectsPage
