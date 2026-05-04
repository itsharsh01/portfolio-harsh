function SectionLink({ target, className, children }) {
  return (
    <a href={`#${target}`} className={className}>
      {children}
    </a>
  )
}

export default SectionLink
