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
  gradient: string
}

export interface CategoryConfig {
  gradient: string
  heroBg: string
  accentClass: string
  badgeClass: string
  tagline: string
  subtext: string
  ctaText: string
  services: Service[]
  testimonials: Testimonial[]
  gallery: GalleryItem[]
  hours: string[]
}

type CategoryMap = Record<string, CategoryConfig>

const BEAUTY: CategoryConfig = {
  gradient: 'from-rose-500 via-pink-500 to-fuchsia-600',
  heroBg: 'bg-gradient-to-br from-rose-950 via-pink-900 to-fuchsia-950',
  accentClass: 'text-rose-400',
  badgeClass: 'bg-rose-100 text-rose-700',
  tagline: 'Where Beauty Meets Excellence',
  subtext: 'Premium beauty services crafted for the modern South Florida lifestyle.',
  ctaText: 'Book Your Appointment',
  services: [
    { icon: '✂️', title: 'Precision Cuts', desc: 'Expert cuts tailored to your face shape and personal style' },
    { icon: '🎨', title: 'Color & Highlights', desc: 'Balayage, ombré, and vibrant color transformations' },
    { icon: '💨', title: 'Blowout & Styling', desc: 'Professional blowouts and special occasion styles' },
    { icon: '✨', title: 'Treatments', desc: 'Deep conditioning, keratin, and restorative treatments' },
    { icon: '💆', title: 'Scalp Care', desc: 'Revitalizing scalp treatments for healthy hair growth' },
    { icon: '👑', title: 'Updos & Braids', desc: 'Stunning styles for weddings and special events' },
  ],
  testimonials: [
    { name: 'Maria G.', text: 'Absolutely love my results! The attention to detail is unmatched. I get compliments everywhere I go.', rating: 5 },
    { name: 'Jennifer L.', text: 'Best experience I\'ve had in South Florida. Professional, talented, and welcoming. 10/10!', rating: 5 },
    { name: 'Ashley R.', text: 'My transformation came out exactly as I envisioned. Will definitely be a regular client!', rating: 5 },
  ],
  gallery: [
    { label: 'Color Transformations', gradient: 'from-rose-300 to-pink-500' },
    { label: 'Precision Cuts', gradient: 'from-fuchsia-300 to-rose-400' },
    { label: 'Styling Sessions', gradient: 'from-pink-400 to-fuchsia-500' },
    { label: 'Special Occasions', gradient: 'from-rose-400 to-pink-600' },
    { label: 'Treatments', gradient: 'from-fuchsia-400 to-violet-500' },
    { label: 'Client Favorites', gradient: 'from-pink-300 to-rose-500' },
  ],
  hours: ['Mon–Fri: 9am – 7pm', 'Saturday: 9am – 6pm', 'Sunday: 10am – 4pm'],
}

const FOOD: CategoryConfig = {
  gradient: 'from-amber-400 via-orange-500 to-red-500',
  heroBg: 'bg-gradient-to-br from-amber-950 via-orange-900 to-red-950',
  accentClass: 'text-amber-400',
  badgeClass: 'bg-amber-100 text-amber-700',
  tagline: 'Crafted With Passion, Served With Love',
  subtext: 'From everyday indulgences to unforgettable catered events — all made from scratch.',
  ctaText: 'Place Your Order',
  services: [
    { icon: '🎂', title: 'Custom Creations', desc: 'Made-to-order for birthdays, weddings, and celebrations' },
    { icon: '🍽️', title: 'Event Catering', desc: 'Full-service catering for events of any size' },
    { icon: '📦', title: 'Weekly Meal Prep', desc: 'Healthy, chef-prepared meals delivered or picked up' },
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
    { label: 'Signature Dishes', gradient: 'from-amber-300 to-orange-400' },
    { label: 'Custom Orders', gradient: 'from-orange-400 to-red-400' },
    { label: 'Event Setups', gradient: 'from-red-300 to-orange-500' },
    { label: 'Sweet Treats', gradient: 'from-amber-400 to-yellow-400' },
    { label: 'Fresh Ingredients', gradient: 'from-orange-300 to-amber-500' },
    { label: 'Seasonal Specials', gradient: 'from-red-400 to-rose-400' },
  ],
  hours: ['Mon–Fri: 8am – 8pm', 'Saturday: 9am – 9pm', 'Sunday: 10am – 6pm'],
}

