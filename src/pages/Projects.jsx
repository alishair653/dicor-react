import { useNavigate } from 'react-router-dom'
import {
  FaMapMarkerAlt,
  FaFileAlt,
  FaLayerGroup,
  FaCheckCircle,
  FaPhone
} from 'react-icons/fa'

import PageBanner from '../components/layout/PageBanner'
import VideoHero from '../components/VideoHero'

import '../styles/home.css'
import '../styles/projects.css'
import '../styles/about.css'

import { siteInfo } from '../data/siteInfo'
import { siteImages } from '../data/siteImages'
import { copy } from '../data/siteCopy'

const projectsData = {
  intro: {
    eyebrow: 'Projects',
    title: 'High-Quality Concrete Solutions In Action',
    subtitle:
      'Explore selected projects delivered across residential, commercial, and industrial locations.'
  },
  projects: [
    {
      title: 'Skyline Tower Foundation',
      location: 'New York, USA',
      year: '2023',
      image: siteImages.projects[0]
    },
    {
      title: 'Grand Highway Bridge',
      location: 'Los Angeles, USA',
      year: '2022',
      image: siteImages.projects[1]
    },
    {
      title: 'Modern Residential Estate',
      location: 'Miami, USA',
      year: '2021',
      image: siteImages.projects[2]
    },
    {
      title: 'Industrial Warehouse Complex',
      location: 'Houston, USA',
      year: '2023',
      image: siteImages.projects[3]
    }
  ],
  pricing: [
    {
      plan: 'Basic Plan',
      price: '$2,500',
      desc: copy.paragraphMedium,
      bestFor: 'Small Residential Projects',
      bullets: [
        'Standard Concrete Mixing',
        'Driveway & Walkway Installation',
        'Basic Finishing',
        '3-Year Warranty'
      ]
    },
    {
      plan: 'Professional Plan',
      price: '$5,500',
      desc: copy.paragraphMedium,
      bestFor: 'Mid-Sized Commercial & Residential Projects',
      bullets: [
        'High-Strength Concrete Mix',
        'Reinforced Slabs & Flooring',
        'Stamped & Decorative Concrete',
        '5-Year Warranty'
      ]
    },
    {
      plan: 'Enterprise Plan',
      price: '$8,500',
      desc: copy.paragraphMedium,
      bestFor: 'Large Scale Commercial Projects',
      bullets: [
        'Custom Concrete Solutions',
        'Driveway & Walkway Installation',
        'Advanced Reinforcement & Casting',
        '8-Year Warranty'
      ]
    }
  ],
  process: {
    eyebrow: 'Simple & Efficient Process',
    title: 'Seamless Concrete Services From Start To Finish',
    steps: [
      {
        title: 'Consultation & Planning',
        text: copy.processConsultation
      },
      {
        title: 'Concrete Pouring',
        text: copy.processPour
      },
      {
        title: 'Final Inspection',
        text: copy.processInspection
      }
    ],
    cta: 'Get Started'
  },
  expertise: {
    eyebrow: 'YOUR PROJECT, OUR EXPERTISE',
    text: copy.paragraphLong,
    image: siteImages.expertiseAside,
    bulletsLeft: [
      'HIGH-QUALITY MATERIALS',
      'TIMELY PROJECT COMPLETION',
      'EXPERIENCED PROFESSIONALS'
    ],
    bulletsRight: [
      'COMPETITIVE PRICING',
      'CUSTOM CONCRETE SOLUTIONS',
      'SATISFACTION GUARANTEED'
    ]
  },
  video: {
    poster: siteImages.videoHeroPoster,
    url: '/site-video.mp4'
  }
}

