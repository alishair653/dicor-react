export default function Badge({ children, className = '' }) {
  return <span className={`mz-badge ${className}`.trim()}>{children}</span>
}

