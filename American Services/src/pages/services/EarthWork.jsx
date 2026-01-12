import ServiceDetailPage from '../../components/ServiceDetailPage';

function EarthWorkService() {
  const mediaA = (
    <div className="service-image-block service-image-block-hero">
      <img src="/earth3.jpeg" alt="Site preparation and grading in progress" loading="lazy" />
    </div>
  );

  const mediaB = (
    <div className="service-image-block service-image-block-mid">
      <img src="/earth1.jpeg" alt="Earth work crew grading and moving soil" loading="lazy" />
    </div>
  );

  const mediaC = (
    <div className="service-image-block service-image-block-mid">
      <img src="/earth2.jpeg" alt="Excavation equipment staged for earth work operations" loading="lazy" />
    </div>
  );

  return <ServiceDetailPage serviceSlug="earth-work" mediaA={mediaA} mediaB={mediaB} mediaC={mediaC} />;
}

export default EarthWorkService;
