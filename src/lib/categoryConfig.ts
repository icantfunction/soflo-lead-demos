export interface Service {
  icon: string
  title: string
  desc: string
}

export interface Testimonial {
  name: string
  text: string
  rating: number
}

export interface GalleryItem {
  label: string
  photo: string  // Unsplash photo ID
}

export interface CategoryConfig {
  gradient: string
  heroBg: string
  heroPhoto: string   // Unsplash photo ID — full bleed hero bg
  aboutPhoto: string  // Unsplash photo ID — about section
  accentClass: string
  badgeClass: string
  tagline: string
  subtext: string
  ctaText: string
  stat1: { value: string; label: string }
  stat2: { value: string; label: string }
  stat3: { value: string; label: string }
  services: Service[]
  testimonials: Testimonial[]
  gallery: GalleryItem[]
  hours: string[]
}

type CategoryMap = Record<string, CategoryConfig>

// ─── PHOTO IDS (Unsplash) ─────────────────────────────────────────────────────
// Format: https://images.unsplash.com/photo-{ID}?...

const PHOTOS = {
  // Beauty / Hair
  hairHero:    '1562322140-8baeececf3df',
  hairAbout:   '1522337360788-8b13dee7a37e',
  hairG1:      '1560066984-138daab05a9a',
  hairG2:      '1522337360788-8b13dee7a37e',
  hairG3:      '1487412947147-5cebf100d293',
  hairG4:      '1519699047748-de8e457a634e',
  hairG5:      '1597764690523-fb3d72f9a5b1',
  hairG6:      '1527799820374-87642af408bd',
  // Barber
  barberHero:  '1503951914875-452162b0f3f1',
  barberAbout: '1599351431202-1802df929fc5',
  barberG1:    '1621605815971-74337b877a3b',
  barberG2:    '1503951914875-452162b0f3f1',
  barberG3:    '1599351431202-1802df929fc5',
  barberG4:    '1589578049890-a7f3f7f55fa1',
  barberG5:    '1622286342621-4bd5a8f6e985',
  barberG6:    '1567894340315-2d713a9fe1e9',
  // Nails
  nailHero:    '1604654894610-df63bc536371',
  nailAbout:   '1519014816548-bf5fe059798b',
  nailG1:      '1604654894610-df63bc536371',
  nailG2:      '1519014816548-bf5fe059798b',
  nailG3:      '1604654894610-df63bc536371',
  nailG4:      '1519014816548-bf5fe059798b',
  nailG5:      '1604654894610-df63bc536371',
  nailG6:      '1519014816548-bf5fe059798b',
  // Lash / Makeup
  lashHero:    '1583001431135-6e7baabe1c7c',
  lashAbout:   '1616683693104-3e1a3a84958f',
  lashG1:      '1583001431135-6e7baabe1c7c',
  lashG2:      '1616683693104-3e1a3a84958f',
  lashG3:      '1616683693104-3e1a3a84958f',
  lashG4:      '1583001431135-6e7baabe1c7c',
  lashG5:      '1616683693104-3e1a3a84958f',
  lashG6:      '1583001431135-6e7baabe1c7c',
  makeupHero:  '1522337360788-8b13dee7a37e',
  makeupAbout: '1487412947147-5cebf100d293',
  // Braids
  braidHero:   '1611952902855-f78b93ca3e40',
  braidAbout:  '1524504388515-a45b51fa31ee',
  braidG1:     '1611952902855-f78b93ca3e40',
  braidG2:     '1524504388515-a45b51fa31ee',
  braidG3:     '1611952902855-f78b93ca3e40',
  braidG4:     '1524504388515-a45b51fa31ee',
  braidG5:     '1611952902855-f78b93ca3e40',
  braidG6:     '1524504388515-a45b51fa31ee',
  // Food / Bakery
  foodHero:    '1509440159596-0249088772ff',
  foodAbout:   '1578985545062-69928b1d9587',
  foodG1:      '1578985545062-69928b1d9587',
  foodG2:      '1414235077428-338989a2e8c0',
  foodG3:      '1556742049-0cfed4f6a45d',
  foodG4:      '1547592180-85f173990819',
  foodG5:      '1498939898088-96f18d6fa4fb',
  foodG6:      '1555507036-ab794fa2369c',
  // Food Truck
  truckHero:   '1565123409695-7b5ef63a2efb',
  truckAbout:  '1414235077428-338989a2e8c0',
  truckG1:     '1565123409695-7b5ef63a2efb',
  truckG2:     '1556742049-0cfed4f6a45d',
  truckG3:     '1414235077428-338989a2e8c0',
  truckG4:     '1547592180-85f173990819',
  truckG5:     '1498939898088-96f18d6fa4fb',
  truckG6:     '1578985545062-69928b1d9587',
  // Fitness
  fitHero:     '1571019613454-1cb2f99b2d8b',
  fitAbout:    '1534438327276-14e5300c3a48',
  fitG1:       '1534438327276-14e5300c3a48',
  fitG2:       '1540497077202-7c8a3999166f',
  fitG3:       '1483721310020-03712bac9f09',
  fitG4:       '1518644961665-ed3e3b66c6cc',
  fitG5:       '1581009137042-c6f6cc17e1ac',
  fitG6:       '1548690312-1db9c21fac66',
  // Yoga / Pilates
  yogaHero:    '1544367654-02c3f1aef785',
  yogaAbout:   '1518644961665-ed3e3b66c6cc',
  yogaG1:      '1544367654-02c3f1aef785',
  yogaG2:      '1518644961665-ed3e3b66c6cc',
  yogaG3:      '1506126613408-eca07ce68773',
  yogaG4:      '1545205597-3d9d02c29597',
  yogaG5:      '1523394522761-2b7c6bdaa50b',
  yogaG6:      '1544367654-02c3f1aef785',
  // Spa / Massage
  spaHero:     '1544161515-4ab6ce6db874',
  spaAbout:    '1515377905703-c4788e51af15',
  spaG1:       '1515377905703-c4788e51af15',
  spaG2:       '1544161515-4ab6ce6db874',
  spaG3:       '1552693272-b5f55b758f83',
  spaG4:       '1571290274554-6a2eaa771e5f',
  spaG5:       '1516975080664-ed2fc6a32937',
  spaG6:       '1506126613408-eca07ce68773',
  // Home Services
  homeHero:    '1600585154340-be6161a56a0c',
  homeAbout:   '1556909114-f6e7ad7d3136',
  homeG1:      '1556909114-f6e7ad7d3136',
  homeG2:      '1583847268964-b28dc8f51f92',
  homeG3:      '1558618666-fcd25c85cd64',
  homeG4:      '1600585154340-be6161a56a0c',
  homeG5:      '1523217582562-09d03f5b7c70',
  homeG6:      '1585771724684-38269d6639fd',
  // Lawn / Landscaping
  lawnHero:    '1416879595882-3373a0480b5b',
  lawnAbout:   '1469474968028-56623f02e42e',
  lawnG1:      '1416879595882-3373a0480b5b',
  lawnG2:      '1558449028-9d3c15c01f18',
  lawnG3:      '1469474968028-56623f02e42e',
  lawnG4:      '1508739773434-c26b3d09e071',
  lawnG5:      '1523217582562-09d03f5b7c70',
  lawnG6:      '1585771724684-38269d6639fd',
  // Pool
  poolHero:    '1509391366636-9f59db5dce06',
  poolAbout:   '1576610616-cb60a0022a33',
  poolG1:      '1509391366636-9f59db5dce06',
  poolG2:      '1576610616-cb60a0022a33',
  poolG3:      '1509391366636-9f59db5dce06',
  poolG4:      '1576610616-cb60a0022a33',
  poolG5:      '1509391366636-9f59db5dce06',
  poolG6:      '1576610616-cb60a0022a33',
  // Creative / Events
  eventHero:   '1511285560929-80b5a4621f27',
  eventAbout:  '1519741497674-4f41bd56c05a',
  eventG1:     '1519741497674-4f41bd56c05a',
  eventG2:     '1452587925148-ce544e77e70d',
  eventG3:     '1505236858219-8b560952f9b3',
  eventG4:     '1464366400600-7168b8af9bc3',
  eventG5:     '1519225421980-715cb0215aed',
  eventG6:     '1601923174897-2cae3b6e7f36',
  // Wedding
  weddingHero:  '1519225421980-715cb0215aed',
  weddingAbout: '1511285560929-80b5a4621f27',
  weddingG1:   '1519225421980-715cb0215aed',
  weddingG2:   '1511285560929-80b5a4621f27',
  weddingG3:   '1519741497674-4f41bd56c05a',
  weddingG4:   '1491438590914-bc09fcaaf77a',
  weddingG5:   '1520453222870-f879f3a11e25',
  weddingG6:   '1520975954074-9d16d0ecba44',
  // DJ / Music
  djHero:      '1501612780327-45045538702b',
  djAbout:     '1519683109079-d5f539e1542f',
  djG1:        '1501612780327-45045538702b',
  djG2:        '1511379938547-c1f69419868d',
  djG3:        '1519683109079-d5f539e1542f',
  djG4:        '1504509546545-e7ab7b4e0d7d',
  djG5:        '1478147427282-58a87a433468',
  djG6:        '1506157786151-b8491531f063',
  // Photography / Videography
  photoHero:   '1452587925148-ce544e77e70d',
  photoAbout:  '1471341971476-ae15ff5dd4ea',
  photoG1:     '1452587925148-ce544e77e70d',
  photoG2:     '1471341971476-ae15ff5dd4ea',
  photoG3:     '1516035069371-29a1b244cc32',
  photoG4:     '1495745655688-68de25cf1c33',
  photoG5:     '1502982720700-bfff97f2ecac',
  photoG6:     '1554941068-a252680a0e03',
  // Trades
  tradeHero:   '1504328345606-18bbc8c9d7d1',
  tradeAbout:  '1558618666-fcd25c85cd64',
  tradeG1:     '1504328345606-18bbc8c9d7d1',
  tradeG2:     '1558618666-fcd25c85cd64',
  tradeG3:     '1581092335397-9fa341108e4e',
  tradeG4:     '1585771724684-38269d6639fd',
  tradeG5:     '1583337130417-3346a1be7dee',
  tradeG6:     '1523217582562-09d03f5b7c70',
  // Pet Grooming
  petHero:     '1587300003388-59208cc962cb',
  petAbout:    '1548681840579-10ae68e53e22',
  petG1:       '1587300003388-59208cc962cb',
  petG2:       '1548681840579-10ae68e53e22',
  petG3:       '1453227588063-bb302b62f50b',
  petG4:       '1587300003388-59208cc962cb',
  petG5:       '1548681840579-10ae68e53e22',
  petG6:       '1561037404-61cd46aa8d52',
  // Tattoo
  tattooHero:  '1598971861713-54ad16a7e72a',
  tattooAbout: '1612459285736-d8b5f5c5ed6d',
  tattooG1:    '1598971861713-54ad16a7e72a',
  tattooG2:    '1612459285736-d8b5f5c5ed6d',
  tattooG3:    '1598971861713-54ad16a7e72a',
  tattooG4:    '1612459285736-d8b5f5c5ed6d',
  tattooG5:    '1598971861713-54ad16a7e72a',
  tattooG6:    '1612459285736-d8b5f5c5ed6d',
  // Coffee
  coffeeHero:  '1495474472287-4d71bcdd2085',
  coffeeAbout: '1509042239860-f550ce710b93',
  coffeeG1:    '1495474472287-4d71bcdd2085',
  coffeeG2:    '1509042239860-f550ce710b93',
  coffeeG3:    '1447933601428-ff0569629719',
  coffeeG4:    '1521302080334-4dbbe7a73e17',
  coffeeG5:    '1461023058943-07fcbe16d735',
  coffeeG6:    '1499955085172-a104c9463ece',
  // Default
  defHero:     '1507003211169-0a1dd7228f2d',
  defAbout:    '1521737852567-6949f3f9f2b5',
  defG1:       '1507003211169-0a1dd7228f2d',
  defG2:       '1521737852567-6949f3f9f2b5',
  defG3:       '1507003211169-0a1dd7228f2d',
  defG4:       '1521737852567-6949f3f9f2b5',
  defG5:       '1507003211169-0a1dd7228f2d',
  defG6:       '1521737852567-6949f3f9f2b5',
}

