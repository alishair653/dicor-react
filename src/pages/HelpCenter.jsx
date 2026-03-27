import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import {
  FaBookOpen,
  FaCalendarAlt,
  FaClipboardList,
  FaCreditCard,
  FaCog,
  FaEnvelope,
  FaPhone,
  FaTools
} from 'react-icons/fa'

import Accordion from '../components/ui/Accordion'
import PageBanner from '../components/layout/PageBanner'

import '../styles/home.css'
import '../styles/helpcenter.css'
import '../styles/about.css'

import { siteInfo } from '../data/siteInfo'
import { siteImages } from '../data/siteImages'
import { copy } from '../data/siteCopy'

const faqData = [
  {
    question: 'What Services Do You Offer?',
    answer: copy.faqServicesFull
  },
  {
    question: 'How Long Does Concrete Take To Dry?',
    answer:
      'Drying time depends on mix, thickness, and weather conditions. Our team ensures correct curing and completion checks for durable results.'
  },
  {
    question: 'What Is The Average Cost Of A Concrete Project?',
    answer:
      'Every job is different. We walk through your space, discuss the finish you want, then give you a clear written estimate—no cookie-cutter “plans,” just work sized for your project.'
  },
  {
    question: 'Can You Repair Cracked Concrete?',
    answer:
      'Yes. We assess damage, remove weak sections, apply proper repair materials, and restore structural safety and appearance.'
  }
]

const helpFaqAside = {
  image: siteImages.helpFaqAside,
  title: 'Still Have Questions?',
  text: copy.stillHaveQuestions,
  avatars: siteImages.faqAvatarRow
}

const helpContactAside = {
  image: siteImages.helpAside
}

const helpTopicsDesc = copy.helpTopicBlurb

const helpTopics = [
  { title: 'General Information', Icon: FaBookOpen, image: siteImages.helpTopics[0] },
  { title: 'Estimates & Quotes', Icon: FaClipboardList, image: siteImages.helpTopics[1] },
  { title: 'Service Process', Icon: FaCog, image: siteImages.helpTopics[2] },
  { title: 'Billing & Payments', Icon: FaCreditCard, image: siteImages.helpTopics[3] },
  { title: 'Support & Repairs', Icon: FaTools, image: siteImages.helpTopics[4] },
  { title: 'Contact & Appointments', Icon: FaCalendarAlt, image: siteImages.helpTopics[5] }
]

