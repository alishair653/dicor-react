import { useNavigate } from 'react-router-dom'
import PageBanner from '../components/layout/PageBanner'

import { siteImages } from '../data/siteImages'

import '../styles/home.css'

import { Fragment } from 'react'
import { FaLayerGroup, FaShieldAlt, FaCogs, FaMapMarkerAlt } from 'react-icons/fa'

const servicesData = {
  intro: {
    eyebrow: 'Services',
    title: 'Services',
    subtitle:
      'Faucibus ut accumsan venenatis ultricies elementum amet ut quis eu. Adipiscing pretium lorem libero id viverra ultrices.'
  },
  servicesSection: {
    heading: 'Tailored Concrete Solutions For Every Project Need'
  },
  services: [
    {
      title: 'Masonry/concrete removal, sealing & repair',
      desc: 'Removal, sealing, and repair for durable results.',
      image: siteImages.services[0]
    },
    {
      title: 'Driveway construction, sealing & installation',
      desc: 'Driveway construction with sealing and professional installation.',
      image: siteImages.services[1]
    },
    {
      title: 'Interior wall construction',
      desc: 'Interior wall construction with clean finishing.',
      image: siteImages.services[2]
    },
    {
      title: 'Walkway construction or installation',
      desc: 'Walkway construction or installation with reliable durability.',
      image: siteImages.services[3]
    },
    {
      title: 'Retaining wall sealing or resealing',
      desc: 'Sealing or resealing to protect retaining wall surfaces.',
      image: siteImages.services[4]
    },
    {
      title: 'Walkway sealing or resealing',
      desc: 'Sealing or resealing to enhance walkway longevity.',
      image: siteImages.services[5]
    },
    {
      title: 'Patio, porch, or terrace sealing or repair services',
      desc: 'Sealing or repair for patios, porches, and terraces.',
      image: siteImages.services[6]
    },
    {
      title: 'Specialized Flatwork & Interior Floors',
      desc: 'Specialized flatwork and interior floor finishing.',
      image: siteImages.services[7]
    },
    {
      title: 'Decorative & Stamped Concrete',
      desc: 'Decorative and stamped concrete with premium results.',
      image: siteImages.services[8]
    },
    {
      title: 'Foundations & Structural Concrete',
      desc: 'Foundations and structural concrete built for strength.',
      image: siteImages.services[9]
    },
    {
      title: 'Concrete Repair & Restoration',
      desc: 'Concrete repair and restoration for safety and appearance.',
      image: siteImages.services[10]
    },
    {
      title: 'Driveways & Outdoor Living',
      desc: 'Driveways and outdoor living solutions that fit your space.',
      image: siteImages.services[11]
    }
  ],
  excellence: {
    eyebrow: 'Excellence In Every Pour',
    title: 'Precision, Strength, And Reliability In Every Project.',
    items: [
      {
        title: 'Experienced Professionals',
        text: 'Skilled teams with reliable on-site execution and clear communication.'
      },
      {
        title: 'Safety & Compliance',
        text: 'Safety-first procedures and compliance for peace of mind.'
      },
      {
        title: 'Custom Concrete Solutions',
        text: 'Tailored solutions for residential, commercial, and industrial needs.'
      }
    ]
  },
  projects: [
    {
      title: 'Skyline Tower Foundation',
      location: 'New York, USA',
      year: '2023',
      image: siteImages.serviceProjectPreviews[0]
    },
    {
      title: 'Grand Highway Bridge',
      location: 'Los Angeles, USA',
      year: '2022',
      image: siteImages.serviceProjectPreviews[1]
    }
  ],
  pricing: [
    {
      plan: 'Basic Plan',
      price: '$2,500',
      desc:
        'Quis vitae eget in morbi. Sollicitudin sed tempus et magnis habitant est habitasse augue.',
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
      desc:
        'Quis vitae eget in morbi. Sollicitudin sed tempus et magnis habitant est habitasse augue.',
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
      desc:
        'Quis vitae eget in morbi. Sollicitudin sed tempus et magnis habitant est habitasse augue.',
      bullets: [
        'Custom Concrete Solutions',
        'Driveway & Walkway Installation',
        'Advanced Reinforcement & Coating',
        '8-Year Warranty'
      ]
    }
  ],
  testimonials: [
    {
      name: 'Michael Anderson',
      role: 'Construction Manager',
      text: 'Efficient planning, reliable execution, and a solid finish. The team delivered on time.'
    },
    {
      name: 'Sarah Johnson',
      role: 'Homeowner',
      text: 'Professional service and great communication from start to finish. Highly recommended.'
    }
  ]
}

