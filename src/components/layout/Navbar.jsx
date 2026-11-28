import { useState, useEffect } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown, ArrowUpRight, Search } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { services } from '../../data/services';
import BrandLogo from '../common/BrandLogo';

export default function Navbar({ onOpenSearch }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileOpen(false);
    setIsServicesOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    document.body.style.overflow = isMobileOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [isMobileOpen]);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Services', path: '/services', hasDropdown: true },
    { name: 'Industries', path: '/industries' },
    { name: 'Portfolio', path: '/portfolio' },
    { name: 'Process', path: '/process' },
    { name: 'Contact', path: '/contact' },
  ];

  const linkClasses = (isActive) =>
    `text-sm font-display font-bold transition-colors ${
      isActive ? 'text-primary' : 'text-black hover:text-primary'
    }`;

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-cream/95 backdrop-blur-md border-b-2 border-black shadow-sm'
          : 'bg-cream border-b-2 border-black'
      }`}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-18">
          {/* Logo with Brand Component */}
          <Link to="/" className="flex items-center gap-2 group">
            <BrandLogo size="md" />
          </Link>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-7">
            {navLinks.map((link) => (
              <div
                key={link.name}
                className="relative"
                onMouseEnter={() => link.hasDropdown && setIsServicesOpen(true)}
                onMouseLeave={() => link.hasDropdown && setIsServicesOpen(false)}
              >
                <NavLink
                  to={link.path}
                  className={({ isActive }) => `${linkClasses(isActive)} flex items-center gap-1 py-2`}
                >
                  {link.name}
                  {link.hasDropdown && (
                    <ChevronDown
                      size={14}
                      className={`transition-transform duration-200 ${isServicesOpen ? 'rotate-180' : ''}`}
                    />
                  )}
                </NavLink>

                {/* Services Dropdown */}
                {link.hasDropdown && (
                  <AnimatePresence>
                    {isServicesOpen && (
                      <motion.div
                        initial={{ opacity: 0, y: 8 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 8 }}
                        transition={{ duration: 0.15 }}
                        className="absolute top-full left-1/2 -translate-x-1/2 pt-2"
                      >
                        <div className="bg-warm-white border-2 border-black rounded-xl shadow-brutal p-4 min-w-[290px]">
                          <div className="text-[10px] font-mono font-black uppercase text-medium-gray px-3 pb-2 mb-2 border-b border-black/10">
                            CAPABILITIES CATALOG
                          </div>
                          <div className="space-y-1">
                            {services.map((service) => (
                              <Link
                                key={service.slug}
                                to={`/services/${service.slug}`}
                                className="block px-3 py-1.5 text-xs font-display font-bold text-black hover:text-primary hover:bg-cream rounded-lg transition-colors"
                              >
                                {service.shortTitle || service.title}
                              </Link>
                            ))}
                          </div>
                          <div className="border-t-2 border-black/10 mt-3 pt-2">
                            <Link
                              to="/services"
                              className="flex items-center justify-between px-3 py-1.5 text-xs font-display font-black text-primary hover:bg-primary/10 rounded-lg transition-colors"
                            >
                              <span>Explore All Services</span>
                              <ArrowUpRight size={14} />
                            </Link>
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                )}
              </div>
            ))}
          </div>

          {/* Right Action Bar (Search + Quote + Mobile Toggle) */}
          <div className="flex items-center gap-3">
            {/* Quick Search / Command Palette Button */}
            {onOpenSearch && (
              <button
                onClick={onOpenSearch}
                className="flex items-center gap-2 px-3 py-1.5 rounded-xl border-2 border-black bg-warm-white hover:bg-yellow-sticker text-black shadow-brutal-sm transition-all hover:-translate-y-0.5"
                title="Search anything (Ctrl + K)"
                aria-label="Quick Search"
              >
                <Search size={14} className="text-black" />
                <span className="hidden sm:inline text-xs font-display font-black">Search</span>
                <span className="hidden md:inline text-[9px] font-mono font-bold border border-black/40 rounded px-1 bg-white">
                  ⌘K
                </span>
              </button>
            )}

            <Link
              to="/get-a-quote"
              className="hidden md:inline-flex btn-primary text-xs font-display font-black uppercase tracking-wider py-2 px-5"
            >
              Get a Quote
            </Link>

            <button
              onClick={() => setIsMobileOpen(!isMobileOpen)}
              className="lg:hidden w-10 h-10 rounded-xl border-2 border-black bg-warm-white flex items-center justify-center hover:bg-light-gray transition-colors shadow-brutal-sm"
              aria-label="Toggle menu"
            >
              {isMobileOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className="lg:hidden border-t-2 border-black bg-cream overflow-hidden"
          >
            <div className="max-w-7xl mx-auto px-4 py-5 space-y-2">
              {/* Search button for mobile */}
              {onOpenSearch && (
                <button
                  onClick={() => {
                    setIsMobileOpen(false);
                    onOpenSearch();
                  }}
                  className="w-full flex items-center justify-between py-2.5 px-4 mb-2 rounded-xl bg-warm-white border-2 border-black shadow-brutal-sm text-xs font-display font-bold"
                >
                  <span className="flex items-center gap-2">
                    <Search size={16} className="text-primary" />
                    Quick Search Case Studies & Services...
                  </span>
                  <span className="text-[10px] font-mono text-medium-gray">⌘K</span>
                </button>
              )}

              {navLinks.map((link) => (
                <div key={link.name}>
                  {link.hasDropdown ? (
                    <>
                      <button
                        onClick={() => setIsServicesOpen(!isServicesOpen)}
                        className="w-full flex items-center justify-between py-2.5 px-4 rounded-xl font-display font-bold text-sm hover:bg-light-gray transition-colors"
                      >
                        {link.name}
                        <ChevronDown
                          size={16}
                          className={`transition-transform ${isServicesOpen ? 'rotate-180' : ''}`}
                        />
                      </button>
                      <AnimatePresence>
                        {isServicesOpen && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: 'auto', opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            className="pl-4 overflow-hidden space-y-1"
                          >
                            {services.map((service) => (
                              <Link
                                key={service.slug}
                                to={`/services/${service.slug}`}
                                className="flex items-center justify-between py-2 px-3 rounded-lg text-xs font-display font-semibold hover:bg-light-gray transition-colors"
                              >
                                {service.shortTitle || service.title}
                                <ArrowUpRight size={12} className="text-medium-gray" />
                              </Link>
                            ))}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </>
                  ) : (
                    <NavLink
                      to={link.path}
                      className={({ isActive }) =>
                        `block py-2.5 px-4 rounded-xl font-display font-bold text-sm transition-colors ${
                          isActive ? 'bg-primary text-white' : 'hover:bg-light-gray'
                        }`
                      }
                    >
                      {link.name}
                    </NavLink>
                  )}
                </div>
              ))}

              <div className="pt-4 border-t-2 border-black/10 space-y-2">
                <Link to="/get-a-quote" className="btn-primary w-full justify-center text-xs py-2.5">
                  Get a Quote
                </Link>
                <Link to="/careers" className="btn-secondary w-full justify-center text-xs py-2.5">
                  Careers & Open Roles
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
