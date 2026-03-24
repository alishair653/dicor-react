import Button from '../components/ui/Button'
import { FaShieldAlt, FaUserFriends } from 'react-icons/fa'
import PageBanner from '../components/layout/PageBanner'

import { siteImages } from '../data/siteImages'

import '../styles/home.css'
import '../styles/about.css'

const aboutData = {
  pageHero: {
    title: 'About Us',
    subtitle:
      'Faucibus ut accumsan venenatis ultricies elementum amet ut quis eu. Adipiscing pretium lorem libero id viverra ultrices.'
  },
  trusted: {
    eyebrow: 'Trusted Concrete Experts',
    title: 'Precision, Durability, And Innovation In Every Structure.',
    text:
      'Quis vitae eget in morbi. Sollicitudin sed tempus et magnis habitant est habitasse augue. Interdum non quam at ut fermentum cras.'
  },
  story: {
    eyebrow: 'Our Story',
    timeline: [
      {
        year: '2010',
        title: 'Establishing Our Roots',
        text:
          'Quis vitae eget in morbi. Sollicitudin sed tempus et magnis habitant est.',
        image: siteImages.aboutStory[0]
      },
      {
        year: '2015',
        title: 'Innovation & Growth',
        text:
          'Quis vitae eget in morbi. Sollicitudin sed tempus et magnis habitant est.',
        image: siteImages.aboutStory[1]
      },
      {
        year: '2023',
        title: 'A Trusted Name In Concrete',
        text:
          'Quis vitae eget in morbi. Sollicitudin sed tempus et magnis habitant est.',
        image: siteImages.aboutStory[2]
      }
    ]
  },
  mission: {
    eyebrow: 'Innovation In Every Structure',
    title: 'Combining expertise and advanced technology',
    text:
      'We uphold high standards in quality, safety, sustainability, and customer satisfaction from consultation to final inspection.'
  },
  values: [
    {
      title: 'Commitment To Quality',
      text: 'Sodales sem sed sed massa leo urna faucibus in cursus. Phasellus sit duis vitae massa.'
    },
    {
      title: 'Customer-Centric Approach',
      text: 'Sodales sem sed sed massa leo urna faucibus in cursus. Phasellus sit duis vitae massa.'
    },
    {
      title: 'Innovation & Technology',
      text: 'Sodales sem sed sed massa leo urna faucibus in cursus. Phasellus sit duis vitae massa.'
    },
    {
      title: 'Safety & Compliance',
      text: 'Sodales sem sed sed massa leo urna faucibus in cursus. Phasellus sit duis vitae massa.'
    },
    {
      title: 'Sustainability & Responsibility',
      text: 'Sodales sem sed sed massa leo urna faucibus in cursus. Phasellus sit duis vitae massa.'
    },
    {
      title: 'Reliability & Integrity',
      text: 'Sodales sem sed sed massa leo urna faucibus in cursus. Phasellus sit duis vitae massa.'
    }
  ],
  team: {
    eyebrow: 'Meet Our Experts',
    title: 'A Dedicated Team Committed To Excellence',
    people: [
      { name: 'Matthew Bahringer', role: 'Founder & CEO' },
      { name: 'Michael Smith', role: 'Head of Operations' },
      { name: 'David Brown', role: 'Senior Site Supervisor' }
    ]
  }
}

