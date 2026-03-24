export default function Button({
  variant = 'primary',
  className = '',
  children,
  ...rest
}) {
  const variantClass =
    variant === 'primary'
      ? 'mz-btnPrimary'
      : variant === 'secondary'
        ? 'mz-btnSecondary'
        : variant === 'outline'
          ? 'mz-btnOutline'
          : 'mz-btnPrimary'

  return (
    <button
      type={rest.type ?? 'button'}
      className={`mz-btn ${variantClass} ${className}`.trim()}
      {...rest}
    >
      {children}
    </button>
  )
}

