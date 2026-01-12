import { Link } from 'react-router-dom';
import Map from '../components/Map';
import { useSEO } from '../hooks/useSEO';
import { SERVICES } from '../data/services';

function Home() {
  const canonical = 'https://www.amsrvcs.com/';

  useSEO({
    title: 'American Services | Track, Rail, Environmental, Industrial',
    description: 'American Services provides track and rail support, certified load adjustment and transfer, environmental and industrial services, earth work, and 24/7 emergency coverage for rail, logistics, and industrial operators.',
    canonical
  });

  const pillars = [
    {
      title: 'SAFETY & COMPLIANCE',
      text: 'American Services operates under strict safety standards and railroad operating requirements across every project.',
      icon: (
        <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
          <path d="M12 3 5 6v6c0 4.07 2.94 7.57 7 8 4.06-.43 7-3.93 7-8V6l-7-3Z" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M9.5 12.5 11 14l3.5-4" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      )
    },
    {
      title: '24/7 RESPONSE READINESS',
      text: 'Our teams are prepared to respond around the clock to support time-critical rail and industrial operations.',
      icon: (
        <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
          <circle cx="12" cy="12" r="9" fill="none" stroke="currentColor" strokeWidth="1.8"/>
          <path d="M12 7v5l3 2" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      )
    },
    {
      title: 'QUALIFIED PROFESSIONALS',
      text: 'Our personnel and contractors are held to established training, certification, and performance expectations.',
      icon: (
        <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
          <path d="M12 4c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3Z" fill="none" stroke="currentColor" strokeWidth="1.8"/>
          <path d="M7 18c0-2.21 2.24-4 5-4s5 1.79 5 4" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/>
          <path d="M5 10h1.5M17.5 10H19" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/>
        </svg>
      )
    },
    {
      title: 'RAILROAD EXPERIENCE',
      text: 'We bring practical, field-tested experience working alongside railroads, shippers, and industrial operators.',
      icon: (
        <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
          <rect x="6" y="6" width="12" height="10" rx="1" ry="1" fill="none" stroke="currentColor" strokeWidth="1.8"/>
          <path d="M8 14h8M8 10h8" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/>
          <path d="M7 20h2l6-12 2 12h2" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      )
    }
  ];

  const featuredServices = SERVICES;

  return (
    <div className="page page-home">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-image-wrapper">
          <img src="/newhero.png" alt="American Services emergency and rail response crews at work" className="hero-image" />
          <Link to="/services" className="hero-image-link" aria-label="View Services"></Link>
        </div>
        <div className="hero-content">
          <h1>Track, Rail, Environmental, and Industrial Services</h1>
          <p className="subheadline">Direct-to-operator crews for derailment support, certified load adjustment and transfer, environmental and industrial work, and earth-moving support. No platform speak—just dispatch-ready service.</p>
          <p className="authority-line">Operations-led dispatch. 24/7 coordination. Rail-safe execution.</p>
          <div className="hero-ctas">
            <a href="tel:662-781-4481" className="btn btn-primary">Call 24/7 Emergency Response — 662-781-4481</a>
            <Link to="/services" className="btn btn-secondary">View Services</Link>
          </div>
        </div>
      </section>

      {/* Value Pillars Section */}
      <section className="section-value-pillars">
        <div className="value-pillars-grid">
          {pillars.map((pillar) => (
            <article key={pillar.title} className="value-pillar">
              <div className="value-icon" aria-hidden="true">{pillar.icon}</div>
              <h3 className="value-title">{pillar.title}</h3>
              <p className="value-text">{pillar.text}</p>
            </article>
          ))}
        </div>
      </section>

      {/* Motto Section */}
      <section className="section-motto">
        <div className="section-inner">
          <h2 className="motto-headline">Make It Happen.</h2>
          <ul className="motto-standards">
            <li>We plan work thoroughly, coordinate directly, and execute safely.</li>
            <li>We complete projects in alignment with operational and railroad requirements.</li>
          </ul>
          <p className="motto-closing">This is the standard we apply to every assignment, regardless of size or urgency.</p>
        </div>
      </section>

      {/* Why Clients Call Us Section */}
      <section className="section-why">
        <div className="section-inner">
          <h2>Why Operations Teams Choose American Services</h2>
          <ul className="benefits-list">
            <li>Rail and industrial crews coordinated directly with leadership</li>
            <li>Certified load adjustment to clear incidents and keep freight moving</li>
            <li>Environmental responders experienced with regulated facilities and right-of-way</li>
            <li>Clear communication from initial call through resolution</li>
            <li>24/7 coverage with no call-center delays</li>
          </ul>
        </div>
      </section>

      {/* Services Section - Unified Photo Grid with Descriptions */}
      <section className="section-services-unified">
        <div className="section-inner">
          <h2>Services</h2>
          <p className="section-lead">Every service definition below is the same content used on the Services page. No duplicates, no renamed offerings.</p>
          <div className="services-photo-grid">
            {featuredServices.map((service) => (
              <div className="service-photo-card" key={service.id}>
                <img src={service.image} alt={`${service.name} by American Services`} loading="lazy" />
                <h3>{service.name}</h3>
                <p>{service.summary}</p>
                <Link to={`/services/${service.slug}`} className="text-link">View details</Link>
              </div>
            ))}
          </div>
          <div className="section-cta">
            <Link to="/services" className="btn btn-secondary">View All Services</Link>
          </div>
        </div>
      </section>

      {/* What to Expect Section */}
      <section className="section-expect">
        <div className="section-inner">
          <h2>How We Mobilize</h2>
          <ol className="steps-list">
            <li>Single-call intake with operations leadership</li>
            <li>Scope, safety, and access confirmed with site or railroad personnel</li>
            <li>Crews, equipment, and materials dispatched based on service need</li>
            <li>On-site coordination with client safety, compliance, and logistics</li>
            <li>Stabilization and handoff to remediation or planned follow-up as required</li>
          </ol>
        </div>
      </section>

      {/* Locations Section */}
      <section className="section-locations">
        <div className="section-inner">
          <h2>Service Area & Coverage</h2>
          <p className="section-lead">Coverage across Mississippi, Tennessee, Louisiana, Arkansas, and Alabama for rail, industrial, and transportation work. Dispatch routes are planned to minimize downtime and keep freight and facilities moving.</p>
          <Map />
          <ul className="locations-list">
            <li><strong>Corporate Office</strong> — 2281 Stateline Rd W, Southaven, MS 38671</li>
          </ul>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="final-cta-section">
        <h2>Rail, Load Adjustment, or Environmental Emergency?</h2>
        <p className="final-cta-text">24/7 Response Available</p>
        <a href="tel:662-781-4481" className="btn btn-primary">Call 662-781-4481</a>
      </section>
    </div>
  );
}

export default Home;