export default function AboutUs() {
  return (
    <div className="mz-page">
      <PageBanner
        title={aboutData.pageHero.title}
        subtitle={aboutData.pageHero.subtitle}
        currentLabel="About Us"
        backgroundImage={siteImages.banners.about}
      />

      {/* Trusted experts (screenshot-style split section) */}
      <section className="mz-section mz-aboutTrustedSection">
        <div className="mz-aboutTrustedGrid">
          <div className="mz-aboutTrustedLeft">
            <div className="mz-aboutTrustedImageWrap">
              <img
                className="mz-aboutTrustedImage"
                src={siteImages.aboutTrusted}
                alt=""
                loading="lazy"
              />
            </div>

            <div className="mz-aboutTrustedExpCard">
              <div className="mz-aboutTrustedExpValue">10 + Years Of Experience</div>
              <div className="mz-aboutTrustedExpText">
                Quis vitae eget in morbi. Sollicitudin sed tempus et magnis habitant est
                habitasse augue.
              </div>
            </div>
          </div>

          <div className="mz-aboutTrustedRight">
            <div className="mz-aboutTrustedEyebrow">{aboutData.trusted.eyebrow}</div>
            <h2 className="mz-aboutTrustedTitle">{aboutData.trusted.title}</h2>
            <p className="mz-aboutTrustedText">{aboutData.trusted.text}</p>

            <div className="mz-aboutTrustedButtons">
              <Button variant="primary" onClick={() => (window.location.href = '/services')}>
                Our Services
              </Button>
              <Button variant="secondary" onClick={() => (window.location.href = '/contact-us')}>
                Contact Us
              </Button>
            </div>

            <div className="mz-aboutTrustedMiniGrid">
              <div className="mz-aboutTrustedMiniItem">
                <div className="mz-aboutTrustedMiniIcon" aria-hidden="true">
                  <FaShieldAlt size={14} />
                </div>
                <div className="mz-aboutTrustedMiniTitle">Reliable & Durable</div>
                <div className="mz-aboutTrustedMiniText">
                  Quis vitae eget in morbi. Sollicitudin sed tempus et magnis habitant est.
                </div>
              </div>

              <div className="mz-aboutTrustedMiniItem">
                <div className="mz-aboutTrustedMiniIcon" aria-hidden="true">
                  <FaUserFriends size={14} />
                </div>
                <div className="mz-aboutTrustedMiniTitle">Expert Team</div>
                <div className="mz-aboutTrustedMiniText">
                  Quis vitae eget in morbi. Sollicitudin sed tempus et magnis habitant est.
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="mz-section mz-storySection">
        <h2 className="mz-storyHeading">{aboutData.story.eyebrow}</h2>

        <div className="mz-storyTimelineLine" aria-hidden="true">
          {aboutData.story.timeline.map((t) => (
            <div key={t.year} className="mz-storyYearBadge">
              {t.year}
            </div>
          ))}
        </div>

        <div className="mz-storyCards">
          {aboutData.story.timeline.map((t) => (
            <div className="mz-storyCard" key={t.year}>
              <div className="mz-storyCardBody">
                <div className="mz-storyCardTitle">{t.title}</div>
                <div className="mz-storyCardText">{t.text}</div>
              </div>
              <img className="mz-storyCardImage" src={t.image} alt="" loading="lazy" />
            </div>
          ))}
        </div>
      </section>

      {/* Mission spotlight (dark split layout) */}
      <section className="mz-missionSpotlight" aria-label="Mission spotlight">
        <div className="mz-missionSpotlightInner">
          <div className="mz-missionSpotlightLeft">
            <div className="mz-missionSpotlightEyebrow">{aboutData.mission.eyebrow}</div>
            <h2 className="mz-missionSpotlightTitle">{aboutData.mission.title}</h2>
            <p className="mz-missionSpotlightText">{aboutData.mission.text}</p>

            <div className="mz-missionSpotlightCta">
              <button
                type="button"
                className="mz-missionSpotlightBtn"
                onClick={() => {
                  window.location.href = '/contact-us'
                }}
              >
                Discover Our Mission
              </button>
            </div>
          </div>

          <div className="mz-missionSpotlightRight">
            <img
              className="mz-missionSpotlightImage"
              src={siteImages.aboutMission}
              alt=""
              loading="lazy"
            />
            <div className="mz-missionSpotlightFounder">
              <div className="mz-missionSpotlightFounderRole">{aboutData.team.people[0].role}</div>
              <div className="mz-missionSpotlightFounderName">{aboutData.team.people[0].name}</div>
            </div>
          </div>
        </div>
      </section>

    </div>
  )
}

