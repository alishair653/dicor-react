import ClientLogo from '../brand/ClientLogo'

import { siteInfo } from '../../data/siteInfo'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="mz-footer">
      <div className="mz-container mz-footerGrid">
        <div className="mz-footerCol">
          <div className="mz-footerBrandLockup">
            <ClientLogo className="mz-footerLogo" />
          </div>
          <p className="mz-footerTextSmall mz-footerOwner">Owner: {siteInfo.ownerName}</p>
          <p className="mz-footerText">
            Concrete pouring services and reliable construction solutions.
          </p>
        </div>

        <div className="mz-footerCol">
          <div className="mz-footerTitle">Company</div>
          <ul className="mz-footerList">
            <li>
              <a className="mz-footerLink" href="/">
                Home
              </a>
            </li>
            <li>
              <a className="mz-footerLink" href="/about-us">
                About Us
              </a>
            </li>
            <li>
              <a className="mz-footerLink" href="/services">
                Services
              </a>
            </li>
            <li>
              <a className="mz-footerLink" href="/projects">
                Projects
              </a>
            </li>
            <li>
              <a className="mz-footerLink" href="/pricing">
                Pricing
              </a>
            </li>
            <li>
              <a className="mz-footerLink" href="/help-center">
                Help Center
              </a>
            </li>
            <li>
              <a className="mz-footerLink" href="/contact-us">
                Contact
              </a>
            </li>
          </ul>
        </div>

        <div className="mz-footerCol">
          <div className="mz-footerTitle">Contact</div>
          <ul className="mz-footerList">
            <li>
              <span className="mz-footerTextSmall">{siteInfo.address.street}</span>
            </li>
            <li>
              <span className="mz-footerTextSmall">{siteInfo.address.cityStateZip}</span>
            </li>
            <li>
              <a className="mz-footerLink" href={`tel:${siteInfo.phoneTel}`}>
                {siteInfo.phoneDisplay}
              </a>
            </li>
            <li>
              <a className="mz-footerLink" href={`mailto:${siteInfo.email}`}>
                {siteInfo.email}
              </a>
            </li>
            <li>
              <span className="mz-footerTextSmall">
                Serving residential and commercial concrete projects.
              </span>
            </li>
          </ul>
        </div>
      </div>

      <div className="mz-container mz-footerBottom">
        <div className="mz-footerCopy">Copyright © {year} {siteInfo.businessName}</div>
      </div>
    </footer>
  )
}
