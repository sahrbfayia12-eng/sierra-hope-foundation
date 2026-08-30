import { Link } from 'react-router-dom';
import GaraDivider from '../components/GaraDivider';
import StatStrip from '../components/StatStrip';
import FeatureCard from '../components/FeatureCard';
import CTABand from '../components/CTABand';
import './Home.css';
import us from '../assets/us.jpg';
import sierra_leone_flag from '../assets/sierra_leone_flag.jpg';
import sl_beach from '../assets/sl_beach.jpg';
import sl_bridge from '../assets/sl_bridge.jpg';
import sl_map from '../assets/sl_map.jpg';

const STATS = [
  { value: '42', label: 'Communities Reached' },
  { value: '18,600', label: 'People Served in 2025' },
  { value: '9', label: 'Districts Active In' },
  { value: '230+', label: 'Local Volunteers' },
];

const PROGRAMS = [
  { title: 'Community Health Outreach', body: 'Mobile clinics and trained health volunteers bringing care to villages beyond the reach of hospitals.' },
  { title: "Girls' Education Access", body: 'Scholarships, mentorship, and safe transport that keep girls in school through to graduation.' },
  { title: 'Livelihoods & Skills Training', body: 'Vocational training and small-grant support for artisans, farmers, and young entrepreneurs.' },
  { title: 'Clean Water & Sanitation', body: 'Borehole construction and hygiene education that cut waterborne illness in rural communities.' },
];

export default function Home() {
  return (
    <>
      {/* ---- Hero / header section ---- */}
      <section className="home-hero section--ink">
        <div className="container home-hero__row">
          <div className="home-hero__copy">
            <span className="eyebrow">Sierra Hope Foundation</span>
            <h1>Community-led change, built to last in Sierra Leone.</h1>
            <p>
              Across Sierra Leone, we work hand-in-hand with communities on health, education, and livelihoods; shaped by their voices, sustained by local trust.
            </p>
            <div className="home-hero__actions">
              <Link to="/contact" className="btn btn--ember">Get Involved</Link>
              <Link to="/about" className="btn btn--outline on-ink">Learn More</Link>
            </div>
          </div>
          <div className="home-hero__image">
            <img
              src= {us}
              alt="Community members at a Sierra Hope Foundation outreach event"
            />
          </div>
        </div>
      </section>

      {/* ---- Mission / impact section ---- */}
      <section className="section section--paper">
        <div className="container">
          <div className="home-mission">
            <div>
              <span className="eyebrow">Our Mission</span>
              <h2>We help communities build the tools to hold their own future.</h2>
              <p className="home-mission__body">
                Since 2014, Sierra Hope Foundation has partnered with chiefdoms across the
                Western Area, Bo, and Kono districts to design programs rooted in what each
                community says it needs first; not a fixed template shipped from outside.
              </p>
              <Link to="/about" className="home-mission__link">Read our full story →</Link>
            </div>
          </div>
          <div className="home-mission__stats">
            <StatStrip stats={STATS} />
          </div>
        </div>
      </section>

      <GaraDivider />

      {/* ---- Programs preview / features section ---- */}
      <section className="section section--paper">
        <div className="container">
          <div className="section-heading">
            <span className="eyebrow">What We Do</span>
            <h2>Four programs, one shared goal.</h2>
          </div>
          <div className="feature-grid">
            {PROGRAMS.map((p, i) => (
              <FeatureCard key={p.title} index={String(i + 1).padStart(2, '0')} title={p.title}>
                {p.body}
              </FeatureCard>
            ))}
          </div>
          <Link to="/programs" className="home-mission__link">See all programs →</Link>
        </div>
      </section>

      {/* ---- Gallery teaser section ---- */}
      <section className="section" style={{ paddingTop: 0 }}>
        <div className="container">
          <div className="section-heading">
            <span className="eyebrow">Moments From the Field</span>
            <h2>A look at the work in progress.</h2>
          </div>

          <div className="home-gallery-strip"> 
            {[sierra_leone_flag, sl_beach, sl_bridge, sl_map].map((img, i) => ( 
              <img key={i} src={img} alt="Sierra Hope Foundation program moment" />
            ))} 
          </div>

          <Link to="/gallery" className="home-mission__link">View the full gallery →</Link>
        </div>
      </section>

      {/* ---- Call to action section ---- */}
      <CTABand
        title="Every donation reaches a real chiefdom, a real classroom, a real clinic."
        description="90% of contributions go directly to district-level program budgets."
        secondaryLabel="Our Programs"
        secondaryTo="/programs"
      />
    </>
  );
}
