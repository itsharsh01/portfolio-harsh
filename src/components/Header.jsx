import { Download } from 'lucide-react'

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
          <a
            href={header.resumeLink || '#'}
            download="Harsh_Gupta_Resume.pdf"
            className="flex items-center gap-2 rounded-full border border-slate-800 bg-slate-900 px-5 py-2 text-sm font-medium text-white transition hover:bg-slate-800 hover:shadow-md"
          >
            <Download size={16} />
            Download Resume
          </a>
        </div>
      </div>
    </header>
  )
}

export default Header
