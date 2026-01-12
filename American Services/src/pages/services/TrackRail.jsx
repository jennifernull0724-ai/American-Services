import ServiceDetailPage from '../../components/ServiceDetailPage';

function TrackRailService() {
  const mediaA = (
    <div className="service-image-block service-image-block-hero">
      <img src="/track1.jpeg" alt="Track and rail maintenance crew on-site" loading="lazy" />
    </div>
  );

  const mediaB = (
    <div className="service-image-block service-image-block-mid">
      <img src="/track2.jpeg" alt="Rail equipment staged for maintenance" loading="lazy" />
    </div>
  );

  const mediaC = (
    <div className="service-image-block service-image-block-mid">
      <img src="/track3.jpeg" alt="Rail corridor operations in progress" loading="lazy" />
    </div>
  );

  return <ServiceDetailPage serviceSlug="track-rail" mediaA={mediaA} mediaB={mediaB} mediaC={mediaC} />;
}

export default TrackRailService;