function p(id: string) {
  return `https://images.unsplash.com/photo-${id}`
}

// ─── THEME BASES ──────────────────────────────────────────────────────────────

const BEAUTY: CategoryConfig = {
  gradient:   'from-rose-500 via-pink-500 to-fuchsia-600',
  heroBg:     'bg-gradient-to-br from-rose-950 via-pink-900 to-fuchsia-950',
  heroPhoto:  p(PHOTOS.hairHero),
  aboutPhoto: p(PHOTOS.hairAbout),
  accentClass:'text-rose-500',
  badgeClass: 'bg-rose-50 text-rose-700 border border-rose-200',
  tagline:    'Where Beauty Meets Excellence',
  subtext:    'Premium beauty services crafted for the modern South Florida lifestyle.',
  ctaText:    'Book Your Appointment',
  stat1: { value: '8+', label: 'Years Experience' },
  stat2: { value: '2,000+', label: 'Happy Clients' },
  stat3: { value: '5★', label: 'Average Rating' },
  services: [
    { icon: '✂️', title: 'Precision Cuts', desc: 'Expert cuts tailored to your face shape and personal style' },
    { icon: '🎨', title: 'Color & Highlights', desc: 'Balayage, ombré, and vibrant color transformations' },
    { icon: '💨', title: 'Blowout & Styling', desc: 'Professional blowouts and special occasion styles' },
    { icon: '✨', title: 'Keratin Treatments', desc: 'Smooth, frizz-free hair that lasts for months' },
    { icon: '💆', title: 'Scalp Treatments', desc: 'Revitalizing treatments for healthy hair growth' },
    { icon: '👑', title: 'Updos & Braids', desc: 'Stunning styles for weddings and special events' },
  ],
  testimonials: [
    { name: 'Maria G.', text: 'Absolutely love my results! The attention to detail is unmatched. I get compliments everywhere I go.', rating: 5 },
    { name: 'Jennifer L.', text: 'Best experience I\'ve had in South Florida. Professional, talented, and welcoming. 10/10!', rating: 5 },
    { name: 'Ashley R.', text: 'My transformation came out exactly as I envisioned. Will definitely be a regular client!', rating: 5 },
  ],
  gallery: [
    { label: 'Color Transformations', photo: p(PHOTOS.hairG1) },
    { label: 'Precision Cuts',        photo: p(PHOTOS.hairG2) },
    { label: 'Styling Sessions',       photo: p(PHOTOS.hairG3) },
    { label: 'Special Occasions',      photo: p(PHOTOS.hairG4) },
    { label: 'Treatments',             photo: p(PHOTOS.hairG5) },
    { label: 'Client Favorites',       photo: p(PHOTOS.hairG6) },
  ],
  hours: ['Mon–Fri: 9am – 7pm', 'Saturday: 9am – 6pm', 'Sunday: 10am – 4pm'],
}