export default function Projects() {
  const navigate = useNavigate()

  return (
    <div className="mz-page">
      <PageBanner
        title={projectsData.intro.eyebrow}
        subtitle={projectsData.intro.subtitle}
        currentLabel="Projects"
        backgroundImage={siteImages.banners.projects}
      />

      {/* 7.2 Projects portfolio (Built To Last layout) */}
      <section
        id="projects-portfolio"
        className="mz-projectsShowcaseSection"
        aria-label="Project portfolio"
      >
        <div className="mz-projectsShowcaseInner">
          <div className="mz-projectsShowcaseHeader">
            <div className="mz-projectsShowcaseHeaderText">
              <div className="mz-projectsShowcaseEyebrow">Built To Last</div>
              <h2 className="mz-projectsShowcaseTitle">
                High-Quality Concrete Solutions In Action
              </h2>
            </div>
            <button
              type="button"
              className="mz-projectsShowcaseCta"
              onClick={() =>
                document.getElementById('projects-portfolio')?.scrollIntoView({ behavior: 'smooth' })
              }
            >
              View All Projects
            </button>
          </div>

          <div className="mz-projectsShowcaseGrid">
            {projectsData.projects.map((pr) => (
              <article key={pr.title} className="mz-projectPreviewCard">
                <div className="mz-projectPreviewMedia">
                  <img
                    className="mz-projectPreviewImg"
                    src={pr.image}
                    alt=""
                    loading="lazy"
                  />
                </div>
                <div className="mz-projectPreviewBody mz-projectPreviewBody--stackedMeta">
                  <div className="mz-projectPreviewTopRow">
                    <h3 className="mz-projectPreviewCardTitle">{pr.title}</h3>
                    <span className="mz-projectPreviewYear mz-projectPreviewYear--titleRow">
                      {pr.year}
                    </span>
                  </div>
                  <div className="mz-projectPreviewLocationRow">
                    <FaMapMarkerAlt className="mz-projectPreviewPin" aria-hidden />
                    <span>{pr.location}</span>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <VideoHero
        posterSrc={projectsData.video.poster}
        videoUrl={projectsData.video.url}
        ariaLabel="Play project showcase video"
        fullBleed
      />

      {/* 7.3 Pricing — dark band (screenshot layout) */}
      <section className="mz-pricingDarkSection" aria-label="Pricing plans">
        <div className="mz-pricingDarkInner">
          <div className="mz-pricingDarkHeader">
            <div className="mz-pricingDarkEyebrow">Transparent Pricing</div>
            <h2 className="mz-pricingDarkHeading">
              Affordable Concrete Solutions For Every Project
            </h2>
          </div>

          <div className="mz-pricingDarkGrid">
            {projectsData.pricing.map((p, idx) => {
              const amount = p.price.replace(/^\$/, '')
              return (
                <article
                  key={p.plan}
                  className={
                    idx === 1
                      ? 'mz-pricingDarkCard mz-pricingDarkCardFeatured'
                      : 'mz-pricingDarkCard'
                  }
                >
                  <h3 className="mz-pricingDarkPlanTitle">{p.plan}</h3>
                  <p className="mz-pricingDarkPlanDesc">{p.desc}</p>

                  <div className="mz-pricingDarkPriceBlock">
                    <span className="mz-pricingDarkDollar" aria-hidden="true">
                      $
                    </span>
                    <span className="mz-pricingDarkAmount">{amount}</span>
                    <span className="mz-pricingDarkPer">/ Project</span>
                  </div>

                  <ul className="mz-pricingDarkList">
                    {p.bullets.map((b) => (
                      <li key={b} className="mz-pricingDarkListItem">
                        <span className="mz-pricingDarkCheck" aria-hidden="true">
                          ✓
                        </span>
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>

                  <p className="mz-pricingDarkBestFor">
                    <strong>Best for:</strong> {p.bestFor}
                  </p>

                  <button
                    type="button"
                    className="mz-pricingDarkCta"
                    onClick={() => navigate('/contact-us')}
                  >
                    Get Started
                  </button>
                </article>
              )
            })}
          </div>
        </div>
      </section>

      {/* 7.4 Simple & Efficient Process (screenshot layout) */}
      <section className="mz-processShowcaseSection" aria-label="Our process">
        <div className="mz-processShowcaseInner">
          <div className="mz-processShowcaseHeader">
            <div className="mz-processShowcaseHeaderText">
              <div className="mz-processShowcaseEyebrow">{projectsData.process.eyebrow}</div>
              <h2 className="mz-processShowcaseTitle">{projectsData.process.title}</h2>
            </div>
            <button
              type="button"
              className="mz-processShowcaseCta"
              onClick={() => navigate('/contact-us')}
            >
              {projectsData.process.cta}
            </button>
          </div>

          <div className="mz-processShowcaseSteps">
            <div className="mz-processShowcaseLine" aria-hidden />
            <div className="mz-processShowcaseGrid">
              {projectsData.process.steps.map((st, idx) => {
                const Icon = [FaFileAlt, FaLayerGroup, FaCheckCircle][idx] ?? FaFileAlt
                return (
                  <div key={st.title} className="mz-processShowcaseCol">
                    <div className="mz-processShowcaseIconSlot">
                      <div className="mz-processShowcaseIcon">
                        <Icon className="mz-processShowcaseIconSvg" aria-hidden />
                      </div>
                    </div>
                    <article className="mz-processShowcaseCard">
                      <h3 className="mz-processShowcaseCardTitle">{st.title}</h3>
                      <p className="mz-processShowcaseCardText">{st.text}</p>
                      <button
                        type="button"
                        className="mz-processShowcaseLearn"
                        onClick={() => navigate('/contact-us')}
                      >
                        Learn more
                      </button>
                    </article>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </section>

      {/* 7.5 Your project, our expertise */}
      <section className="mz-section" aria-label="Expertise and contact">
        <div className="mz-contactExpertise mz-contactExpertise--projectsLayout">
          <div className="mz-contactExpertiseMediaCol">
            <div className="mz-contactExpertiseMedia">
              <img
                className="mz-contactExpertiseImg mz-contactExpertiseImg--clip"
                src={projectsData.expertise.image}
                alt=""
                loading="lazy"
              />
            </div>
            <div className="mz-contactExpertiseCallCard" aria-label="Call us">
              <div className="mz-contactExpertiseCallIcon" aria-hidden="true">
                <FaPhone size={22} />
              </div>
              <div className="mz-contactExpertiseCallText">
                <div className="mz-contactExpertiseCallLabel">Call us</div>
                <a
                  className="mz-contactExpertiseCallNumber mz-contactExpertiseCallLink"
                  href={`tel:${siteInfo.phoneTel}`}
                >
                  {siteInfo.phoneDisplay}
                </a>
              </div>
            </div>
          </div>

          <div className="mz-contactExpertiseContentCol">
            <div className="mz-contactExpertiseEyebrow mz-contactExpertiseEyebrow--brand">
              {projectsData.expertise.eyebrow}
            </div>
            <h2 className="mz-contactExpertiseTitle">
              Delivering Strength,
              <br />
              Durability, And
              <br />
              Precision
            </h2>
            <p className="mz-contactExpertiseText">{projectsData.expertise.text}</p>

            <div className="mz-contactExpertiseButtons">
              <button
                type="button"
                className="mz-contactExpertiseBtnPrimary"
                onClick={() => navigate('/services')}
              >
                OUR SERVICES
              </button>
              <button
                type="button"
                className="mz-contactExpertiseBtnDark"
                onClick={() => navigate('/contact-us')}
              >
                CONTACT US
              </button>
            </div>

            <div className="mz-contactExpertiseBullets mz-contactExpertiseBullets--projects" role="list">
              <div className="mz-contactExpertiseBulletCol">
                {projectsData.expertise.bulletsLeft.map((b) => (
                  <div key={b} className="mz-contactExpertiseBullet" role="listitem">
                    <span className="mz-contactExpertiseCheck" aria-hidden="true">
                      ✓
                    </span>
                    {b}
                  </div>
                ))}
              </div>
              <div className="mz-contactExpertiseBulletCol">
                {projectsData.expertise.bulletsRight.map((b) => (
                  <div key={b} className="mz-contactExpertiseBullet" role="listitem">
                    <span className="mz-contactExpertiseCheck" aria-hidden="true">
                      ✓
                    </span>
                    {b}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

