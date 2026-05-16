import { motion } from "framer-motion";

const ease = [0.16, 1, 0.3, 1] as const;

const stats = [
  { value: "1,000+", label: "Active users" },
  { value: "99.8%",  label: "System uptime" },
  { value: "12 ms",  label: "Avg latency" },
  { value: "3.5M+",   label: "Credits processed" },
];

const StatsSection = () => (
  <section className="py-20 px-6 border-y" style={{ borderColor: "hsl(var(--border))" }}>
    <div className="max-w-7xl mx-auto">
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
        {stats.map((s, i) => (
          <motion.div
            key={s.label}
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, ease, delay: i * 0.07 }}
            className="text-center"
          >
            <div className="text-3xl md:text-4xl font-bold text-foreground mb-1 tracking-tight">
              {s.value}
            </div>
            <div className="text-sm text-muted-foreground">{s.label}</div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default StatsSection;
