import { useMemo } from 'react';
import { useSEO } from '../hooks/useSEO';

function RailcarStorage() {
  const canonical = 'https://www.amsrvcs.com/railcar-storage';

  useSEO({
    title: 'Railcar Storage Services | Mississippi Delta Region',
    description: 'Railcar storage services including short- and long-term storage for loads, empties, locomotives, and unit trains. Mississippi-based service coordinated with railroad partners.',
    canonical
  });

  const serviceAreaStates = ['Mississippi', 'Tennessee', 'Louisiana', 'Arkansas', 'Alabama'];

  const serviceSchema = useMemo(() => ({
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'Railcar Storage',
    serviceType: 'Railcar Storage Services',
    additionalType: ['https://schema.org/RailcarStorage', 'https://schema.org/StorageInTransit'],
    provider: {
      '@type': 'Organization',
      name: 'American Services',
      url: 'https://www.amsrvcs.com'
    },
    audience: {
      '@type': 'BusinessAudience',
      businessFunction: 'Provide service'
    },
    industry: ['Railroad', 'Rail Transportation', 'Industrial Operations', 'Logistics & Freight'],
    additionalProperty: [
      { '@type': 'PropertyValue', name: 'Railroad-compliant crews', value: 'Yes' },
      { '@type': 'PropertyValue', name: 'FRA-aligned operations', value: 'Yes' },
      { '@type': 'PropertyValue', name: 'Hi-rail equipment support', value: 'Available' },
      { '@type': 'PropertyValue', name: 'Rail corridor and yard operations', value: 'Supported' },
      { '@type': 'PropertyValue', name: 'Incident response coordination', value: 'Provided' }
    ],
    availableChannel: {
      '@type': 'ServiceChannel',
      serviceLocation: {
        '@type': 'Place',
        name: 'On-site'
      }
    },
    serviceOutput: 'Secure railcar storage capacity',
    areaServed: serviceAreaStates.map((state) => ({
      '@type': 'AdministrativeArea',
      name: state
    })),
    providerMobility: 'stationary',
    termsOfService: 'Space-available, first-come first-served; rates and switching governed by negotiated terms and applicable tariffs. Hazardous material storage requires advance authorization.',
    url: canonical
  }), [canonical]);

  return (
    <div className="page page-railcar-storage">
      <section>
        <h1>Railcar Storage</h1>
        <p>Railroad RFP-safe storage coordinated with the Mississippi Delta Railroad (MSDR) for railroad, shipper, and industrial customers. Space-available, operations-led intake with negotiated terms aligned to car types, commodities, and volume requirements.</p>
      </section>

      <section className="storage-capabilities-section">
        <div className="storage-capabilities-layout">
          <div className="storage-capabilities-copy">
            <h2>Storage Capabilities</h2>
            <ul className="services-list">
              <li>Short-term storage</li>
              <li>Long-term storage</li>
              <li>Loaded railcars</li>
              <li>Empty railcars</li>
              <li>Locomotives</li>
              <li>Unit train sets (coal and grain)</li>
            </ul>
          </div>
          <div className="storage-capabilities-visual">
            <div className="service-image-block service-image-block-mid">
              <img src="/storage1.png" alt="Railcar storage at Mississippi Delta Railroad" loading="lazy" />
            </div>
          </div>
        </div>
      </section>

      <section>
        <h2>Rates & Terms (Summary)</h2>
        <p>All storage is space-available and first-come, first-served. Rates and terms are negotiated based on customer requirements, car types and commodities, volumes, and prevailing market conditions. Switching charges vary by location and are governed by applicable local tariffs; minimum interplant switching charges may apply. Typical non-hazardous storage freight averages $150 each way ($300 round trip) unless otherwise negotiated in advance. Tank cars containing hazardous materials require advance authorization, are subject to freight surcharges, and remain governed by applicable tariffs.</p>
      </section>

      <section>
        <h2>Railroad & Facility Overview</h2>
        <p>Railcar storage is provided in coordination with the Mississippi Delta Railroad (Reporting Mark: MSDR), based in Sumner, Mississippi. MSDR operates approximately 85 miles of track and interchanges with Canadian National Railway at Swan Lake, MS. Facilities include two primary yards in Clarksdale, MS, plus multiple sidings and auxiliary tracks suitable for storage. Primary commodities handled include scrap, paper, polystyrene, PVC, fertilizer, cotton, grains, and other agricultural products.</p>
      </section>

      <section>
        <h2>Capacity, Operations & Compliance</h2>
        <ul className="services-list">
          <li>Approximate storage capacity: 2,100 railcars supporting empty storage and storage-in-transit for loaded cars</li>
          <li>Railcar repair services available for storage customers and third parties</li>
          <li>Rail equipment availability via partners (covered hoppers, boxcars, gondolas) subject to inquiry and availability</li>
          <li>Operations Monday–Friday and as required; standby switch engine service available 24/7</li>
          <li>Locomotives in service: 12</li>
          <li>Operations conducted per railroad operating rules, local tariff provisions, site-specific safety and access requirements, coordination protocols with interchange carriers, and hazardous materials authorization procedures when applicable</li>
          <li>No public storage availability or guaranteed capacity is implied; all storage is subject to operational review and approval</li>
        </ul>
      </section>

      <section>
        <h2>Team Track & Transload Locations</h2>
        <ul className="services-list">
          <li>Sumner, MS</li>
          <li>Clarksdale, MS</li>
          <li>Coahoma, MS</li>
        </ul>
      </section>

      <div className="placeholder-group">
        
      </div>

      <section className="service-detail-cta">
        <a href="/contact" className="btn btn-secondary">Inquire About Railcar Storage</a>
        <a href="/contact" className="text-link">Discuss Railcar Storage Requirements</a>
      </section>

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
    </div>
  );
}

export default RailcarStorage;
