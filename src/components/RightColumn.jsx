import { useState } from 'react'
import { AtSign, X } from 'lucide-react'
import SectionLink from './SectionLink'

function RightColumn({ about, rightPanelLinks, projectsSection, experienceSection, educationSection, achievementsSection }) {
  const [activeProject, setActiveProject] = useState(null)

  return (
    <>
      <div className="space-y-6">
        <section
          id="about"
          className="scroll-mt-24 rounded-lg bg-white p-6 md:p-8"
        >
          <div className="flex items-center gap-2">
            <AtSign size={18} className="text-slate-500" />
            <h2 className="text-2xl font-bold text-slate-900">{about.title}</h2>
          </div>

          <hr className="my-4 border-slate-200" />

          <div className="space-y-4 leading-relaxed text-slate-700">
            {about.paragraphs.map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
          </div>
        </section>

        <section className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {rightPanelLinks.map((item) => (
            <SectionLink
              key={item.label}
              target={item.target}
              className="min-h-28 rounded-xl border border-slate-200 bg-white p-6 text-left shadow-sm transition hover:bg-slate-50"
            >
              <span className="text-lg font-semibold text-slate-500 underline decoration-slate-400 underline-offset-4 md:text-xl">
                {item.label}
              </span>
            </SectionLink>
          ))}
        </section>

        <section
          id="projects"
          className="scroll-mt-24 rounded-xl bg-white p-6"
        >
          <h2 className="text-3xl font-bold text-slate-900">{projectsSection.title}</h2>
          <p className="mt-1 text-sm font-medium text-slate-700">{projectsSection.subtitle}</p>

          <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2">
            {projectsSection.items.map((project) => (
              <article
                key={project.title}
                className="overflow-hidden rounded-xl border border-slate-200 bg-white"
              >
                <div className="h-24 bg-gradient-to-r from-blue-950 via-blue-900 to-slate-800 p-3">
                  <span className="text-sm font-semibold uppercase tracking-wide text-white">
                    {project.title}
                  </span>
                </div>
                <div className="space-y-3 p-3">
                  <p className="text-xs text-slate-700">{project.description}</p>
                  <div className="flex flex-wrap gap-1.5">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full border border-slate-200 bg-slate-50 px-2 py-0.5 text-[11px] text-slate-600"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <button
                    type="button"
                    onClick={() => setActiveProject(project)}
                    className="rounded-md border border-slate-200 px-2.5 py-1 text-xs font-medium text-slate-700 transition hover:bg-slate-50"
                  >
                    More Detail
                  </button>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section
          id="experience"
          className="scroll-mt-24 rounded-xl bg-white p-6"
        >
          <h2 className="text-3xl font-bold text-slate-900">{experienceSection.title}</h2>
          <hr className="my-4 border-slate-200" />

          <div className="space-y-12">
            {experienceSection.items.map((exp, index) => (
              <div key={index} className="space-y-4">
                <div className="flex gap-4">
                  <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl border border-slate-200 bg-slate-50 text-2xl shadow-sm overflow-hidden">
                    {exp.logo ? (
                      <img src={exp.logo} alt={exp.company} className="h-full w-full object-contain" />
                    ) : (
                      exp.icon || "💼"
                    )}
                  </span>
                  <div className="flex flex-col justify-center">
                    <p className="text-[17px] text-slate-900 leading-tight">
                      <span className="font-bold">{exp.role}</span>{' '}
                      <span className="text-slate-500 font-medium whitespace-nowrap sm:whitespace-normal">• {exp.company}</span>
                    </p>
                    <p className="text-[15px] text-slate-500 mt-1">{exp.duration}</p>
                  </div>
                </div>
                <div className="ml-[72px]">
                  <ul className="list-outside list-disc space-y-2.5 text-[15px] leading-relaxed text-slate-600 pl-2">
                    {exp.highlights.map((item) => (
                      <li key={item} className="pl-1">{item}</li>
                    ))}
                  </ul>
                  <div className="mt-5">
                    <button
                      type="button"
                      onClick={() => setActiveProject({ title: exp.role, tags: exp.tags, detail: exp.detail })}
                      className="rounded-lg border border-slate-200 px-4 py-2 text-[14px] font-semibold text-slate-700 shadow-sm transition hover:bg-slate-50 hover:text-slate-900"
                    >
                      View Full Details
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section
          id="education"
          className="scroll-mt-24 rounded-xl bg-white p-6"
        >
          <h2 className="text-3xl font-bold text-slate-900">{educationSection.title}</h2>
          <hr className="my-4 border-slate-200" />

          <div className="space-y-12">
            {educationSection.items.map((edu, index) => (
              <div key={index} className="space-y-4">
                <div className="flex gap-4">
                  <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl border border-slate-200 bg-slate-50 text-2xl shadow-sm overflow-hidden">
                    {edu.logo ? (
                      <img src={edu.logo} alt={edu.institution} className="h-full w-full object-contain" />
                    ) : (
                      edu.icon || "🎓"
                    )}
                  </span>
                  <div className="flex flex-col justify-center">
                    <p className="text-[17px] text-slate-900 leading-tight">
                      <span className="font-bold">{edu.degree}</span>{' '}
                      <span className="text-slate-500 font-medium whitespace-nowrap sm:whitespace-normal">• {edu.institution}</span>
                    </p>
                    <p className="text-[15px] text-slate-500 mt-1">{edu.duration}</p>
                  </div>
                </div>
                <div className="ml-[72px]">
                  <ul className="list-outside list-disc space-y-2.5 text-[15px] leading-relaxed text-slate-600 pl-2">
                    {edu.details.map((item) => (
                      <li key={item} className="pl-1">{item}</li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* achievementsSection && (
          <section
            id="achievements"
            className="scroll-mt-24 rounded-xl bg-white p-6"
          >
            <h2 className="text-3xl font-bold text-slate-900">{achievementsSection.title}</h2>

            <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2">
              {achievementsSection.items.map((achievement) => (
                <article
                  key={achievement.title}
                  className="overflow-hidden rounded-xl border border-slate-200 bg-white"
                >
                  <div className="h-24 bg-gradient-to-r from-emerald-950 via-emerald-900 to-slate-800 p-3">
                    <span className="text-sm font-semibold uppercase tracking-wide text-white">
                      {achievement.organization}
                    </span>
                  </div>
                  <div className="space-y-3 p-3">
                    <h3 className="font-semibold text-slate-900">{achievement.title}</h3>
                    <p className="text-xs text-slate-700">{achievement.description}</p>
                    <button
                      type="button"
                      onClick={() => setActiveProject(achievement)}
                      className="rounded-md border border-slate-200 px-2.5 py-1 text-xs font-medium text-slate-700 transition hover:bg-slate-50"
                    >
                      View Certificate
                    </button>
                  </div>
                </article>
              ))}
            </div>
          </section>
        ) */}
      </div>

      {activeProject && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/50 p-4"
          onClick={() => setActiveProject(null)}
        >
          <div
            className="max-h-[90vh] w-full max-w-3xl overflow-y-auto rounded-xl border border-slate-200 bg-white p-5 shadow-xl md:p-6"
            onClick={(event) => event.stopPropagation()}
          >
            <div className="mb-4 flex items-start justify-between gap-3">
              <h3 className="text-xl font-bold text-slate-900">{activeProject.title}</h3>
              <button
                type="button"
                onClick={() => setActiveProject(null)}
                className="rounded-md border border-slate-200 p-1.5 text-slate-500 transition hover:bg-slate-50"
                aria-label="Close details modal"
              >
                <X size={16} />
              </button>
            </div>

            <div className="space-y-4 text-sm text-slate-800">
              {activeProject.type === 'achievement' ? (
                <>
                  <div className="grid grid-cols-[140px,1fr] gap-3 border-b border-slate-200 pb-3">
                    <p className="font-medium text-slate-500">Date</p>
                    <p>{activeProject.date}</p>
                  </div>
                  <div className="grid grid-cols-[140px,1fr] gap-3 border-b border-slate-200 pb-3">
                    <p className="font-medium text-slate-500">Organization</p>
                    <p>{activeProject.organization}</p>
                  </div>
                  <div className="grid grid-cols-[140px,1fr] gap-3 border-b border-slate-200 pb-3">
                    <p className="font-medium text-slate-500">Credential ID</p>
                    <p>{activeProject.certificateDetails.credentialId}</p>
                  </div>
                  <div className="grid grid-cols-[140px,1fr] gap-3 border-b border-slate-200 pb-3">
                    <p className="font-medium text-slate-500">Skills</p>
                    <div className="flex flex-wrap gap-2">
                      {activeProject.certificateDetails.skills.map((skill) => (
                        <span
                          key={skill}
                          className="rounded bg-emerald-100 px-2 py-0.5 text-xs font-medium text-slate-700"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div className="grid grid-cols-[140px,1fr] gap-3">
                    <p className="font-medium text-slate-500">Certificate</p>
                    <a href={activeProject.certificateDetails.url} target="_blank" rel="noreferrer" className="text-blue-600 hover:underline">
                      View Certificate
                    </a>
                  </div>
                </>
              ) : (
                <>
                  <div className="grid grid-cols-[140px,1fr] gap-3 border-b border-slate-200 pb-3">
                    <p className="font-medium text-slate-500">Date</p>
                    <p>{activeProject.detail.date}</p>
                  </div>
                  <div className="grid grid-cols-[140px,1fr] gap-3 border-b border-slate-200 pb-3">
                    <p className="font-medium text-slate-500">Tags</p>
                    <div className="flex flex-wrap gap-2">
                      {activeProject.tags.map((tag) => (
                        <span
                          key={tag}
                          className="rounded bg-purple-100 px-2 py-0.5 text-xs font-medium text-slate-700"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div className="grid grid-cols-[140px,1fr] gap-3 border-b border-slate-200 pb-3">
                    <p className="font-medium text-slate-500">Utilized Tools</p>
                    <p>{activeProject.detail.utilizedTool}</p>
                  </div>
                  <div className="grid grid-cols-[140px,1fr] gap-3 border-b border-slate-200 pb-3">
                    <p className="font-medium text-slate-500">Goal/Challenge</p>
                    <ul className="list-inside list-disc space-y-1">
                      {activeProject.detail.goalChallenge.map((item) => (
                        <li key={item}>{item}</li>
                      ))}
                    </ul>
                  </div>
                  <div className="grid grid-cols-[140px,1fr] gap-3 border-b border-slate-200 pb-3">
                    <p className="font-medium text-slate-500">What I Did</p>
                    <ul className="list-inside list-disc space-y-1">
                      {activeProject.detail.whatIDid.map((item) => (
                        <li key={item}>{item}</li>
                      ))}
                    </ul>
                  </div>
                  <div className="grid grid-cols-[140px,1fr] gap-3">
                    <p className="font-medium text-slate-500">Outcome/Impact</p>
                    <ul className="list-inside list-disc space-y-1">
                      {activeProject.detail.outcomeImpact.map((item) => (
                        <li key={item}>{item}</li>
                      ))}
                    </ul>
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  )
}

export default RightColumn
