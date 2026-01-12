import { useSEO } from '../hooks/useSEO';

const SAFETY_PILLARS = [
  {
    id: 'training',
    title: 'Training & Qualifications',
    points: [
      'Rail-safe orientation for track and right-of-way work',
      'HAZWOPER-qualified responders for environmental incidents',
      'Confined space procedures for tank and sump entry',
      'Certified load adjustment teams for rail and highway equipment'
    ]
  },
  {
    id: 'planning',
    title: 'Planning & Controls',
    points: [
      'Job Safety Analysis and tailboard reviews before mobilization',
      'Site-specific PPE requirements aligned with client policies',
      'Permitting support for hot work, confined space, and line breaks',
      'Lockout/tagout coordination with facility or rail personnel'
    ]
  },
  {
    id: 'equipment',
    title: 'Equipment Readiness',
    points: [
      'Response trailers with containment, boom, and pumping systems',
      'Vacuum trucks, pressure-wash systems, and line jetting units',
      'Air monitoring, lighting, and decon setups for night or low-visibility work',
      'Rail-access equipment and track-safe procedures for on-line work'
    ]
  }
];

function Safety() {
  const canonical = 'https://www.amsrvcs.com/safety';

  useSEO({
    title: 'Safety & Compliance',
    description: 'Safety-first rail and industrial services with trained crews, certifications, and compliance aligned to railroad and client requirements across the southern United States.',
    canonical
  });

  return (
    <div className="page page-safety">
      <section className="page-header">
        <h1>Safety at American Services</h1>
        <p className="page-intro">Safety governs every dispatch—railside, roadside, or inside a facility. Crews mobilize with the training, controls, and equipment required to execute track and rail services, certified load adjustment and transfer, environmental and industrial services, earth work, and emergency response and service coverage.</p>
      </section>

      <section className="safety-pillars">
        {SAFETY_PILLARS.map((pillar) => (
          <article key={pillar.id} className="safety-card">
            <h2>{pillar.title}</h2>
            <ul>
              {pillar.points.map((point, index) => (
                <li key={index}>{point}</li>
              ))}
            </ul>
          </article>
        ))}
      </section>

      <section className="safety-cta">
        <p>Need safety documentation or pre-job coordination? Contact operations for the specific service you require.</p>
        <a href="tel:662-781-4481" className="btn btn-primary">Call 24/7 — 662-781-4481</a>
      </section>
    </div>
  );
}

export default Safety;
