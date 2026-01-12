import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { useEffect } from 'react';

import Nav from './components/Nav';
import Footer from './components/Footer';
import Home from './pages/Home';
import AboutUs from './pages/AboutUs';
import Services from './pages/Services';
import ServiceArea from './pages/ServiceArea';
import ContactUs from './pages/ContactUs';
import Safety from './pages/Safety';
import TrackRailService from './pages/services/TrackRail';
import LoadAdjustmentTransferService from './pages/services/LoadAdjustmentTransfer';
import EnvironmentalIndustrialService from './pages/services/Environmental';
import EmergencyResponseService from './pages/services/EmergencyResponse';
import EarthWorkService from './pages/services/EarthWork';
import RailcarStorage from './pages/RailcarStorage';

// GA4 Analytics Hook
function useGA4PageTracking() {
  const location = useLocation();

  useEffect(() => {
    if (typeof window.gtag === 'function') {
      window.gtag('config', import.meta.env.VITE_GA4_MEASUREMENT_ID, {
        page_path: location.pathname + location.search,
      });
    }
  }, [location]);
}

const SERVICE_AREA_STATES = ['Mississippi', 'Tennessee', 'Louisiana', 'Arkansas', 'Alabama'];

const localBusinessSchema = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  name: 'American Services',
  url: 'https://www.amsrvcs.com',
  areaServed: SERVICE_AREA_STATES.map((state) => ({
    '@type': 'AdministrativeArea',
    name: state
  })),
  serviceArea: SERVICE_AREA_STATES.map((state) => ({
    '@type': 'AdministrativeArea',
    name: state
  })),
  sameAs: [
    'https://www.linkedin.com/company/american-services-llc/posts/?feedView=all'
  ]
};

// Layout wrapper that includes GA4 tracking
function AppLayout({ children }) {
  useGA4PageTracking();
  return (
    <>
      <Nav />
      {children}
      <Footer />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />
    </>
  );
}

function App() {
  return (
    <BrowserRouter>
      <AppLayout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/services" element={<Services />} />
          <Route path="/services/track-rail" element={<TrackRailService />} />
          <Route path="/services/load-adjustment-transfer" element={<LoadAdjustmentTransferService />} />
          <Route path="/services/environmental-industrial" element={<EnvironmentalIndustrialService />} />
          <Route path="/services/emergency-response" element={<EmergencyResponseService />} />
          <Route path="/services/earth-work" element={<EarthWorkService />} />
          <Route path="/railcar-storage" element={<RailcarStorage />} />
          <Route path="/service-area" element={<ServiceArea />} />
          <Route path="/safety" element={<Safety />} />
          <Route path="/contact" element={<ContactUs />} />
        </Routes>
      </AppLayout>
    </BrowserRouter>
  );
}

export default App;