const FOOD: CategoryConfig = {
  gradient:   'from-amber-400 via-orange-500 to-red-500',
  heroBg:     'bg-gradient-to-br from-amber-950 via-orange-900 to-red-950',
  heroPhoto:  p(PHOTOS.foodHero),
  aboutPhoto: p(PHOTOS.foodAbout),
  accentClass:'text-amber-600',
  badgeClass: 'bg-amber-50 text-amber-700 border border-amber-200',
  tagline:    'Crafted With Passion, Served With Love',
  subtext:    'From everyday indulgences to unforgettable catered events — all made from scratch.',
  ctaText:    'Place Your Order',
  stat1: { value: '5+', label: 'Years in Business' },
  stat2: { value: '500+', label: 'Orders Fulfilled' },
  stat3: { value: '100%', label: 'From Scratch' },
  services: [
    { icon: '🎂', title: 'Custom Creations', desc: 'Made-to-order for birthdays, weddings, and celebrations' },
    { icon: '🍽️', title: 'Event Catering', desc: 'Full-service catering for events of any size' },
    { icon: '📦', title: 'Weekly Meal Prep', desc: 'Fresh, chef-prepared meals ready to heat and enjoy' },
    { icon: '🎉', title: 'Private Events', desc: 'Intimate dinners and private cooking experiences' },
    { icon: '🚚', title: 'Delivery Available', desc: 'Fresh orders delivered straight to your door' },
    { icon: '⭐', title: 'Specialty Menu', desc: 'Seasonal specials and rotating menu items' },
  ],
  testimonials: [
    { name: 'Carlos M.', text: 'The flavors are out of this world. Ordered for my wife\'s birthday and everyone was blown away!', rating: 5 },
    { name: 'Stephanie R.', text: 'Best catered event we\'ve ever had. Punctual, professional, and absolutely delicious.', rating: 5 },
    { name: 'David P.', text: 'I order weekly meal prep every week. Healthy, fresh, and genuinely tasty. Highly recommend!', rating: 5 },
  ],
  gallery: [
    { label: 'Signature Dishes',  photo: p(PHOTOS.foodG1) },
    { label: 'Custom Orders',     photo: p(PHOTOS.foodG2) },
    { label: 'Event Setups',      photo: p(PHOTOS.foodG3) },
    { label: 'Sweet Treats',      photo: p(PHOTOS.foodG4) },
    { label: 'Fresh Ingredients', photo: p(PHOTOS.foodG5) },
    { label: 'Seasonal Specials', photo: p(PHOTOS.foodG6) },
  ],
  hours: ['Mon–Fri: 8am – 8pm', 'Saturday: 9am – 9pm', 'Sunday: 10am – 6pm'],
}

const FITNESS: CategoryConfig = {
  gradient:   'from-emerald-400 via-teal-500 to-cyan-600',
  heroBg:     'bg-gradient-to-br from-emerald-950 via-teal-900 to-cyan-950',
  heroPhoto:  p(PHOTOS.fitHero),
  aboutPhoto: p(PHOTOS.fitAbout),
  accentClass:'text-emerald-600',
  badgeClass: 'bg-emerald-50 text-emerald-700 border border-emerald-200',
  tagline:    'Transform Your Body. Elevate Your Life.',
  subtext:    'Personalized fitness and wellness programs designed to help you reach your full potential.',
  ctaText:    'Start Your Journey',
  stat1: { value: '10+', label: 'Years Experience' },
  stat2: { value: '300+', label: 'Clients Trained' },
  stat3: { value: '98%', label: 'Client Retention' },
  services: [
    { icon: '💪', title: '1-on-1 Training', desc: 'Customized programs built around your goals and schedule' },
    { icon: '🧘', title: 'Mind & Body', desc: 'Yoga, pilates, and mindfulness for total wellness' },
    { icon: '🏃', title: 'Group Sessions', desc: 'Energizing group workouts that keep you motivated' },
    { icon: '🥗', title: 'Nutrition Coaching', desc: 'Practical nutrition guidance to fuel your progress' },
    { icon: '📊', title: 'Progress Tracking', desc: 'Regular assessments and measurable goal-setting' },
    { icon: '♾️', title: 'Online Programs', desc: 'Train anywhere with our digital fitness packages' },
  ],
  testimonials: [
    { name: 'Tanya B.', text: 'Down 25 lbs in 4 months! The personalized approach made all the difference. Life changing.', rating: 5 },
    { name: 'Marcus W.', text: 'Best trainer I\'ve ever had. Knowledgeable, motivating, and genuinely cares about results.', rating: 5 },
    { name: 'Lisa N.', text: 'I\'ve tried everything. This is the first program that actually stuck. I\'m stronger than ever!', rating: 5 },
  ],
  gallery: [
    { label: 'Training Sessions', photo: p(PHOTOS.fitG1) },
    { label: 'Group Classes',     photo: p(PHOTOS.fitG2) },
    { label: 'Cardio & Endurance',photo: p(PHOTOS.fitG3) },
    { label: 'Flexibility Work',  photo: p(PHOTOS.fitG4) },
    { label: '1-on-1 Sessions',   photo: p(PHOTOS.fitG5) },
    { label: 'Outdoor Training',  photo: p(PHOTOS.fitG6) },
  ],
  hours: ['Mon–Fri: 6am – 9pm', 'Saturday: 7am – 7pm', 'Sunday: 8am – 5pm'],
}

const SPA: CategoryConfig = {
  gradient:   'from-teal-500 via-cyan-500 to-sky-600',
  heroBg:     'bg-gradient-to-br from-teal-950 via-cyan-900 to-sky-950',
  heroPhoto:  p(PHOTOS.spaHero),
  aboutPhoto: p(PHOTOS.spaAbout),
  accentClass:'text-teal-600',
  badgeClass: 'bg-teal-50 text-teal-700 border border-teal-200',
  tagline:    'Relax. Restore. Rejuvenate.',
  subtext:    'Therapeutic massage and luxury wellness services designed to melt away tension and restore balance.',
  ctaText:    'Book Your Session',
  stat1: { value: '12+', label: 'Years Experience' },
  stat2: { value: '5,000+', label: 'Sessions Completed' },
  stat3: { value: '5★', label: 'Rated on Google' },
  services: [
    { icon: '🌊', title: 'Swedish Massage', desc: 'Full body relaxation with long, flowing strokes' },
    { icon: '💆', title: 'Deep Tissue', desc: 'Targeted pressure to release chronic muscle tension' },
    { icon: '🔥', title: 'Hot Stone Therapy', desc: 'Warming stones for deep relaxation and healing' },
    { icon: '🌿', title: 'Aromatherapy', desc: 'Essential oils chosen to enhance your experience' },
    { icon: '🤰', title: 'Prenatal Massage', desc: 'Safe, specialized massage for expecting mothers' },
    { icon: '🏃', title: 'Sports Recovery', desc: 'Performance-focused massage for active bodies' },
  ],
  testimonials: [
    { name: 'Rachel H.', text: 'The most relaxing experience I\'ve ever had. I walked in tense and walked out feeling brand new.', rating: 5 },
    { name: 'Kevin M.', text: 'Best massage therapist in South Florida, hands down. The hot stone session was transformative.', rating: 5 },
    { name: 'Angela S.', text: 'I come every month. It\'s my self-care ritual. The staff is incredible and the atmosphere is perfect.', rating: 5 },
  ],
  gallery: [
    { label: 'Massage Suite',   photo: p(PHOTOS.spaG1) },
    { label: 'Spa Treatments',  photo: p(PHOTOS.spaG2) },
    { label: 'Relaxation Room', photo: p(PHOTOS.spaG3) },
    { label: 'Body Treatments', photo: p(PHOTOS.spaG4) },
    { label: 'Aromatherapy',    photo: p(PHOTOS.spaG5) },
    { label: 'Wellness Suite',  photo: p(PHOTOS.spaG6) },
  ],
  hours: ['Mon–Fri: 9am – 8pm', 'Saturday: 9am – 7pm', 'Sunday: 10am – 5pm'],
}

