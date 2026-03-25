import Button from '../components/ui/Button'
import Card from '../components/ui/Card'
import SectionHeading from '../components/ui/SectionHeading'
import Badge from '../components/ui/Badge'
import {
  FaHammer,
  FaShieldAlt,
  FaUserFriends,
  FaDollarSign,
  FaCogs,
  FaYoutube,
  FaPhone
} from 'react-icons/fa'

import { siteInfo } from '../data/siteInfo'
import { siteImages, cssUrl } from '../data/siteImages'
import { copy } from '../data/siteCopy'

import '../styles/home.css'

const homeData = {
  stats: [
    { value: '0 +', label: 'Concrete Poured' },
    { value: '0 +', label: 'Happy Clients' },
    { value: '0 +', label: 'Years of Experience' },
    { value: '0 +', label: 'Projects Completed' }
  ],
  video: {
    url: 'https://www.youtube.com/watch?v=ysz5S6PUM-U'
  },
  features: [
    {
      title: 'High-Quality Materials',
      text: 'Reliable sourcing and premium concrete quality for every pour.',
      image: siteImages.heroFeatures[0]
    },
    {
      title: 'Certified Experts',
      text: 'Experienced professionals with safety-first construction practices.',
      image: siteImages.heroFeatures[1]
    },
    {
      title: 'Transparent Pricing',
      text: 'Clear plans, fair estimates, and no surprises from start to finish.',
      image: siteImages.heroFeatures[2]
    }
  ],
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
  pricing: [
    {
      plan: 'Basic Plan',
      price: '$2,500',
      bestFor: 'Small Residential Projects',
      bullets: [
        '3-Year Warranty',
        'Basic Finishing',
        'Driveway & Walkway Installation',
        'Standard Concrete Mixing'
      ]
    },
    {
      plan: 'Professional Plan',
      price: '$5,500',
      bestFor: 'Mid-Sized Commercial & Residential Projects',
      bullets: [
        '5-Year Warranty',
        'Stamped & Decorative Concrete',
        'Reinforced Slabs & Flooring',
        'High-Strength Concrete Mix'
      ]
    },
    {
      plan: 'Enterprise Plan',
      price: '$8,500',
      bestFor: 'Small Residential Projects',
      bullets: [
        '8-Year Warranty',
        'Advanced Reinforcement & Coating',
        'Driveway & Walkway Installation',
        'Custom Concrete Solutions'
      ]
    }
  ],
  projects: [
    { title: 'Skyline Tower Foundation', location: 'New York, USA', year: '2023' },
    { title: 'Grand Highway Bridge', location: 'Los Angeles, USA', year: '2022' },
    { title: 'Modern Residential Estate', location: 'Miami, USA', year: '2021' },
    { title: 'Industrial Warehouse Complex', location: 'Houston, USA', year: '2023' }
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
  ],
  navCta: {
    callUs: siteInfo.phoneDisplay
  }
}

