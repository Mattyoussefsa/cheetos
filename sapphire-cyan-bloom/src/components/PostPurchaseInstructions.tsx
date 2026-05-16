import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

interface PostPurchaseInstructionsProps {
  planName: string;
  price: string;
  email: string;
  discord: string;
}

const PostPurchaseInstructions = ({ planName, price, email, discord }: PostPurchaseInstructionsProps) => {
  const discordInvite = "https://discord.gg/kUZxxQh4Bn";

  return (
    <div className="max-w-2xl mx-auto p-6">
      <Card className="border-primary/20">
        <CardHeader className="text-center">
          <div className="flex justify-center mb-4">
            <Badge className="bg-green-600 text-white px-4 py-2 text-sm">
              Payment Initiated ✅
            </Badge>
          </div>
          <CardTitle className="text-2xl">
            Thank you for your purchase!
          </CardTitle>
          <p className="text-muted-foreground">
            {planName} plan - {price}
          </p>
        </CardHeader>
        
        <CardContent className="space-y-6">
          <div className="bg-muted/50 p-4 rounded-lg">
            <h3 className="font-semibold mb-2">📧 Your Contact Information</h3>
            <p className="text-sm text-muted-foreground">Email: {email}</p>
            <p className="text-sm text-muted-foreground">Discord: {discord}</p>
          </div>

          <div className="space-y-4">
            <h3 className="font-semibold text-lg">🚀 Next Steps to Get Your Product Key:</h3>
            
            <div className="space-y-3">
              <div className="flex items-start gap-3 p-3 bg-primary/5 rounded-lg border border-primary/20">
                <div className="bg-primary text-primary-foreground rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold flex-shrink-0 mt-0.5">
                  1
                </div>
                <div>
                  <h4 className="font-medium">Join Our Discord Server</h4>
                  <p className="text-sm text-muted-foreground mb-2">
                    Click the button below to join our Discord community
                  </p>
                  <Button 
                    onClick={() => window.open(discordInvite, '_blank')}
                    className="w-full sm:w-auto"
                  >
                    <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515a.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0a12.64 12.64 0 0 0-.617-1.25a.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057a19.9 19.9 0 0 0 5.993 3.03a.078.078 0 0 0 .084-.028a14.09 14.09 0 0 0 1.226-1.994a.076.076 0 0 0-.041-.106a13.107 13.107 0 0 1-1.872-.892a.077.077 0 0 1-.008-.128a10.2 10.2 0 0 0 .372-.292a.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127a12.299 12.299 0 0 1-1.873.892a.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028a19.839 19.839 0 0 0 6.002-3.03a.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419c0-1.333.956-2.419 2.157-2.419c1.21 0 2.176 1.096 2.157 2.42c0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419c0-1.333.955-2.419 2.157-2.419c1.21 0 2.176 1.096 2.157 2.42c0 1.333-.946 2.418-2.157 2.418z"/>
                    </svg>
                    Join Discord Server
                  </Button>
                </div>
              </div>

              <div className="flex items-start gap-3 p-3 bg-primary/5 rounded-lg border border-primary/20">
                <div className="bg-primary text-primary-foreground rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold flex-shrink-0 mt-0.5">
                  2
                </div>
                <div>
                  <h4 className="font-medium">Create a Support Ticket</h4>
                  <p className="text-sm text-muted-foreground">
                    Once in Discord, create a ticket and provide:
                  </p>
                  <ul className="text-sm text-muted-foreground mt-2 space-y-1">
                    <li>• Your email: <code className="bg-muted px-1 rounded">{email}</code></li>
                    <li>• Plan purchased: <code className="bg-muted px-1 rounded">{planName}</code></li>
                    <li>• Payment confirmation (if available)</li>
                  </ul>
                </div>
              </div>

              <div className="flex items-start gap-3 p-3 bg-green-50 dark:bg-green-950/20 rounded-lg border border-green-200 dark:border-green-800">
                <div className="bg-green-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold flex-shrink-0 mt-0.5">
                  3
                </div>
                <div>
                  <h4 className="font-medium text-green-800 dark:text-green-200">Receive Your Product Key</h4>
                  <p className="text-sm text-green-700 dark:text-green-300">
                    Our team will verify your payment and provide your CheetosPro key within 24 hours
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-yellow-50 dark:bg-yellow-950/20 p-4 rounded-lg border border-yellow-200 dark:border-yellow-800">
            <h4 className="font-medium text-yellow-800 dark:text-yellow-200 mb-2">⚠️ Important Notes:</h4>
            <ul className="text-sm text-yellow-700 dark:text-yellow-300 space-y-1">
              <li>• Keep this page bookmarked for reference</li>
              <li>• Payment processing may take a few minutes</li>
              <li>• Check your email for payment confirmation</li>
              <li>• Contact support if you don't receive your key within 24 hours</li>
            </ul>
          </div>

          <div className="text-center pt-4">
            <Button 
              variant="outline" 
              onClick={() => window.location.href = '/'}
            >
              Return to Homepage
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default PostPurchaseInstructions;