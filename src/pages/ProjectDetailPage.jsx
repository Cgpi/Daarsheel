import { Link, Navigate, useParams } from 'react-router-dom'
import Reveal from '../components/Reveal.jsx'
import { projects } from '../data/company.js'

function ProjectDetailPage({ onOpenEnquiryModal }) {
  const { projectId } = useParams()
  const project = projects.find((item) => item.id === projectId)

  if (!project) return <Navigate replace to="/projects" />

  return (
    <article className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
      <Reveal as="div" className="mb-8" direction="up">
        <Link className="inline-flex items-center gap-2 text-sm font-bold uppercase tracking-wider text-brandRed transition-colors hover:text-white" to="/projects">
          <i className="fa-solid fa-arrow-left" /> All projects
        </Link>
      </Reveal>
      <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
        <Reveal as="div" className="relative min-h-72 overflow-hidden rounded-2xl border border-brandRed/20 sm:min-h-[30rem]" direction="left">
          <img alt={project.name} className="absolute inset-0 h-full w-full object-cover" src={project.image} />
          <span className="absolute left-5 top-5 rounded-full bg-darkBg/90 px-4 py-2 text-xs font-bold uppercase tracking-wider text-brandRed">{project.status}</span>
        </Reveal>
        <Reveal as="div" direction="up">
          <p className="text-xs font-bold uppercase tracking-[0.3em] text-brandRed">{project.category} project</p>
          <h1 className="mt-3 text-4xl font-extrabold sm:text-5xl">{project.name}</h1>
          <p className="mt-4 flex items-center gap-2 text-gray-300"><i className="fa-solid fa-location-dot text-brandRed" />{project.location}</p>
          <p className="mt-8 text-lg leading-relaxed text-gray-300">{project.description}</p>
          <dl className="mt-8 grid grid-cols-2 gap-4 border-y border-white/10 py-6">
            <div><dt className="text-xs font-bold uppercase tracking-wider text-gray-500">Residence type</dt><dd className="mt-2 font-semibold text-white">{project.type}</dd></div>
            <div><dt className="text-xs font-bold uppercase tracking-wider text-gray-500">Price</dt><dd className="mt-2 font-semibold text-white">{project.price}</dd></div>
          </dl>
          <button className="mt-8 rounded-xl bg-brandRed px-6 py-4 text-sm font-bold uppercase tracking-wider text-white transition-colors hover:bg-brandRed-hover" onClick={() => onOpenEnquiryModal(project.name)} type="button">
            Enquire about this project <i className="fa-solid fa-arrow-right-long ml-2" />
          </button>
        </Reveal>
      </div>
    </article>
  )
}

export default ProjectDetailPage