const HOME: CategoryConfig = {
  gradient:   'from-blue-500 via-indigo-500 to-violet-600',
  heroBg:     'bg-gradient-to-br from-blue-950 via-indigo-900 to-violet-950',
  heroPhoto:  p(PHOTOS.homeHero),
  aboutPhoto: p(PHOTOS.homeAbout),
  accentClass:'text-blue-600',
  badgeClass: 'bg-blue-50 text-blue-700 border border-blue-200',
  tagline:    'Your Home. Our Priority.',
  subtext:    'Reliable, professional home services that deliver results you can see — and trust.',
  ctaText:    'Get a Free Quote',
  stat1: { value: '7+', label: 'Years in Business' },
  stat2: { value: '1,200+', label: 'Homes Serviced' },
  stat3: { value: '100%', label: 'Satisfaction Rate' },
  services: [
    { icon: '✅', title: 'Residential Services', desc: 'Complete home care tailored to your specific needs' },
    { icon: '🏠', title: 'Regular Maintenance', desc: 'Scheduled plans to keep your property pristine' },
    { icon: '⚡', title: 'Same-Day Service', desc: 'Emergency and same-day appointments available' },
    { icon: '🛡️', title: 'Satisfaction Guarantee', desc: 'We\'re not done until you\'re 100% happy' },
    { icon: '📋', title: 'Free Estimates', desc: 'No-obligation quotes with transparent pricing' },
    { icon: '⭐', title: 'Licensed & Insured', desc: 'Fully vetted, background-checked professionals' },
  ],
  testimonials: [
    { name: 'Robert K.', text: 'Exceptional quality and incredibly reliable. My home has never looked better. Highly recommend!', rating: 5 },
    { name: 'Sandra M.', text: 'Finally found a service I can trust. Punctual, professional, and thorough every single time.', rating: 5 },
    { name: 'James T.', text: 'Competitive pricing and outstanding results. They went above and beyond on every task.', rating: 5 },
  ],
  gallery: [
    { label: 'Before & After',      photo: p(PHOTOS.homeG1) },
    { label: 'Residential Projects', photo: p(PHOTOS.homeG2) },
    { label: 'Our Team at Work',     photo: p(PHOTOS.homeG3) },
    { label: 'Pristine Results',     photo: p(PHOTOS.homeG4) },
    { label: 'Outdoor Services',     photo: p(PHOTOS.homeG5) },
    { label: 'Completed Projects',   photo: p(PHOTOS.homeG6) },
  ],
  hours: ['Mon–Fri: 7am – 7pm', 'Saturday: 8am – 5pm', 'Sunday: By Appointment'],
}

const CREATIVE: CategoryConfig = {
  gradient:   'from-violet-500 via-purple-600 to-fuchsia-600',
  heroBg:     'bg-gradient-to-br from-violet-950 via-purple-900 to-fuchsia-950',
  heroPhoto:  p(PHOTOS.eventHero),
  aboutPhoto: p(PHOTOS.eventAbout),
  accentClass:'text-violet-600',
  badgeClass: 'bg-violet-50 text-violet-700 border border-violet-200',
  tagline:    'Creating Moments That Last Forever',
  subtext:    'Artful, professional creative services that capture the essence of your most important moments.',
  ctaText:    'Check Availability',
  stat1: { value: '6+', label: 'Years Experience' },
  stat2: { value: '400+', label: 'Events Covered' },
  stat3: { value: '5★', label: 'Rated on Google' },
  services: [
    { icon: '📸', title: 'Photography', desc: 'Stunning imagery crafted with an artistic eye and professional gear' },
    { icon: '🎬', title: 'Videography', desc: 'Cinematic productions that tell your story beautifully' },
    { icon: '🎵', title: 'Event Entertainment', desc: 'Premium entertainment that elevates any event' },
    { icon: '💍', title: 'Weddings & Milestones', desc: 'Dedicated packages for life\'s biggest occasions' },
    { icon: '🏢', title: 'Corporate Events', desc: 'Professional coverage for business and brand events' },
    { icon: '🎨', title: 'Creative Direction', desc: 'Full creative consultation and brand storytelling' },
  ],
  testimonials: [
    { name: 'Emily & Jason', text: 'Our photos are absolutely breathtaking. We cry every time we look at them. Thank you!', rating: 5 },
    { name: 'Nicole R.', text: 'Hired for our company event. The professionalism and quality blew everyone away. Already rebooked!', rating: 5 },
    { name: 'Antonio V.', text: 'The DJ kept the energy going all night. Our guests are still talking about the party!', rating: 5 },
  ],
  gallery: [
    { label: 'Event Portfolio',    photo: p(PHOTOS.eventG1) },
    { label: 'Photography Work',   photo: p(PHOTOS.eventG2) },
    { label: 'Elegant Events',     photo: p(PHOTOS.eventG3) },
    { label: 'Celebrations',       photo: p(PHOTOS.eventG4) },
    { label: 'Weddings',           photo: p(PHOTOS.eventG5) },
    { label: 'Corporate Coverage', photo: p(PHOTOS.eventG6) },
  ],
  hours: ['Mon–Fri: 9am – 8pm', 'Weekends: By Appointment', 'Events: 24/7 Available'],
}

