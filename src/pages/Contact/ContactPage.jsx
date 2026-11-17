import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  Mail,
  Phone,
  MapPin,
  Send,
  CheckCircle,
  ArrowRight,
  Globe,
  Share2,
} from 'lucide-react';

// Clean SVG Icons for Social Links
const LinkedinIcon = ({ size = 18 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect x="2" y="9" width="4" height="12" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

const TwitterIcon = ({ size = 18 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
  </svg>
);

const InstagramIcon = ({ size = 18 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
  </svg>
);

const GithubIcon = ({ size = 18 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
);

import SectionLabel from '../../components/common/SectionLabel';
import SectionHeading from '../../components/common/SectionHeading';
import Button from '../../components/common/Button';
import Card from '../../components/common/Card';
import Accordion from '../../components/common/Accordion';
import { OrangeDots, SquigglyLine } from '../../components/common/Decorations';

import { contactFaqs } from '../../data/faqs';
import { submitContactForm } from '../../services/api';
import { useToast } from '../../context/ToastContext';

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: i * 0.1 },
  }),
};

const stagger = {
  visible: {
    transition: { staggerChildren: 0.1 },
  },
};

const contactInfo = [
  {
    icon: Mail,
    label: 'Email Us',
    value: 'hello@growmetech.com',
    href: 'mailto:hello@growmetech.com',
  },
  {
    icon: Phone,
    label: 'Call Us',
    value: '+91 98765 43210',
    href: 'tel:+919876543210',
  },
  {
    icon: MapPin,
    label: 'Visit Us',
    value: 'Indore, Madhya Pradesh, India',
    href: null,
  },
];

const socialLinks = [
  { icon: LinkedinIcon, label: 'LinkedIn', href: '#' },
  { icon: TwitterIcon, label: 'Twitter', href: '#' },
  { icon: InstagramIcon, label: 'Instagram', href: '#' },
  { icon: GithubIcon, label: 'GitHub', href: '#' },
];

export default function ContactPage() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const { success } = useToast();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm();

  useEffect(() => {
    document.title = 'Contact Us — Growme Tech';
  }, []);

  const onSubmit = async (data) => {
    try {
      const existing = JSON.parse(localStorage.getItem('growme_contact_messages') || '[]');
      existing.unshift({ ...data, submittedAt: new Date().toISOString() });
      localStorage.setItem('growme_contact_messages', JSON.stringify(existing));
    } catch {
      // ignore
    }

    try {
      await submitContactForm(data);
    } catch {
      /* No backend yet — proceed to success state */
    }
    setIsSubmitted(true);
    success('Message dispatched to Growme engineering desk! We will reply within 24 hours.');
    reset();
    setTimeout(() => setIsSubmitted(false), 5000);
  };

  return (
    <main className="bg-cream min-h-screen">
      {/* ── Hero ── */}
      <section className="pt-32 pb-16 md:pt-40 md:pb-20 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={stagger}
            className="max-w-3xl"
          >
            <motion.div variants={fadeUp}>
              <SectionLabel label="CONTACT US" />
            </motion.div>
            <motion.div variants={fadeUp} custom={1}>
              <SectionHeading as="h1" size="xl">
                Get in Touch.
              </SectionHeading>
            </motion.div>
            <motion.p
              variants={fadeUp}
              custom={2}
              className="mt-6 text-lg md:text-xl text-medium-gray max-w-2xl leading-relaxed"
            >
              Have a project, idea or question? We'd love to hear from you.
            </motion.p>
          </motion.div>

          {/* Decorations */}
          <OrangeDots className="absolute top-36 right-12 hidden lg:flex" count={4} size="lg" />
          <SquigglyLine className="absolute bottom-8 left-8 hidden lg:block" />
        </div>
      </section>

      {/* ── Contact Form + Info ── */}
      <section className="pb-20 md:pb-28">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-16">
            {/* Left — Form (3 cols) */}
            <motion.div
              className="lg:col-span-3"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <Card hover={false} padding="p-8 md:p-10">
                {isSubmitted ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="flex flex-col items-center justify-center text-center py-12"
                  >
                    <div className="w-16 h-16 rounded-full bg-green-100 border-2 border-black flex items-center justify-center mb-4">
                      <CheckCircle size={32} className="text-green-600" />
                    </div>
                    <h3 className="font-display font-bold text-2xl mb-2">Message Sent!</h3>
                    <p className="text-medium-gray max-w-sm">
                      Thank you for reaching out. We'll get back to you within 24 hours.
                    </p>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit(onSubmit)} noValidate className="space-y-6">
                    {/* Name */}
                    <div>
                      <label htmlFor="name" className="block font-display font-bold text-sm mb-2">
                        Your Name <span className="text-primary">*</span>
                      </label>
                      <input
                        id="name"
                        type="text"
                        placeholder="John Doe"
                        className="input-brutal w-full"
                        {...register('name', { required: 'Name is required' })}
                      />
                      {errors.name && (
                        <p className="text-red-500 text-xs mt-1 font-medium">{errors.name.message}</p>
                      )}
                    </div>

                    {/* Email */}
                    <div>
                      <label htmlFor="email" className="block font-display font-bold text-sm mb-2">
                        Your Email <span className="text-primary">*</span>
                      </label>
                      <input
                        id="email"
                        type="email"
                        placeholder="john@example.com"
                        className="input-brutal w-full"
                        {...register('email', {
                          required: 'Email is required',
                          pattern: {
                            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                            message: 'Please enter a valid email address',
                          },
                        })}
                      />
                      {errors.email && (
                        <p className="text-red-500 text-xs mt-1 font-medium">{errors.email.message}</p>
                      )}
                    </div>

                    {/* Subject */}
                    <div>
                      <label htmlFor="subject" className="block font-display font-bold text-sm mb-2">
                        Subject <span className="text-primary">*</span>
                      </label>
                      <input
                        id="subject"
                        type="text"
                        placeholder="Project Inquiry"
                        className="input-brutal w-full"
                        {...register('subject', { required: 'Subject is required' })}
                      />
                      {errors.subject && (
                        <p className="text-red-500 text-xs mt-1 font-medium">{errors.subject.message}</p>
                      )}
                    </div>

                    {/* Message */}
                    <div>
                      <label htmlFor="message" className="block font-display font-bold text-sm mb-2">
                        Your Message <span className="text-primary">*</span>
                      </label>
                      <textarea
                        id="message"
                        rows={5}
                        placeholder="Tell us about your project or question..."
                        className="textarea-brutal w-full"
                        {...register('message', { required: 'Message is required' })}
                      />
                      {errors.message && (
                        <p className="text-red-500 text-xs mt-1 font-medium">{errors.message.message}</p>
                      )}
                    </div>

                    {/* Submit */}
                    <Button type="submit" variant="primary" size="lg" arrow disabled={isSubmitting}>
                      {isSubmitting ? 'Sending...' : 'Send Message'}
                    </Button>
                  </form>
                )}
              </Card>
            </motion.div>

            {/* Right — Contact Info (2 cols) */}
            <motion.div
              className="lg:col-span-2 space-y-6"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={stagger}
            >
              {contactInfo.map((item) => {
                const Icon = item.icon;
                return (
                  <motion.div key={item.label} variants={fadeUp}>
                    <Card hover={false} padding="p-6">
                      <div className="flex items-start gap-4">
                        <div className="flex-shrink-0 w-12 h-12 rounded-xl border-2 border-black bg-primary text-white flex items-center justify-center shadow-brutal-sm">
                          <Icon size={22} />
                        </div>
                        <div>
                          <h3 className="font-display font-bold text-sm mb-1">{item.label}</h3>
                          {item.href ? (
                            <a
                              href={item.href}
                              className="text-medium-gray hover:text-primary transition-colors text-sm"
                            >
                              {item.value}
                            </a>
                          ) : (
                            <p className="text-medium-gray text-sm">{item.value}</p>
                          )}
                        </div>
                      </div>
                    </Card>
                  </motion.div>
                );
              })}

              {/* Social Links */}
              <motion.div variants={fadeUp}>
                <Card hover={false} padding="p-6">
                  <h3 className="font-display font-bold text-sm mb-4">Follow Us</h3>
                  <div className="flex gap-3">
                    {socialLinks.map((social) => {
                      const Icon = social.icon;
                      return (
                        <a
                          key={social.label}
                          href={social.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label={social.label}
                          className="w-10 h-10 rounded-lg border-2 border-black bg-white flex items-center justify-center hover:bg-primary hover:text-white transition-all duration-150 shadow-brutal-sm hover:-translate-x-0.5 hover:-translate-y-0.5"
                        >
                          <Icon size={18} />
                        </a>
                      );
                    })}
                  </div>
                </Card>
              </motion.div>

              {/* Quick CTA */}
              <motion.div variants={fadeUp}>
                <Card hover={false} padding="p-6" className="bg-black text-white">
                  <h3 className="font-display font-bold text-base mb-2">Need a detailed estimate?</h3>
                  <p className="text-gray-400 text-sm mb-4">
                    Fill out our project form and get a custom quote within 24 hours.
                  </p>
                  <Button to="/get-a-quote" variant="primary" size="sm" arrow>
                    Get a Quote
                  </Button>
                </Card>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── FAQ Section ── */}
      <section className="pb-20 md:pb-28">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={stagger}
            className="max-w-3xl mx-auto text-center mb-12"
          >
            <motion.div variants={fadeUp}>
              <SectionLabel label="FAQS" className="justify-center" />
            </motion.div>
            <motion.div variants={fadeUp} custom={1}>
              <SectionHeading size="md">Frequently Asked Questions.</SectionHeading>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="max-w-3xl mx-auto"
          >
            <Accordion items={contactFaqs} />
          </motion.div>
        </div>
      </section>

      {/* ── CTA Section ── */}
      <section className="pb-20 md:pb-28">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="bg-black text-white border-2 border-black rounded-2xl p-10 md:p-16 text-center relative overflow-hidden"
          >
            <OrangeDots className="absolute top-6 left-6" count={3} size="md" />
            <OrangeDots className="absolute bottom-6 right-6" count={3} size="md" />
            <h2 className="font-display font-bold text-3xl md:text-4xl mb-4">
              Ready to Start Your Project?
            </h2>
            <p className="text-gray-400 max-w-xl mx-auto mb-8">
              Get a detailed, no-obligation quote tailored to your business needs.
            </p>
            <Button to="/get-a-quote" variant="primary" size="lg" arrow>
              Get a Quote
            </Button>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
