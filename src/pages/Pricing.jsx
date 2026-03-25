import { useNavigate } from 'react-router-dom'
import { FaFileAlt, FaLayerGroup, FaCheckCircle } from 'react-icons/fa'

import PageBanner from '../components/layout/PageBanner'

import { siteImages } from '../data/siteImages'
import { copy } from '../data/siteCopy'

import '../styles/home.css'
import '../styles/about.css'

const pricingData = {
  intro: {
    eyebrow: 'Pricing',
    title: 'Transparent Pricing',
    subtitle: 'Affordable Concrete Solutions For Every Project'
  },
  plans: [
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
        'Advanced Reinforcement & Coating',
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

export default function Pricing() {
  const navigate = useNavigate()

  return (
    <div className="mz-page">
      <PageBanner
        title={pricingData.intro.eyebrow}
        subtitle={`${pricingData.intro.title} — ${pricingData.intro.subtitle}`}
        currentLabel="Pricing"
        backgroundImage={siteImages.banners.pricing}
      />

      {/* 8.2 Transparent pricing — dark cards on white (screenshot layout) */}
      <section className="mz-pricingCardsSection" aria-label="Pricing plans">
        <div className="mz-pricingCardsInner">
          <div className="mz-pricingCardsHeader">
            <div className="mz-pricingCardsEyebrow">Transparent Pricing</div>
            <h2 className="mz-pricingCardsHeading">
              Affordable Concrete Solutions For Every Project
            </h2>
          </div>

          <div className="mz-pricingDarkGrid">
            {pricingData.plans.map((p) => {
              const amount = p.price.replace(/^\$/, '')
              return (
                <article key={p.plan} className="mz-pricingDarkCard mz-pricingDarkCard--onWhite">
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

                  <p className="mz-pricingDarkBestFor mz-pricingDarkBestFor--afterCta">
                    <strong>Best for:</strong> {p.bestFor}
                  </p>
                </article>
              )
            })}
          </div>
        </div>
      </section>

      {/* 8.3 Simple & Efficient Process (screenshot layout) */}
      <section
        className="mz-processShowcaseSection mz-processShowcaseSection--pricing"
        aria-label="Our process"
      >
        <div className="mz-processShowcaseInner">
          <div className="mz-processShowcaseHeader">
            <div className="mz-processShowcaseHeaderText">
              <div className="mz-processShowcaseEyebrow">{pricingData.process.eyebrow}</div>
              <h2 className="mz-processShowcaseTitle">{pricingData.process.title}</h2>
            </div>
            <button
              type="button"
              className="mz-processShowcaseCta"
              onClick={() => navigate('/contact-us')}
            >
              {pricingData.process.cta}
            </button>
          </div>

          <div className="mz-processShowcaseSteps">
            <div className="mz-processShowcaseLine" aria-hidden />
            <div className="mz-processShowcaseGrid">
              {pricingData.process.steps.map((st, idx) => {
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

      {/* 8.4 Testimonials (two-column + stats) */}
      <section
        className="mz-testimonialsComplexSection mz-testimonialsComplexSection--muted"
        aria-label="What our clients say"
      >
        <div className="mz-testimonialsComplexInner">
          <div className="mz-testimonialsComplexGrid">
            <div className="mz-testimonialsMedia" aria-hidden="true">
              <img
                className="mz-testimonialsMediaImg mz-testimonialsMediaImg--clip"
                src={siteImages.testimonialsBandAlt}
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
                <p className="mz-testimonialsSubtitle">{copy.testimonialBand}</p>
              </div>

              <div className="mz-testimonialsList">
                {pricingData.testimonials.map((t, idx) => (
                  <div key={t.name} className="mz-testimonialsItem">
                    <div className="mz-testimonialQuoteSquare" aria-hidden="true">
                      “
                    </div>

                    <div className="mz-testimonialItemMain">
                      <div className="mz-testimonialPersonTop">
                        <img
                          className="mz-testimonialAvatar"
                          src={idx === 0 ? siteImages.faces.c : siteImages.faces.d}
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

