import { Link } from 'react-router-dom';
import { useMemo } from 'react';
import { useSEO } from '../hooks/useSEO';
import { SERVICES } from '../data/services';

export const SERVICE_SCOPE = {
  'track-rail': [
    'Turnout building & installation',
    'Crossing installation',
    'Culvert installation',
    'Track panel installation',
    'Railroad tie replacement',
    'Track maintenance, repair, and replacement',
    '24-hour track gangs',
    'Panel boss services',
    'Relay track materials',
    'Tie replacement',
    'FRA-certified track inspectors',
    'Switch maintenance programs',
    'Hi-rail vac trucks',
    'Hi-rail brush cutting',
    'Driftwood clearance',
    'Culvert cleanout',
    'Snow & ice removal'
  ],
  'load-adjustment-transfer': [
    'Immediate transfer services for damaged loads',
    'Certified load adjustment and rebalancing',
    'Open-top loading and tie-down',
    'Tie-down and securement',
    'Grain augers',
    'Pneumatic tankers',
    'Forklift operations (including paper clamps)',
    'Railcar transloading',
    'Load stabilization for rail and highway incidents'
  ],
  'environmental-industrial': [
    'Confined space entry',
    'Industrial cleaning',
    'Environmental support services',
    'Material handling and removal',
    'Site cleanup following industrial or environmental incidents'
  ],
  'emergency-response': [
    '24/7 emergency response',
    'Natural disaster response',
    'Facility fires and explosions',
    'Hurricane response',
    'Transportation accidents',
    'Train derailments',
    'Emergency mobilization coordination'
  ],
  'earth-work': [
    'Large trackhoes with thumbs',
    'Track loaders with winch',
    'On-site railcar scrapping support',
    'Track panel delivery',
    'Crawler cranes',
    'Dozer operations',
    'Site restoration',
    'Earthmoving and grading'
  ]
};

export const SERVICE_CERTIFICATIONS = {
  'track-rail': [
    'Railroad Safety Training',
    'Roadway Worker Protection (RWP)',
    'Hi-rail and rail-adjacent equipment training',
    'Hi-rail and rail-adjacent equipment safety training',
    'Flagging and protection coordination training (as required)',
    'OSHA 10-Hour or 30-Hour Construction Safety',
    'Job Hazard Analysis (JHA) compliance'
  ],
  'load-adjustment-transfer': [
    'Load securement and cargo handling training',
    'Forklift and lifting equipment certifications (as applicable)',
    'Rigging and signaling training',
    'Spill prevention awareness',
    'OSHA General Industry Safety',
    'Spill prevention and material control awareness',
    'Site-specific shipper and carrier qualifications'
  ],
  'environmental-industrial': [
    'HAZWOPER 40-Hour certification',
    'HAZWOPER 8-Hour Refresher',
    'Environmental spill response training',
    'Confined space awareness (as applicable)',
    'Lockout / Tagout (LOTO) awareness',
    'Respiratory protection training',
    'Hazard Communication (HazCom)',
    'OSHA General Industry Safety'
  ],
  'emergency-response': [
    'Emergency response training',
    'Incident Command System (ICS) awareness',
    'HAZWOPER (as required by incident)',
    'Spill response and containment training',
    'Railroad emergency access orientation',
    'First Aid / CPR / AED',
    'Rapid deployment readiness training'
  ],
  'earth-work': [
    'Heavy equipment operation training',
    'Excavation and trenching safety training',
    'Utility awareness and damage prevention',
    'OSHA Construction Safety',
    'Soil handling and grading procedures',
    'Erosion control and site stabilization awareness',
    'Job Hazard Analysis (JHA) compliance'
  ]
};

function ServiceDetailPage({ serviceSlug, mediaA, mediaB, mediaC }) {
  const service = useMemo(() => SERVICES.find((s) => s.slug === serviceSlug), [serviceSlug]);

  const BASE_URL = 'https://www.amsrvcs.com';
  const canonical = `${BASE_URL}/services/${serviceSlug}`;
  useSEO({
    title: service ? `${service.name}` : 'Service',
    description: service
      ? `Professional ${service.name} provided by American Services with railroad-compliant crews supporting operations across Mississippi, Tennessee, Louisiana, Arkansas, and Alabama.`
      : 'Service detail',
    canonical
  });

  if (!service) {
    return (
      <div className="page">
        <h1>Service Not Implemented</h1>
        <p>Requested service is not available.</p>
      </div>
    );
  }

  const scopeItems = SERVICE_SCOPE[service.slug] || [];
  const certificationItems = SERVICE_CERTIFICATIONS[service.slug] || [];
  const contactHref = `/contact?service=${service.slug}`;
  const isSplitMedia = service.slug === 'track-rail' || service.slug === 'earth-work';
  const serviceAreaStates = ['Mississippi', 'Tennessee', 'Louisiana', 'Arkansas', 'Alabama'];

  const serviceSchema = useMemo(() => ({
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: service?.name,
    serviceType: service?.name,
    provider: {
      '@type': 'Organization',
      name: 'American Services',
      url: BASE_URL
    },
    industry: ['Railroad', 'Rail Transportation', 'Industrial Operations', 'Logistics & Freight'],
    audience: [
      {
        '@type': 'BusinessAudience',
        businessFunction: 'Provide service'
      },
      {
        '@type': 'Audience',
        name: 'TransportationAudience'
      }
    ],
    additionalProperty: [
      { '@type': 'PropertyValue', name: 'Railroad-compliant crews', value: 'Yes' },
      { '@type': 'PropertyValue', name: 'FRA-aligned operations', value: 'Yes' },
      { '@type': 'PropertyValue', name: 'Hi-rail equipment support', value: 'Available' },
      { '@type': 'PropertyValue', name: 'Rail corridor and yard operations', value: 'Supported' },
      { '@type': 'PropertyValue', name: 'Incident response coordination', value: 'Provided' }
    ],
    areaServed: serviceAreaStates.map((state) => ({
      '@type': 'AdministrativeArea',
      name: state
    })),
    url: canonical
  }), [service?.name, canonical]);

  const renderMedia = (node) => {
    if (node) return node;
    return null;
  };

  return (
    <div className="page page-service-detail">
      <p className="eyebrow">American Services</p>
      <h1>{service.name}</h1>
      <p className="service-intro">{service.summary}</p>

      {isSplitMedia ? (
        <section className="capabilities-with-media">
          <div className="capabilities-copy">
            <h2>Capabilities / Scope of Work</h2>
            <ul className="services-list">
              {scopeItems.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </div>
          <div className="capabilities-visual">
            {renderMedia(mediaA, 'placeholder-portrait placeholder-hero')}
          </div>
        </section>
      ) : (
        <section>
          <h2>Capabilities / Scope of Work</h2>
          <ul className="services-list">
            {scopeItems.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </section>
      )}

      <section>
        <h2>Certifications, Training & Compliance</h2>
        <ul className="environments-list">
          {certificationItems.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </section>

      <div className="placeholder-group">
        {isSplitMedia ? (
          <>
            {renderMedia(mediaB)}
            {renderMedia(mediaC)}
          </>
        ) : (
          <>
            {renderMedia(mediaA)}
            {renderMedia(mediaB)}
            {renderMedia(mediaC)}
          </>
        )}
      </div>

      {service && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
        />
      )}

      <section className="service-detail-cta">
        <Link to={contactHref} className="btn btn-secondary">Request Service</Link>
        <a href="tel:662-781-4481" className="text-link">Call 24/7 — 662-781-4481</a>
      </section>
    </div>
  );
}

export default ServiceDetailPage;
