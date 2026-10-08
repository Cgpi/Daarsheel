import { Link } from 'react-router-dom'

function ProjectsSection({ projects, onOpenProjectDetails, onPrefillProject }) {
  return (
    <section className="border-t border-brandRed/20 bg-darkCard py-24" id="projects">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-12 flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div>
            <div className="mb-2 inline-flex items-center gap-2"><span className="h-0.5 w-8 bg-brandRed" /><span className="text-xs font-bold uppercase tracking-widest text-brandRed">Featured Portfolio</span></div>
            <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-5xl">Exquisite <span className="text-gradient-red">Residences & Towers</span></h2>
          </div>
          <Link className="text-sm font-bold uppercase tracking-wider text-brandRed hover:text-white" to="/projects">View All Projects</Link>
        </div>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <article className={`project-card ${project.category} group overflow-hidden rounded-3xl border border-brandRed/20 bg-darkBg/60 transition-all duration-300 hover:-translate-y-1`} key={project.id}>
              <div className="relative h-64 overflow-hidden"><img alt={project.name} className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110" src={project.image} /><div className="absolute inset-0 bg-gradient-to-t from-darkCard via-transparent to-transparent" /><span className="absolute left-4 top-4 rounded-full bg-brandRed px-3 py-1 text-[10px] font-bold uppercase text-white shadow-md">{project.status}</span><span className="absolute right-4 top-4 rounded-lg border border-goldAccent/30 bg-black/70 px-3 py-1 text-xs font-bold text-goldAccent backdrop-blur-md">{project.location}</span></div>
              <div className="p-6"><h3 className="mb-2 text-xl font-bold text-white transition-colors group-hover:text-brandRed">{project.name}</h3><p className="mb-4 text-xs text-gray-400 line-clamp-2">{project.description}</p><div className="mb-5 grid grid-cols-2 gap-2 border-y border-white/10 py-3 text-xs"><div><span className="block text-[10px] uppercase text-gray-500">Type</span><span className="font-bold text-white">{project.type}</span></div><div><span className="block text-[10px] uppercase text-gray-500">Starting Price</span><span className="font-bold text-brandRed">{project.price}</span></div></div><div className="flex items-center gap-3"><button className="flex-1 rounded-xl border border-white/10 bg-white/5 py-2.5 text-center text-xs font-bold uppercase text-white transition-all hover:border-brandRed hover:bg-brandRed" onClick={() => onOpenProjectDetails(project.name, project.location, project.price, project.type, project.image)} type="button">Details & Layout</button><button className="rounded-xl border border-brandRed/30 bg-brandRed/20 p-2.5 text-brandRed transition-all hover:bg-brandRed hover:text-white" onClick={() => onPrefillProject(project.name)} title="Enquire" type="button"><i className="fa-solid fa-paper-plane text-xs" /></button></div></div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default ProjectsSection