const TRADES: CategoryConfig = {
  gradient:   'from-orange-400 via-amber-500 to-yellow-500',
  heroBg:     'bg-gradient-to-br from-orange-950 via-amber-900 to-yellow-950',
  heroPhoto:  p(PHOTOS.tradeHero),
  aboutPhoto: p(PHOTOS.tradeAbout),
  accentClass:'text-orange-600',
  badgeClass: 'bg-orange-50 text-orange-700 border border-orange-200',
  tagline:    'Expert Service You Can Count On',
  subtext:    'Licensed, experienced trade professionals serving South Florida with integrity and skill.',
  ctaText:    'Get a Free Quote',
  stat1: { value: '15+', label: 'Years Experience' },
  stat2: { value: '2,000+', label: 'Jobs Completed' },
  stat3: { value: 'A+', label: 'BBB Rating' },
  services: [
    { icon: '🔧', title: 'Repairs & Fixes', desc: 'Fast, reliable repairs with quality parts and craftsmanship' },
    { icon: '🏗️', title: 'Installations', desc: 'Professional equipment and system installations' },
    { icon: '🔍', title: 'Inspections', desc: 'Thorough diagnostics to catch issues before they escalate' },
    { icon: '⚡', title: 'Emergency Service', desc: '24/7 emergency response for urgent situations' },
    { icon: '📋', title: 'Free Estimates', desc: 'Honest, detailed quotes with no hidden fees' },
    { icon: '🛡️', title: 'Warranty Included', desc: 'All work is guaranteed — your peace of mind matters' },
  ],
  testimonials: [
    { name: 'Frank D.', text: 'Called on a Sunday with an emergency. They came within 2 hours and fixed everything perfectly.', rating: 5 },
    { name: 'Patricia H.', text: 'Honest pricing, clean work, and zero hassle. These are the professionals you want.', rating: 5 },
    { name: 'Kevin S.', text: 'Installed everything on schedule and under budget. Will definitely use them again.', rating: 5 },
  ],
  gallery: [
    { label: 'Completed Projects', photo: p(PHOTOS.tradeG1) },
    { label: 'Commercial Work',    photo: p(PHOTOS.tradeG2) },
    { label: 'Residential Jobs',   photo: p(PHOTOS.tradeG3) },
    { label: 'Installations',      photo: p(PHOTOS.tradeG4) },
    { label: 'Repairs',            photo: p(PHOTOS.tradeG5) },
    { label: 'Our Work',           photo: p(PHOTOS.tradeG6) },
  ],
  hours: ['Mon–Fri: 7am – 6pm', 'Saturday: 8am – 4pm', '24/7 Emergency Line Available'],
}

const DEFAULT: CategoryConfig = {
  gradient:   'from-slate-600 via-gray-700 to-zinc-800',
  heroBg:     'bg-gradient-to-br from-slate-950 via-gray-900 to-zinc-950',
  heroPhoto:  p(PHOTOS.defHero),
  aboutPhoto: p(PHOTOS.defAbout),
  accentClass:'text-slate-600',
  badgeClass: 'bg-slate-50 text-slate-700 border border-slate-200',
  tagline:    'Professional Services, Personal Touch',
  subtext:    'Trusted local services built on experience, integrity, and a commitment to your satisfaction.',
  ctaText:    'Get in Touch',
  stat1: { value: '5+', label: 'Years in Business' },
  stat2: { value: '300+', label: 'Clients Served' },
  stat3: { value: '5★', label: 'Average Rating' },
  services: [
    { icon: '⭐', title: 'Premium Quality', desc: 'Every service delivered at the highest standard' },
    { icon: '🤝', title: 'Personalized Care', desc: 'Tailored solutions for each client\'s unique needs' },
    { icon: '⚡', title: 'Fast Turnaround', desc: 'Efficient service without sacrificing quality' },
    { icon: '💰', title: 'Fair Pricing', desc: 'Competitive rates with complete transparency' },
    { icon: '📞', title: 'Always Available', desc: 'Responsive communication from first call to finish' },
    { icon: '🛡️', title: 'Satisfaction Guaranteed', desc: 'We stand behind every job we do' },
  ],
  testimonials: [
    { name: 'Laura M.', text: 'Exceptional service from start to finish. Truly a cut above the rest. I recommend them to everyone!', rating: 5 },
    { name: 'Michael B.', text: 'Professional, reliable, and fairly priced. Exactly what I was looking for. Very happy!', rating: 5 },
    { name: 'Angela C.', text: 'They made the whole process so easy. I felt completely taken care of. Amazing experience!', rating: 5 },
  ],
  gallery: [
    { label: 'Our Work',        photo: p(PHOTOS.defG1) },
    { label: 'Client Projects', photo: p(PHOTOS.defG2) },
    { label: 'Completed Jobs',  photo: p(PHOTOS.defG3) },
    { label: 'Before & After',  photo: p(PHOTOS.defG4) },
    { label: 'Portfolio',       photo: p(PHOTOS.defG5) },
    { label: 'Team at Work',    photo: p(PHOTOS.defG6) },
  ],
  hours: ['Mon–Fri: 9am – 6pm', 'Saturday: 10am – 4pm', 'Sunday: Closed'],
}

// ─── CATEGORY MAP ─────────────────────────────────────────────────────────────

const BARBER: CategoryConfig = { ...BEAUTY, heroPhoto: p(PHOTOS.barberHero), aboutPhoto: p(PHOTOS.barberAbout), gradient: 'from-blue-700 via-slate-700 to-gray-800', heroBg: 'bg-gradient-to-br from-blue-950 via-slate-900 to-gray-950', accentClass: 'text-blue-600', badgeClass: 'bg-blue-50 text-blue-700 border border-blue-200', tagline: 'Sharp Cuts. Clean Fades. Every Time.', subtext: 'Classic barbering and modern styles — where every cut is a craft.', ctaText: 'Book Your Cut', stat1: { value: '10+', label: 'Years Experience' }, stat2: { value: '50+', label: 'Cuts Per Week' }, stat3: { value: '5★', label: 'Rated on Google' }, services: [{ icon: '✂️', title: 'Precision Cuts', desc: 'Fades, tapers, and classics executed with skill' }, { icon: '🪒', title: 'Hot Towel Shave', desc: 'Traditional straight razor shave for a smooth finish' }, { icon: '🧔', title: 'Beard Trims', desc: 'Shape and clean edges for a polished look' }, { icon: '👶', title: 'Kids Cuts', desc: 'Patient, friendly service for younger clients' }, { icon: '💈', title: 'Old School Styling', desc: 'Pompadours, slick backs, and classic looks' }, { icon: '⭐', title: 'Walk-Ins Welcome', desc: 'No appointment needed — first come, first served' }], gallery: [{ label: 'Precision Fades', photo: p(PHOTOS.barberG1) }, { label: 'Classic Cuts', photo: p(PHOTOS.barberG2) }, { label: 'Beard Styling', photo: p(PHOTOS.barberG3) }, { label: 'Shop Interior', photo: p(PHOTOS.barberG4) }, { label: 'Hot Shaves', photo: p(PHOTOS.barberG5) }, { label: 'Client Results', photo: p(PHOTOS.barberG6) }] }

const NAIL_SALON: CategoryConfig = { ...BEAUTY, heroPhoto: p(PHOTOS.nailHero), aboutPhoto: p(PHOTOS.nailAbout), gradient: 'from-pink-400 via-rose-500 to-fuchsia-500', tagline: 'Nails That Speak For You', subtext: 'Flawless nail care, artistic designs, and premium products — all in one place.', ctaText: 'Book Your Nail Session', stat1: { value: '6+', label: 'Years Experience' }, stat2: { value: '1,500+', label: 'Nail Sets Done' }, stat3: { value: '5★', label: 'Rated on Yelp' }, services: [{ icon: '💅', title: 'Manicure & Pedicure', desc: 'Classic and spa treatments for hands and feet' }, { icon: '🌸', title: 'Gel & Shellac', desc: 'Long-lasting chip-free color that shines for weeks' }, { icon: '💎', title: 'Acrylic & Dip Sets', desc: 'Full sets and fills with flawless finish' }, { icon: '🎨', title: 'Nail Art', desc: 'Custom designs from minimal to intricate' }, { icon: '✨', title: 'Builder Gel', desc: 'Strengthening overlays for natural nail extension' }, { icon: '👑', title: 'Luxury Spa Add-ons', desc: 'Paraffin, massages, and premium treatments' }], gallery: [{ label: 'Nail Art Designs', photo: p(PHOTOS.nailG1) }, { label: 'Gel Sets', photo: p(PHOTOS.nailG2) }, { label: 'Acrylics', photo: p(PHOTOS.nailG3) }, { label: 'Pedicure Suite', photo: p(PHOTOS.nailG4) }, { label: 'Custom Art', photo: p(PHOTOS.nailG5) }, { label: 'Client Favorites', photo: p(PHOTOS.nailG6) }] }

