import HeroSection     from "@/components/HeroSection";
import StatsSection    from "@/components/StatsSection";
import ShowcaseSection from "@/components/ShowcaseSection";
import FeaturesSection from "@/components/FeaturesSection";
import PricingSection  from "@/components/PricingSection";
import FooterSection   from "@/components/FooterSection";

const Index = () => (
  <div className="relative min-h-screen bg-background text-foreground overflow-x-hidden font-sans">

    {/* Nav */}
    <nav className="fixed top-0 left-0 right-0 z-40 px-6 py-4 border-b"
      style={{
        background: "hsla(222,47%,4%,0.85)",
        backdropFilter: "blur(16px)",
        borderColor: "hsla(180,100%,50%,0.07)",
      }}>
      <div className="max-w-7xl mx-auto flex items-center justify-between">

        <a href="#hero" className="text-base font-bold tracking-tight text-foreground">
          Cheetos<span style={{ color: "hsl(var(--primary))" }}>Pro</span>
        </a>

        <div className="hidden md:flex items-center gap-7">
          {[["#showcase", "Showcase"], ["#pricing", "Pricing"]].map(([href, label]) => (
            <a key={label} href={href}
              className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              {label}
            </a>
          ))}
        </div>

        <a href="#pricing"
          className="px-5 py-2 rounded-lg font-semibold text-sm transition-all duration-200 hover:scale-[1.02] active:scale-[0.98]"
          style={{
            background: "hsl(var(--primary))",
            color: "hsl(var(--primary-foreground))",
            boxShadow: "0 0 16px hsla(180,100%,50%,0.2)",
          }}>
          Get Access
        </a>
      </div>
    </nav>

    {/* Floating Discord Button */}
    <a
      href="https://discord.gg/kUZxxQh4Bn"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-8 right-8 z-50 p-4 rounded-full transition-all duration-300 hover:scale-110 active:scale-95 group"
      style={{
        background: "hsl(var(--primary))",
        boxShadow: "0 8px 32px hsla(180,100%,50%,0.3), 0 0 0 0 hsla(180,100%,50%,0.4)",
        animation: "pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite",
      }}
      title="Join our Discord"
    >
      <svg
        className="w-6 h-6"
        fill="currentColor"
        viewBox="0 0 24 24"
        style={{ color: "hsl(var(--primary-foreground))" }}
      >
        <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515a.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0a12.64 12.64 0 0 0-.617-1.25a.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057a19.9 19.9 0 0 0 5.993 3.03a.078.078 0 0 0 .084-.028a14.09 14.09 0 0 0 1.226-1.994a.076.076 0 0 0-.041-.106a13.107 13.107 0 0 1-1.872-.892a.077.077 0 0 1-.008-.128a10.2 10.2 0 0 0 .372-.292a.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127a12.299 12.299 0 0 1-1.873.892a.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028a19.839 19.839 0 0 0 6.002-3.03a.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419c0-1.333.956-2.419 2.157-2.419c1.21 0 2.176 1.096 2.157 2.42c0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419c0-1.333.955-2.419 2.157-2.419c1.21 0 2.176 1.096 2.157 2.42c0 1.333-.946 2.418-2.157 2.418z"/>
      </svg>
      <span className="absolute -top-1 -right-1 w-3 h-3 bg-green-500 rounded-full animate-ping"></span>
      <span className="absolute -top-1 -right-1 w-3 h-3 bg-green-500 rounded-full"></span>
    </a>

    <style>{`
      @keyframes pulse {
        0%, 100% {
          box-shadow: 0 8px 32px hsla(180,100%,50%,0.3), 0 0 0 0 hsla(180,100%,50%,0.4);
        }
        50% {
          box-shadow: 0 8px 32px hsla(180,100%,50%,0.3), 0 0 0 8px hsla(180,100%,50%,0);
        }
      }
    `}</style>

    <HeroSection />
    <StatsSection />
    <ShowcaseSection />
    <FeaturesSection />
    <PricingSection />
    <FooterSection />
  </div>
);

export default Index;
