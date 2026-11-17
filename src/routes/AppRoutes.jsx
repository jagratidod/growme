import { Routes, Route } from 'react-router-dom';
import MainLayout from '../components/layout/MainLayout';

// Pages
import HomePage from '../pages/Home/HomePage';
import AboutPage from '../pages/About/AboutPage';
import ServicesPage from '../pages/Services/ServicesPage';
import ServiceDetailPage from '../pages/Services/ServiceDetailPage';
import IndustriesPage from '../pages/Industries/IndustriesPage';
import IndustryDetailPage from '../pages/Industries/IndustryDetailPage';
import PortfolioPage from '../pages/Portfolio/PortfolioPage';
import ProjectDetailPage from '../pages/Portfolio/ProjectDetailPage';
import ProcessPage from '../pages/Process/ProcessPage';
import CareersPage from '../pages/Careers/CareersPage';
import ContactPage from '../pages/Contact/ContactPage';
import QuotePage from '../pages/Quote/QuotePage';
import PrivacyPolicyPage from '../pages/Legal/PrivacyPolicyPage';
import TermsPage from '../pages/Legal/TermsPage';
import NotFoundPage from '../pages/NotFound/NotFoundPage';

export default function AppRoutes() {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        {/* Public Pages */}
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        
        {/* Services */}
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/services/:slug" element={<ServiceDetailPage />} />
        
        {/* Industries */}
        <Route path="/industries" element={<IndustriesPage />} />
        <Route path="/industries/:slug" element={<IndustryDetailPage />} />
        
        {/* Portfolio */}
        <Route path="/portfolio" element={<PortfolioPage />} />
        <Route path="/portfolio/:slug" element={<ProjectDetailPage />} />
        
        {/* Other Pages */}
        <Route path="/process" element={<ProcessPage />} />
        <Route path="/careers" element={<CareersPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/get-a-quote" element={<QuotePage />} />
        
        {/* Legal */}
        <Route path="/privacy-policy" element={<PrivacyPolicyPage />} />
        <Route path="/terms-and-conditions" element={<TermsPage />} />
        
        {/* 404 */}
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    </Routes>
  );
}