const LASH: CategoryConfig = { ...BEAUTY, heroPhoto: p(PHOTOS.lashHero), aboutPhoto: p(PHOTOS.lashAbout), gradient: 'from-rose-400 via-pink-600 to-violet-600', tagline: 'Wake Up Flawless Every Day', subtext: 'Professionally applied lash extensions that transform your look — no mascara required.', ctaText: 'Book Your Lash Appointment', services: [{ icon: '👁️', title: 'Classic Lashes', desc: 'One extension per natural lash for a natural look' }, { icon: '✨', title: 'Volume Lashes', desc: 'Fluffy, full fans for a dramatic, glamorous look' }, { icon: '💎', title: 'Mega Volume', desc: 'Maximum fullness for the boldest possible look' }, { icon: '🌊', title: 'Hybrid Lashes', desc: 'The perfect blend of classic and volume' }, { icon: '🔄', title: 'Lash Fills', desc: 'Maintenance fills every 2–3 weeks' }, { icon: '🌿', title: 'Lash Lift & Tint', desc: 'Lift your natural lashes without extensions' }], gallery: [{ label: 'Classic Sets', photo: p(PHOTOS.lashG1) }, { label: 'Volume Lashes', photo: p(PHOTOS.lashG2) }, { label: 'Mega Volume', photo: p(PHOTOS.lashG3) }, { label: 'Hybrid Lashes', photo: p(PHOTOS.lashG4) }, { label: 'Lash Lifts', photo: p(PHOTOS.lashG5) }, { label: 'Before & After', photo: p(PHOTOS.lashG6) }] }

const BRAIDS: CategoryConfig = { ...BEAUTY, heroPhoto: p(PHOTOS.braidHero), aboutPhoto: p(PHOTOS.braidAbout), gradient: 'from-amber-600 via-orange-600 to-rose-600', heroBg: 'bg-gradient-to-br from-amber-950 via-orange-900 to-rose-950', accentClass: 'text-amber-600', badgeClass: 'bg-amber-50 text-amber-700 border border-amber-200', tagline: 'Braids That Tell Your Story', subtext: 'Expert braiding and natural hair services celebrating your unique beauty and culture.', ctaText: 'Book Your Braids', services: [{ icon: '👑', title: 'Box Braids', desc: 'Classic and knotless box braids in any length and size' }, { icon: '🌿', title: 'Cornrows', desc: 'Feed-in and traditional cornrow styles' }, { icon: '✨', title: 'Senegalese Twists', desc: 'Lightweight rope twists for a protective chic look' }, { icon: '🌊', title: 'Faux Locs', desc: 'Loc-inspired style with beautiful texture and flow' }, { icon: '💎', title: 'Goddess Braids', desc: 'Large, elegant braids perfect for special occasions' }, { icon: '🧴', title: 'Hair Treatment', desc: 'Pre-braid care and scalp treatments for healthy hair' }], gallery: [{ label: 'Box Braids', photo: p(PHOTOS.braidG1) }, { label: 'Cornrow Styles', photo: p(PHOTOS.braidG2) }, { label: 'Knotless Braids', photo: p(PHOTOS.braidG3) }, { label: 'Goddess Braids', photo: p(PHOTOS.braidG4) }, { label: 'Faux Locs', photo: p(PHOTOS.braidG5) }, { label: 'Protective Styles', photo: p(PHOTOS.braidG6) }] }

const YOGA: CategoryConfig = { ...FITNESS, heroPhoto: p(PHOTOS.yogaHero), aboutPhoto: p(PHOTOS.yogaAbout), gradient: 'from-sky-400 via-indigo-400 to-violet-500', heroBg: 'bg-gradient-to-br from-sky-950 via-indigo-900 to-violet-950', accentClass: 'text-sky-600', badgeClass: 'bg-sky-50 text-sky-700 border border-sky-200', tagline: 'Find Your Flow. Find Your Peace.', subtext: 'A welcoming space for all levels to explore yoga, build strength, and cultivate calm.', ctaText: 'Try Your First Class Free', gallery: [{ label: 'Morning Flow', photo: p(PHOTOS.yogaG1) }, { label: 'Group Classes', photo: p(PHOTOS.yogaG2) }, { label: 'Meditation', photo: p(PHOTOS.yogaG3) }, { label: 'Flexibility', photo: p(PHOTOS.yogaG4) }, { label: 'Hot Yoga', photo: p(PHOTOS.yogaG5) }, { label: 'Studio Space', photo: p(PHOTOS.yogaG6) }] }

const LAWN: CategoryConfig = { ...HOME, heroPhoto: p(PHOTOS.lawnHero), aboutPhoto: p(PHOTOS.lawnAbout), gradient: 'from-green-500 via-emerald-500 to-teal-600', heroBg: 'bg-gradient-to-br from-green-950 via-emerald-900 to-teal-950', accentClass: 'text-green-600', badgeClass: 'bg-green-50 text-green-700 border border-green-200', tagline: 'A Beautiful Lawn. Zero Hassle.', subtext: 'Professional lawn care that keeps your property looking its best year-round.', ctaText: 'Get a Free Lawn Quote', gallery: [{ label: 'Lush Lawns', photo: p(PHOTOS.lawnG1) }, { label: 'Landscaping', photo: p(PHOTOS.lawnG2) }, { label: 'Garden Design', photo: p(PHOTOS.lawnG3) }, { label: 'Lawn Care', photo: p(PHOTOS.lawnG4) }, { label: 'Maintenance', photo: p(PHOTOS.lawnG5) }, { label: 'Before & After', photo: p(PHOTOS.lawnG6) }] }

const POOL: CategoryConfig = { ...HOME, heroPhoto: p(PHOTOS.poolHero), aboutPhoto: p(PHOTOS.poolAbout), gradient: 'from-cyan-500 via-sky-500 to-blue-600', heroBg: 'bg-gradient-to-br from-cyan-950 via-sky-900 to-blue-950', accentClass: 'text-cyan-600', badgeClass: 'bg-cyan-50 text-cyan-700 border border-cyan-200', tagline: 'Crystal Clear Pools. All Year Round.', subtext: 'Complete pool maintenance and repair services that keep your pool sparkling and safe.', ctaText: 'Schedule Pool Service', gallery: [{ label: 'Pool Cleaning', photo: p(PHOTOS.poolG1) }, { label: 'Water Treatment', photo: p(PHOTOS.poolG2) }, { label: 'Equipment Service', photo: p(PHOTOS.poolG3) }, { label: 'Pool Repairs', photo: p(PHOTOS.poolG4) }, { label: 'Pool Maintenance', photo: p(PHOTOS.poolG5) }, { label: 'Pristine Results', photo: p(PHOTOS.poolG6) }] }