const FITNESS: CategoryConfig = {
  gradient: 'from-emerald-400 via-teal-500 to-cyan-600',
  heroBg: 'bg-gradient-to-br from-emerald-950 via-teal-900 to-cyan-950',
  accentClass: 'text-emerald-400',
  badgeClass: 'bg-emerald-100 text-emerald-700',
  tagline: 'Transform Your Body. Elevate Your Life.',
  subtext: 'Personalized fitness and wellness programs designed to help you reach your full potential.',
  ctaText: 'Start Your Journey',
  services: [
    { icon: '💪', title: '1-on-1 Training', desc: 'Customized programs built around your goals and schedule' },
    { icon: '🧘', title: 'Mind & Body', desc: 'Yoga, pilates, and mindfulness for total wellness' },
    { icon: '🏃', title: 'Group Sessions', desc: 'Energizing group workouts that keep you motivated' },
    { icon: '🥗', title: 'Nutrition Coaching', desc: 'Practical nutrition guidance to fuel your progress' },
    { icon: '📊', title: 'Progress Tracking', desc: 'Regular assessments and goal-setting sessions' },
    { icon: '♾️', title: 'Online Programs', desc: 'Train anywhere with our digital fitness packages' },
  ],
  testimonials: [
    { name: 'Tanya B.', text: 'Down 25 lbs in 4 months! The personalized approach made all the difference. Life changing.', rating: 5 },
    { name: 'Marcus W.', text: 'Best trainer I\'ve ever had. Knowledgeable, motivating, and genuinely cares about your results.', rating: 5 },
    { name: 'Lisa N.', text: 'I\'ve tried everything. This is the first program that actually stuck. I\'m stronger than ever!', rating: 5 },
  ],
  gallery: [
    { label: 'Training Sessions', gradient: 'from-emerald-300 to-teal-500' },
    { label: 'Group Classes', gradient: 'from-teal-400 to-cyan-500' },
    { label: 'Transformations', gradient: 'from-cyan-300 to-emerald-500' },
    { label: 'Yoga & Pilates', gradient: 'from-emerald-400 to-green-500' },
    { label: 'Outdoor Workouts', gradient: 'from-teal-300 to-emerald-600' },
    { label: 'Recovery & Spa', gradient: 'from-cyan-400 to-teal-600' },
  ],
  hours: ['Mon–Fri: 6am – 9pm', 'Saturday: 7am – 7pm', 'Sunday: 8am – 5pm'],
}

const HOME: CategoryConfig = {
  gradient: 'from-blue-500 via-indigo-500 to-violet-600',
  heroBg: 'bg-gradient-to-br from-blue-950 via-indigo-900 to-violet-950',
  accentClass: 'text-blue-400',
  badgeClass: 'bg-blue-100 text-blue-700',
  tagline: 'Your Home. Our Priority.',
  subtext: 'Reliable, professional home services that deliver results you can see — and trust.',
  ctaText: 'Get a Free Quote',
  services: [
    { icon: '✅', title: 'Residential Services', desc: 'Complete home care tailored to your specific needs' },
    { icon: '🏠', title: 'Regular Maintenance', desc: 'Scheduled service plans to keep your property pristine' },
    { icon: '⚡', title: 'Same-Day Service', desc: 'Emergency and same-day appointments available' },
    { icon: '🛡️', title: 'Satisfaction Guarantee', desc: 'We\'re not done until you\'re 100% happy' },
    { icon: '📋', title: 'Free Estimates', desc: 'No-obligation quotes with transparent pricing' },
    { icon: '⭐', title: 'Licensed & Insured', desc: 'Fully vetted, background-checked professionals' },
  ],
  testimonials: [
    { name: 'Robert K.', text: 'Exceptional quality work and incredibly reliable. My home has never looked better. Highly recommend!', rating: 5 },
    { name: 'Sandra M.', text: 'Finally found a service I can trust. Punctual, professional, and thorough every single time.', rating: 5 },
    { name: 'James T.', text: 'Competitive pricing and outstanding results. They went above and beyond on every task.', rating: 5 },
  ],
  gallery: [
    { label: 'Before & After', gradient: 'from-blue-300 to-indigo-500' },
    { label: 'Residential Projects', gradient: 'from-indigo-400 to-violet-500' },
    { label: 'Outdoor Services', gradient: 'from-blue-400 to-cyan-500' },
    { label: 'Interior Work', gradient: 'from-violet-300 to-blue-500' },
    { label: 'Commercial Jobs', gradient: 'from-blue-500 to-indigo-600' },
    { label: 'Completed Projects', gradient: 'from-indigo-300 to-blue-600' },
  ],
  hours: ['Mon–Fri: 7am – 7pm', 'Saturday: 8am – 5pm', 'Sunday: By Appointment'],
}

