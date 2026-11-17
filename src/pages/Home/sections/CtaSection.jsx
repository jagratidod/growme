import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send, CheckCircle, Megaphone } from 'lucide-react';
import { services } from '../../../data/services';
import { submitContactForm } from '../../../services/api';
import StickerBadge from '../../../components/common/StickerBadge';
import { useToast } from '../../../context/ToastContext';

export default function CtaSection() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const { success } = useToast();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm();

  const onSubmit = async (data) => {
    try {
      const existing = JSON.parse(localStorage.getItem('growme_contact_messages') || '[]');
      existing.unshift({ ...data, source: 'Home CTA', submittedAt: new Date().toISOString() });
      localStorage.setItem('growme_contact_messages', JSON.stringify(existing));
    } catch {
      // ignore
    }

    try {
      await submitContactForm(data);
    } catch {
      // Backend not attached yet; gracefully continue to success state
    }
    setIsSubmitted(true);
    success('Inquiry submitted! We will reach out within 24 business hours.');
    reset();
    setTimeout(() => setIsSubmitted(false), 6000);
  };

  return (
    <section className="bg-cream py-16 md:py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main 2-part Grid Container */}
        <div className="border-3 border-black rounded-3xl bg-warm-white shadow-brutal-lg overflow-hidden grid grid-cols-1 lg:grid-cols-12">
          
          {/* Left Column: Big Orange Billboard with Megaphone Illustration */}
          <div className="lg:col-span-5 bg-primary p-8 md:p-12 flex flex-col justify-between border-b-3 lg:border-b-0 lg:border-r-3 border-black text-white relative">
            <div>
              <div className="mb-4">
                <StickerBadge text="START A PROJECT" color="yellow" rotate={-3} size="md" />
              </div>

              <h2 className="font-display font-black text-3xl sm:text-4xl md:text-5xl lg:text-5xl uppercase leading-[1.05] tracking-tight text-white mt-4">
                Let's Build Something Amazing Together.
              </h2>

              <p className="mt-6 text-sm sm:text-base text-white/90 font-medium leading-relaxed">
                Whether you're starting from scratch or scaling an existing platform, our full-stack engineers and designers are ready to help.
              </p>
            </div>

            {/* Megaphone Doodle Illustration */}
            <div className="mt-8 flex items-center justify-center p-6 bg-white/10 rounded-2xl border-2 border-black/20">
              <div className="relative flex items-center gap-3">
                <div className="w-14 h-14 rounded-2xl bg-black border-2 border-white flex items-center justify-center text-primary shadow-brutal-sm rotate-[-8deg]">
                  <Megaphone size={28} />
                </div>
                <div className="font-display font-black text-xs uppercase tracking-wider text-black bg-white px-3 py-1.5 rounded-lg border-2 border-black shadow-brutal-sm">
                  Let's Talk Scale!
                </div>
              </div>
            </div>

            {/* Direct Contact Links */}
            <div className="mt-8 pt-6 border-t-2 border-white/20 space-y-2.5 text-xs font-display font-bold">
              <a
                href="mailto:hello@growmetech.com"
                className="flex items-center gap-2 text-white hover:underline"
              >
                <Mail size={14} /> hello@growmetech.com
              </a>
              <a
                href="tel:+919876543210"
                className="flex items-center gap-2 text-white hover:underline"
              >
                <Phone size={14} /> +91 98765 43210
              </a>
              <div className="flex items-center gap-2 text-white/80">
                <MapPin size={14} /> Indore, Madhya Pradesh, India
              </div>
            </div>
          </div>

          {/* Right Column: Inline Inquiry Form */}
          <div className="lg:col-span-7 p-8 md:p-12 bg-warm-white flex flex-col justify-center">
            
            <div className="mb-6">
              <span className="text-xs font-display font-black text-primary uppercase tracking-[0.2em]">
                / CONTACT
              </span>
              <h3 className="font-display font-black text-2xl md:text-3xl text-black mt-1">
                Have a Project in Mind?
              </h3>
              <p className="text-sm text-medium-gray mt-1">
                Tell us about your idea. We'll get back to you within 24 hours.
              </p>
            </div>

            {isSubmitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="p-8 border-2 border-black rounded-2xl bg-[#D1FAE5] text-center shadow-brutal"
              >
                <CheckCircle size={40} className="mx-auto text-emerald-600 mb-3" />
                <h4 className="font-display font-black text-xl text-black">
                  Message Sent Successfully!
                </h4>
                <p className="text-sm text-black/80 mt-2">
                  Thank you for reaching out. One of our lead architects will contact you promptly.
                </p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Name */}
                  <div>
                    <input
                      type="text"
                      placeholder="Your Name *"
                      {...register('name', { required: 'Name is required' })}
                      className="input-brutal"
                    />
                    {errors.name && (
                      <p className="text-xs text-red-600 font-bold mt-1">{errors.name.message}</p>
                    )}
                  </div>

                  {/* Business Email */}
                  <div>
                    <input
                      type="email"
                      placeholder="Business Email *"
                      {...register('email', {
                        required: 'Email is required',
                        pattern: {
                          value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                          message: 'Invalid email address',
                        },
                      })}
                      className="input-brutal"
                    />
                    {errors.email && (
                      <p className="text-xs text-red-600 font-bold mt-1">{errors.email.message}</p>
                    )}
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Service Required */}
                  <div>
                    <select
                      {...register('service', { required: 'Please select a service' })}
                      className="select-brutal"
                      defaultValue=""
                    >
                      <option value="" disabled>
                        Service Required *
                      </option>
                      {services.map((srv) => (
                        <option key={srv.slug} value={srv.title}>
                          {srv.title}
                        </option>
                      ))}
                    </select>
                    {errors.service && (
                      <p className="text-xs text-red-600 font-bold mt-1">{errors.service.message}</p>
                    )}
                  </div>

                  {/* Budget */}
                  <div>
                    <select
                      {...register('budget')}
                      className="select-brutal"
                      defaultValue=""
                    >
                      <option value="" disabled>
                        Project Budget (Optional)
                      </option>
                      <option value="under-5k">Under $5K</option>
                      <option value="5k-10k">$5K - $10K</option>
                      <option value="10k-25k">$10K - $25K</option>
                      <option value="25k-50k">$25K - $50K</option>
                      <option value="50k-plus">$50K+</option>
                    </select>
                  </div>
                </div>

                {/* Message */}
                <div>
                  <textarea
                    rows={4}
                    placeholder="Tell us about your project, goals, or requirements... *"
                    {...register('message', { required: 'Message cannot be empty' })}
                    className="textarea-brutal"
                  />
                  {errors.message && (
                    <p className="text-xs text-red-600 font-bold mt-1">{errors.message.message}</p>
                  )}
                </div>

                {/* Submit button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full btn-primary justify-center text-sm md:text-base py-3.5"
                >
                  <Send size={18} />
                  {isSubmitting ? 'Sending...' : 'Send Inquiry ↗'}
                </button>

              </form>
            )}

          </div>

        </div>

      </div>
    </section>
  );
}
