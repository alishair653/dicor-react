export default function SectionHeading({
  eyebrow,
  title,
  subtitle
}) {
  return (
    <div className="mz-sectionHeading">
      {eyebrow ? <div className="mz-sectionEyebrow">{eyebrow}</div> : null}
      {title ? <h2 className="mz-sectionTitle">{title}</h2> : null}
      {subtitle ? <p className="mz-sectionSubtitle">{subtitle}</p> : null}
    </div>
  )
}