const CREATIVE: CategoryConfig = {
  gradient: 'from-violet-500 via-purple-600 to-fuchsia-600',
  heroBg: 'bg-gradient-to-br from-violet-950 via-purple-900 to-fuchsia-950',
  accentClass: 'text-violet-400',
  badgeClass: 'bg-violet-100 text-violet-700',
  tagline: 'Creating Moments That Last Forever',
  subtext: 'Artful, professional creative services that capture the essence of your most important moments.',
  ctaText: 'Check Availability',
  services: [
    { icon: '📸', title: 'Photography', desc: 'Stunning imagery crafted with an artistic eye and professional gear' },
    { icon: '🎬', title: 'Videography', desc: 'Cinematic productions that tell your story beautifully' },
    { icon: '🎵', title: 'Event Entertainment', desc: 'Premium entertainment that elevates any event' },
    { icon: '💍', title: 'Weddings & Milestones', desc: 'Dedicated packages for life\'s biggest occasions' },
    { icon: '🏢', title: 'Corporate Events', desc: 'Professional coverage for business and brand events' },
    { icon: '🎨', title: 'Creative Direction', desc: 'Full creative consultation and brand storytelling' },
  ],
  testimonials: [
    { name: 'Emily & Jason', text: 'Our wedding photos are absolutely breathtaking. We cry every time we look at them. Thank you!', rating: 5 },
    { name: 'Nicole R.', text: 'Hired for our company event. The professionalism and quality blew everyone away. Already rebooked!', rating: 5 },
    { name: 'Antonio V.', text: 'The DJ kept the energy going all night. Our guests are still talking about the party!', rating: 5 },
  ],
  gallery: [
    { label: 'Wedding Portfolio', gradient: 'from-violet-300 to-purple-500' },
    { label: 'Events Coverage', gradient: 'from-purple-400 to-fuchsia-500' },
    { label: 'Portrait Sessions', gradient: 'from-fuchsia-300 to-violet-600' },
    { label: 'Corporate Work', gradient: 'from-violet-400 to-indigo-500' },
    { label: 'Lifestyle Shoots', gradient: 'from-purple-300 to-pink-500' },
    { label: 'Behind the Scenes', gradient: 'from-fuchsia-400 to-purple-600' },
  ],
  hours: ['Mon–Fri: 9am – 8pm', 'Weekends: By Appointment', 'Events: 24/7 Available'],
}

const TRADES: CategoryConfig = {
  gradient: 'from-orange-400 via-amber-500 to-yellow-500',
  heroBg: 'bg-gradient-to-br from-orange-950 via-amber-900 to-yellow-950',
  accentClass: 'text-orange-400',
  badgeClass: 'bg-orange-100 text-orange-700',
  tagline: 'Expert Service You Can Count On',
  subtext: 'Licensed, experienced trade professionals serving South Florida with integrity and skill.',
  ctaText: 'Get a Free Quote',
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
    { name: 'Patricia H.', text: 'Honest pricing, clean work, and zero hassle. These are the professionals you want in your home.', rating: 5 },
    { name: 'Kevin S.', text: 'Installed everything on schedule and under budget. Will definitely use them again.', rating: 5 },
  ],
  gallery: [
    { label: 'Completed Projects', gradient: 'from-orange-300 to-amber-500' },
    { label: 'Commercial Work', gradient: 'from-amber-400 to-yellow-500' },
    { label: 'Residential Jobs', gradient: 'from-yellow-300 to-orange-500' },
    { label: 'Installations', gradient: 'from-orange-400 to-red-400' },
    { label: 'Repairs', gradient: 'from-amber-300 to-orange-600' },
    { label: 'Our Team', gradient: 'from-yellow-400 to-amber-600' },
  ],
  hours: ['Mon–Fri: 7am – 6pm', 'Saturday: 8am – 4pm', '24/7 Emergency Line Available'],
}

const DEFAULT: CategoryConfig = {
  gradient: 'from-slate-500 via-gray-600 to-zinc-700',
  heroBg: 'bg-gradient-to-br from-slate-950 via-gray-900 to-zinc-950',
  accentClass: 'text-slate-300',
  badgeClass: 'bg-slate-100 text-slate-700',
  tagline: 'Professional Services, Personal Touch',
  subtext: 'Trusted local services built on experience, integrity, and a commitment to your satisfaction.',
  ctaText: 'Get in Touch',
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
    { name: 'Michael B.', text: 'Professional, reliable, and reasonably priced. Exactly what I was looking for. Very happy!', rating: 5 },
    { name: 'Angela C.', text: 'They made the whole process so easy. I felt completely taken care of. Amazing experience!', rating: 5 },
  ],
  gallery: [
    { label: 'Our Work', gradient: 'from-slate-400 to-gray-600' },
    { label: 'Client Projects', gradient: 'from-gray-400 to-zinc-600' },
    { label: 'Completed Jobs', gradient: 'from-zinc-400 to-slate-600' },
    { label: 'Before & After', gradient: 'from-slate-500 to-gray-700' },
    { label: 'Portfolio', gradient: 'from-gray-500 to-zinc-700' },
    { label: 'Testimonials', gradient: 'from-zinc-300 to-slate-500' },
  ],
  hours: ['Mon–Fri: 9am – 6pm', 'Saturday: 10am – 4pm', 'Sunday: Closed'],
}

// Specialized overrides for specific sub-categories
const NAIL_SALON: CategoryConfig = {
  ...BEAUTY,
  tagline: 'Nails That Speak For You',
  subtext: 'Flawless nail care, artistic designs, and premium products — all in one place.',
  ctaText: 'Book Your Nail Session',
  services: [
    { icon: '💅', title: 'Manicure & Pedicure', desc: 'Classic and spa treatments for hands and feet' },
    { icon: '🌸', title: 'Gel & Shellac', desc: 'Long-lasting chip-free color that shines for weeks' },
    { icon: '💎', title: 'Acrylic & Dip Sets', desc: 'Full sets and fills with flawless finish' },
    { icon: '🎨', title: 'Nail Art', desc: 'Custom designs from minimal to intricate' },
    { icon: '✨', title: 'Builder Gel', desc: 'Strengthening overlays for natural nail extension' },
    { icon: '👑', title: 'Luxury Spa Add-ons', desc: 'Paraffin, massages, and premium treatments' },
  ],
}

