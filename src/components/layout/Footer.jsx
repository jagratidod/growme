import { Link } from 'react-router-dom';
import { ArrowUpRight, Mail, Phone, MapPin } from 'lucide-react';
import { services } from '../../data/services';
import { industries } from '../../data/industries';
import BrandLogo from '../common/BrandLogo';

export default function Footer() {
  const quickLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Portfolio', path: '/portfolio' },
    { name: 'Process', path: '/process' },
    { name: 'Careers', path: '/careers' },
    { name: 'Contact', path: '/contact' },
  ];

  const socialLinks = [
    { name: 'LinkedIn', url: '#' },
    { name: 'Twitter', url: '#' },
    { name: 'Instagram', url: '#' },
    { name: 'GitHub', url: '#' },
  ];

  return (
    <footer className="bg-deep-black text-white">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-8">
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <Link to="/" className="inline-block mb-4 group">
              <BrandLogo size="md" variant="dark" />
            </Link>
            <p className="text-sm text-gray-400 leading-relaxed mb-6 max-w-sm">
              We design, develop, and scale digital products — from websites and mobile apps to custom software and AI solutions. Building digital experiences for a growing world.
            </p>

            {/* Contact Info */}
            <div className="space-y-3">
              <a
                href="mailto:hello@growmetech.com"
                className="flex items-center gap-3 text-sm text-gray-400 hover:text-primary transition-colors"
              >
                <Mail size={16} />
                <span>hello@growmetech.com</span>
              </a>
              <a
                href="tel:+919876543210"
                className="flex items-center gap-3 text-sm text-gray-400 hover:text-primary transition-colors"
              >
                <Phone size={16} />
                <span>+91 98765 43210</span>
              </a>
              <div className="flex items-start gap-3 text-sm text-gray-400">
                <MapPin size={16} className="mt-0.5 flex-shrink-0" />
                <span>Indore, Madhya Pradesh, India</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display font-bold text-sm mb-4 uppercase tracking-wider">
              Quick Links
            </h4>
            <ul className="space-y-2.5">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.path}
                    className="text-sm text-gray-400 hover:text-primary transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-display font-bold text-sm mb-4 uppercase tracking-wider">
              Services
            </h4>
            <ul className="space-y-2.5">
              {services.slice(0, 7).map((service) => (
                <li key={service.slug}>
                  <Link
                    to={`/services/${service.slug}`}
                    className="text-sm text-gray-400 hover:text-primary transition-colors"
                  >
                    {service.shortTitle || service.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Industries + Social */}
          <div>
            <h4 className="font-display font-bold text-sm mb-4 uppercase tracking-wider">
              Industries
            </h4>
            <ul className="space-y-2.5 mb-8">
              {industries.slice(0, 6).map((industry) => (
                <li key={industry.slug}>
                  <Link
                    to={`/industries/${industry.slug}`}
                    className="text-sm text-gray-400 hover:text-primary transition-colors"
                  >
                    {industry.title}
                  </Link>
                </li>
              ))}
            </ul>

            <h4 className="font-display font-bold text-sm mb-4 uppercase tracking-wider">
              Follow Us
            </h4>
            <div className="flex flex-wrap gap-2">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.url}
                  className="px-3 py-1.5 border border-gray-700 rounded-lg text-xs font-display font-medium text-gray-400 hover:border-primary hover:text-primary transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {social.name}
                  <ArrowUpRight size={10} className="inline ml-1" />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-gray-500">
            © {new Date().getFullYear()} Growme Tech. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <Link to="/privacy-policy" className="text-xs text-gray-500 hover:text-primary transition-colors">
              Privacy Policy
            </Link>
            <Link to="/terms-and-conditions" className="text-xs text-gray-500 hover:text-primary transition-colors">
              Terms & Conditions
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
