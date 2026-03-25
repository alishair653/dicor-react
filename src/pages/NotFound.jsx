import { Link } from 'react-router-dom'

import ClientLogo from '../components/brand/ClientLogo'
import { siteImages } from '../data/siteImages'
import { siteInfo } from '../data/siteInfo'

export default function NotFound() {
  return (
    <div className="mz-page">
      <div className="mz-notFound">
        <figure className="mz-notFoundVisual">
          <img
            className="mz-notFoundImg"
            src={siteImages.notFound}
            alt=""
            loading="lazy"
          />
        </figure>
        <div>
          <Link to="/" className="mz-notFoundLogo" aria-label={`${siteInfo.businessName} home`}>
            <ClientLogo className="mz-notFoundLogoImg" />
          </Link>
          <h1 className="mz-notFoundTitle">404 — Page not found</h1>
          <p className="mz-notFoundText">
            The page you are looking for does not exist or may have been moved. Head back to the
            home page to explore our concrete services.
          </p>
          <Link className="mz-link" to="/">
            Go to home
          </Link>
        </div>
      </div>
    </div>
  )
}