const MASSAGE: CategoryConfig = {
  ...FITNESS,
  gradient: 'from-teal-500 via-cyan-500 to-sky-600',
  tagline: 'Relax. Restore. Rejuvenate.',
  subtext: 'Therapeutic massage and wellness services designed to melt away tension and restore balance.',
  ctaText: 'Book Your Session',
  services: [
    { icon: '🌊', title: 'Swedish Massage', desc: 'Full body relaxation with long, flowing strokes' },
    { icon: '💆', title: 'Deep Tissue', desc: 'Targeted pressure to release chronic muscle tension' },
    { icon: '✨', title: 'Hot Stone Therapy', desc: 'Warming stones for deep relaxation and healing' },
    { icon: '🌿', title: 'Aromatherapy', desc: 'Essential oils chosen to enhance your experience' },
    { icon: '🤰', title: 'Prenatal Massage', desc: 'Safe, specialized massage for expecting mothers' },
    { icon: '🏃', title: 'Sports Recovery', desc: 'Performance-focused massage for active bodies' },
  ],
}

const LASH: CategoryConfig = {
  ...BEAUTY,
  gradient: 'from-rose-400 via-pink-600 to-violet-600',
  tagline: 'Wake Up Flawless Every Day',
  subtext: 'Professionally applied lash extensions that transform your look — no mascara required.',
  ctaText: 'Book Your Lash Appointment',
  services: [
    { icon: '👁️', title: 'Classic Lashes', desc: 'One extension per natural lash for a natural, defined look' },
    { icon: '✨', title: 'Volume Lashes', desc: 'Fluffy, full fans for a dramatic, glamorous look' },
    { icon: '💎', title: 'Mega Volume', desc: 'Maximum fullness and impact for the boldest look' },
    { icon: '🌊', title: 'Hybrid Lashes', desc: 'The perfect blend of classic and volume' },
    { icon: '🔄', title: 'Lash Fills', desc: 'Maintenance fills every 2–3 weeks to stay flawless' },
    { icon: '🌿', title: 'Lash Lift & Tint', desc: 'Lift your natural lashes without extensions' },
  ],
}

const FOOD_TRUCK: CategoryConfig = {
  ...FOOD,
  gradient: 'from-orange-400 via-red-500 to-rose-500',
  tagline: 'Fresh. Bold. On The Move.',
  subtext: 'Bringing chef-quality food straight to you — events, locations, and private bookings.',
  ctaText: 'Book Us For Your Event',
  services: [
    { icon: '🚚', title: 'Event Catering', desc: 'Private events, corporate functions, and parties' },
    { icon: '🎉', title: 'Festival Bookings', desc: 'Available for local markets and festivals' },
    { icon: '📍', title: 'Regular Locations', desc: 'Find us at our weekly spots around South Florida' },
    { icon: '🎂', title: 'Private Bookings', desc: 'Reserve us exclusively for your special occasion' },
    { icon: '📱', title: 'Order Ahead', desc: 'Pre-order for quick pickup when we\'re nearby' },
    { icon: '🌟', title: 'Signature Menu', desc: 'Original recipes you won\'t find anywhere else' },
  ],
}

