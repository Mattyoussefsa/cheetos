import { motion } from "framer-motion";
import screenAuth   from "@/assets/screen-auth.png";
import screenHome   from "@/assets/screen-home.png";

const ease = [0.16, 1, 0.3, 1] as const;

const HeroSection = () => (
  <section id="hero" className="relative min-h-screen flex flex-col justify-center px-6 pt-24 pb-16 overflow-hidden">

    {/* Ambient glow */}
    <div className="pointer-events-none absolute inset-0 -z-10">
      <div className="absolute -top-32 -left-32 w-[600px] h-[600px] rounded-full"
        style={{ background: "hsl(180,100%,50%)", opacity: 0.04, filter: "blur(120px)" }} />
      <div className="absolute top-1/2 -right-48 w-[500px] h-[500px] rounded-full"
        style={{ background: "hsl(210,80%,40%)", opacity: 0.05, filter: "blur(140px)" }} />
    </div>

    <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

      {/* Left */}
      <div className="space-y-7">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease }}
        >
          <span className="pill-label">
            <span className="w-1.5 h-1.5 rounded-full" style={{ background: "hsl(var(--neon-green))" }} />
            v5.0 — Now Live
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease, delay: 0.08 }}
          className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-foreground leading-[1.05]"
        >
          The automation suite for{" "}
          <span className="bg-clip-text text-transparent"
            style={{ backgroundImage: "linear-gradient(135deg, hsl(180,100%,50%) 0%, hsl(195,100%,60%) 100%)" }}>
            Arc Raiders
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease, delay: 0.16 }}
          className="section-sub text-lg"
        >
          CheetosPro gives you a professional edge — automated profit generation,
          material harvesting, and a sleek dashboard to manage it all.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease, delay: 0.24 }}
          className="flex flex-wrap gap-3 pt-2"
        >
          <a href="#pricing"
            className="px-7 py-3.5 rounded-lg font-semibold text-sm transition-all duration-200 hover:scale-[1.02] active:scale-[0.98]"
            style={{
              background: "hsl(var(--primary))",
              color: "hsl(var(--primary-foreground))",
              boxShadow: "0 0 24px hsla(180,100%,50%,0.25)",
            }}>
            Get Access
          </a>
          <a href="#showcase"
            className="px-7 py-3.5 rounded-lg font-semibold text-sm text-foreground border transition-all duration-200 hover:bg-white/5"
            style={{ borderColor: "hsl(var(--border))" }}>
            See the app
          </a>
        </motion.div>

        {/* Inline social proof */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="flex items-center gap-6 pt-2"
        >
          {[["1,000+", "Active users"], ["99.8%", "Uptime"], ["12 ms", "Avg latency"]].map(([v, l]) => (
            <div key={l} className="text-center">
              <div className="text-lg font-bold text-foreground">{v}</div>
              <div className="text-xs text-muted-foreground mt-0.5">{l}</div>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Right — app screenshot */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, ease, delay: 0.2 }}
        className="relative hidden lg:block animate-float"
      >
        <img
          src={screenHome}
          alt="CheetosPro dashboard"
          className="w-full screen-frame"
          draggable={false}
        />
        {/* Auth screen peeking */}
        <div className="absolute -bottom-8 -left-10 w-[42%] screen-frame shadow-2xl rotate-[-2deg]">
          <img src={screenAuth} alt="Login screen" className="w-full" draggable={false} />
        </div>
      </motion.div>

    </div>
  </section>
);

export default HeroSection;