const WEDDING: CategoryConfig = { ...CREATIVE, heroPhoto: p(PHOTOS.weddingHero), aboutPhoto: p(PHOTOS.weddingAbout), gradient: 'from-rose-300 via-pink-400 to-fuchsia-500', heroBg: 'bg-gradient-to-br from-rose-950 via-pink-900 to-fuchsia-950', accentClass: 'text-rose-500', tagline: 'Your Perfect Day Awaits', subtext: 'Dedicated wedding planning that brings every detail of your dream wedding to life.', ctaText: 'Plan Your Wedding', gallery: [{ label: 'Ceremony Setup', photo: p(PHOTOS.weddingG1) }, { label: 'Reception', photo: p(PHOTOS.weddingG2) }, { label: 'Floral Design', photo: p(PHOTOS.weddingG3) }, { label: 'Wedding Details', photo: p(PHOTOS.weddingG4) }, { label: 'Bridal Portraits', photo: p(PHOTOS.weddingG5) }, { label: 'Celebrations', photo: p(PHOTOS.weddingG6) }] }

const DJ: CategoryConfig = { ...CREATIVE, heroPhoto: p(PHOTOS.djHero), aboutPhoto: p(PHOTOS.djAbout), gradient: 'from-indigo-500 via-purple-600 to-pink-600', heroBg: 'bg-gradient-to-br from-indigo-950 via-purple-900 to-pink-950', tagline: 'The Party Starts With Us', subtext: 'Professional DJ services that read the room and keep your guests dancing all night long.', ctaText: 'Book for Your Event', gallery: [{ label: 'Live DJ Sets', photo: p(PHOTOS.djG1) }, { label: 'Music & Events', photo: p(PHOTOS.djG2) }, { label: 'Party Crowds', photo: p(PHOTOS.djG3) }, { label: 'Event Lighting', photo: p(PHOTOS.djG4) }, { label: 'Dance Floor', photo: p(PHOTOS.djG5) }, { label: 'Live Performances', photo: p(PHOTOS.djG6) }] }

const PHOTO: CategoryConfig = { ...CREATIVE, heroPhoto: p(PHOTOS.photoHero), aboutPhoto: p(PHOTOS.photoAbout), gallery: [{ label: 'Portrait Sessions', photo: p(PHOTOS.photoG1) }, { label: 'Event Coverage', photo: p(PHOTOS.photoG2) }, { label: 'Studio Work', photo: p(PHOTOS.photoG3) }, { label: 'Outdoor Shoots', photo: p(PHOTOS.photoG4) }, { label: 'Commercial Work', photo: p(PHOTOS.photoG5) }, { label: 'Fine Art', photo: p(PHOTOS.photoG6) }], tagline: 'Capturing Life\'s Most Beautiful Moments', subtext: 'Award-winning photography and videography that tells your story with stunning clarity and artistry.', ctaText: 'View Portfolio & Book' }

const PET: CategoryConfig = { ...FITNESS, heroPhoto: p(PHOTOS.petHero), aboutPhoto: p(PHOTOS.petAbout), gradient: 'from-yellow-400 via-amber-400 to-orange-500', heroBg: 'bg-gradient-to-br from-yellow-950 via-amber-900 to-orange-950', accentClass: 'text-amber-600', badgeClass: 'bg-yellow-50 text-yellow-700 border border-yellow-200', tagline: 'Your Pup Deserves The Best', subtext: 'Professional grooming services to keep your furry family member looking and feeling amazing.', ctaText: 'Book a Grooming Session', stat1: { value: '8+', label: 'Years Experience' }, stat2: { value: '3,000+', label: 'Happy Pups' }, stat3: { value: '5★', label: 'Rated on Google' }, services: [{ icon: '🐾', title: 'Full Grooming', desc: 'Bath, blow dry, cut, and finishing for a complete transformation' }, { icon: '✂️', title: 'Breed Specific Cuts', desc: 'Precise cuts tailored to your dog\'s breed standard' }, { icon: '🛁', title: 'Baths & Blowouts', desc: 'Thorough cleaning with premium pet-safe products' }, { icon: '🦷', title: 'Teeth Cleaning', desc: 'Professional dental cleaning for fresh breath and health' }, { icon: '💅', title: 'Nail Trimming', desc: 'Safe, stress-free nail trims and grinding' }, { icon: '🌸', title: 'De-Shedding Treatment', desc: 'Remove excess fur and reduce shedding at home' }], gallery: [{ label: 'Happy Pups', photo: p(PHOTOS.petG1) }, { label: 'Grooming Sessions', photo: p(PHOTOS.petG2) }, { label: 'After Groom', photo: p(PHOTOS.petG3) }, { label: 'Bath Time', photo: p(PHOTOS.petG4) }, { label: 'Styling', photo: p(PHOTOS.petG5) }, { label: 'Smiling Dogs', photo: p(PHOTOS.petG6) }] }