const categoryMap: CategoryMap = {
  // Beauty
  'hair salon':       BEAUTY,
  'barber shop':      { ...BEAUTY, gradient: 'from-blue-600 via-slate-700 to-gray-800', heroBg: 'bg-gradient-to-br from-blue-950 via-slate-900 to-gray-950', accentClass: 'text-blue-400', badgeClass: 'bg-blue-100 text-blue-700', tagline: 'Sharp Cuts. Clean Fades. Every Time.', subtext: 'Classic barbering and modern styles — where every cut is a craft.', ctaText: 'Book Your Cut', services: [{ icon: '✂️', title: 'Precision Haircuts', desc: 'Fade, taper, or classic cuts executed with skill' }, { icon: '🪒', title: 'Hot Towel Shave', desc: 'Traditional straight razor shave for a smooth finish' }, { icon: '🧔', title: 'Beard Trims & Lineup', desc: 'Shape up and clean edges for a polished look' }, { icon: '👶', title: 'Kids Cuts', desc: 'Patient, friendly service for younger clients' }, { icon: '💈', title: 'Old School Styling', desc: 'Pompadours, slick backs, and classic looks' }, { icon: '⭐', title: 'Walk-Ins Welcome', desc: 'No appointment needed — first come, first served' }], testimonials: BEAUTY.testimonials, gallery: BEAUTY.gallery, hours: BEAUTY.hours },
  'nail salon':       NAIL_SALON,
  'lash extensions':  LASH,
  'eyebrow threading':{ ...BEAUTY, tagline: 'Perfectly Shaped. Effortlessly Beautiful.', subtext: 'Precise threading and brow services for a clean, defined look.', ctaText: 'Book Your Brow Session', services: [{ icon: '👁️', title: 'Eyebrow Threading', desc: 'Clean, precise shape using traditional threading technique' }, { icon: '🌊', title: 'Brow Lamination', desc: 'Fluffy, brushed-up brows that last for weeks' }, { icon: '🎨', title: 'Brow Tinting', desc: 'Add depth and definition to your natural brows' }, { icon: '✨', title: 'Henna Brows', desc: 'Natural, long-lasting color for full-looking brows' }, { icon: '💎', title: 'Microblading', desc: 'Realistic hair strokes for perfectly shaped brows' }, { icon: '🌿', title: 'Upper Lip Threading', desc: 'Quick and precise upper lip hair removal' }], testimonials: BEAUTY.testimonials, gallery: BEAUTY.gallery, hours: BEAUTY.hours },
  'makeup artist':    { ...BEAUTY, tagline: 'Flawless Looks For Every Occasion', subtext: 'Professional makeup artistry that makes you look and feel your absolute best.', ctaText: 'Book Your Glam Session', services: [{ icon: '💄', title: 'Bridal Makeup', desc: 'Stunning looks for your wedding day that last all night' }, { icon: '✨', title: 'Glam Makeup', desc: 'Full glam for events, photoshoots, and nights out' }, { icon: '🌿', title: 'Natural Looks', desc: 'Soft, everyday makeup for a polished glow' }, { icon: '📸', title: 'Editorial & Photo', desc: 'Creative looks for photo and video productions' }, { icon: '👩‍👧', title: 'Group Bookings', desc: 'Bridal parties and group glam sessions' }, { icon: '🎭', title: 'Special FX', desc: 'Creative and theatrical makeup artistry' }], testimonials: BEAUTY.testimonials, gallery: BEAUTY.gallery, hours: BEAUTY.hours },
  'esthetician':      { ...FITNESS, gradient: 'from-rose-300 via-pink-400 to-fuchsia-500', heroBg: 'bg-gradient-to-br from-rose-950 via-pink-900 to-fuchsia-950', accentClass: 'text-rose-300', badgeClass: 'bg-rose-100 text-rose-700', tagline: 'Glow From The Inside Out', subtext: 'Professional skincare treatments tailored to your unique skin for a radiant, healthy complexion.', ctaText: 'Book Your Facial', services: [{ icon: '✨', title: 'Custom Facials', desc: 'Personalized treatments based on your skin type and goals' }, { icon: '💎', title: 'Chemical Peels', desc: 'Exfoliating treatments for a fresher, smoother complexion' }, { icon: '🌊', title: 'HydraFacial', desc: 'Deep cleansing and hydration for an instant glow' }, { icon: '🌿', title: 'Microdermabrasion', desc: 'Resurface and refine skin texture and tone' }, { icon: '🔬', title: 'LED Light Therapy', desc: 'Targeted light treatment for acne and anti-aging' }, { icon: '👁️', title: 'Eye Treatments', desc: 'Targeted care for the delicate eye area' }], testimonials: BEAUTY.testimonials, gallery: BEAUTY.gallery, hours: BEAUTY.hours },
  'waxing salon':     { ...BEAUTY, tagline: 'Smooth Skin. Lasting Results.', subtext: 'Professional waxing services for silky smooth skin that lasts weeks.', ctaText: 'Book Your Wax', services: [{ icon: '✨', title: 'Brazilian Wax', desc: 'Complete, precise Brazilian waxing in a clean environment' }, { icon: '🦵', title: 'Full Body Waxing', desc: 'Comprehensive waxing packages for smooth skin head to toe' }, { icon: '👁️', title: 'Facial Waxing', desc: 'Brow, lip, and chin waxing for clean definition' }, { icon: '💪', title: 'Arms & Underarms', desc: 'Quick and effective underarm and arm waxing' }, { icon: '🌿', title: 'Hard Wax', desc: 'Gentle hard wax ideal for sensitive skin areas' }, { icon: '⚡', title: 'Express Services', desc: 'Fast touch-up appointments for maintenance' }], testimonials: BEAUTY.testimonials, gallery: BEAUTY.gallery, hours: BEAUTY.hours },
  'microblading':     { ...LASH, tagline: 'Perfect Brows. Zero Effort.', subtext: 'Semi-permanent brow enhancement for natural, flawless brows that last up to 2 years.', ctaText: 'Book Your Consultation', services: [{ icon: '✏️', title: 'Microblading', desc: 'Realistic hair-stroke technique for natural-looking brows' }, { icon: '🌊', title: 'Powder Brows', desc: 'Soft, powdery finish for a makeup-like look' }, { icon: '💎', title: 'Combo Brows', desc: 'The perfect blend of microblading and powder for stunning results' }, { icon: '🔄', title: 'Touch-Up Sessions', desc: 'Annual touch-ups to keep your brows fresh and vibrant' }, { icon: '👁️', title: 'Brow Mapping', desc: 'Precision brow design consultation before every service' }, { icon: '🌿', title: 'Color Correction', desc: 'Corrections and transformations for previous brow work' }], testimonials: BEAUTY.testimonials, gallery: BEAUTY.gallery, hours: BEAUTY.hours },
  'permanent makeup': { ...LASH, tagline: 'Wake Up Beautiful Every Day', subtext: 'Professional permanent makeup for brows, lips, and liner that looks flawless 24/7.', ctaText: 'Book Free Consultation', services: [{ icon: '✏️', title: 'Permanent Brows', desc: 'Microblading and ombre brows that last 1–3 years' }, { icon: '💋', title: 'Lip Blush', desc: 'Soft, defined lip color that enhances your natural shape' }, { icon: '👁️', title: 'Eyeliner', desc: 'Precise liner that frames your eyes beautifully' }, { icon: '🌿', title: 'Scalp Micropigmentation', desc: 'Natural-looking hair density for the scalp' }, { icon: '🔄', title: 'Removal & Corrections', desc: 'Safe removal and correction of previous work' }, { icon: '📋', title: 'Free Consultation', desc: 'Design and planning session before every procedure' }], testimonials: BEAUTY.testimonials, gallery: BEAUTY.gallery, hours: BEAUTY.hours },
  'braiding salon':   { ...BEAUTY, gradient: 'from-amber-600 via-orange-600 to-rose-600', heroBg: 'bg-gradient-to-br from-amber-950 via-orange-900 to-rose-950', accentClass: 'text-amber-400', badgeClass: 'bg-amber-100 text-amber-700', tagline: 'Braids That Tell Your Story', subtext: 'Expert braiding and natural hair services celebrating your unique beauty and culture.', ctaText: 'Book Your Braids', services: [{ icon: '👑', title: 'Box Braids', desc: 'Classic and knotless box braids in any length and size' }, { icon: '🌿', title: 'Cornrows', desc: 'Feed-in and traditional cornrow styles for any occasion' }, { icon: '✨', title: 'Senegalese Twists', desc: 'Lightweight rope twists for a protective, chic look' }, { icon: '🌊', title: 'Faux Locs', desc: 'Loc-inspired style with beautiful texture and flow' }, { icon: '💎', title: 'Goddess Braids', desc: 'Large, elegant braids perfect for special occasions' }, { icon: '🧴', title: 'Hair Treatment', desc: 'Pre-braid care and scalp treatments for healthy hair' }], testimonials: BEAUTY.testimonials, gallery: BEAUTY.gallery, hours: BEAUTY.hours },
  'loc stylist':      { ...BEAUTY, gradient: 'from-green-600 via-emerald-600 to-teal-600', heroBg: 'bg-gradient-to-br from-green-950 via-emerald-900 to-teal-950', accentClass: 'text-green-400', badgeClass: 'bg-green-100 text-green-700', tagline: 'Your Loc Journey Starts Here', subtext: 'Expert loc installation, maintenance, and styling for every stage of your journey.', ctaText: 'Book Your Loc Appointment', services: [{ icon: '🌿', title: 'Loc Starter', desc: 'Professional two-strand twist or comb coil installation' }, { icon: '✂️', title: 'Retwists', desc: 'Regular maintenance retwists to keep your locs neat' }, { icon: '💎', title: 'Loc Styling', desc: 'Updos, curls, and specialty styles for any event' }, { icon: '🧴', title: 'Deep Conditioning', desc: 'Hydrating treatments to keep your locs moisturized' }, { icon: '✨', title: 'Color Locs', desc: 'Beautiful color services done safely on locs' }, { icon: '🌊', title: 'Freeform Guidance', desc: 'Consulting for those growing freeform locs naturally' }], testimonials: BEAUTY.testimonials, gallery: BEAUTY.gallery, hours: BEAUTY.hours },
  // Food
  'bakery':           FOOD,
  'cake shop':        { ...FOOD, tagline: 'Cakes That Steal The Show', subtext: 'Custom designed cakes and sweet creations for every celebration — made from scratch with love.', ctaText: 'Order Your Custom Cake', services: [{ icon: '🎂', title: 'Custom Cakes', desc: 'One-of-a-kind designs for birthdays, weddings, and more' }, { icon: '💍', title: 'Wedding Cakes', desc: 'Elegant, multi-tier designs for your perfect day' }, { icon: '🍰', title: 'Celebration Cakes', desc: 'Themed cakes for every party and milestone' }, { icon: '🧁', title: 'Cupcakes & Minis', desc: 'Individual portions perfect for events and parties' }, { icon: '📦', title: 'Dessert Tables', desc: 'Full dessert table setups for events' }, { icon: '🌿', title: 'Dietary Options', desc: 'Gluten-free, vegan, and allergen-friendly options' }], testimonials: FOOD.testimonials, gallery: FOOD.gallery, hours: FOOD.hours },
  'custom cakes':     { ...FOOD, tagline: 'Cakes That Steal The Show', subtext: 'Custom designed cakes and sweet creations for every celebration — made from scratch with love.', ctaText: 'Order Your Custom Cake' },
  'food truck':       FOOD_TRUCK,
  'catering':         { ...FOOD, tagline: 'Elevate Every Event With Great Food', subtext: 'Full-service catering that brings exceptional cuisine and hospitality to your next event.', ctaText: 'Request a Quote' },
  'personal chef':    { ...FOOD, tagline: 'Restaurant Quality. In Your Home.', subtext: 'Private chef experiences and meal services crafted around your lifestyle and taste.', ctaText: 'Book a Private Chef Session' },
  'meal prep':        { ...FOOD, tagline: 'Eat Better. Live Better.', subtext: 'Fresh, chef-prepared meals ready to heat and enjoy — saving you time without sacrificing flavor.', ctaText: 'Start Your Meal Plan' },
  'dessert shop':     { ...FOOD, tagline: 'Life Is Sweeter With Us', subtext: 'Handcrafted desserts and sweet creations that make every moment a little more special.', ctaText: 'Order Your Treats' },
  'cookie shop':      { ...FOOD, tagline: 'Fresh Baked. Made With Love.', subtext: 'Gourmet cookies and baked goods made from scratch — perfect for gifting or treating yourself.', ctaText: 'Order Fresh Cookies' },
  // Fitness & Wellness
  'personal trainer': FITNESS,
  'yoga studio':      { ...FITNESS, tagline: 'Find Your Flow. Find Your Peace.', subtext: 'A welcoming space for all levels to explore yoga, build strength, and cultivate calm.', ctaText: 'Try Your First Class Free' },
  'pilates studio':   { ...FITNESS, gradient: 'from-sky-400 via-cyan-500 to-teal-500', heroBg: 'bg-gradient-to-br from-sky-950 via-cyan-900 to-teal-950', tagline: 'Stronger Core. Better Life.', subtext: 'Pilates classes that build long, lean muscles and total body awareness for every fitness level.', ctaText: 'Book a Trial Class' },
  'massage therapy':  MASSAGE,
  'day spa':          { ...MASSAGE, tagline: 'Your Sanctuary Of Calm', subtext: 'A full luxury spa experience designed to rejuvenate your mind, body, and spirit.', ctaText: 'Book Your Spa Day' },
  'wellness center':  { ...FITNESS, tagline: 'Whole Body Wellness', subtext: 'Integrative wellness services combining fitness, therapy, and holistic health for total wellbeing.', ctaText: 'Start Your Wellness Journey' },
  // Home Services
  'house cleaning service': HOME,
  'maid service':           { ...HOME, tagline: 'A Spotless Home, Every Time', subtext: 'Reliable, thorough cleaning services so you can focus on what matters most.', ctaText: 'Schedule Your Cleaning' },
  'lawn care':              { ...HOME, gradient: 'from-green-500 via-emerald-500 to-teal-600', heroBg: 'bg-gradient-to-br from-green-950 via-emerald-900 to-teal-950', accentClass: 'text-green-400', badgeClass: 'bg-green-100 text-green-700', tagline: 'A Beautiful Lawn. Zero Hassle.', subtext: 'Professional lawn care that keeps your property looking its best year-round.', ctaText: 'Get a Free Lawn Quote' },
  'landscaping':            { ...HOME, gradient: 'from-green-500 via-lime-500 to-emerald-600', heroBg: 'bg-gradient-to-br from-green-950 via-lime-900 to-emerald-950', accentClass: 'text-green-400', badgeClass: 'bg-green-100 text-green-700', tagline: 'Transform Your Outdoor Space', subtext: 'Creative landscaping designs that turn your property into a stunning outdoor retreat.', ctaText: 'Get a Free Design Quote' },
  'pressure washing':       { ...HOME, tagline: 'Restore Your Property\'s Shine', subtext: 'Professional pressure washing that blasts away dirt, grime, and mold — restoring surfaces to like-new condition.', ctaText: 'Get a Free Wash Quote' },
  'pool service':           { ...HOME, gradient: 'from-cyan-500 via-sky-500 to-blue-600', heroBg: 'bg-gradient-to-br from-cyan-950 via-sky-900 to-blue-950', accentClass: 'text-cyan-400', badgeClass: 'bg-cyan-100 text-cyan-700', tagline: 'Crystal Clear Pools. All Year Round.', subtext: 'Complete pool maintenance and repair services that keep your pool sparkling and safe.', ctaText: 'Schedule Pool Service' },
  'pest control':           HOME,
  'handyman':               HOME,
  'painting contractor':    { ...HOME, gradient: 'from-yellow-400 via-amber-500 to-orange-500', heroBg: 'bg-gradient-to-br from-yellow-950 via-amber-900 to-orange-950', accentClass: 'text-yellow-400', badgeClass: 'bg-yellow-100 text-yellow-700', tagline: 'Fresh Coat. Fresh Start.', subtext: 'Professional interior and exterior painting that transforms your space with flawless results.', ctaText: 'Get a Free Paint Quote' },
  // Creative & Events
  'photographer':       CREATIVE,
  'videographer':       { ...CREATIVE, tagline: 'Cinematic Stories, Beautifully Told', subtext: 'Professional video production that captures the emotion and energy of your most important moments.', ctaText: 'Check Availability' },
  'event planner':      { ...CREATIVE, tagline: 'Your Dream Event, Flawlessly Executed', subtext: 'Full-service event planning and coordination that turns your vision into an unforgettable reality.', ctaText: 'Plan Your Event' },
  'wedding planner':    { ...CREATIVE, gradient: 'from-rose-400 via-pink-500 to-purple-600', heroBg: 'bg-gradient-to-br from-rose-950 via-pink-900 to-purple-950', tagline: 'Your Perfect Day Awaits', subtext: 'Dedicated wedding planning that brings every detail of your dream wedding to life.', ctaText: 'Plan Your Wedding' },
  'DJ':                 { ...CREATIVE, gradient: 'from-indigo-500 via-purple-600 to-pink-600', heroBg: 'bg-gradient-to-br from-indigo-950 via-purple-900 to-pink-950', tagline: 'The Party Starts With Us', subtext: 'Professional DJ services that read the room and keep your guests dancing all night long.', ctaText: 'Book for Your Event' },
  'graphic designer':   { ...CREATIVE, tagline: 'Design That Makes An Impression', subtext: 'Creative graphic design that builds your brand identity and communicates your story visually.', ctaText: 'Start a Project' },
  // Trades
  'plumbing':    TRADES,
  'electrician': { ...TRADES, tagline: 'Powering Your Home Safely', subtext: 'Licensed electricians delivering safe, reliable electrical solutions for homes and businesses.', ctaText: 'Get a Free Quote' },
  'HVAC':        { ...TRADES, tagline: 'Stay Cool. Stay Comfortable.', subtext: 'Expert HVAC installation, repair, and maintenance to keep your home or business at the perfect temperature.', ctaText: 'Schedule HVAC Service' },
  // Other
  'dog groomer':     { ...FITNESS, gradient: 'from-yellow-400 via-amber-400 to-orange-500', heroBg: 'bg-gradient-to-br from-yellow-950 via-amber-900 to-orange-950', accentClass: 'text-yellow-400', badgeClass: 'bg-yellow-100 text-yellow-700', tagline: 'Your Pup Deserves The Best', subtext: 'Professional grooming services to keep your furry family member looking and feeling amazing.', ctaText: 'Book a Grooming Session', services: [{ icon: '🐾', title: 'Full Grooming', desc: 'Bath, blow dry, cut, and finishing for a complete transformation' }, { icon: '✂️', title: 'Breed Specific Cuts', desc: 'Precise cuts tailored to your dog\'s breed standard' }, { icon: '🛁', title: 'Baths & Blowouts', desc: 'Thorough cleaning with premium pet-safe products' }, { icon: '🦷', title: 'Teeth Cleaning', desc: 'Professional dental cleaning for fresh breath and health' }, { icon: '💅', title: 'Nail Trimming', desc: 'Safe, stress-free nail trims and grinding' }, { icon: '🌸', title: 'De-Shedding Treatment', desc: 'Remove excess fur and reduce shedding at home' }], testimonials: BEAUTY.testimonials, gallery: BEAUTY.gallery, hours: BEAUTY.hours },
  'pet grooming':    { ...FITNESS, gradient: 'from-yellow-400 via-amber-400 to-orange-500', heroBg: 'bg-gradient-to-br from-yellow-950 via-amber-900 to-orange-950', accentClass: 'text-yellow-400', badgeClass: 'bg-yellow-100 text-yellow-700', tagline: 'Your Pup Deserves The Best', subtext: 'Professional pet grooming for a happy, healthy, and great-looking fur baby.', ctaText: 'Book a Grooming Session', services: [{ icon: '🐾', title: 'Full Grooming', desc: 'Complete grooming from bath to trim and finishing' }, { icon: '✂️', title: 'Breed Cuts', desc: 'Precise cuts tailored to your pet\'s breed' }, { icon: '🛁', title: 'Baths & Blowouts', desc: 'Thorough cleaning with pet-safe products' }, { icon: '💅', title: 'Nail Care', desc: 'Nail trimming and grinding' }, { icon: '🦷', title: 'Dental Hygiene', desc: 'Teeth brushing for fresher breath' }, { icon: '🌸', title: 'De-Shedding', desc: 'Remove excess coat and reduce shedding' }], testimonials: BEAUTY.testimonials, gallery: BEAUTY.gallery, hours: BEAUTY.hours },
  'tattoo shop':     { ...CREATIVE, gradient: 'from-gray-600 via-slate-700 to-zinc-800', heroBg: 'bg-gradient-to-br from-gray-950 via-slate-900 to-zinc-950', tagline: 'Wear Your Art', subtext: 'Custom tattoo designs crafted by experienced artists who take your vision seriously.', ctaText: 'Book a Consultation' },
  'alterations':     { ...DEFAULT, tagline: 'The Perfect Fit Is Everything', subtext: 'Expert alterations and tailoring that make every garment look and feel like it was made for you.', ctaText: 'Bring In Your Garment' },
  'notary public':   DEFAULT,
  'tax preparation': { ...DEFAULT, gradient: 'from-blue-600 via-indigo-600 to-slate-700', heroBg: 'bg-gradient-to-br from-blue-950 via-indigo-900 to-slate-950', accentClass: 'text-blue-400', badgeClass: 'bg-blue-100 text-blue-700', tagline: 'Keep More. Stress Less.', subtext: 'Professional tax preparation and planning that maximizes your refund and keeps you compliant.', ctaText: 'Book a Tax Consultation' },
}

export function getCategoryConfig(category: string): CategoryConfig {
  return categoryMap[category] ?? DEFAULT
}
