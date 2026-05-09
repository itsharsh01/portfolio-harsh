import { Link, Mail, MessageCircle, X } from 'lucide-react'

const iconMap = {
  mail: Mail,
  link: Link,
  messageCircle: MessageCircle,
  twitter: X,
}

const statusColorMap = {
  hot: 'bg-red-500',
  core: 'bg-emerald-500',
  emerging: 'bg-amber-600',
}

const themeClassMap = {
  orange: 'border-orange-200 bg-orange-50 text-orange-900',
  red: 'border-red-200 bg-red-50 text-red-900',
  green: 'border-emerald-200 bg-emerald-50 text-emerald-900',
  purple: 'border-purple-200 bg-purple-50 text-purple-900',
  blue: 'border-blue-200 bg-blue-50 text-blue-900',
  teal: 'border-teal-200 bg-teal-50 text-teal-900',
}

function LeftColumn({ profile, skillsSection, contacts, blogSection }) {
  return (
    <aside className="space-y-8">
      <section id="overview" className="scroll-mt-24">
        <h2 className="mb-3 text-2xl font-bold text-slate-900">{profile.overviewTitle}</h2>
        <p className="mb-5 leading-relaxed text-slate-700">{profile.overviewText}</p>
        <img
          src={profile.image}
          alt={profile.imageAlt}
          className="aspect-square w-full rounded-xl border border-slate-200 object-cover"
        />
      </section>

      <section id="contact" className="scroll-mt-24">
        <h3 className="mb-4 text-xl font-bold text-slate-900">Contact</h3>
        <ul className="space-y-3">
          {contacts.map((item) => {
            const Icon = iconMap[item.icon]
            return (
              <li key={item.label}>
                <a
                  href={item.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between rounded-md border border-slate-200 bg-white p-3 text-slate-700 shadow-sm transition hover:bg-slate-50 hover:shadow-md hover:-translate-y-0.5"
                >
                  <div className="flex items-center gap-3">
                    <Icon size={18} className="text-slate-600" />
                    <span className="font-semibold text-slate-900">{item.label}</span>
                  </div>
                  <span className="text-xs font-bold uppercase tracking-wider text-slate-400">&rarr;</span>
                </a>
              </li>
            )
          })}
        </ul>
      </section>

      <section id="skills" className="scroll-mt-24">
        <h3 className="mb-4 text-3xl font-bold text-slate-900">{skillsSection.title}</h3>
        <div className="space-y-8">
          {skillsSection.categories.map((category) => (
            <div key={category.name} className="border-b border-slate-100 pb-6 last:border-0 last:pb-0">
              <div className="mb-3 flex items-center gap-2">
                <span className="flex h-8 w-8 items-center justify-center rounded-md bg-slate-50 text-lg">
                  {category.icon}
                </span>
                <h4 className="text-xl font-bold text-slate-900">{category.name}</h4>
              </div>
              <div className="flex flex-wrap gap-2.5">
                {category.skills.map((skill) => (
                  <div
                    key={skill.name}
                    className={`flex items-center gap-1.5 rounded-full border px-2.5 py-1 text-[13px] font-medium ${themeClassMap[category.colorScheme] || themeClassMap.blue}`}
                  >
                    <span className={`h-1.5 w-1.5 rounded-full ${statusColorMap[skill.status] || 'bg-slate-400'}`} />
                    {skill.name}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
      <section id="blog" className="scroll-mt-24">
        <h3 className="mb-4 text-3xl font-bold text-slate-900">{blogSection.title}</h3>
        <ul className="space-y-4">
          {blogSection.items.map((post) => (
            <li key={post.title}>
              <a
                href={post.link}
                className="group block overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition hover:bg-slate-50 hover:shadow-md"
              >
                {post.image && (
                  <div className="h-40 w-full overflow-hidden border-b border-slate-200">
                    <img
                      src={post.image}
                      alt={post.imageAlt || post.title}
                      className="h-full w-full object-cover transition duration-300 group-hover:scale-105"
                    />
                  </div>
                )}
                <div className="flex flex-col gap-1 p-4">
                  <span className="text-xl font-semibold text-slate-900">{post.title}</span>
                  <span className="text-sm text-slate-500">{post.date}</span>
                </div>
              </a>
            </li>
          ))}
        </ul>
      </section>
    </aside>
  )
}

export default LeftColumn