const categoryMap: CategoryMap = {
  'hair salon':              BEAUTY,
  'barber shop':             BARBER,
  'nail salon':              NAIL_SALON,
  'lash extensions':         LASH,
  'eyebrow threading':       { ...LASH, tagline: 'Perfectly Shaped. Effortlessly Beautiful.', subtext: 'Precise threading and brow services for a clean, defined look.', ctaText: 'Book Your Brow Session' },
  'makeup artist':           { ...BEAUTY, heroPhoto: p(PHOTOS.makeupHero), aboutPhoto: p(PHOTOS.makeupAbout), tagline: 'Flawless Looks For Every Occasion', subtext: 'Professional makeup artistry that makes you look and feel your absolute best.', ctaText: 'Book Your Glam Session' },
  'esthetician':             { ...SPA, tagline: 'Glow From The Inside Out', subtext: 'Professional skincare treatments for a radiant, healthy complexion.', ctaText: 'Book Your Facial' },
  'waxing salon':            { ...BEAUTY, tagline: 'Smooth Skin. Lasting Results.', subtext: 'Professional waxing services for silky smooth skin that lasts weeks.', ctaText: 'Book Your Wax' },
  'microblading':            { ...LASH, tagline: 'Perfect Brows. Zero Effort.', subtext: 'Semi-permanent brow enhancement for natural, flawless brows that last up to 2 years.', ctaText: 'Book Your Consultation' },
  'permanent makeup':        { ...LASH, tagline: 'Wake Up Beautiful Every Day', subtext: 'Professional permanent makeup for brows, lips, and liner that looks flawless 24/7.', ctaText: 'Book Free Consultation' },
  'braiding salon':          BRAIDS,
  'loc stylist':             { ...BRAIDS, tagline: 'Your Loc Journey Starts Here', subtext: 'Expert loc installation, maintenance, and styling for every stage of your journey.', ctaText: 'Book Your Loc Appointment' },
  'spray tan':               { ...BEAUTY, tagline: 'Sun-Kissed Glow. Year Round.', subtext: 'Professional spray tan services for a flawless, natural-looking bronzed glow.', ctaText: 'Book Your Spray Tan' },
  'bakery':                  FOOD,
  'cake shop':               { ...FOOD, tagline: 'Cakes That Steal The Show', subtext: 'Custom designed cakes and sweet creations for every celebration — made from scratch with love.', ctaText: 'Order Your Custom Cake' },
  'custom cakes':            { ...FOOD, tagline: 'Cakes That Steal The Show', subtext: 'Custom designed cakes for every celebration — made from scratch with love.', ctaText: 'Order Your Custom Cake' },
  'food truck':              { ...FOOD, heroPhoto: p(PHOTOS.truckHero), aboutPhoto: p(PHOTOS.truckAbout), gallery: [{ label: 'Our Food Truck', photo: p(PHOTOS.truckG1) }, { label: 'Signature Dishes', photo: p(PHOTOS.truckG2) }, { label: 'Event Setups', photo: p(PHOTOS.truckG3) }, { label: 'Fresh Food', photo: p(PHOTOS.truckG4) }, { label: 'Menu Items', photo: p(PHOTOS.truckG5) }, { label: 'Happy Customers', photo: p(PHOTOS.truckG6) }], tagline: 'Fresh. Bold. On The Move.', subtext: 'Bringing chef-quality food straight to you — events, locations, and private bookings.', ctaText: 'Book Us For Your Event' },
  'catering':                { ...FOOD, tagline: 'Elevate Every Event With Great Food', subtext: 'Full-service catering that brings exceptional cuisine and hospitality to your next event.', ctaText: 'Request a Quote' },
  'personal chef':           { ...FOOD, tagline: 'Restaurant Quality. In Your Home.', subtext: 'Private chef experiences and meal services crafted around your lifestyle and taste.', ctaText: 'Book a Private Chef Session' },
  'meal prep':               { ...FOOD, tagline: 'Eat Better. Live Better.', subtext: 'Fresh, chef-prepared meals ready to heat and enjoy — saving you time without sacrificing flavor.', ctaText: 'Start Your Meal Plan' },
  'dessert shop':            { ...FOOD, tagline: 'Life Is Sweeter With Us', subtext: 'Handcrafted desserts and sweet creations that make every moment more special.', ctaText: 'Order Your Treats' },
  'cookie shop':             { ...FOOD, tagline: 'Fresh Baked. Made With Love.', subtext: 'Gourmet cookies and baked goods made from scratch — perfect for gifting or treating yourself.', ctaText: 'Order Fresh Cookies' },
  'personal trainer':        FITNESS,
  'yoga studio':             YOGA,
  'pilates studio':          { ...YOGA, tagline: 'Stronger Core. Better Life.', subtext: 'Pilates classes that build long, lean muscles and total body awareness for every fitness level.', ctaText: 'Book a Trial Class' },
  'massage therapy':         SPA,
  'day spa':                 { ...SPA, tagline: 'Your Sanctuary Of Calm', subtext: 'A full luxury spa experience designed to rejuvenate your mind, body, and spirit.', ctaText: 'Book Your Spa Day' },
  'wellness center':         { ...FITNESS, tagline: 'Whole Body Wellness', subtext: 'Integrative wellness services combining fitness, therapy, and holistic health.', ctaText: 'Start Your Wellness Journey' },
  'house cleaning service':  HOME,
  'maid service':            { ...HOME, tagline: 'A Spotless Home, Every Time', subtext: 'Reliable, thorough cleaning so you can focus on what matters most.', ctaText: 'Schedule Your Cleaning' },
  'lawn care':               LAWN,
  'landscaping':             { ...LAWN, tagline: 'Transform Your Outdoor Space', subtext: 'Creative landscaping designs that turn your property into a stunning outdoor retreat.', ctaText: 'Get a Free Design Quote' },
  'pressure washing':        { ...HOME, tagline: "Restore Your Property's Shine", subtext: 'Professional pressure washing that blasts away dirt, grime, and mold — restoring surfaces.', ctaText: 'Get a Free Wash Quote' },
  'pool service':            POOL,
  'pest control':            HOME,
  'handyman':                HOME,
  'painting contractor':     { ...HOME, gradient: 'from-yellow-400 via-amber-500 to-orange-500', heroBg: 'bg-gradient-to-br from-yellow-950 via-amber-900 to-orange-950', accentClass: 'text-yellow-600', tagline: 'Fresh Coat. Fresh Start.', subtext: 'Professional interior and exterior painting that transforms your space with flawless results.', ctaText: 'Get a Free Paint Quote' },
  'photographer':            PHOTO,
  'videographer':            { ...PHOTO, tagline: 'Cinematic Stories, Beautifully Told', subtext: 'Professional video production that captures the emotion and energy of your most important moments.', ctaText: 'Check Availability' },
  'event planner':           { ...CREATIVE, tagline: 'Your Dream Event, Flawlessly Executed', subtext: 'Full-service event planning that turns your vision into an unforgettable reality.', ctaText: 'Plan Your Event' },
  'wedding planner':         WEDDING,
  'DJ':                      DJ,
  'graphic designer':        { ...CREATIVE, tagline: 'Design That Makes An Impression', subtext: 'Creative graphic design that builds your brand identity and communicates your story visually.', ctaText: 'Start a Project' },
  'plumbing':                TRADES,
  'electrician':             { ...TRADES, tagline: 'Powering Your Home Safely', subtext: 'Licensed electricians delivering safe, reliable electrical solutions for homes and businesses.', ctaText: 'Get a Free Quote' },
  'HVAC':                    { ...TRADES, tagline: 'Stay Cool. Stay Comfortable.', subtext: 'Expert HVAC installation, repair, and maintenance to keep your space at the perfect temperature.', ctaText: 'Schedule HVAC Service' },
  'dog groomer':             PET,
  'pet grooming':            PET,
  'tattoo shop':             { ...CREATIVE, heroPhoto: p(PHOTOS.tattooHero), aboutPhoto: p(PHOTOS.tattooAbout), gradient: 'from-gray-600 via-slate-700 to-zinc-800', heroBg: 'bg-gradient-to-br from-gray-950 via-slate-900 to-zinc-950', tagline: 'Wear Your Art', subtext: 'Custom tattoo designs crafted by experienced artists who take your vision seriously.', ctaText: 'Book a Consultation', gallery: [{ label: 'Custom Designs', photo: p(PHOTOS.tattooG1) }, { label: 'Blackwork', photo: p(PHOTOS.tattooG2) }, { label: 'Color Work', photo: p(PHOTOS.tattooG3) }, { label: 'Fine Line', photo: p(PHOTOS.tattooG4) }, { label: 'Portraits', photo: p(PHOTOS.tattooG5) }, { label: 'Studio', photo: p(PHOTOS.tattooG6) }] },
  'alterations':             { ...DEFAULT, tagline: 'The Perfect Fit Is Everything', subtext: 'Expert alterations and tailoring that make every garment look and feel custom-made for you.', ctaText: 'Bring In Your Garment' },
  'notary public':           DEFAULT,
  'tax preparation':         { ...DEFAULT, gradient: 'from-blue-600 via-indigo-600 to-slate-700', heroBg: 'bg-gradient-to-br from-blue-950 via-indigo-900 to-slate-950', accentClass: 'text-blue-600', tagline: 'Keep More. Stress Less.', subtext: 'Professional tax preparation and planning that maximizes your refund and keeps you compliant.', ctaText: 'Book a Tax Consultation' },
}

export function getCategoryConfig(category: string): CategoryConfig {
  return categoryMap[category] ?? DEFAULT
}
