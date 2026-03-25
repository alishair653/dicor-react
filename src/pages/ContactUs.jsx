import { useState } from 'react'
import { FaEnvelope, FaPhone } from 'react-icons/fa'

import Accordion from '../components/ui/Accordion'
import PageBanner from '../components/layout/PageBanner'

import '../styles/contact.css'
import '../styles/helpcenter.css'
import '../styles/about.css'

import { siteInfo } from '../data/siteInfo'
import { siteImages } from '../data/siteImages'
import { copy } from '../data/siteCopy'

const contactAside = {
  image: siteImages.contactAside
}

const contactFaqData = [
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
      'Pricing depends on project scope, finishing level, reinforcement needs, and warranty coverage. We help you choose the right plan for your requirements.'
  },
  {
    question: 'Can You Repair Cracked Concrete?',
    answer:
      'Yes. We assess damage, remove weak sections, apply proper repair materials, and restore structural safety and appearance.'
  }
]

const contactFaqAside = {
  image: siteImages.helpFaqAside,
  title: 'Still Have Questions?',
  text: copy.stillHaveQuestions,
  avatars: siteImages.faqAvatarRow
}

export default function ContactUs() {
  const [form, setForm] = useState({
    fullName: '',
    email: '',
    message: ''
  })

  const [status, setStatus] = useState(null)

  function validateEmail(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(String(email).trim())
  }

  function onSubmit(e) {
    e.preventDefault()

    if (!form.fullName.trim() || !form.email.trim() || !form.message.trim()) {
      setStatus({ ok: false, text: 'Please fill all fields.' })
      return
    }

    if (!validateEmail(form.email)) {
      setStatus({ ok: false, text: 'Please enter a valid email address.' })
      return
    }

    setStatus({ ok: true, text: 'Your message has been sent (UI only).' })
    setForm({ fullName: '', email: '', message: '' })
  }

  return (
    <div className="mz-page">
      <PageBanner
        title="Contact Us"
        subtitle="Get In Touch. Contact our expert concrete team for quotes, service questions, and project planning."
        currentLabel="Contact Us"
        backgroundImage={siteImages.banners.contact}
      />

      <section
        id="contact-form"
        className="mz-helpContactBand mz-helpContactBand--white"
        aria-label="Contact us"
      >
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
                  <label className="mz-helpFormLabel" htmlFor="contact-fullname">
                    Full name
                  </label>
                  <input
                    id="contact-fullname"
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
                  <label className="mz-helpFormLabel" htmlFor="contact-email">
                    Email address
                    <span className="mz-helpFormLabelAsterisk" aria-hidden="true">
                      {' '}
                      *
                    </span>
                  </label>
                  <input
                    id="contact-email"
                    className="mz-helpFormInput"
                    value={form.email}
                    onChange={(e) =>
                      setForm((f) => ({ ...f, email: e.target.value }))
                    }
                    placeholder="Enter your email"
                    type="email"
                    autoComplete="email"
                  />
                </div>

                <div className="mz-helpFormField">
                  <label className="mz-helpFormLabel" htmlFor="contact-message">
                    Message
                  </label>
                  <textarea
                    id="contact-message"
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
                  src={contactAside.image}
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

      <section
        className="mz-helpFaqBand mz-helpFaqBand--soft"
        aria-label="Frequently asked questions"
      >
        <div className="mz-helpFaqInner">
          <div className="mz-helpFaqGrid">
            <div className="mz-helpFaqAside">
              <div className="mz-helpFaqMedia">
                <img
                  className="mz-helpFaqImg mz-helpFaqImg--clip"
                  src={contactFaqAside.image}
                  alt=""
                  loading="lazy"
                />
              </div>
              <div className="mz-helpFaqCtaBlock">
                <h2 className="mz-helpFaqCtaTitle">{contactFaqAside.title}</h2>
                <p className="mz-helpFaqCtaText">{contactFaqAside.text}</p>
                <div className="mz-helpFaqCtaRow">
                  <button
                    type="button"
                    className="mz-helpFaqExpertBtn"
                    onClick={() =>
                      document.getElementById('contact-form')?.scrollIntoView({
                        behavior: 'smooth'
                      })
                    }
                  >
                    Contact our expert
                  </button>
                  <div className="mz-helpFaqAvatars" aria-hidden="true">
                    {contactFaqAside.avatars.map((src) => (
                      <img key={src} className="mz-helpFaqAvatar" src={src} alt="" loading="lazy" />
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <div className="mz-helpFaqMain">
              <div className="mz-helpFaqEyebrow">Questions &amp; Answers</div>
              <h2 className="mz-helpFaqTitle">Frequently Asked Questions</h2>
              <Accordion items={contactFaqData} className="mz-helpFaqAccordion" />
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
