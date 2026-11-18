import React, { useState } from 'react';
import { X, Calendar, Clock, CheckCircle2, Phone, Mail, ShieldCheck, MessageCircle, ArrowRight } from 'lucide-react';

interface BookConsultModalProps {
  isOpen: boolean;
  onClose: () => void;
  onNavigate: (path: string) => void;
}

export const BookConsultModal: React.FC<BookConsultModalProps> = ({
  isOpen,
  onClose,
  onNavigate
}) => {
  const [step, setStep] = useState<'form' | 'confirmed'>('form');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    city: 'Sydney (NSW)',
    topic: 'Week 1 Arrival Setup (SIM, Bank, TFN)',
    preferredDate: '',
    timeWindow: 'Afternoon (1:00 PM – 5:00 PM AEST)',
    notes: ''
  });

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name.trim() || !formData.email.trim()) return;
    setStep('confirmed');
  };

  const handleClose = () => {
    setStep('form');
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/60 backdrop-blur-xs flex items-center justify-center p-4">
      <div className="relative bg-white rounded-3xl max-w-xl w-full shadow-2xl border border-[#D5E4DC] overflow-hidden">
        {/* Header with Brand Deep Green Gradient */}
        <div className="bg-gradient-to-r from-[#1B4D3E] to-[#2A9D8F] text-white p-6 relative">
          <button
            type="button"
            onClick={handleClose}
            className="absolute right-4 top-4 p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors cursor-pointer"
            aria-label="Close booking modal"
          >
            <X className="w-5 h-5" />
          </button>

          <span className="inline-flex items-center gap-1.5 text-[11px] font-bold uppercase tracking-wider bg-white/15 text-[#E9C46A] px-3 py-1 rounded-full">
            <Calendar className="w-3.5 h-3.5" />
            1-on-1 Settlement Guidance
          </span>
          <h3 className="text-xl sm:text-2xl font-extrabold font-display mt-2.5 text-white">
            Book a FirstYear AU Consult
          </h3>
          <p className="text-xs sm:text-sm text-emerald-100 mt-1">
            Get clear, practical guidance on your arrival order: SIMs, bank ID rules, TFN, or renting without local history.
          </p>
        </div>

        {/* Body */}
        {step === 'form' ? (
          <form onSubmit={handleSubmit} className="p-6 space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
              <div>
                <label className="block text-xs font-bold text-[#1B4D3E] mb-1">
                  Full Name *
                </label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="Your name"
                  className="w-full px-3.5 py-2.5 rounded-xl border border-[#D5E4DC] bg-[#F6FAF7] text-sm text-[#1B3A34] focus:outline-none focus:border-[#2A9D8F]"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-[#1B4D3E] mb-1">
                  Email Address *
                </label>
                <input
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder="you@example.com"
                  className="w-full px-3.5 py-2.5 rounded-xl border border-[#D5E4DC] bg-[#F6FAF7] text-sm text-[#1B3A34] focus:outline-none focus:border-[#2A9D8F]"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
              <div>
                <label className="block text-xs font-bold text-[#1B4D3E] mb-1">
                  Destination City / State
                </label>
                <select
                  value={formData.city}
                  onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-xl border border-[#D5E4DC] bg-[#F6FAF7] text-sm text-[#1B3A34] focus:outline-none focus:border-[#2A9D8F]"
                >
                  <option>Sydney (NSW)</option>
                  <option>Melbourne (VIC)</option>
                  <option>Adelaide (SA)</option>
                  <option>Brisbane (QLD)</option>
                  <option>Perth (WA)</option>
                  <option>Canberra / Hobart / Darwin</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-bold text-[#1B4D3E] mb-1">
                  Main Topic
                </label>
                <select
                  value={formData.topic}
                  onChange={(e) => setFormData({ ...formData, topic: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-xl border border-[#D5E4DC] bg-[#F6FAF7] text-sm text-[#1B3A34] focus:outline-none focus:border-[#2A9D8F]"
                >
                  <option>Week 1 Arrival Setup (SIM, Bank, TFN)</option>
                  <option>Renting With No Local Rental History</option>
                  <option>Driver Licence, Rego &amp; State ID</option>
                  <option>Full 12-Month Settlement Plan</option>
                </select>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
              <div>
                <label className="block text-xs font-bold text-[#1B4D3E] mb-1">
                  Preferred Date
                </label>
                <input
                  type="date"
                  value={formData.preferredDate}
                  onChange={(e) => setFormData({ ...formData, preferredDate: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-xl border border-[#D5E4DC] bg-[#F6FAF7] text-sm text-[#1B3A34] focus:outline-none focus:border-[#2A9D8F]"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-[#1B4D3E] mb-1">
                  Time Window
                </label>
                <select
                  value={formData.timeWindow}
                  onChange={(e) => setFormData({ ...formData, timeWindow: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-xl border border-[#D5E4DC] bg-[#F6FAF7] text-sm text-[#1B3A34] focus:outline-none focus:border-[#2A9D8F]"
                >
                  <option>Morning (9:00 AM – 12:00 PM AEST)</option>
                  <option>Afternoon (1:00 PM – 5:00 PM AEST)</option>
                  <option>Evening (6:00 PM – 8:00 PM AEST)</option>
                </select>
              </div>
            </div>

            <div>
              <label className="block text-xs font-bold text-[#1B4D3E] mb-1">
                What would you like help with? (Optional)
              </label>
              <textarea
                rows={2}
                value={formData.notes}
                onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                placeholder="E.g. arriving next week, unsure whether to open a bank account or get a SIM first..."
                className="w-full px-3.5 py-2.5 rounded-xl border border-[#D5E4DC] bg-[#F6FAF7] text-sm text-[#1B3A34] focus:outline-none focus:border-[#2A9D8F]"
              />
            </div>

            <div className="bg-[#F6FAF7] border border-[#E0ECE6] rounded-2xl p-3 flex items-start gap-2.5 text-[11px] text-[#1B3A34]/80">
              <ShieldCheck className="w-4 h-4 text-[#2A9D8F] shrink-0 mt-0.5" />
              <span>
                General practical settlement guidance only—not visa, migration, financial, or legal advice.
              </span>
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-between gap-3 pt-1">
              <div className="flex items-center gap-3 text-xs text-[#1B4D3E] font-medium">
                <span className="inline-flex items-center gap-1">
                  <Phone className="w-3.5 h-3.5 text-[#2A9D8F]" />
                  +61 2 8000 4120
                </span>
                <span className="inline-flex items-center gap-1">
                  <Mail className="w-3.5 h-3.5 text-[#2A9D8F]" />
                  hello@firstyearau.com.au
                </span>
              </div>

              <button
                type="submit"
                className="w-full sm:w-auto bg-[#F4A261] hover:bg-[#e7924e] text-[#1B3A34] font-extrabold text-sm px-6 py-3 rounded-full shadow-sm hover:shadow transition-all cursor-pointer flex items-center justify-center gap-1.5"
              >
                <span>Request Consult</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </form>
        ) : (
          <div className="p-6 sm:p-8 text-center space-y-4">
            <div className="w-14 h-14 rounded-full bg-[#E2F4EE] text-[#1B4D3E] flex items-center justify-center mx-auto">
              <CheckCircle2 className="w-8 h-8 text-[#2A9D8F]" />
            </div>
            <h4 className="text-xl font-extrabold text-[#1B4D3E] font-display">
              Consult Request Received
            </h4>
            <p className="text-sm text-[#1B3A34]/80 max-w-md mx-auto">
              Thanks, <strong className="text-[#1B4D3E]">{formData.name}</strong>. We have logged your request for{' '}
              <strong className="text-[#1B4D3E]">{formData.topic}</strong> ({formData.city}) and will send calendar options to{' '}
              <span className="font-semibold text-[#2A9D8F]">{formData.email}</span>.
            </p>

            <div className="bg-[#F6FAF7] border border-[#E0ECE6] rounded-2xl p-4 text-left text-xs text-[#1B3A34] space-y-1.5 max-w-md mx-auto">
              <div className="flex items-center gap-2">
                <Clock className="w-3.5 h-3.5 text-[#2A9D8F]" />
                <span>Preferred window: <strong>{formData.timeWindow}</strong></span>
              </div>
              <div className="flex items-center gap-2">
                <MessageCircle className="w-3.5 h-3.5 text-[#2A9D8F]" />
                <span>WhatsApp &amp; Phone support: <strong>+61 400 123 456</strong></span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
              <button
                type="button"
                onClick={() => {
                  handleClose();
                  onNavigate('plan/overview');
                }}
                className="w-full sm:w-auto bg-[#F4A261] hover:bg-[#e7924e] text-[#1B3A34] font-bold text-sm px-6 py-2.5 rounded-full cursor-pointer"
              >
                Open 12-Month Plan
              </button>
              <button
                type="button"
                onClick={handleClose}
                className="w-full sm:w-auto bg-[#EAF5F1] hover:bg-[#d6ece4] text-[#1B4D3E] font-semibold text-sm px-6 py-2.5 rounded-full cursor-pointer"
              >
                Done
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
