/**
 * Stable Unsplash CDN URLs for concrete / construction visuals.
 * Replaces deprecated source.unsplash.com and missing /public assets.
 */
const img = (slug, w = 800, h = 600) =>
  `https://images.unsplash.com/${slug}?auto=format&fit=crop&w=${w}&h=${h}&q=82`

/** Use for inline CSS vars (`background-image`, etc.) so `&` in URLs does not break parsing. */
export function cssUrl(u) {
  return `url("${String(u).replace(/\\/g, '\\\\').replace(/"/g, '\\"')}")`
}

export const siteImages = {
  heroBackground: img('photo-1503387762-592deb58ef4e', 1920, 1080),
  heroPromo: img('photo-1541888946425-d81bb19240f5', 960, 720),
  videoCard: img('photo-1581092580497-e0d23cbdf1dc', 1600, 900),
  /** Wide poster for embedded project video hero */
  videoHeroPoster: img('photo-1600566753190-17f0baa2a6c3', 1920, 1080),

  /** Home + Services service cards (12 items, same order as copy) */
  services: [
    img('photo-1581092160562-40aa08e78837', 800, 600),
    img('photo-1621905251189-08b45d6a269e', 800, 600),
    img('photo-1600585154526-990dced4db0d', 800, 600),
    img('photo-1513467535987-fd81bc7d62f8', 800, 600),
    img('photo-1541888946425-d81bb19240f5', 800, 600),
    img('photo-1504307651254-35680f356dfd', 800, 600),
    img('photo-1558618666-fcd25c85cd64', 800, 600),
    img('photo-1486406146926-c627a92ad1ab', 800, 600),
    img('photo-1600566753190-17f0baa2a6c3', 800, 600),
    img('photo-1600607687939-ce8a6c25118c', 800, 600),
    img('photo-1497366216548-37526070297c', 800, 600),
    img('photo-1600607688969-a5bfcd646154', 800, 600)
  ],

  excellence: [
    img('photo-1581092160562-40aa08e78837', 700, 520),
    img('photo-1581092580497-e0d23cbdf1dc', 700, 520)
  ],

  serviceProjectPreviews: [
    img('photo-1486406146926-c627a92ad1ab', 800, 520),
    img('photo-1600607687644-c7171b42498f', 800, 520)
  ],

  projects: [
    img('photo-1486406146926-c627a92ad1ab', 800, 520),
    img('photo-1513581166391-887a96ddeafd', 800, 520),
    img('photo-1600585154340-be6161a56a0c', 800, 520),
    img('photo-1600607687939-ce8a6c25118c', 800, 520)
  ],

  testimonialsBand: img('photo-1541888946425-d81bb19240f5', 900, 680),
  testimonialsBandAlt: img('photo-1504307651254-35680f356dfd', 900, 680),

  contactCta: img('photo-1558618666-fcd25c85cd64', 900, 720),
  expertiseAside: img('photo-1504307651254-35680f356dfd', 900, 900),

  banners: {
    about: img('photo-1503387762-592deb58ef4e', 2000, 600),
    services: img('photo-1541888946425-d81bb19240f5', 2000, 600),
    projects: img('photo-1486406146926-c627a92ad1ab', 2000, 600),
    pricing: img('photo-1621905251189-08b45d6a269e', 2000, 600),
    contact: img('photo-1581092160562-40aa08e78837', 2000, 600),
    help: img('photo-1504307651254-35680f356dfd', 2000, 600)
  },

  aboutTrusted: img('photo-1581092580497-e0d23cbdf1dc', 900, 680),
  aboutStory: [
    img('photo-1541888946425-d81bb19240f5', 700, 520),
    img('photo-1497366216548-37526070297c', 700, 520),
    img('photo-1558618666-fcd25c85cd64', 700, 520)
  ],
  aboutMission: img('photo-1504307651254-35680f356dfd', 900, 700),

  contactAside: img('photo-1581092160562-40aa08e78837', 900, 900),
  helpAside: img('photo-1504307651254-35680f356dfd', 900, 900),
  helpFaqAside: img('photo-1541888946425-d81bb19240f5', 900, 900),

  helpTopics: [
    img('photo-1503387762-592deb58ef4e', 640, 400),
    img('photo-1600585154526-990dced4db0d', 640, 400),
    img('photo-1513467535987-fd81bc7d62f8', 640, 400),
    img('photo-1621905251189-08b45d6a269e', 640, 400),
    img('photo-1600566753190-17f0baa2a6c3', 640, 400),
    img('photo-1581092160562-40aa08e78837', 640, 400)
  ],

  heroFeatures: [
    img('photo-1600585154526-990dced4db0d', 640, 400),
    img('photo-1558618666-fcd25c85cd64', 640, 400),
    img('photo-1621905251189-08b45d6a269e', 640, 400)
  ],

  faces: {
    a: img('photo-1472099645785-5658abf4ff4e', 160, 160),
    b: img('photo-1494790108377-be9c29b29330', 160, 160),
    c: img('photo-1507003211169-0a1dd7228f2d', 160, 160),
    d: img('photo-1438761681033-6461ffad8d80', 160, 160)
  },

  notFound: img('photo-1600566753190-17f0baa2a6c3', 1200, 800),

  faqAvatarRow: [
    img('photo-1472099645785-5658abf4ff4e', 112, 112),
    img('photo-1494790108377-be9c29b29330', 112, 112),
    img('photo-1507003211169-0a1dd7228f2d', 112, 112)
  ]
}
