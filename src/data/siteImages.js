/**
 * Client work: `public/site-photos/`. Hero + CEO use curated stock for quality & clear portrait.
 */
const img = (slug, w = 800, h = 600) =>
  `https://images.unsplash.com/${slug}?auto=format&fit=crop&w=${w}&h=${h}&q=82`

const local = (name) => `/site-photos/${name}`

/** Use for inline CSS vars (`background-image`, etc.) so `&` in URLs does not break parsing. */
export function cssUrl(u) {
  return `url("${String(u).replace(/\\/g, '\\\\').replace(/"/g, '\\"')}")`
}

/** About mission / Founder — human portrait (professional headshot). */
const ceoPortrait = img('photo-1519085360753-af0119f7cbe7', 900, 700)

const serviceCardImages = [
  local('image1.jpeg'),
  local('image2.jpeg'),
  local('image3.jpeg'),
  local('image4.jpeg'),
  local('image5.jpeg'),
  local('image6.jpeg'),
  local('image7.jpeg'),
  local('image8.jpeg'),
  local('image9.jpeg'),
  local('image10.jpeg'),
  local('image11.jpeg'),
  local('image12.jpeg')
]

export const siteImages = {
  /** Full-width hero art (root `public/`). */
  heroBackground: '/hero-gemini.png',
  heroPromo: local('image1.jpeg'),
  videoCard: local('image2.jpeg'),
  videoHeroPoster: local('image2.jpeg'),

  services: serviceCardImages,

  excellence: [local('image3.jpeg'), local('image4.jpeg')],

  serviceProjectPreviews: [local('image5.jpeg'), local('image6.jpeg')],

  projects: [
    local('image7.jpeg'),
    local('image8.jpeg'),
    local('image9.jpeg'),
    local('image10.jpeg')
  ],

  testimonialsBand: local('image5.jpeg'),
  testimonialsBandAlt: local('image6.jpeg'),

  contactCta: local('image7.jpeg'),
  expertiseAside: local('image8.jpeg'),

  banners: {
    about: local('image1.jpeg'),
    services: local('image2.jpeg'),
    projects: local('image3.jpeg'),
    contact: local('image4.jpeg'),
    help: local('image5.jpeg')
  },

  aboutTrusted: local('image9.jpeg'),
  aboutStory: [local('image10.jpeg'), local('image11.jpeg'), local('image12.jpeg')],
  aboutMission: ceoPortrait,

  contactAside: local('image9.jpeg'),
  helpAside: local('image10.jpeg'),
  helpFaqAside: local('image11.jpeg'),

  helpTopics: [
    local('image1.jpeg'),
    local('image2.jpeg'),
    local('image3.jpeg'),
    local('image4.jpeg'),
    local('image5.jpeg'),
    local('image6.jpeg')
  ],

  heroFeatures: [local('image3.jpeg'), local('image4.jpeg'), local('image5.jpeg')],

  faces: {
    a: local('image1.jpeg'),
    b: local('image2.jpeg'),
    c: local('image3.jpeg'),
    d: local('image4.jpeg')
  },

  notFound: local('image0.jpeg'),

  faqAvatarRow: [local('image1.jpeg'), local('image2.jpeg'), local('image3.jpeg')]
}
