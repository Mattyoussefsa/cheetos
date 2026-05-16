import { motion } from "framer-motion";
import { useState } from "react";
import ContactModal from "./ContactModal";

const ease = [0.16, 1, 0.3, 1] as const;

const plans = [
  {
    name: "Week",
    price: "$60",
    period: "week",
    desc: "Perfect for trying out the platform.",
    features: ["Key valid for a week", "Moneymaker Future", "Material duplicate", "Zero latency"],
    paymentLinks: {
      BTC: "https://nowpayments.io/payment/?iid=5939717453",
      LTC: "https://nowpayments.io/payment/?iid=4352962755",
      ETH: "https://nowpayments.io/payment/?iid=5159115241&paymentId=5712215099",
    },
    highlight: false,
  },
  {
    name: "Lifetime",
    price: "$200",
    period: "lifetime",
    desc: "Maximum power, unlimited access.",
    features: ["Key valid forever", "Moneymaker Future", "Material duplicate", "Zero latency"],
    paymentLinks: {
      BTC: "https://nowpayments.io/payment/?iid=5542679636&paymentId=6055205271",
      LTC: "https://nowpayments.io/payment/?iid=5976879667&paymentId=4637284359",
      ETH: "https://nowpayments.io/payment/?iid=4453732689&paymentId=4888356861",
    },
    highlight: true,
  },
  {
    name: "Month",
    price: "$100",
    period: "month",
    desc: "For serious players who want full control.",
    features: ["Key valid for a month", "Moneymaker Future", "Material duplicate", "Zero latency"],
    paymentLinks: {
      BTC: "https://nowpayments.io/payment/?iid=6424222489&paymentId=4394614480",
      LTC: "https://nowpayments.io/payment/?iid=5534886302&paymentId=4512366165",
      ETH: "https://nowpayments.io/payment/?iid=4364351405&paymentId=4955839893",
    },
    highlight: false,
  },
];

const PricingSection = () => {
  const [selectedCrypto, setSelectedCrypto] = useState<{ [key: string]: 'BTC' | 'LTC' | 'ETH' }>({
    Week: 'BTC',
    Lifetime: 'BTC',
    Month: 'BTC',
  });

  const [contactModal, setContactModal] = useState<{
    isOpen: boolean;
    planName: string;
    price: string;
    paymentUrl: string;
  }>({
    isOpen: false,
    planName: '',
    price: '',
    paymentUrl: '',
  });

  const handlePaymentClick = (planName: string, price: string, paymentUrl: string) => {
    setContactModal({
      isOpen: true,
      planName,
      price,
      paymentUrl,
    });
  };

  const handleContactSubmit = (contactInfo: { email: string; discord: string }) => {
    // Contact info is already saved in the modal, now redirect to payment
    window.open(contactModal.paymentUrl, '_blank');
    setContactModal({ isOpen: false, planName: '', price: '', paymentUrl: '' });
  };

  return (
  <section id="pricing" className="relative py-28 px-6 overflow-hidden">

    <div className="pointer-events-none absolute top-0 left-1/2 -translate-x-1/2 w-[60%] h-[40%] -z-10"
      style={{ background: "hsl(180,100%,50%)", opacity: 0.03, filter: "blur(120px)" }} />

    <div className="max-w-7xl mx-auto">

      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, ease }}
        className="text-center mb-16"
      >
        <span className="pill-label mb-5 inline-flex mx-auto">Pricing</span>
        <h2 className="section-title mb-4">Simple, transparent pricing</h2>
        <p className="section-sub mx-auto text-center">Pay with crypto. BTC, LTC, or ETH accepted.</p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-center">
        {plans.map((p, i) => (
          <motion.div
            key={p.name}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease, delay: i * 0.09 }}
            className={`relative flex flex-col p-8 rounded-2xl transition-all duration-300 ${p.highlight ? "scale-[1.03]" : ""}`}
            style={
              p.highlight
                ? {
                    background: "hsl(222,47%,9%)",
                    border: "1px solid hsla(180,100%,50%,0.25)",
                    boxShadow: "0 0 48px hsla(180,100%,50%,0.08), 0 24px 64px -12px rgba(0,0,0,0.5)",
                  }
                : {
                    background: "hsl(var(--card))",
                    border: "1px solid hsl(var(--border))",
                    boxShadow: "0 24px 64px -12px rgba(0,0,0,0.3)",
                  }
            }
          >
            {p.highlight && (
              <div
                className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full text-[11px] font-semibold"
                style={{ background: "hsl(var(--primary))", color: "hsl(var(--primary-foreground))" }}
              >
                Most popular
              </div>
            )}

            <div className="mb-6">
              <p className="text-sm font-medium text-foreground mb-1">{p.name}</p>
              <div className="flex items-baseline gap-1 mb-2">
                <span className={`text-4xl font-bold tracking-tight ${p.highlight ? "text-primary" : "text-foreground"}`}>
                  {p.price}
                </span>
                <span className="text-muted-foreground text-sm">/ {p.period}</span>
              </div>
              <p className="text-sm text-muted-foreground">{p.desc}</p>
            </div>

            <ul className="space-y-3 mb-6 flex-1">
              {p.features.map((f) => (
                <li key={f} className="flex items-start gap-3 text-sm text-muted-foreground">
                  <span className="mt-0.5 flex-shrink-0 text-primary text-xs">✓</span>
                  {f}
                </li>
              ))}
            </ul>

            <div className="mb-4">
              <p className="text-xs text-muted-foreground mb-2 text-center">Select cryptocurrency:</p>
              <div className="flex gap-2 justify-center">
                {(['BTC', 'LTC', 'ETH'] as const).map((crypto) => (
                  <button
                    key={crypto}
                    onClick={() => setSelectedCrypto({ ...selectedCrypto, [p.name]: crypto })}
                    className={`px-3 py-1.5 rounded-md text-xs font-medium transition-all ${
                      selectedCrypto[p.name] === crypto
                        ? 'bg-primary text-primary-foreground'
                        : 'bg-muted text-muted-foreground hover:bg-muted/80'
                    }`}
                  >
                    {crypto}
                  </button>
                ))}
              </div>
            </div>

            <button
              onClick={() => handlePaymentClick(p.name, p.price, p.paymentLinks[selectedCrypto[p.name]])}
              className="w-full py-3 rounded-lg font-semibold text-sm transition-all duration-200 hover:scale-[1.01] active:scale-[0.99] text-center block"
              style={
                p.highlight
                  ? {
                      background: "hsl(var(--primary))",
                      color: "hsl(var(--primary-foreground))",
                      boxShadow: "0 0 20px hsla(180,100%,50%,0.25)",
                    }
                  : {
                      background: "transparent",
                      border: "1px solid hsl(var(--border))",
                      color: "hsl(var(--foreground))",
                    }
              }
            >
              Pay with {selectedCrypto[p.name]}
            </button>
          </motion.div>
        ))}
      </div>
    </div>

    <ContactModal
      isOpen={contactModal.isOpen}
      onClose={() => setContactModal({ isOpen: false, planName: '', price: '', paymentUrl: '' })}
      onSubmit={handleContactSubmit}
      planName={contactModal.planName}
      price={contactModal.price}
    />
  </section>
  );
};

export default PricingSection;
