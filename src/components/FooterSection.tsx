const FooterSection = () => (
  <footer className="px-6 py-16 border-t" style={{ borderColor: "hsl(var(--border))" }}>
    <div className="max-w-7xl mx-auto">
      <div className="flex flex-col md:flex-row justify-between gap-10 mb-12">

        {/* Brand */}
        <div className="space-y-3 max-w-xs">
          <div className="text-xl font-bold text-foreground tracking-tight">
            Cheetos<span style={{ color: "hsl(var(--primary))" }}>Pro</span>
          </div>
          <p className="text-sm text-muted-foreground leading-relaxed">
            Precision automation for Arc Raiders. Built for performance.
          </p>
        </div>

        {/* Links */}
        <div className="grid grid-cols-2 gap-10">
          <div>
            <p className="text-xs font-semibold text-foreground mb-4 tracking-wide uppercase">Product</p>
            <ul className="space-y-3">
              <li>
                <a href="#showcase" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  Showcase
                </a>
              </li>
              <li>
                <a href="#pricing" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  Pricing
                </a>
              </li>
            </ul>
          </div>
          <div>
            <p className="text-xs font-semibold text-foreground mb-4 tracking-wide uppercase">Support</p>
            <ul className="space-y-3">
              <li>
                <a href="https://discord.gg/kUZxxQh4Bn" target="_blank" rel="noopener noreferrer" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  Discord
                </a>
              </li>
              <li>
                <a href="https://discord.gg/kUZxxQh4Bn" target="_blank" rel="noopener noreferrer" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  Status
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="pt-8 border-t flex flex-col sm:flex-row justify-between items-center gap-3"
        style={{ borderColor: "hsl(var(--border))" }}>
        <span className="text-xs text-muted-foreground">© 2026 CheetosPro. All rights reserved.</span>
      </div>
    </div>
  </footer>
);

export default FooterSection;
