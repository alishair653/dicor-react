import { FaFacebookF, FaLinkedinIn, FaTwitter } from 'react-icons/fa'

import { siteInfo } from '../../data/siteInfo'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="mz-footer">
      <div className="mz-container mz-footerGrid">
        <div className="mz-footerCol">
          <div className="mz-footerBrand" aria-label={siteInfo.businessName}>
            {siteInfo.businessName}
          </div>
          <p className="mz-footerTextSmall mz-footerOwner">Owner: {siteInfo.ownerName}</p>
          <p className="mz-footerText">
            Concrete pouring services and reliable construction solutions.
          </p>

          <div className="mz-footerSocial" aria-label="Social links">
            <a className="mz-footerSocialLink" href="#" aria-label="Facebook">
              <FaFacebookF size={16} />
            </a>
            <a className="mz-footerSocialLink" href="#" aria-label="Twitter">
              <FaTwitter size={16} />
            </a>
            <a className="mz-footerSocialLink" href="#" aria-label="LinkedIn">
              <FaLinkedinIn size={16} />
            </a>
          </div>
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
              <a className="mz-footerLink" href="/projects">
                Projects
              </a>
            </li>
            <li>
              <a className="mz-footerLink" href="/help-center">
                Help Center
              </a>
            </li>
          </ul>
        </div>

        <div className="mz-footerCol">
          <div className="mz-footerTitle">Resources</div>
          <ul className="mz-footerList">
            <li>
              <a className="mz-footerLink" href="#">
                Construction Tips
              </a>
            </li>
            <li>
              <a className="mz-footerLink" href="#">
                Safety Standards
              </a>
            </li>
            <li>
              <a className="mz-footerLink" href="#">
                Concrete Pouring Guide
              </a>
            </li>
            <li>
              <a className="mz-footerLink" href="#">
                Maintenance Guide
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
        <div className="mz-footerPolicy">
          <a className="mz-footerLink" href="#">
            Terms of Use
          </a>
          <a className="mz-footerLink" href="#">
            Privacy Policy
          </a>
        </div>
      </div>
    </footer>
  )
}

