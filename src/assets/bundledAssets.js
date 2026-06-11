import coverPattern from './cover-pattern.png'
import overviewImage from './overview-image.png'
import tenderlensAiCover from './tenderlens-ai-cover.png'
import intelligradDashboard from './intelligrad-dashboard.png'
import bookwiseAiCover from './bookwise-ai-cover.png'
import aiQueryRoutingCover from './ai-query-routing.png'
import negdLogo from './negd-logo.jpg'
import plutosLogo from './plutos-logo.jpg'
import echoLogo from './echo-logo.jpg'
import iitGandhinagarLogo from './iit-gandhinagar-logo.jpg'
import aktuLogo from './aktu-logo.jpg'
import jupiterAiCover from './jupiter-ai.png'
import resumePdf from './Harsh-Gupta-Resume.pdf'

/** Portfolio.json uses these paths; map them to Vite-bundled URLs. */
const pathToUrl = {
  '/cover-pattern.png': coverPattern,
  '/overview-image.png': overviewImage,
  '/tenderlens-ai-cover.png': tenderlensAiCover,
  '/intelligrad-dashboard.png': intelligradDashboard,
  '/bookwise-ai-cover.png': bookwiseAiCover,
  '/ai-query-routing.png': aiQueryRoutingCover,
  '/jupiter-ai.png': jupiterAiCover,
  '/negd-logo.jpg': negdLogo,
  '/plutos-logo.jpg': plutosLogo,
  '/echo-logo.jpg': echoLogo,
  '/iit-gandhinagar-logo.jpg': iitGandhinagarLogo,
  '/aktu-logo.jpg': aktuLogo,
  '/Harsh-Gupta-Resume.pdf': resumePdf,
}

/**
 * Resolve a path from portfolio data to a URL.
 * Local `/...` paths use bundled imports; http(s) and other schemes pass through.
 */
export function resolveAssetUrl(path) {
  if (path == null || path === '') return path
  const s = String(path)
  if (/^https?:\/\//i.test(s) || s.startsWith('mailto:') || s.startsWith('data:') || s.startsWith('#')) {
    return s
  }
  if (pathToUrl[s]) return pathToUrl[s]
  const base = import.meta.env.BASE_URL || '/'
  const baseNoTrail = base.endsWith('/') ? base.slice(0, -1) : base
  return s.startsWith('/') ? `${baseNoTrail}${s}` : s
}
