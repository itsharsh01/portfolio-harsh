import { useState } from 'react'
import {
  AtSign,
  Award,
  Briefcase,
  ChevronRight,
  Code2,
  FolderKanban,
  GraduationCap,
  LayoutGrid,
  Mail,
  Play,
  X,
  Globe,
} from 'lucide-react'
import SectionLink from './SectionLink'
import { resolveAssetUrl } from '../assets/bundledAssets'

const quickNavIconByTarget = {
  skills: Code2,
  projects: FolderKanban,
  experience: Briefcase,
  awards: Award,
  education: GraduationCap,
  contact: Mail,
}

function GithubIcon({ className, size = 16 }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      width={size}
      height={size}
      className={className}
      aria-hidden
    >
      <path
        fill="currentColor"
        d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"
      />
    </svg>
  )
}

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

        <section aria-label="Jump to section" className="grid grid-cols-2 gap-2 sm:grid-cols-3">
          {rightPanelLinks.map((item) => {
            const Icon = quickNavIconByTarget[item.target] ?? LayoutGrid
            return (
              <SectionLink
                key={item.label}
                target={item.target}
                className="group flex min-h-0 items-center gap-2.5 rounded-lg border border-slate-200/90 bg-white px-2.5 py-2 text-left shadow-sm transition hover:border-slate-300 hover:bg-slate-50/90 hover:shadow-md focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
              >
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-md bg-slate-100 text-slate-600 transition group-hover:bg-indigo-50 group-hover:text-indigo-700">
                  <Icon size={16} strokeWidth={2} aria-hidden />
                </span>
                <span className="min-w-0 flex-1 text-[13px] font-semibold leading-tight text-slate-800 sm:text-sm">
                  {item.label}
                </span>
                <ChevronRight
                  size={14}
                  className="shrink-0 text-slate-300 transition group-hover:translate-x-0.5 group-hover:text-indigo-500"
                  aria-hidden
                />
              </SectionLink>
            )
          })}
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
                <div
                  className={`relative flex h-32 items-end p-3 ${
                    project.coverImage
                      ? ''
                      : 'bg-gradient-to-r from-blue-950 via-blue-900 to-slate-800'
                  }`}
                >
                  {project.coverImage && (
                    <>
                      <img
                        src={resolveAssetUrl(project.coverImage)}
                        alt={project.coverImageAlt || ''}
                        className="absolute inset-0 h-full w-full object-cover object-left-top"
                      />
                      <div
                        className="absolute inset-0 bg-gradient-to-t from-slate-950/95 via-slate-900/35 to-transparent"
                        aria-hidden
                      />
                    </>
                  )}
                  <span className="relative z-10 text-sm font-semibold uppercase tracking-wide text-white drop-shadow-sm">
                    {project.title}
                  </span>
                </div>
                <div className="space-y-3 p-3">
                  {(project.repoUrl || project.demoUrl || project.liveUrl) && (
                    <div className="flex flex-wrap items-center gap-3">
                      {project.repoUrl && (
                        <a
                          href={project.repoUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label={`View ${project.title} repository on GitHub`}
                          className="inline-flex items-center gap-1.5 text-xs font-semibold text-slate-700 transition hover:text-slate-900"
                        >
                          <GithubIcon size={16} className="shrink-0 text-slate-600" />
                          <span className="underline decoration-slate-300 underline-offset-2">GitHub</span>
                        </a>
                      )}
                      {project.demoUrl && (
                        <a
                          href={project.demoUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label={`Watch ${project.title} demo`}
                          className="inline-flex items-center gap-1.5 text-xs font-semibold text-slate-700 transition hover:text-slate-900"
                        >
                          <Play size={16} className="shrink-0 text-slate-600" aria-hidden />
                          <span className="underline decoration-slate-300 underline-offset-2">Demo</span>
                        </a>
                      )}
                      {project.liveUrl && (
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label={`Visit ${project.title} live site`}
                          className="inline-flex items-center gap-1.5 text-xs font-semibold text-slate-700 transition hover:text-slate-900"
                        >
                          <Globe size={16} className="shrink-0 text-slate-600" aria-hidden />
                          <span className="underline decoration-slate-300 underline-offset-2">Live</span>
                        </a>
                      )}
                    </div>
                  )}
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
                      <img src={resolveAssetUrl(exp.logo)} alt={exp.company} className="h-full w-full object-contain" />
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
                      <img src={resolveAssetUrl(edu.logo)} alt={edu.institution} className="h-full w-full object-contain" />
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
