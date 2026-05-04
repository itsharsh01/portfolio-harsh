import SectionLink from './SectionLink'

function Header({ header }) {
  const coverStyle = header.coverImage
    ? {
        backgroundImage: `linear-gradient(to bottom right, rgba(250, 250, 249, 0.94), rgba(248, 250, 252, 0.9)), url(${header.coverImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }
    : undefined

  return (
    <header className="mb-10">
      <div
        className="w-full rounded-2xl bg-gradient-to-br from-amber-50 via-stone-100 to-slate-100 p-6 md:p-8"
        style={coverStyle}
        aria-label={header.coverLabel}
      >
        <h1 className="text-4xl font-extrabold tracking-tight text-slate-900 md:text-5xl">
          {header.name}
        </h1>
        <p className="mt-3 text-sm font-medium uppercase tracking-[0.2em] text-slate-600">
          {header.subtitle}
        </p>

        <div className="mt-6 flex flex-wrap gap-3">
          {header.badges.map((badge) => (
            <SectionLink
              key={badge}
              target="top"
              className="rounded-full border border-slate-200 bg-purple-50 px-3 py-1 text-sm text-slate-700 transition hover:bg-purple-100"
            >
              {badge}
            </SectionLink>
          ))}
        </div>
      </div>
    </header>
  )
}

export default Header
