import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Map from '../components/Map';
import { useSEO } from '../hooks/useSEO';

function ServiceArea() {
  const location = useLocation();
  const canonical = 'https://www.amsrvcs.com/service-area';

  useSEO({
    title: 'Service Area | Rail & Industrial Services',
    description: 'American Services supports rail, industrial, and emergency operations throughout Mississippi, Tennessee, Louisiana, Arkansas, and Alabama. Service beyond these areas coordinated case-by-case.',
    canonical
  });

  useEffect(() => {
    if (location.hash) {
      const id = location.hash.replace('#', '');
      const element = document.getElementById(id);
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }, 100);
      }
    }
  }, [location.hash]);

  return (
    <div className="page">
      <section>
        <h1>Service Area & Coverage</h1>
        <p>American Services dispatches track and rail crews, certified load adjustment teams, and environmental and industrial responders across Mississippi, Tennessee, Louisiana, Arkansas, and Alabama. Coverage is planned to keep rail traffic, freight, and plant operations moving.</p>
      </section>

      <section>
        <p className="map-helper-text">Regional Coverage</p>
        <Map />
      </section>

      <section>
        <h2>Office & Response Locations</h2>
        <div className="locations-grid">
          <div className="location-card" id="location-southaven">
            <h3>Corporate Office</h3>
            <address>
              2281 Stateline Rd W<br />
              Southaven, MS 38671
            </address>
          </div>
        </div>
      </section>

      <section>
        <h2>Coverage Notes</h2>
        <ul className="coverage-list">
          <li>Rail corridors, yards, sidings, and industrial spurs</li>
          <li>Highway and logistics hubs requiring certified load adjustment and transfer</li>
          <li>Industrial facilities requiring confined space entry, industrial cleaning, and environmental support</li>
          <li>Emergency response mobilization coordinated with client safety and compliance teams</li>
        </ul>
        <p className="closing-text">Service beyond these locations is coordinated on a case-by-case basis based on incident type, access requirements, and travel time.</p>
      </section>
    </div>
  );
}

export default ServiceArea;
