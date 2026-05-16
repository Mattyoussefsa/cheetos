import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: (contactInfo: { email: string; discord: string }) => void;
  planName: string;
  price: string;
}

const ContactModal = ({ isOpen, onClose, onSubmit, planName, price }: ContactModalProps) => {
  const [email, setEmail] = useState("");
  const [discord, setDiscord] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email || !discord) {
      toast({
        title: "Missing Information",
        description: "Please fill in both email and Discord username.",
        variant: "destructive",
      });
      return;
    }

    // Basic email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      toast({
        title: "Invalid Email",
        description: "Please enter a valid email address.",
        variant: "destructive",
      });
      return;
    }

    setIsSubmitting(true);
    
    try {
      // Store contact info with pending payment status
      const contactInfo = { 
        email, 
        discord, 
        planName, 
        price, 
        timestamp: new Date().toISOString(),
        paymentStatus: 'pending',
        id: Date.now().toString()
      };
      localStorage.setItem(`contact_${contactInfo.id}`, JSON.stringify(contactInfo));
      
      onSubmit({ email, discord });
      
      toast({
        title: "Contact Information Saved",
        description: "Redirecting to payment...",
      });
      
      // Redirect to success page after a short delay
      setTimeout(() => {
        const params = new URLSearchParams({
          email,
          discord,
          plan: planName,
          price,
          contactId: contactInfo.id
        });
        window.open(`/success?${params.toString()}`, '_blank');
      }, 1500);
      
      // Reset form
      setEmail("");
      setDiscord("");
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to save contact information. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle className="text-center">Contact Information</DialogTitle>
        </DialogHeader>
        
        <div className="text-center mb-4">
          <p className="text-sm text-muted-foreground">
            Please provide your contact details for the <span className="font-semibold text-primary">{planName}</span> plan ({price})
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="email">Email Address</Label>
            <Input
              id="email"
              type="email"
              placeholder="your@email.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="discord">Discord Username</Label>
            <Input
              id="discord"
              type="text"
              placeholder="username#1234 or @username"
              value={discord}
              onChange={(e) => setDiscord(e.target.value)}
              required
            />
          </div>

          <div className="flex gap-3 pt-4">
            <Button
              type="button"
              variant="outline"
              onClick={onClose}
              className="flex-1"
              disabled={isSubmitting}
            >
              Cancel
            </Button>
            <Button
              type="submit"
              className="flex-1"
              disabled={isSubmitting}
            >
              {isSubmitting ? "Saving..." : "Continue to Payment"}
            </Button>
          </div>
        </form>

        <p className="text-xs text-muted-foreground text-center mt-4">
          After payment completion:
          <br />
          1. Join our Discord server: <a href="https://discord.gg/kUZxxQh4Bn" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">discord.gg/kUZxxQh4Bn</a>
          <br />
          2. Create a ticket to receive your product key
        </p>
      </DialogContent>
    </Dialog>
  );
};

export default ContactModal;