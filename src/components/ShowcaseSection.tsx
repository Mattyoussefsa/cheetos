import { motion } from "framer-motion";
import screenMoneymaker from "@/assets/screen-moneymaker.png";
import screenMaterials  from "@/assets/screen-materials.png";
import screenDetail     from "@/assets/screen-detail.png";

const ease = [0.16, 1, 0.3, 1] as const;

const steps = [
  {
    num: "01",
    label: "Profit Engine",
    title: "Set a target. Let it run.",
    body:
      "Pick your profit threshold — 100K all the way to 5M credits — and CheetosPro handles the rest. Smart throttling keeps you safe while the engine maximizes yield.",
    bullets: ["6 preset profit targets", "Smart-throttle execution", "Zero manual intervention"],
    image: screenMoneymaker,
    alt: "Moneymaker interface",
    flip: false,
  },
  {
    num: "02",
    label: "Materials Library",
    title: "43 assets, one dashboard.",
    body:
      "Browse every harvestable material in Arc Raiders. Filter, select, and deploy collection agents with a single click.",
    bullets: ["Full asset catalogue", "Live filter search", "Batch collection support"],
    image: screenMaterials,
    alt: "Materials library",
    flip: true,
  },
  {
    num: "03",
    label: "Batch Harvesting",
    title: "Choose quantity. Hit run.",
    body:
      "Select your batch size — 5, 40, or 200 — and start a focused harvesting run on any material. Component breakdowns shown upfront.",
    bullets: ["Configurable batch sizes", "Component requirement preview", "One-tap execution"],
    image: screenDetail,
    alt: "Material detail and batch run",
    flip: false,
  },
];

const ShowcaseSection = () => (
  <section id="showcase" className="relative py-32 px-6 overflow-hidden">

    {/* Light signature */}
    <div className="pointer-events-none absolute top-0 right-0 w-[40%] h-[50%] -z-10"
      style={{ background: "hsl(180,100%,50%)", opacity: 0.03, filter: "blur(130px)" }} />

    <div className="max-w-7xl mx-auto space-y-32">

      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, ease }}
        className="max-w-xl"
      >
        <span className="pill-label mb-5 inline-flex">Visual Interface</span>
        <h2 className="section-title mb-4">See what you're getting</h2>
        <p className="section-sub">
          Built as a native desktop app. Every screen is designed around speed and clarity.
        </p>
      </motion.div>

      {/* Steps */}
      {steps.map((s, i) => (
        <div
          key={s.num}
          className={`grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center`}
        >
          {/* Screenshot */}
          <motion.div
            initial={{ opacity: 0, x: s.flip ? 24 : -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease }}
            className={s.flip ? "order-1 lg:order-2" : "order-1"}
          >
            <img
              src={s.image}
              alt={s.alt}
              className="w-full screen-frame"
              draggable={false}
            />
          </motion.div>

          {/* Text */}
          <motion.div
            initial={{ opacity: 0, x: s.flip ? -24 : 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease, delay: 0.08 }}
            className={`space-y-5 ${s.flip ? "order-2 lg:order-1" : "order-2"}`}
          >
            <div className="flex items-center gap-3">
              <span className="text-xs font-mono text-muted-foreground">{s.num}</span>
              <span className="pill-label">{s.label}</span>
            </div>

            <h3 className="text-3xl md:text-4xl font-bold text-foreground tracking-tight leading-tight">
              {s.title}
            </h3>

            <p className="text-muted-foreground leading-relaxed">{s.body}</p>

            <ul className="space-y-3 pt-1">
              {s.bullets.map((b) => (
                <li key={b} className="flex items-center gap-3 text-sm text-foreground/80">
                  <span className="w-1 h-1 rounded-full flex-shrink-0"
                    style={{ background: "hsl(var(--primary))" }} />
                  {b}
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      ))}
    </div>
  </section>
);

export default ShowcaseSection;
