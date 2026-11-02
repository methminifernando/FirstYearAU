import React, { useState } from 'react';
import { 
  X, Check, ShieldCheck, Calendar, Bell, FileText, 
  Video, ArrowRight, Sparkles, CheckCircle2, RefreshCw 
} from 'lucide-react';

interface SubscribeModalProps {
  isOpen: boolean;
  onClose: () => void;
  onNavigateToPlan: () => void;
  initialBilling?: 'monthly' | 'annual';
}

export const SubscribeModal: React.FC<SubscribeModalProps> = ({
  isOpen,
  onClose,
  onNavigateToPlan,
  initialBilling = 'monthly'
}) => {
  const [billingCycle, setBillingCycle] = useState<'monthly' | 'annual'>(initialBilling);
  const [step, setStep] = useState<'review' | 'confirm' | 'success'>('review');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    arrivalDate: '',
    destinationState: 'SA',
    agreeToTerms: true
  });
  const [loading, setLoading] = useState(false);

  if (!isOpen) return null;

  const price = billingCycle === 'monthly' ? 'A$4.99' : 'A$49.00';
  const period = billingCycle === 'monthly' ? 'per month' : 'per year (Save 18%)';

  const handleProceedToConfirm = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.email) return;
    setStep('confirm');
  };

  const handleFinalPayment = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setStep('success');
    }, 1000);
  };

  const handleReset = () => {
    setStep('review');
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/60 backdrop-blur-xs flex items-center justify-center p-4">
      <div className="relative bg-white rounded-3xl max-w-xl w-full shadow-2xl border border-slate-200 overflow-hidden animate-in fade-in zoom-in-95 duration-200">
        {/* Header with Deep Green Gradient */}
        <div className="bg-gradient-to-r from-[#1B4D3E] to-[#2A9D8F] text-white p-6 relative">
          <button
            onClick={handleReset}
            className="absolute top-5 right-5 text-emerald-100 hover:text-white p-2 rounded-full hover:bg-white/10 transition-colors cursor-pointer"
            aria-label="Close"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="inline-flex items-center gap-1.5 bg-[#E9C46A] text-[#1B3A34] text-xs font-bold uppercase tracking-wider px-3 py-0.5 rounded-full mb-1">
            <Sparkles className="w-3.5 h-3.5" />
            <span>FirstYear Plus Membership</span>
          </div>

          <h3 className="text-xl sm:text-2xl font-bold font-display text-white">
            {step === 'success' ? 'Welcome to FirstYear Plus!' : 'Personalise Your 12-Month Plan'}
          </h3>
          <p className="text-xs sm:text-sm text-emerald-100 mt-1">
            {step === 'success' 
              ? 'Your personalised onboarding roadmap is now active.'
              : 'Never miss a visa deadline, 6-week banking window, or rental lodgement.'}
          </p>
        </div>

        {/* Step 1: Review & Enter Info */}
        {step === 'review' && (
          <form onSubmit={handleProceedToConfirm} className="p-6 space-y-6">
            {/* Billing Toggle */}
            <div className="flex items-center justify-center">
              <div className="bg-slate-100 p-1 rounded-full flex items-center w-full max-w-xs border border-slate-200">
                <button
                  type="button"
                  onClick={() => setBillingCycle('monthly')}
                  className={`flex-1 py-2 text-xs font-bold rounded-full transition-all cursor-pointer ${
                    billingCycle === 'monthly'
                      ? 'bg-white text-[#1B4D3E] shadow-xs'
                      : 'text-slate-600 hover:text-[#1B4D3E]'
                  }`}
                >
                  Monthly (A$4.99/mo)
                </button>
                <button
                  type="button"
                  onClick={() => setBillingCycle('annual')}
                  className={`flex-1 py-2 text-xs font-bold rounded-full transition-all cursor-pointer flex items-center justify-center gap-1 ${
                    billingCycle === 'annual'
                      ? 'bg-white text-[#1B4D3E] shadow-xs'
                      : 'text-slate-600 hover:text-[#1B4D3E]'
                  }`}
                >
                  <span>Annual (A$49/yr)</span>
                  <span className="bg-[#E2F4EE] text-[#1B4D3E] text-[10px] px-1.5 py-0.2 rounded-full font-bold">Save 18%</span>
                </button>
              </div>
            </div>

            {/* Included Features List */}
            <div className="bg-[#F6FAF7] p-4 rounded-2xl border border-teal-200/80 space-y-2 text-xs text-[#1B3A34]">
              <span className="font-bold text-[#1B4D3E] uppercase tracking-wider text-[11px] block">
                What is included in your membership:
              </span>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 pt-1">
                <div className="flex items-center gap-2">
                  <Check className="w-3.5 h-3.5 text-[#2A9D8F] shrink-0" />
                  <span>Personalised 12-month calendar</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="w-3.5 h-3.5 text-[#2A9D8F] shrink-0" />
                  <span>Task reminders (Email/SMS)</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="w-3.5 h-3.5 text-[#2A9D8F] shrink-0" />
                  <span>Rental Application Pack (Word/PDF)</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="w-3.5 h-3.5 text-[#2A9D8F] shrink-0" />
                  <span>Video walkthroughs & checklists</span>
                </div>
              </div>
            </div>

            {/* User Form Fields */}
            <div className="space-y-4">
              <div>
                <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1">
                  Full Name
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Priya Sharma"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-4 py-2.5 text-sm border border-slate-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#2A9D8F]"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1">
                    Email Address
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="name@example.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-2.5 text-sm border border-slate-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#2A9D8F]"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1">
                    Destination State in Australia
                  </label>
                  <select
                    value={formData.destinationState}
                    onChange={(e) => setFormData({ ...formData, destinationState: e.target.value })}
                    className="w-full px-4 py-2.5 text-sm border border-slate-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#2A9D8F] bg-white"
                  >
                    <option value="SA">South Australia (Adelaide)</option>
                    <option value="VIC">Victoria (Melbourne)</option>
                    <option value="NSW">New South Wales (Sydney)</option>
                    <option value="QLD">Queensland (Brisbane)</option>
                    <option value="WA">Western Australia (Perth)</option>
                    <option value="ACT">Australian Capital Territory (Canberra)</option>
                    <option value="TAS">Tasmania (Hobart)</option>
                    <option value="NT">Northern Territory (Darwin)</option>
                  </select>
                </div>
              </div>
            </div>

            {/* Guarantees Box */}
            <div className="border border-teal-200 bg-[#E2F4EE]/60 p-3.5 rounded-2xl flex items-center justify-between text-xs text-[#1B4D3E]">
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-5 h-5 text-[#2A9D8F] shrink-0" />
                <div>
                  <p className="font-bold">Cancel Anytime · 7-Day Full Refund</p>
                  <p className="text-slate-600 text-[11px]">No lock-in contract. If you are not satisfied, get 100% back.</p>
                </div>
              </div>
              <span className="font-bold text-sm text-[#1B4D3E]">{price}</span>
            </div>

            {/* Next Button */}
            <div className="pt-2">
              <button
                type="submit"
                className="w-full bg-[#F4A261] hover:bg-[#e7924e] text-[#1B3A34] font-bold py-3.5 rounded-full shadow-sm hover:shadow-md transition-all cursor-pointer flex items-center justify-center gap-2 text-sm active:scale-98"
              >
                <span>Continue to Confirmation ({price})</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </form>
        )}

        {/* Step 2: Clear Confirmation Step Before Payment */}
        {step === 'confirm' && (
          <div className="p-6 space-y-6">
            <div className="bg-[#FCF4DD] border border-amber-200 p-4 rounded-2xl text-xs sm:text-sm text-[#684C00]">
              <h4 className="font-bold text-[#1B4D3E] mb-1">
                Please confirm your subscription details before payment:
              </h4>
              <p className="text-slate-600 text-xs">
                As part of our commitment to transparent Australian consumer practices, you can review all terms before any charge is processed.
              </p>
            </div>

            <div className="border border-slate-200 rounded-2xl divide-y divide-slate-100 text-xs sm:text-sm overflow-hidden">
              <div className="p-3.5 flex justify-between bg-white">
                <span className="text-slate-500">Plan Name</span>
                <span className="font-bold text-[#1B4D3E]">FirstYear Plus ({billingCycle === 'monthly' ? 'Monthly' : 'Annual'})</span>
              </div>
              <div className="p-3.5 flex justify-between bg-white">
                <span className="text-slate-500">Billed Amount</span>
                <span className="font-bold text-[#1B4D3E] text-base">{price} <span className="text-xs text-slate-500 font-normal">({period})</span></span>
              </div>
              <div className="p-3.5 flex justify-between bg-white">
                <span className="text-slate-500">Subscriber Name</span>
                <span className="font-medium text-[#1B3A34]">{formData.name || 'Priya Sharma'}</span>
              </div>
              <div className="p-3.5 flex justify-between bg-white">
                <span className="text-slate-500">Reminder Email</span>
                <span className="font-medium text-[#1B3A34]">{formData.email}</span>
              </div>
              <div className="p-3.5 flex justify-between bg-white">
                <span className="text-slate-500">Primary State Focus</span>
                <span className="font-medium text-[#1B3A34]">{formData.destinationState}</span>
              </div>
              <div className="p-3.5 flex justify-between bg-[#F6FAF7]">
                <span className="text-slate-500">Refund Guarantee</span>
                <span className="font-bold text-[#1B4D3E]">7-Day 100% Money-Back</span>
              </div>
              <div className="p-3.5 flex justify-between bg-[#F6FAF7]">
                <span className="text-slate-500">Cancellation Terms</span>
                <span className="font-medium text-slate-700">Cancel anytime with 1-click in account</span>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <button
                type="button"
                onClick={() => setStep('review')}
                className="w-1/3 py-3 px-4 text-xs font-semibold text-[#1B4D3E] hover:bg-slate-100 border border-slate-300 rounded-full transition-colors cursor-pointer"
              >
                Back to Edit
              </button>
              <button
                type="button"
                onClick={handleFinalPayment}
                disabled={loading}
                className="w-2/3 bg-[#F4A261] hover:bg-[#e7924e] text-[#1B3A34] font-bold py-3.5 rounded-full shadow-sm hover:shadow-md transition-all cursor-pointer flex items-center justify-center gap-2 text-sm disabled:opacity-50"
              >
                {loading ? (
                  <>
                    <RefreshCw className="w-4 h-4 animate-spin" />
                    <span>Processing Secure Payment...</span>
                  </>
                ) : (
                  <>
                    <span>Confirm & Authorise {price}</span>
                    <Check className="w-4 h-4" />
                  </>
                )}
              </button>
            </div>
          </div>
        )}

        {/* Step 3: Success & Retention Flow */}
        {step === 'success' && (
          <div className="p-6 space-y-6">
            <div className="text-center space-y-2 py-2">
              <div className="w-14 h-14 bg-[#E2F4EE] rounded-full flex items-center justify-center mx-auto text-[#1B4D3E]">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              <h4 className="text-xl font-bold text-[#1B4D3E] font-display">
                You are all set for Year 1!
              </h4>
              <p className="text-xs sm:text-sm text-slate-600 max-w-md mx-auto">
                Receipt and login details have been dispatched to <strong>{formData.email}</strong>.
              </p>
            </div>

            {/* Retention Explainer */}
            <div className="bg-[#F6FAF7] p-5 rounded-2xl border border-teal-200 space-y-3">
              <h5 className="font-bold text-[#1B4D3E] text-xs sm:text-sm flex items-center gap-1.5">
                <Bell className="w-4 h-4 text-[#2A9D8F]" />
                <span>How your monthly milestone reminders work:</span>
              </h5>
              <div className="space-y-2.5 text-xs text-[#1B3A34]">
                <div className="flex items-start gap-2.5">
                  <div className="w-5 h-5 rounded-full bg-[#1B4D3E] text-white text-[10px] font-bold flex items-center justify-center shrink-0 mt-0.5">
                    1
                  </div>
                  <p>
                    <strong>Week 1 Landing:</strong> You will receive notifications to verify your passport at your bank branch before the 6-week AUSTRAC cutoff and apply for your free TFN.
                  </p>
                </div>

                <div className="flex items-start gap-2.5">
                  <div className="w-5 h-5 rounded-full bg-[#1B4D3E] text-white text-[10px] font-bold flex items-center justify-center shrink-0 mt-0.5">
                    2
                  </div>
                  <p>
                    <strong>Month 1 Housing:</strong> Access your unlocked Rental Application Template Pack and condition report video walkthrough to safeguard your 4-week bond.
                  </p>
                </div>

                <div className="flex items-start gap-2.5">
                  <div className="w-5 h-5 rounded-full bg-[#1B4D3E] text-white text-[10px] font-bold flex items-center justify-center shrink-0 mt-0.5">
                    3
                  </div>
                  <p>
                    <strong>Months 2 to 3:</strong> Automated alert to apply for your state 18+ Proof of Age card, consolidate superannuation, and avoid passport loss.
                  </p>
                </div>

                <div className="flex items-start gap-2.5">
                  <div className="w-5 h-5 rounded-full bg-[#1B4D3E] text-white text-[10px] font-bold flex items-center justify-center shrink-0 mt-0.5">
                    4
                  </div>
                  <p>
                    <strong>Months 4 to 12:</strong> Prompted step-by-step guides for overseas licence conversion, AFP National Police Check, and Working with Children Checks.
                  </p>
                </div>
              </div>
            </div>

            <div className="pt-2 flex flex-col sm:flex-row gap-3">
              <button
                type="button"
                onClick={() => {
                  onClose();
                  onNavigateToPlan();
                }}
                className="w-full bg-[#F4A261] hover:bg-[#e7924e] text-[#1B3A34] font-bold py-3.5 rounded-full text-center shadow-sm hover:shadow-md text-xs sm:text-sm cursor-pointer flex items-center justify-center gap-2 active:scale-98"
              >
                <span>Go to My 12-Month Plan</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
