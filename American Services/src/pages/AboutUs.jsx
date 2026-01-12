import { useSEO } from '../hooks/useSEO';

function AboutUs() {
  const canonical = 'https://www.amsrvcs.com/about';

  useSEO({
    title: 'About American Services | Field-Ready Operations',
    description: 'American Services is a privately held field services company delivering track and rail support, certified load adjustment and transfer, environmental and industrial services, earth work, and 24/7 emergency coverage.',
    canonical
  });

  return (
    <div className="page page-about">
      <section className="about-intro">
        <h1>About American Services</h1>
        <p>American Services is a privately held field services company focused on regulated, high-risk operating environments. We support railroads, logistics operators, and industrial facilities with track and rail services, certified load adjustment and transfer, environmental and industrial services, earth work, and 24/7 emergency coverage.</p>
        <p>Decision-making stays close to the work: intake, planning, and mobilization are handled by the same operations personnel who coordinate field execution. No corporate distance, no platform intermediaries.</p>
        <p>Crews are stationed across Mississippi, Tennessee, Louisiana, Arkansas, and Alabama to reduce response times and coordinate with local rail, industrial, and transportation stakeholders. Each mobilization is planned around safety requirements, site access, and operational continuity.</p>
        <p>American Services supports clients through the full arc of an incident or planned job—initial containment, load adjustment and transfer, cleanup, and ongoing industrial maintenance—so operations can continue with confidence.</p>
      </section>

      <section className="about-operations">
        <div className="about-operations-inner">
          <h2>How We Operate</h2>
          <ul className="operations-list">
            <li>Field-ready planning that ties intake directly to mobilization and on-site coordination.</li>
            <li>Safety-first approach grounded in site-specific controls and regulatory compliance.</li>
            <li>Clear communication from first call through stabilization, cleanup, and closeout.</li>
          </ul>
        </div>
      </section>
    </div>
  );
}

export default AboutUs;
