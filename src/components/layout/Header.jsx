import { useEffect, useState } from 'react'
import { NavLink, useLocation, useNavigate } from 'react-router-dom'
import { FaBars, FaTimes, FaPhone } from 'react-icons/fa'
import Button from '../ui/Button'
import ClientLogo from '../brand/ClientLogo'
import { siteInfo } from '../../data/siteInfo'
import '../../styles/shell.css'

const mainNav = [
  { to: '/', label: 'Home', end: true },
  { to: '/about-us', label: 'About' },
  { to: '/services', label: 'Services' }
]

const pagesDropdown = [
  { to: '/projects', label: 'Projects' },
  { to: '/pricing', label: 'Pricing' },
  { to: '/help-center', label: 'Help Center' }
]

const pagesSectionPaths = ['/projects', '/pricing', '/help-center']

export default function Header() {
  const location = useLocation()
  const navigate = useNavigate()
  const [open, setOpen] = useState(false)

  const pagesActive = pagesSectionPaths.includes(location.pathname)

  useEffect(() => {
    setOpen(false)
  }, [location.pathname])

  useEffect(() => {
    if (!open) return

    function onKeyDown(e) {
      if (e.key === 'Escape') {
        setOpen(false)
      }
    }

    window.addEventListener('keydown', onKeyDown)
    return () => window.removeEventListener('keydown', onKeyDown)
  }, [open])

  return (
    <header className="mz-header">
      <div className="mz-container mz-headerRow">
        <NavLink to="/" className="mz-brand mz-brandLockup" aria-label={siteInfo.businessName}>
          <ClientLogo className="mz-headerLogo" priority />
        </NavLink>

        <nav className="mz-nav" aria-label="Primary">
          {mainNav.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              end={item.end}
              className={({ isActive }) =>
                isActive ? 'mz-link mz-linkActive' : 'mz-link'
              }
            >
              {item.label}
            </NavLink>
          ))}

          <div
            className={`mz-navItemDropdown${pagesActive ? ' mz-navItemDropdownActive' : ''}`}
          >
            <button type="button" className="mz-navDropdownTrigger">
              Pages
            </button>
            <div className="mz-navDropdownWrap">
              <div className="mz-navDropdownPanel" role="menu">
                {pagesDropdown.map((item) => (
                  <NavLink
                    key={`${item.to}-${item.label}`}
                    to={item.to}
                    className={({ isActive }) =>
                      isActive
                        ? 'mz-navDropdownLink mz-navDropdownLinkActive'
                        : 'mz-navDropdownLink'
                    }
                    role="menuitem"
                  >
                    {item.label}
                  </NavLink>
                ))}
              </div>
            </div>
          </div>

          <NavLink
            to="/contact-us"
            className={({ isActive }) =>
              isActive ? 'mz-link mz-linkActive' : 'mz-link'
            }
          >
            Contact us
          </NavLink>
        </nav>

        <div className="mz-headerActions" aria-label="Header actions">
          <Button
            variant="secondary"
            className="mz-getStartedBtn"
            onClick={() => navigate('/contact-us')}
          >
            Get Started Now
          </Button>
          <a className="mz-phoneBtn" href={`tel:${siteInfo.phoneTel}`} aria-label="Call us">
            <span className="mz-phoneBtnIcon" aria-hidden="true">
              <FaPhone />
            </span>
          </a>
        </div>

        <button
          className="mz-mobileToggle"
          type="button"
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <FaTimes size={20} /> : <FaBars size={20} />}
        </button>
      </div>

      {open ? (
        <div
          className="mz-mobileMenu"
          role="dialog"
          aria-label="Mobile navigation"
        >
          <div className="mz-mobileMenuBrand">
            <ClientLogo className="mz-mobileMenuLogo" />
          </div>
          {mainNav.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              end={item.end}
              onClick={() => setOpen(false)}
              className={({ isActive }) =>
                isActive ? 'mz-mobileLink mz-mobileLinkActive' : 'mz-mobileLink'
              }
            >
              {item.label}
            </NavLink>
          ))}

          <div className="mz-mobileGroupLabel" aria-hidden="true">
            Pages
          </div>
          {pagesDropdown.map((item) => (
            <NavLink
              key={`m-${item.to}-${item.label}`}
              to={item.to}
              onClick={() => setOpen(false)}
              className={({ isActive }) =>
                isActive
                  ? 'mz-mobileLink mz-mobileLinkNested mz-mobileLinkActive'
                  : 'mz-mobileLink mz-mobileLinkNested'
              }
            >
              {item.label}
            </NavLink>
          ))}

          <NavLink
            to="/contact-us"
            onClick={() => setOpen(false)}
            className={({ isActive }) =>
              isActive ? 'mz-mobileLink mz-mobileLinkActive' : 'mz-mobileLink'
            }
          >
            Contact us
          </NavLink>

          <div className="mz-mobileMenuFooter">
            <Button
              variant="secondary"
              className="mz-mobileMenuCta"
              onClick={() => {
                setOpen(false)
                navigate('/contact-us')
              }}
            >
              Get Started Now
            </Button>
          </div>
        </div>
      ) : null}
    </header>
  )
}
