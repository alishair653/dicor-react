import { cssUrl } from '../../data/siteImages'

export default function PageBanner({ title, subtitle, currentLabel, backgroundImage }) {
  return (
    <section
      className={`mz-aboutBanner${backgroundImage ? ' mz-aboutBanner--photo' : ''}`}
      style={
        backgroundImage
          ? { '--mz-banner-image': cssUrl(backgroundImage) }
          : undefined
      }
      aria-label={`${currentLabel} page heading`}
    >
      <div className="mz-aboutBannerInner">
        <div className="mz-aboutBannerLeft">
          <h1 className="mz-aboutBannerTitle">{title}</h1>
          <p className="mz-aboutBannerText">{subtitle}</p>
        </div>

        <div className="mz-aboutBannerCrumb" aria-label="Breadcrumb">
          <a href="/" className="mz-aboutBannerCrumbLink">
            Home
          </a>
          <span className="mz-aboutBannerCrumbSep">/</span>
          <span className="mz-aboutBannerCrumbCurrent">{currentLabel}</span>
        </div>
      </div>
    </section>
  )
}

