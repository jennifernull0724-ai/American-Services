import { Link } from 'react-router-dom';
import { useSEO } from '../hooks/useSEO';
import { SERVICES } from '../data/services';

function Services() {
  const canonical = 'https://www.amsrvcs.com/services';

  useSEO({
    title: 'Rail, Load Adjustment & Emergency Services',
    description: 'Rail, industrial, and emergency response services including certified load adjustment, environmental support, earth work, and track services across Mississippi, Tennessee, Louisiana, Arkansas, and Alabama.',
    canonical
  });

  return (
    <div className="page page-services">
      <section className="services-intro">
        <p className="eyebrow">American Services</p>
        <h1>Field Services for Rail, Logistics, and Industrial Operations</h1>
        <p className="services-intro-text">American Services delivers rail-safe field crews, certified load adjustment teams, environmental and industrial responders, and emergency coverage. Work is coordinated directly with operations leadership to keep lines, yards, and facilities moving.</p>
        <p className="services-intro-subtext">One service catalog. Five disciplined services. No platform talk—just dispatch-ready execution.</p>
      </section>

      <section className="services-clarification">
        <div className="services-clarification-inner">
          <h2>Our Services</h2>
          <p>American Services provides field-executed rail, industrial, and emergency support services coordinated directly with railroad, shipper, and facility operations teams. Each service below represents a core capability area. Specific scopes, access requirements, and scheduling are coordinated through direct inquiry.</p>
        </div>
      </section>

      <section className="services-consolidated">
        <div className="services-consolidated-inner">
          {SERVICES.map((service) => (
            <article key={service.id} className="service-block" id={service.id} data-service={service.id}>
              <div className="service-block-content">
                <p className="eyebrow">Service</p>
                <h2>{service.name}</h2>
                <p className="service-block-description">{service.summary}</p>
                <p className="service-block-helper">View detailed scope & compliance</p>
                <div className="service-block-cta">
                  <Link to={`/services/${service.slug}`} className="btn btn-secondary">View Details</Link>
                  <Link to={`/contact?service=${service.slug}`} className="text-link">Request service</Link>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="services-cta-section">
        <p className="services-cta-text">One contact for track and rail, load adjustment and transfer, environmental and industrial support, emergency response, and earth work. Every job is coordinated directly with American Services operations leadership.</p>
        <a href="tel:662-781-4481" className="btn btn-primary">Call 24/7 Emergency Response — 662-781-4481</a>
      </section>
    </div>
  );
}

export default Services;
