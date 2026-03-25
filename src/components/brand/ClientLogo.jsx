import { siteInfo } from '../../data/siteInfo'

/** Site logo — `public/brand-logo.svg` */
const LOGO_SRC = '/brand-logo.svg'

export default function ClientLogo({
  className = '',
  height,
  maxWidth,
  alt,
  priority = false,
  ...rest
}) {
  const style = {}
  if (height != null) style.height = height
  if (maxWidth != null) style.maxWidth = maxWidth

  return (
    <img
      src={LOGO_SRC}
      alt={alt ?? `${siteInfo.businessName} logo`}
      width={2000}
      height={2000}
      className={className ? `mz-clientLogo ${className}`.trim() : 'mz-clientLogo'}
      style={Object.keys(style).length ? style : undefined}
      loading={priority ? 'eager' : 'lazy'}
      fetchPriority={priority ? 'high' : undefined}
      decoding="async"
      {...rest}
    />
  )
}
