/**
 * Unsplash CDN URLs — local residential work; **each service card uses a distinct photo**.
 */
const img = (slug, w = 800, h = 600) =>
  `https://images.unsplash.com/${slug}?auto=format&fit=crop&w=${w}&h=${h}&q=82`

/** Use for inline CSS vars (`background-image`, etc.) so `&` in URLs does not break parsing. */
export function cssUrl(u) {
  return `url("${String(u).replace(/\\/g, '\\\\').replace(/"/g, '\\"')}")`
}

/** Pool: every slug used at most once in `serviceCardImages` (12 cards). */
const P = {
  repair: 'photo-1581578731548-c64695cc6952',
  driveway: 'photo-1621905251189-08b45d6a269e',
  homeInterior: 'photo-1615873968403-89e068629265',
  houseExterior: 'photo-1600585154340-be6161a56a0c',
  pourHand: 'photo-1621905252507-b35492cc74b4',
  tools: 'photo-1504148455328-c376907d081c',
  patioInterior: 'photo-1600607687644-c7171b42498f',
  floorInterior: 'photo-1600566753190-17f0baa2a6c3',
  homeFacade: 'photo-1600585154363-67eb9e2e2099',
  foundationWorker: 'photo-1581092160562-40aa08e78837',
  repairDetail: 'photo-1578662996442-48f60103fc96',
  suburbanHome: 'photo-1564013799919-ab600027ffc6',
  gloves: 'photo-1565538810643-b5bdb714032a',
  smallTeam: 'photo-1556761175-b413da4baf72',
  smallOffice: 'photo-1600880292089-90a7e086ee0c',
  collaboration: 'photo-1552664730-d307ca884978',
  handshake: 'photo-1521791136064-7986c2920216',
  deskWork: 'photo-1517245386807-bb43f82c33c4',
  warmInterior: 'photo-1600047509807-ba8f99d2cdde',
  brightRoom: 'photo-1600210492486-724fe5c67fb0',
  outdoorScene: 'photo-1489515217757-5fd1be406fef',
  cottage: 'photo-1598300042247-d088f8ab3a91',
  modernFacade: 'photo-1600585154526-990dced4db0d',
  loft: 'photo-1600607687939-ce8a6c25118c',
  tileBath: 'photo-1556909114-f6e7ad7d3136',
  professional: 'photo-1560250097-0b93528c311a',
  /** Mission / founder block — portrait (not property stock). */
  founderPortrait: 'photo-1519085360753-af0119f7cbe7'
}

/**
 * Home + Services: 12 cards, **12 different images** (order matches Home.jsx / Services.jsx).
 */
const serviceCardImages = [
  img(P.repair, 800, 600),
  img(P.driveway, 800, 600),
  img(P.homeInterior, 800, 600),
  img(P.houseExterior, 800, 600),
  img(P.pourHand, 800, 600),
  img(P.tools, 800, 600),
  img(P.patioInterior, 800, 600),
  img(P.floorInterior, 800, 600),
  img(P.homeFacade, 800, 600),
  img(P.foundationWorker, 800, 600),
  img(P.repairDetail, 800, 600),
  img(P.suburbanHome, 800, 600)
]

export const siteImages = {
  heroBackground: img(P.pourHand, 1920, 1080),
  heroPromo: img(P.smallTeam, 960, 720),
  videoCard: img(P.tools, 1600, 900),
  videoHeroPoster: img(P.driveway, 1920, 1080),

  services: serviceCardImages,

  excellence: [img(P.brightRoom, 700, 520), img(P.tileBath, 700, 520)],

  serviceProjectPreviews: [img(P.outdoorScene, 800, 520), img(P.modernFacade, 800, 520)],

  projects: [
    img(P.driveway, 800, 520),
    img(P.houseExterior, 800, 520),
    img(P.loft, 800, 520),
    img(P.cottage, 800, 520)
  ],

  testimonialsBand: img(P.smallTeam, 900, 680),
  testimonialsBandAlt: img(P.handshake, 900, 680),

  contactCta: img(P.warmInterior, 900, 720),
  expertiseAside: img(P.professional, 900, 900),

  banners: {
    about: img(P.deskWork, 2000, 600),
    services: img(P.collaboration, 2000, 600),
    projects: img(P.outdoorScene, 2000, 600),
    contact: img(P.repairDetail, 2000, 600),
    help: img(P.smallOffice, 2000, 600)
  },

  aboutTrusted: img(P.patioInterior, 900, 680),
  aboutStory: [
    img(P.cottage, 700, 520),
    img(P.tileBath, 700, 520),
    img(P.tools, 700, 520)
  ],
  aboutMission: img(P.founderPortrait, 900, 700),

  contactAside: img(P.repair, 900, 900),
  helpAside: img(P.foundationWorker, 900, 900),
  helpFaqAside: img(P.homeFacade, 900, 900),

  helpTopics: [
    img(P.smallTeam, 640, 400),
    img(P.handshake, 640, 400),
    img(P.collaboration, 640, 400),
    img(P.smallOffice, 640, 400),
    img(P.outdoorScene, 640, 400),
    img(P.warmInterior, 640, 400)
  ],

  heroFeatures: [
    img(P.professional, 640, 400),
    img(P.deskWork, 640, 400),
    img(P.gloves, 640, 400)
  ],

  faces: {
    a: img('photo-1472099645785-5658abf4ff4e', 160, 160),
    b: img('photo-1494790108377-be9c29b29330', 160, 160),
    c: img('photo-1507003211169-0a1dd7228f2d', 160, 160),
    d: img('photo-1438761681033-6461ffad8d80', 160, 160)
  },

  notFound: img(P.modernFacade, 1200, 800),

  faqAvatarRow: [
    img('photo-1472099645785-5658abf4ff4e', 112, 112),
    img('photo-1494790108377-be9c29b29330', 112, 112),
    img('photo-1507003211169-0a1dd7228f2d', 112, 112)
  ]
}