export default function Services() {
  const navigate = useNavigate()

  return (
    <div className="mz-page">
      <PageBanner
        title={servicesData.intro.title}
        subtitle={servicesData.intro.subtitle}
        currentLabel="Services"
        backgroundImage={siteImages.banners.services}
      />

      {/* 6.2 Services showcase (header + grid cards) */}
      <section className="mz-servicesShowcaseSection" id="services-list" aria-label="Our services">
        <div className="mz-servicesShowcaseTop">
          <h2 className="mz-servicesShowcaseHeading">{servicesData.servicesSection.heading}</h2>
          <button
            type="button"
            className="mz-servicesShowcaseExploreBtn"
            onClick={() => {
              document.getElementById('services-list')?.scrollIntoView({ behavior: 'smooth' })
            }}
          >
            EXPLORE ALL SERVICES
          </button>
        </div>

        <div className="mz-servicesShowcaseGrid">
          {servicesData.services.map((s) => (
            <article key={s.title} className="mz-serviceShowcaseCard">
              <div className="mz-serviceShowcaseImageFrame">
                <img className="mz-serviceShowcaseImg" src={s.image} alt="" loading="lazy" />
              </div>
              <div className="mz-serviceShowcasePanel">
                <h3 className="mz-serviceShowcaseTitle">{s.title}</h3>
                <p className="mz-serviceShowcaseDesc">{s.desc}</p>
                <button
                  type="button"
                  className="mz-serviceShowcaseLearn"
                  onClick={() => navigate('/contact-us')}
                >
                  LEARN MORE
                </button>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* 6.3 Excellence in Every Pour (same layout as Home: list + split images) */}
      <section className="mz-excellenceSection" aria-label="Excellence in every pour">
        <div className="mz-excellenceInner">
          <div className="mz-excellenceHeading">
            <div className="mz-excellenceEyebrow">{servicesData.excellence.eyebrow}</div>
            <h2 className="mz-excellenceTitle">{servicesData.excellence.title}</h2>
          </div>

          <div className="mz-excellenceGrid">
            <div className="mz-excellenceList" role="list">
              {servicesData.excellence.items.map((it, idx) => {
                const Icon = idx === 0 ? FaLayerGroup : idx === 1 ? FaShieldAlt : FaCogs
                return (
                  <Fragment key={it.title}>
                    {idx > 0 ? <div className="mz-excellenceSeparator" aria-hidden="true" /> : null}
                    <div className="mz-excellenceItem" role="listitem">
                      <div className="mz-excellenceIcon" aria-hidden="true">
                        <Icon size={16} />
                      </div>
                      <div className="mz-excellenceItemBody">
                        <div className="mz-excellenceItemTitle">{it.title}</div>
                        <div className="mz-excellenceItemText">{it.text}</div>
                      </div>
                    </div>
                  </Fragment>
                )
              })}
            </div>

            <div className="mz-excellenceImages" aria-hidden="true">
              <img
                className="mz-excellenceImage"
                src={siteImages.excellence[0]}
                alt=""
                loading="lazy"
                style={{ objectPosition: '25% center' }}
              />
              <img
                className="mz-excellenceImage"
                src={siteImages.excellence[1]}
                alt=""
                loading="lazy"
                style={{ objectPosition: '78% center' }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* 6.4 Built To Last — project cards (screenshot layout) */}
      <section className="mz-projectsShowcaseSection" aria-label="Featured projects">
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
              onClick={() => navigate('/projects')}
            >
              View All Projects
            </button>
          </div>

          <div className="mz-projectsShowcaseGrid">
            {servicesData.projects.map((pr) => (
              <article key={pr.title} className="mz-projectPreviewCard">
                <div className="mz-projectPreviewMedia">
                  <img
                    className="mz-projectPreviewImg"
                    src={pr.image}
                    alt=""
                    loading="lazy"
                  />
                </div>
                <div className="mz-projectPreviewBody">
                  <h3 className="mz-projectPreviewCardTitle">{pr.title}</h3>
                  <div className="mz-projectPreviewRow">
                    <div className="mz-projectPreviewLocation">
                      <FaMapMarkerAlt className="mz-projectPreviewPin" aria-hidden />
                      <span>{pr.location}</span>
                    </div>
                    <span className="mz-projectPreviewYear">{pr.year}</span>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* 6.5 Pricing — dark plans (screenshot layout) */}
      <section className="mz-pricingDarkSection" aria-label="Pricing plans">
        <div className="mz-pricingDarkInner">
          <div className="mz-pricingDarkHeader">
            <div className="mz-pricingDarkEyebrow">Transparent Pricing</div>
            <h2 className="mz-pricingDarkHeading">
              Affordable Concrete Solutions For Every Project
            </h2>
          </div>

          <div className="mz-pricingDarkGrid">
            {servicesData.pricing.map((p, idx) => {
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

      {/* 6.6 Testimonials */}
      <section
        className="mz-testimonialsComplexSection mz-testimonialsComplexSection--muted"
        aria-label="What our clients say"
      >
        <div className="mz-testimonialsComplexInner">
          <div className="mz-testimonialsComplexGrid">
            <div className="mz-testimonialsMedia" aria-hidden="true">
              <img
                className="mz-testimonialsMediaImg mz-testimonialsMediaImg--clip"
                src={siteImages.testimonialsBand}
                alt=""
                loading="lazy"
              />

              <div className="mz-testimonialsStats">
                <div className="mz-testimonialStat">
                  <div className="mz-testimonialStatValue">500+</div>
                  <div className="mz-testimonialStatLabel">Projects Completed</div>
                </div>
                <div className="mz-testimonialStat">
                  <div className="mz-testimonialStatValue">100+</div>
                  <div className="mz-testimonialStatLabel">Equipment Owned</div>
                </div>
                <div className="mz-testimonialStat">
                  <div className="mz-testimonialStatValue">300+</div>
                  <div className="mz-testimonialStatLabel">Successful Repairs</div>
                </div>
                <div className="mz-testimonialStat">
                  <div className="mz-testimonialStatValue">700+</div>
                  <div className="mz-testimonialStatLabel">Contracts Won</div>
                </div>
              </div>
            </div>

            <div className="mz-testimonialsContent">
              <div className="mz-testimonialsHeading">
                <div className="mz-testimonialsEyebrow">What our clients say</div>
                <h2 className="mz-testimonialsTitle">Real Experiences From Satisfied Customers</h2>
                <p className="mz-testimonialsSubtitle">
                  Quis vitae eget in morbi. Sollicitudin sed tempus et magnis habitant est habitasse
                  augue.
                </p>
              </div>

              <div className="mz-testimonialsList">
                {servicesData.testimonials.map((t, idx) => (
                  <div key={t.name} className="mz-testimonialsItem">
                    <div className="mz-testimonialQuoteSquare" aria-hidden="true">
                      “
                    </div>

                    <div className="mz-testimonialItemMain">
                      <div className="mz-testimonialPersonTop">
                        <img
                          className="mz-testimonialAvatar"
                          src={idx === 0 ? siteImages.faces.a : siteImages.faces.b}
                          alt=""
                          loading="lazy"
                        />
                        <div>
                          <div className="mz-testimonialName">{t.name}</div>
                          <div className="mz-testimonialRole">{t.role}</div>
                        </div>
                      </div>

                      <div className="mz-testimonialText">{t.text}</div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mz-testimonialsCtaRow">
                <button
                  type="button"
                  className="mz-testimonialsAllBtn"
                  onClick={() => navigate('/help-center')}
                >
                  EXPLORE ALL TESTIMONIALS
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