export default function Home() {
  return (
    <div className="mz-page">
      {/* 5.1 Hero */}
      <section
        className="mz-hero mz-section"
        style={{ '--mz-hero-bg': cssUrl(siteImages.heroBackground) }}
      >
        <div className="mz-heroInner">
          <div className="mz-heroTopRow">
            <div className="mz-heroLeft">
              <div className="mz-heroEyebrowPill">BUILDING WITH CONFIDENCE</div>
              <h1 className="mz-heroTitle">Solid Foundations, Lasting Results</h1>
              <p className="mz-heroSubtitle">
                Our service is driven by quality, safety, and attention to detail. We focus on consistent delivery so your project stands strong for years.
              </p>

              <div className="mz-heroActionRow">
                <Button
                  variant="primary"
                  className="mz-heroExploreBtn"
                  onClick={() => {
                    window.location.href = '/services'
                  }}
                >
                  EXPLORE SERVICES
                </Button>

                <div className="mz-heroInlineStat">
                  <div className="mz-heroInlineValue">278140 +</div>
                  <div className="mz-heroInlineLabel">Concrete Poured</div>
                </div>
              </div>
            </div>
          </div>

          <div className="mz-heroBottomRow">
            <div className="mz-heroClientsPanel">
              <div className="mz-heroClientsRow">
                <div className="mz-heroClientsValue">1000 +</div>
                <div className="mz-heroClientsMeta">
                  <div className="mz-heroClientsLabel">Happy Clients</div>
                  <div className="mz-heroClientsAvatars" aria-hidden="true">
                    <img className="mz-heroAvatar" src={siteImages.faces.a} alt="" loading="lazy" />
                    <img className="mz-heroAvatar" src={siteImages.faces.b} alt="" loading="lazy" />
                    <img className="mz-heroAvatar" src={siteImages.faces.c} alt="" loading="lazy" />
                  </div>
                </div>
              </div>
              <div className="mz-heroClientsText">
                Our service is driven by quality, safety, and attention to detail. We focus on consistent delivery so your project stands strong for years.
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Hero niche: 3 feature cards (keep as-is under hero) */}
      <section className="mz-heroFeatureStrip" aria-label="Key services features">
        <div className="mz-heroFeatureStripContent">
          <div className="mz-grid mz-cols-3 mz-heroFeatureGrid">
            {homeData.features.map((f, idx) => {
              const Icon = idx === 0 ? FaHammer : idx === 1 ? FaShieldAlt : FaDollarSign
              return (
                <div key={f.title} className="mz-heroFeatureCard">
                  <img className="mz-heroFeatureThumb" src={f.image} alt="" loading="lazy" />
                  <div className="mz-heroFeatureIcon" aria-hidden="true">
                    <Icon size={18} />
                  </div>
                  <div className="mz-heroFeatureTitle">{f.title}</div>
                  <div className="mz-heroFeatureText">{f.text}</div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Hero niche: professional 2-row promo layout */}
      <section className="mz-heroPromoSection" aria-label="Trusted concrete experts promo">
        <div className="mz-heroPromoFrame">
          {/* Top row */}
          <div className="mz-heroPromoTop">
            <div className="mz-heroPromoImageWrap" aria-hidden="true">
              <img
                className="mz-heroPromoImage"
                src={siteImages.heroPromo}
                alt=""
                loading="lazy"
              />
            </div>

            <div className="mz-heroPromoContent">
              <div className="mz-heroPromoEyebrow">TRUSTED CONCRETE EXPERTS</div>
              <h2 className="mz-heroPromoTitle">
                Precision, Durability,
                <br />
                And Innovation In Every Structure.
              </h2>
              <p className="mz-heroPromoText">
                Our service is driven by quality, safety, and attention to detail. We focus on consistent delivery so your project stands strong for years.
              </p>

              <div className="mz-heroPromoButtons">
                <Button
                  variant="primary"
                  className="mz-heroPromoPrimaryBtn"
                  onClick={() => {
                    window.location.href = '/services'
                  }}
                >
                  OUR SERVICES
                </Button>
                <Button
                  variant="secondary"
                  className="mz-heroPromoSecondaryBtn"
                  onClick={() => {
                    window.location.href = '/contact-us'
                  }}
                >
                  CONTACT US
                </Button>
              </div>
            </div>
          </div>

          {/* Bottom row */}
          <div className="mz-heroPromoBottom">
            <div className="mz-heroExperienceCard">
              <div className="mz-heroExperienceValue">10 + Years Of Experience</div>
              <div className="mz-heroExperienceText">
                Our team is focused on dependable concrete workmanship, safety, and consistent outcomes.
              </div>
            </div>

            <div className="mz-heroMiniCards">
              <div className="mz-heroMiniCard">
                <div className="mz-heroMiniIcon" aria-hidden="true">
                  <FaShieldAlt size={18} />
                </div>
                <div className="mz-heroMiniTitle">Reliable & Durable</div>
                <div className="mz-heroMiniText">
                  Skilled execution and quality control ensure long-lasting results.
                </div>
              </div>

              <div className="mz-heroMiniCard">
                <div className="mz-heroMiniIcon" aria-hidden="true">
                  <FaUserFriends size={18} />
                </div>
                <div className="mz-heroMiniTitle">Expert Team</div>
                <div className="mz-heroMiniText">
                  Experienced professionals delivering safe and efficient construction.
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5.5 Services block (dark, all service cards) */}
      <section className="mz-servicesHero" aria-label="Services">
        <div className="mz-servicesHeroInner">
          <div className="mz-servicesHeroHeader">
            <div className="mz-servicesHeroTitleWrap">
              <div className="mz-servicesHeroEyebrow">TAILORED CONCRETE SOLUTIONS</div>
              <h2 className="mz-servicesHeroTitle">
                Tailored Concrete Solutions For
                <br />
                Every Project Need
              </h2>
            </div>

            <div className="mz-servicesHeroAllBtnWrap">
              <button
                type="button"
                className="mz-servicesHeroAllBtn"
                onClick={() => {
                  window.location.href = '/services'
                }}
              >
                EXPLORE ALL SERVICES
              </button>
            </div>
          </div>

          <div className="mz-servicesHeroGrid">
            {homeData.services.map((s) => (
              <div key={s.title} className="mz-servicesHeroCard">
                <img
                  className="mz-servicesHeroCardImg"
                  src={s.image}
                  alt=""
                  loading="lazy"
                />

                <div className="mz-servicesHeroCardOverlay">
                  <div className="mz-servicesHeroCardTitle">{s.title}</div>
                  <div className="mz-servicesHeroCardText">{s.desc}</div>

                  <button
                    type="button"
                    className="mz-servicesHeroLearnBtn"
                    onClick={() => window.alert(`Learn more about: ${s.title}`)}
                  >
                    LEARN MORE
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5.x Excellence in Every Pour (list + 2 images) */}
      <section className="mz-excellenceSection" aria-label="Excellence in every pour">
        <div className="mz-excellenceInner">
          <div className="mz-excellenceHeading">
            <div className="mz-excellenceEyebrow">EXCELLENCE IN EVERY POUR</div>
            <h2 className="mz-excellenceTitle">
              Precision, Strength, And Reliability In Every Project.
            </h2>
          </div>

          <div className="mz-excellenceGrid">
            <div className="mz-excellenceList" role="list">
              <div className="mz-excellenceItem" role="listitem">
                <div className="mz-excellenceIcon" aria-hidden="true">
                  <FaHammer size={16} />
                </div>
                <div className="mz-excellenceItemBody">
                  <div className="mz-excellenceItemTitle">Experienced Professionals</div>
                  <div className="mz-excellenceItemText">
                    Skilled execution and quality control ensure long-lasting results.
                  </div>
                </div>
              </div>

              <div className="mz-excellenceSeparator" aria-hidden="true" />

              <div className="mz-excellenceItem" role="listitem">
                <div className="mz-excellenceIcon" aria-hidden="true">
                  <FaShieldAlt size={16} />
                </div>
                <div className="mz-excellenceItemBody">
                  <div className="mz-excellenceItemTitle">Safety & Compliance</div>
                  <div className="mz-excellenceItemText">
                    Safety-first procedures and compliance for peace of mind.
                  </div>
                </div>
              </div>

              <div className="mz-excellenceSeparator" aria-hidden="true" />

              <div className="mz-excellenceItem" role="listitem">
                <div className="mz-excellenceIcon" aria-hidden="true">
                  <FaCogs size={16} />
                </div>
                <div className="mz-excellenceItemBody">
                  <div className="mz-excellenceItemTitle">Custom Concrete Solutions</div>
                  <div className="mz-excellenceItemText">
                    Tailored solutions for residential, commercial, and industrial needs.
                  </div>
                </div>
              </div>
            </div>

            <div className="mz-excellenceImages" aria-hidden="true">
              <img
                className="mz-excellenceImage"
                src={siteImages.excellence[0]}
                alt=""
                loading="lazy"
              />
              <img
                className="mz-excellenceImage"
                src={siteImages.excellence[1]}
                alt=""
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>

      {/* 5.x Video link */}
      <section className="mz-videoLinkSection" aria-label="Video">
        <div className="mz-videoLinkInner">
          <a
            className="mz-videoLinkCard"
            href={homeData.video.url}
            target="_blank"
            rel="noreferrer"
            aria-label="View video"
            style={{ '--mz-video-card-bg': cssUrl(siteImages.videoCard) }}
          >
            <div className="mz-videoLinkTop">
              <div className="mz-videoLinkLabel">Featured video</div>
              <div className="mz-videoLinkActions" aria-hidden="true">
                <span>Watch Later</span>
                <span>Share</span>
              </div>
            </div>

            <div className="mz-videoLinkCenter">
              <div className="mz-videoLinkChoose">
                Choose{' '}
                <span className="mz-videoLinkYoutube">
                  <FaYoutube size={22} />
                </span>{' '}
                our video
              </div>
              <div className="mz-videoLinkUnderline" aria-hidden="true" />
            </div>
          </a>
        </div>
      </section>

      {/* 5.8 Testimonials */}
      <section className="mz-testimonialsComplexSection" aria-label="What our clients say">
        <div className="mz-testimonialsComplexInner">
          <div className="mz-testimonialsComplexGrid">
            <div className="mz-testimonialsMedia" aria-hidden="true">
              <img
                className="mz-testimonialsMediaImg"
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
                <h2 className="mz-testimonialsTitle">Real Experiences From Satisfied Customers</h2>
                <p className="mz-testimonialsSubtitle">
                  Trusted service that prioritizes quality, communication, and dependable outcomes.
                </p>
              </div>

              <div className="mz-testimonialsList">
                {homeData.testimonials.map((t, idx) => (
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
                  onClick={() => window.alert('Explore all testimonials')}
                >
                  EXPLORE ALL TESTIMONIALS
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5.9 Contact CTA */}
      <section className="mz-section">
        <div className="mz-contactExpertise">
          <div className="mz-contactExpertiseLeft">
            <div className="mz-contactExpertiseEyebrow">YOUR PROJECT, OUR EXPERTISE</div>
            <h2 className="mz-contactExpertiseTitle">
              Delivering Strength,
              <br />
              Durability, And
              <br />
              Precision
            </h2>
            <p className="mz-contactExpertiseText">{copy.paragraphLong}</p>

            <div className="mz-contactExpertiseButtons">
              <button
                type="button"
                className="mz-contactExpertiseBtnPrimary"
                onClick={() => {
                  window.location.href = '/services'
                }}
              >
                OUR SERVICES
              </button>
              <button
                type="button"
                className="mz-contactExpertiseBtnOutline"
                onClick={() => {
                  window.location.href = '/contact-us'
                }}
              >
                CONTACT US
              </button>
            </div>

            <div className="mz-contactExpertiseBullets" role="list">
              <div className="mz-contactExpertiseBulletCol">
                <div className="mz-contactExpertiseBullet" role="listitem">
                  <span className="mz-contactExpertiseCheck" aria-hidden="true">
                    ✓
                  </span>
                  HIGH-QUALITY MATERIALS
                </div>
                <div className="mz-contactExpertiseBullet" role="listitem">
                  <span className="mz-contactExpertiseCheck" aria-hidden="true">
                    ✓
                  </span>
                  TIMELY PROJECT COMPLETION
                </div>
                <div className="mz-contactExpertiseBullet" role="listitem">
                  <span className="mz-contactExpertiseCheck" aria-hidden="true">
                    ✓
                  </span>
                  EXPERIENCED PROFESSIONALS
                </div>
              </div>

              <div className="mz-contactExpertiseBulletCol">
                <div className="mz-contactExpertiseBullet" role="listitem">
                  <span className="mz-contactExpertiseCheck" aria-hidden="true">
                    ✓
                  </span>
                  COMPETITIVE PRICING
                </div>
                <div className="mz-contactExpertiseBullet" role="listitem">
                  <span className="mz-contactExpertiseCheck" aria-hidden="true">
                    ✓
                  </span>
                  CUSTOM CONCRETE SOLUTIONS
                </div>
                <div className="mz-contactExpertiseBullet" role="listitem">
                  <span className="mz-contactExpertiseCheck" aria-hidden="true">
                    ✓
                  </span>
                  SATISFACTION GUARANTEED
                </div>
              </div>
            </div>
          </div>

          <div className="mz-contactExpertiseRight">
            <div className="mz-contactExpertiseMedia">
              <img
                className="mz-contactExpertiseImg"
                src={siteImages.contactCta}
                alt=""
                loading="lazy"
              />
            </div>

            <div className="mz-contactExpertiseCallCard" aria-label="Call us">
              <div className="mz-contactExpertiseCallIcon" aria-hidden="true">
                <FaPhone size={22} />
              </div>
              <div className="mz-contactExpertiseCallNumber">{homeData.navCta.callUs}</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

