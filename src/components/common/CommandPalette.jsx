import { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Search, 
  ArrowRight, 
  Layers, 
  Briefcase, 
  Building2, 
  FileText, 
  Sparkles, 
  Mail, 
  Phone, 
  Calculator, 
  X 
} from 'lucide-react';
import { services } from '../../data/services';
import { industries } from '../../data/industries';
import { projects } from '../../data/projects';
import { useToast } from '../../context/ToastContext';

export default function CommandPalette({ isOpen, onClose }) {
  const [query, setQuery] = useState('');
  const [selectedIndex, setSelectedIndex] = useState(0);
  const inputRef = useRef(null);
  const navigate = useNavigate();
  const { success } = useToast();

  // Reset query and focus when opening
  useEffect(() => {
    if (isOpen) {
      setQuery('');
      setSelectedIndex(0);
      setTimeout(() => inputRef.current?.focus(), 50);
    }
  }, [isOpen]);

  // Global Ctrl+K / Cmd+K listener
  useEffect(() => {
    const handleKeyDown = (e) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === 'k') {
        e.preventDefault();
        if (isOpen) {
          onClose();
        } else {
          // Open triggered by parent state or event
        }
      }
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  // Build searchable items list
  const allItems = [
    // Quick Actions
    {
      id: 'action-quote',
      title: 'Calculate Project Quote & Timeline',
      category: 'Actions',
      icon: Calculator,
      path: '/get-a-quote',
      badge: 'Interactive',
    },
    {
      id: 'action-careers',
      title: "View Open Careers & Roles (We're Hiring)",
      category: 'Actions',
      icon: Briefcase,
      path: '/careers',
      badge: 'Hiring',
    },
    {
      id: 'action-email',
      title: 'Copy Contact Email (hello@growmetech.com)',
      category: 'Actions',
      icon: Mail,
      action: () => {
        navigator.clipboard.writeText('hello@growmetech.com');
        success('Copied hello@growmetech.com to clipboard!');
        onClose();
      },
    },
    {
      id: 'action-phone',
      title: 'Call Growme Tech Desk (+91 98765 43210)',
      category: 'Actions',
      icon: Phone,
      action: () => {
        window.location.href = 'tel:+919876543210';
        onClose();
      },
    },

    // Pages
    { id: 'page-home', title: 'Home', category: 'Pages', icon: Sparkles, path: '/' },
    { id: 'page-about', title: 'About Us & Leadership', category: 'Pages', icon: Building2, path: '/about' },
    { id: 'page-services', title: 'All Services Catalog', category: 'Pages', icon: Layers, path: '/services' },
    { id: 'page-portfolio', title: 'Portfolio & Case Studies', category: 'Pages', icon: FileText, path: '/portfolio' },
    { id: 'page-process', title: 'Our 5-Stage Engineering Process', category: 'Pages', icon: Layers, path: '/process' },
    { id: 'page-contact', title: 'Contact Us & Inquiries', category: 'Pages', icon: Mail, path: '/contact' },

    // Services
    ...services.map((s) => ({
      id: `svc-${s.id}`,
      title: s.title,
      category: 'Services',
      icon: Layers,
      path: `/services/${s.slug}`,
      desc: s.tagline || s.description,
    })),

    // Projects
    ...projects.map((p) => ({
      id: `proj-${p.id}`,
      title: p.title,
      category: 'Case Studies',
      icon: FileText,
      path: `/portfolio/${p.slug}`,
      badge: p.industry,
    })),

    // Industries
    ...industries.map((ind) => ({
      id: `ind-${ind.id}`,
      title: ind.title,
      category: 'Industries',
      icon: Building2,
      path: `/industries/${ind.slug}`,
    })),
  ];

  // Filter items
  const filtered = query.trim() === ''
    ? allItems.slice(0, 8)
    : allItems.filter((item) =>
        item.title.toLowerCase().includes(query.toLowerCase()) ||
        item.category.toLowerCase().includes(query.toLowerCase()) ||
        (item.desc && item.desc.toLowerCase().includes(query.toLowerCase()))
      ).slice(0, 10);

  const handleSelect = (item) => {
    if (item.action) {
      item.action();
    } else if (item.path) {
      navigate(item.path);
      onClose();
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === 'ArrowDown') {
      e.preventDefault();
      setSelectedIndex((prev) => (prev + 1) % (filtered.length || 1));
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      setSelectedIndex((prev) => (prev - 1 + filtered.length) % (filtered.length || 1));
    } else if (e.key === 'Enter') {
      e.preventDefault();
      if (filtered[selectedIndex]) {
        handleSelect(filtered[selectedIndex]);
      }
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[9990] flex items-start justify-center pt-20 sm:pt-28 px-4 bg-black/60 backdrop-blur-sm">
          {/* Backdrop click to dismiss */}
          <div className="absolute inset-0" onClick={onClose} />

          {/* Modal Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96, y: -10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.96, y: -10 }}
            transition={{ duration: 0.15 }}
            className="relative w-full max-w-xl bg-warm-white border-3 border-black rounded-2xl shadow-brutal-violet-lg overflow-hidden z-10"
          >
            {/* Input Header */}
            <div className="flex items-center gap-3 px-4 py-3.5 border-b-2 border-black bg-cream">
              <Search size={20} className="text-violet flex-shrink-0" />
              <input
                ref={inputRef}
                type="text"
                placeholder="Search services, case studies, industries, or actions..."
                value={query}
                onChange={(e) => {
                  setQuery(e.target.value);
                  setSelectedIndex(0);
                }}
                onKeyDown={handleKeyDown}
                className="w-full bg-transparent border-none text-sm sm:text-base font-display font-bold text-black placeholder:text-medium-gray placeholder:font-normal focus:outline-none"
              />
              <div className="flex items-center gap-1.5 flex-shrink-0">
                <span className="hidden sm:inline-block px-1.5 py-0.5 rounded border border-black bg-white text-[10px] font-mono font-bold shadow-[1px_1px_0px_#111]">
                  ESC
                </span>
                <button
                  onClick={onClose}
                  className="p-1 text-black/60 hover:text-black rounded"
                  aria-label="Close command palette"
                >
                  <X size={18} />
                </button>
              </div>
            </div>

            {/* Results List */}
            <div className="max-h-[360px] overflow-y-auto p-2 space-y-1">
              {filtered.length === 0 ? (
                <div className="py-12 text-center text-sm text-medium-gray font-display">
                  No matching services or case studies found for "{query}".
                </div>
              ) : (
                filtered.map((item, idx) => {
                  const Icon = item.icon;
                  const isSelected = idx === selectedIndex;

                  return (
                    <div
                      key={item.id}
                      onClick={() => handleSelect(item)}
                      onMouseEnter={() => setSelectedIndex(idx)}
                      className={`flex items-center justify-between px-3.5 py-2.5 rounded-xl cursor-pointer transition-colors border-2 ${
                        isSelected
                          ? 'bg-cream border-black shadow-brutal-sm'
                          : 'border-transparent hover:bg-black/5'
                      }`}
                    >
                      <div className="flex items-center gap-3 min-w-0">
                        <div
                          className={`w-8 h-8 rounded-lg flex items-center justify-center border border-black flex-shrink-0 ${
                            isSelected ? 'bg-violet text-white shadow-[1px_1px_0px_#111]' : 'bg-white text-black'
                          }`}
                        >
                          <Icon size={16} />
                        </div>
                        <div className="truncate">
                          <span className="text-xs sm:text-sm font-display font-bold text-black block truncate">
                            {item.title}
                          </span>
                          <span className="text-[10px] font-mono text-medium-gray block uppercase">
                            {item.category}
                          </span>
                        </div>
                      </div>

                      <div className="flex items-center gap-2 flex-shrink-0 ml-3">
                        {item.badge && (
                          <span className="text-[9px] font-mono font-bold px-2 py-0.5 rounded border border-black bg-yellow-sticker text-black shadow-[1px_1px_0px_#111]">
                            {item.badge}
                          </span>
                        )}
                        <ArrowRight
                          size={14}
                          className={`transition-transform ${isSelected ? 'translate-x-1 text-violet' : 'text-black/30'}`}
                        />
                      </div>
                    </div>
                  );
                })
              )}
            </div>

            {/* Footer Shortcut Bar */}
            <div className="px-4 py-2 border-t-2 border-black/10 bg-cream/70 flex items-center justify-between text-[10px] font-mono font-bold text-medium-gray">
              <div className="flex items-center gap-3">
                <span>↑↓ Navigate</span>
                <span>↵ Open</span>
              </div>
              <span className="text-violet font-bold">Growme Fast Finder</span>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
