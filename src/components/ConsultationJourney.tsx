import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import SafeImage from './SafeImage';
import SuccessState from './SuccessState';

interface ConsultationData {
  organizationName: string;
  industry: string;
  companySize: string;
  challenge: string;
  programInterest: string;
  timeline: string;
  contactName: string;
  contactPhone: string;
  contactEmail: string;
  message: string;
}

const challenges = [
  'Leadership',
  'Transformation',
  'Culture',
  'Training',
  'Talent Development',
  'Assessment',
  'Executive Retreat',
  'Corporate Academy',
  'Consulting',
  'Other',
];

const programInterests = [
  'Leadership Development',
  'Corporate Academy',
  'Executive Retreat',
  'Corporate Consulting',
  'Assessment Center',
  'Innovation Center',
  'Facility / Venue Inquiry',
  'Not sure yet',
];

const timelines = ['This month', '1–3 months', '3–6 months', 'Still exploring'];

const initialData: ConsultationData = {
  organizationName: '',
  industry: '',
  companySize: '',
  challenge: '',
  programInterest: '',
  timeline: '',
  contactName: '',
  contactPhone: '',
  contactEmail: '',
  message: '',
};

const TOTAL_STEPS = 6;

export default function ConsultationJourney() {
  const [step, setStep] = useState(1);
  const [data, setData] = useState<ConsultationData>(initialData);
  const [submitted, setSubmitted] = useState(false);

  const update = (field: keyof ConsultationData, value: string) =>
    setData((prev) => ({ ...prev, [field]: value }));

  const next = () => setStep((s) => Math.min(s + 1, TOTAL_STEPS));
  const back = () => setStep((s) => Math.max(s - 1, 1));

  const handleSubmit = () => {
    // Future integration point: send lead data to CRM / email / WhatsApp notification.
    console.log('Consultation request submitted:', data);
    setSubmitted(true);
  };

  const restart = () => {
    setData(initialData);
    setStep(1);
    setSubmitted(false);
  };

  return (
    <section id="consultation" className="relative py-24 px-5 overflow-hidden">
      <SafeImage
        src="/images/wikasatrian/contact-bg.jpg"
        alt="Suasana konsultasi Wikasatrian"
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-bg-main/90" />

      <div className="relative z-10 max-w-xl mx-auto">
        <div className="text-center mb-10">
          <h2 className="font-display text-4xl md:text-5xl gold-text mb-4">
            Mulai Konsultasi
          </h2>
          <p className="text-text-muted">
            Ceritakan kebutuhan organisasi Anda, dan kami akan memandu langkah selanjutnya.
          </p>
        </div>

        {submitted ? (
          <SuccessState onContinue={restart} />
        ) : (
          <div className="panel rounded-2xl p-7 md:p-9">
            {!submitted && (
              <div className="flex gap-1.5 mb-8" aria-label={`Langkah ${step} dari ${TOTAL_STEPS}`}>
                {Array.from({ length: TOTAL_STEPS }).map((_, i) => (
                  <span
                    key={i}
                    className={`h-1.5 flex-1 rounded-full ${
                      i < step ? 'bg-gold-soft' : 'bg-gold/15'
                    }`}
                  />
                ))}
              </div>
            )}

            <AnimatePresence mode="wait">
              <motion.div
                key={step}
                initial={{ opacity: 0, x: 16 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -16 }}
                transition={{ duration: 0.3 }}
              >
                {step === 1 && (
                  <div className="text-center py-4">
                    <h3 className="font-display text-2xl text-text-warm mb-3">
                      Tell us about your organization.
                    </h3>
                    <p className="text-text-muted mb-8">
                      Beberapa pertanyaan singkat untuk memahami kebutuhan Anda.
                    </p>
                    <button onClick={next} className="btn-gold w-full sm:w-auto">
                      Mulai
                    </button>
                  </div>
                )}

                {step === 2 && (
                  <div>
                    <h3 className="font-display text-xl text-text-warm mb-6">
                      Informasi Organisasi
                    </h3>
                    <div className="space-y-4">
                      <FormInput
                        label="Nama Perusahaan / Organisasi"
                        value={data.organizationName}
                        onChange={(v) => update('organizationName', v)}
                      />
                      <FormInput
                        label="Industri"
                        value={data.industry}
                        onChange={(v) => update('industry', v)}
                      />
                      <FormInput
                        label="Ukuran Perusahaan"
                        value={data.companySize}
                        onChange={(v) => update('companySize', v)}
                      />
                    </div>
                  </div>
                )}

                {step === 3 && (
                  <ChoiceStep
                    title="Apa tantangan utama Anda?"
                    options={challenges}
                    value={data.challenge}
                    onChange={(v) => update('challenge', v)}
                  />
                )}

                {step === 4 && (
                  <ChoiceStep
                    title="Program apa yang Anda minati?"
                    options={programInterests}
                    value={data.programInterest}
                    onChange={(v) => update('programInterest', v)}
                  />
                )}

                {step === 5 && (
                  <ChoiceStep
                    title="Kapan Anda ingin memulai?"
                    options={timelines}
                    value={data.timeline}
                    onChange={(v) => update('timeline', v)}
                  />
                )}

                {step === 6 && (
                  <div>
                    <h3 className="font-display text-xl text-text-warm mb-6">
                      Informasi Kontak
                    </h3>
                    <div className="space-y-4">
                      <FormInput
                        label="Nama"
                        value={data.contactName}
                        onChange={(v) => update('contactName', v)}
                      />
                      <FormInput
                        label="Telepon / WhatsApp"
                        value={data.contactPhone}
                        onChange={(v) => update('contactPhone', v)}
                      />
                      <FormInput
                        label="Email"
                        value={data.contactEmail}
                        onChange={(v) => update('contactEmail', v)}
                        type="email"
                      />
                      <div>
                        <label className="block text-sm text-text-muted mb-1.5">Pesan</label>
                        <textarea
                          value={data.message}
                          onChange={(e) => update('message', e.target.value)}
                          rows={3}
                          className="w-full rounded-lg bg-bg-main/60 border border-gold/25 px-4 py-2.5 text-text-warm focus:outline-none focus:border-gold-soft"
                        />
                      </div>
                    </div>
                  </div>
                )}
              </motion.div>
            </AnimatePresence>

            {step > 1 && (
              <div className="flex items-center justify-between mt-9">
                <button onClick={back} className="text-text-muted hover:gold-text text-sm">
                  Kembali
                </button>
                {step < TOTAL_STEPS ? (
                  <button onClick={next} className="btn-gold">
                    Lanjutkan
                  </button>
                ) : (
                  <button onClick={handleSubmit} className="btn-gold">
                    Start My Leadership Journey
                  </button>
                )}
              </div>
            )}
          </div>
        )}
      </div>
    </section>
  );
}

function FormInput({
  label,
  value,
  onChange,
  type = 'text',
}: {
  label: string;
  value: string;
  onChange: (value: string) => void;
  type?: string;
}) {
  return (
    <div>
      <label className="block text-sm text-text-muted mb-1.5">{label}</label>
      <input
        type={type}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="w-full rounded-lg bg-bg-main/60 border border-gold/25 px-4 py-2.5 text-text-warm focus:outline-none focus:border-gold-soft"
      />
    </div>
  );
}

function ChoiceStep({
  title,
  options,
  value,
  onChange,
}: {
  title: string;
  options: string[];
  value: string;
  onChange: (value: string) => void;
}) {
  return (
    <div>
      <h3 className="font-display text-xl text-text-warm mb-6">{title}</h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        {options.map((option) => {
          const isActive = value === option;
          return (
            <button
              key={option}
              onClick={() => onChange(option)}
              className={`text-left rounded-xl px-4 py-3 text-sm border transition-colors ${
                isActive
                  ? 'bg-gold/20 border-gold-soft gold-text'
                  : 'border-gold/20 text-text-muted hover:text-text-warm'
              }`}
            >
              {option}
            </button>
          );
        })}
      </div>
    </div>
  );
}
