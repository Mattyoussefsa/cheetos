import { useState, useEffect } from "react";
import ContactViewer from "@/components/ContactViewer";
import AdminLogin from "@/components/AdminLogin";
import { Button } from "@/components/ui/button";

const Admin = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Check if user is already logged in
    const session = localStorage.getItem("admin_session");
    const loginTime = localStorage.getItem("admin_login_time");
    
    if (session === "authenticated" && loginTime) {
      // Check if session is still valid (24 hours)
      const twentyFourHours = 24 * 60 * 60 * 1000;
      const isSessionValid = Date.now() - parseInt(loginTime) < twentyFourHours;
      
      if (isSessionValid) {
        setIsAuthenticated(true);
      } else {
        // Session expired, clear it
        localStorage.removeItem("admin_session");
        localStorage.removeItem("admin_login_time");
      }
    }
    
    setIsLoading(false);
  }, []);

  const handleLogin = () => {
    setIsAuthenticated(true);
  };

  const handleLogout = () => {
    localStorage.removeItem("admin_session");
    localStorage.removeItem("admin_login_time");
    setIsAuthenticated(false);
  };

  if (isLoading) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary mx-auto mb-4"></div>
          <p className="text-muted-foreground">Loading...</p>
        </div>
      </div>
    );
  }

  if (!isAuthenticated) {
    return <AdminLogin onLogin={handleLogin} />;
  }

  return (
    <div className="min-h-screen bg-background">
      <nav className="border-b px-6 py-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <a href="/" className="text-base font-bold tracking-tight text-foreground">
            Cheetos<span style={{ color: "hsl(var(--primary))" }}>Pro</span> Admin
          </a>
          <div className="flex items-center gap-4">
            <span className="text-sm text-muted-foreground">
              Logged in as admin123
            </span>
            <Button 
              onClick={handleLogout}
              variant="outline" 
              size="sm"
            >
              Logout
            </Button>
            <a href="/" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              ← Back to Site
            </a>
          </div>
        </div>
      </nav>
      
      <div className="py-8">
        <ContactViewer />
      </div>
    </div>
  );
};

export default Admin;