export default function HelpCenter() {
  const navigate = useNavigate()
  const [form, setForm] = useState({
    fullName: '',
    email: '',
    message: ''
  })
  const [status, setStatus] = useState(null)

  function onSubmit(e) {
    e.preventDefault()
    // Front-end only: show success and reset
    if (!form.fullName.trim() || !form.email.trim() || !form.message.trim()) {
      setStatus({ ok: false, text: 'Please fill all fields.' })
      return
    }
    setStatus({ ok: true, text: 'Message sent successfully (UI only).' })
    setForm({ fullName: '', email: '', message: '' })
  }

  return (
    <div className="mz-page">
      <PageBanner
        title="Help Center"
        subtitle="Still Have Questions? Contact our experts or browse the answers below."
        currentLabel="Help Center"
        backgroundImage={siteImages.banners.help}
      />

      {/* FAQ — two columns (screenshot layout) */}
      <section className="mz-helpFaqBand" aria-label="Frequently asked questions">
        <div className="mz-helpFaqInner">
          <div className="mz-helpFaqGrid">
            <div className="mz-helpFaqAside">
              <div className="mz-helpFaqMedia">
                <img
                  className="mz-helpFaqImg mz-helpFaqImg--clip"
                  src={helpFaqAside.image}
                  alt=""
                  loading="lazy"
                />
              </div>
              <div className="mz-helpFaqCtaBlock">
                <h2 className="mz-helpFaqCtaTitle">{helpFaqAside.title}</h2>
                <p className="mz-helpFaqCtaText">{helpFaqAside.text}</p>
                <div className="mz-helpFaqCtaRow">
                  <button
                    type="button"
                    className="mz-helpFaqExpertBtn"
                    onClick={() => navigate('/contact-us')}
                  >
                    Contact our expert
                  </button>
                  <div className="mz-helpFaqAvatars" aria-hidden="true">
                    {helpFaqAside.avatars.map((src) => (
                      <img key={src} className="mz-helpFaqAvatar" src={src} alt="" loading="lazy" />
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <div className="mz-helpFaqMain">
              <div className="mz-helpFaqEyebrow">Questions &amp; Answers</div>
              <h2 className="mz-helpFaqTitle">Frequently Asked Questions</h2>
              <Accordion items={faqData} className="mz-helpFaqAccordion" />
            </div>
          </div>
        </div>
      </section>

      {/* Help topics — dark grid */}
      <section className="mz-helpTopicsSection" aria-label="Help topics">
        <div className="mz-helpTopicsInner">
          <header className="mz-helpTopicsHeader">
            <div className="mz-helpTopicsEyebrow">How can we help?</div>
            <h2 className="mz-helpTopicsHeading">
              Find Answers To Your Questions Quickly
            </h2>
          </header>

          <div className="mz-helpTopicsGrid">
            {helpTopics.map(({ title, Icon, image }) => (
              <article key={title} className="mz-helpTopicsCell">
                <img className="mz-helpTopicsThumb" src={image} alt="" loading="lazy" />
                <div className="mz-helpTopicsIconWrap">
                  <Icon className="mz-helpTopicsIcon" aria-hidden />
                </div>
                <h3 className="mz-helpTopicsTitle">{title}</h3>
                <p className="mz-helpTopicsDesc">{helpTopicsDesc}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Contact form + aside (screenshot layout) */}
      <section className="mz-helpContactBand" aria-label="Contact us">
        <div className="mz-helpContactBandInner">
          <div className="mz-helpContactSplit">
            <div className="mz-helpContactFormCol">
              <div className="mz-helpContactEyebrow">Get in touch</div>
              <h2 className="mz-helpContactTitle">
                Contact Us For Expert
                <br />
                Concrete Solutions
              </h2>

              <form className="mz-helpForm" onSubmit={onSubmit} noValidate>
                <div className="mz-helpFormField">
                  <label className="mz-helpFormLabel" htmlFor="help-fullname">
                    Full name
                  </label>
                  <input
                    id="help-fullname"
                    className="mz-helpFormInput"
                    value={form.fullName}
                    onChange={(e) =>
                      setForm((f) => ({ ...f, fullName: e.target.value }))
                    }
                    placeholder="Enter your name"
                    type="text"
                    autoComplete="name"
                  />
                </div>

                <div className="mz-helpFormField">
                  <label className="mz-helpFormLabel" htmlFor="help-email">
                    Email address *
                  </label>
                  <input
                    id="help-email"
                    className="mz-helpFormInput"
                    value={form.email}
                    onChange={(e) =>
                      setForm((f) => ({ ...f, email: e.target.value }))
                    }
                    placeholder="Enter your email"
                    type="email"
                    autoComplete="email"
                    required
                  />
                </div>

                <div className="mz-helpFormField">
                  <label className="mz-helpFormLabel" htmlFor="help-message">
                    Message
                  </label>
                  <textarea
                    id="help-message"
                    className="mz-helpFormTextarea"
                    value={form.message}
                    onChange={(e) =>
                      setForm((f) => ({ ...f, message: e.target.value }))
                    }
                    placeholder="Type your message here"
                    rows={5}
                  />
                </div>

                {status ? (
                  <div
                    className={
                      status.ok ? 'mz-helpFormStatus mz-helpFormStatusOk' : 'mz-helpFormStatus mz-helpFormStatusErr'
                    }
                  >
                    {status.text}
                  </div>
                ) : null}

                <button type="submit" className="mz-helpFormSubmit">
                  Send message
                </button>
              </form>
            </div>

            <aside className="mz-helpContactAsideCol">
              <div className="mz-helpContactMedia">
                <img
                  className="mz-helpContactImg mz-helpContactImg--clipTl"
                  src={helpContactAside.image}
                  alt=""
                  loading="lazy"
                />
              </div>

              <div className="mz-helpContactRows">
                <div className="mz-helpContactRow">
                  <div className="mz-helpContactRowIcon" aria-hidden="true">
                    <FaPhone size={20} />
                  </div>
                  <div className="mz-helpContactRowBody">
                    <div className="mz-helpContactRowLabel">Call us</div>
                    <a
                      className="mz-helpContactRowValue"
                      href={`tel:${siteInfo.phoneTel}`}
                    >
                      {siteInfo.phoneDisplay}
                    </a>
                  </div>
                </div>

                <div className="mz-helpContactRow">
                  <div className="mz-helpContactRowIcon" aria-hidden="true">
                    <FaEnvelope size={20} />
                  </div>
                  <div className="mz-helpContactRowBody">
                    <div className="mz-helpContactRowLabel">Email</div>
                    <a
                      className="mz-helpContactRowValue"
                      href={`mailto:${siteInfo.email}`}
                    >
                      {siteInfo.email}
                    </a>
                  </div>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </section>
    </div>
  )
}

