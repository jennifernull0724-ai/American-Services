import ServiceDetailPage from '../../components/ServiceDetailPage';

function EnvironmentalIndustrialService() {
	const mediaA = (
		<div className="service-image-block service-image-block-hero">
			<img src="/env1.jpeg" alt="Environmental response crews operating on site" loading="lazy" />
		</div>
	);

	const mediaB = (
		<div className="service-image-block service-image-block-mid">
			<img src="/env2.jpeg" alt="Industrial cleaning and environmental equipment staged" loading="lazy" />
		</div>
	);

	return <ServiceDetailPage serviceSlug="environmental-industrial" mediaA={mediaA} mediaB={mediaB} />;
}

export default EnvironmentalIndustrialService;
