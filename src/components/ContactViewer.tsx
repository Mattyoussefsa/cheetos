import { useState, useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

interface ContactInfo {
  id: string;
  email: string;
  discord: string;
  planName: string;
  price: string;
  timestamp: string;
  paymentStatus: 'pending' | 'paid' | 'cancelled';
}

const ContactViewer = () => {
  const [contacts, setContacts] = useState<ContactInfo[]>([]);
  const [filter, setFilter] = useState<'all' | 'pending' | 'paid' | 'cancelled'>('paid');

  useEffect(() => {
    loadContacts();
  }, []);

  const loadContacts = () => {
    const allContacts: ContactInfo[] = [];
    
    // Get all contact entries from localStorage
    for (let i = 0; i < localStorage.length; i++) {
      const key = localStorage.key(i);
      if (key?.startsWith('contact_')) {
        try {
          const contact = JSON.parse(localStorage.getItem(key) || '');
          // Add default values for older entries
          if (!contact.paymentStatus) contact.paymentStatus = 'pending';
          if (!contact.id) contact.id = key.replace('contact_', '');
          allContacts.push(contact);
        } catch (error) {
          console.error('Error parsing contact:', error);
        }
      }
    }
    
    // Sort by timestamp (newest first)
    allContacts.sort((a, b) => new Date(b.timestamp).getTime() - new Date(a.timestamp).getTime());
    setContacts(allContacts);
  };

  const updatePaymentStatus = (contactId: string, status: 'paid' | 'cancelled' | 'pending') => {
    const key = `contact_${contactId}`;
    const contactData = localStorage.getItem(key);
    if (contactData) {
      const contact = JSON.parse(contactData);
      contact.paymentStatus = status;
      localStorage.setItem(key, JSON.stringify(contact));
      loadContacts();
    }
  };

  const filteredContacts = contacts.filter(contact => {
    if (filter === 'all') return true;
    return contact.paymentStatus === filter;
  });

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'paid': return 'bg-green-600 text-white';
      case 'cancelled': return 'bg-red-600 text-white';
      case 'pending': return 'bg-yellow-600 text-white';
      default: return 'bg-gray-600 text-white';
    }
  };

  const getStatusText = (status: string) => {
    switch (status) {
      case 'paid': return 'Paid ✅';
      case 'cancelled': return 'Cancelled ❌';
      case 'pending': return 'Pending ⏳';
      default: return 'Unknown';
    }
  };

  const clearAllContacts = () => {
    if (confirm('Are you sure you want to clear all contact information?')) {
      // Remove all contact entries
      const keysToRemove: string[] = [];
      for (let i = 0; i < localStorage.length; i++) {
        const key = localStorage.key(i);
        if (key?.startsWith('contact_')) {
          keysToRemove.push(key);
        }
      }
      
      keysToRemove.forEach(key => localStorage.removeItem(key));
      setContacts([]);
    }
  };

  const exportContacts = () => {
    const csvContent = [
      'Email,Discord,Plan,Price,Status,Timestamp',
      ...filteredContacts.map(c => `${c.email},${c.discord},${c.planName},${c.price},${c.paymentStatus},${c.timestamp}`)
    ].join('\n');
    
    const blob = new Blob([csvContent], { type: 'text/csv' });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `contacts_${filter}_${new Date().toISOString().split('T')[0]}.csv`;
    a.click();
    window.URL.revokeObjectURL(url);
  };

  return (
    <div className="max-w-4xl mx-auto p-6">
      <div className="flex justify-between items-center mb-6">
        <div>
          <h1 className="text-2xl font-bold">Customer Contacts</h1>
          <p className="text-sm text-muted-foreground mt-1">
            Total: {contacts.length} | Paid: {contacts.filter(c => c.paymentStatus === 'paid').length} | 
            Pending: {contacts.filter(c => c.paymentStatus === 'pending').length}
          </p>
        </div>
        <div className="flex gap-2">
          <select 
            value={filter} 
            onChange={(e) => setFilter(e.target.value as any)}
            className="px-3 py-2 border rounded-md text-sm bg-background text-foreground"
          >
            <option value="paid">Paid Only</option>
            <option value="all">All Contacts</option>
            <option value="pending">Pending Only</option>
            <option value="cancelled">Cancelled Only</option>
          </select>
          <Button onClick={clearAllContacts} variant="destructive" disabled={contacts.length === 0}>
            Clear All
          </Button>
        </div>
      </div>

      {filteredContacts.length === 0 ? (
        <Card>
          <CardContent className="text-center py-8">
            <p className="text-muted-foreground">
              {filter === 'all' ? 'No customer contacts yet.' : `No ${filter} contacts found.`}
            </p>
          </CardContent>
        </Card>
      ) : (
        <div className="space-y-4">
          {filteredContacts.map((contact, index) => (
            <Card key={contact.id || index}>
              <CardHeader>
                <div className="flex justify-between items-start">
                  <div className="flex items-center gap-3">
                    <CardTitle className="text-lg">{contact.email}</CardTitle>
                    <Badge 
                      variant="secondary" 
                      className={getStatusColor(contact.paymentStatus)}
                    >
                      {getStatusText(contact.paymentStatus)}
                    </Badge>
                  </div>
                  <Badge variant="outline">{contact.planName}</Badge>
                </div>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-4 gap-4 text-sm mb-4">
                  <div>
                    <p className="text-muted-foreground">Discord</p>
                    <p className="font-medium">{contact.discord}</p>
                  </div>
                  <div>
                    <p className="text-muted-foreground">Plan & Price</p>
                    <p className="font-medium">{contact.planName} - {contact.price}</p>
                  </div>
                  <div>
                    <p className="text-muted-foreground">Date</p>
                    <p className="font-medium">{new Date(contact.timestamp).toLocaleString()}</p>
                  </div>
                  <div>
                    <p className="text-muted-foreground">Actions</p>
                    <div className="flex gap-1">
                      {contact.paymentStatus === 'pending' && (
                        <>
                          <Button 
                            size="sm" 
                            variant="outline"
                            onClick={() => updatePaymentStatus(contact.id, 'paid')}
                            className="text-xs px-2 py-1 h-auto"
                          >
                            Mark Paid
                          </Button>
                          <Button 
                            size="sm" 
                            variant="outline"
                            onClick={() => updatePaymentStatus(contact.id, 'cancelled')}
                            className="text-xs px-2 py-1 h-auto"
                          >
                            Cancel
                          </Button>
                        </>
                      )}
                      {contact.paymentStatus !== 'pending' && (
                        <Button 
                          size="sm" 
                          variant="outline"
                          onClick={() => updatePaymentStatus(contact.id, 'pending')}
                          className="text-xs px-2 py-1 h-auto"
                        >
                          Reset to Pending
                        </Button>
                      )}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      )}
    </div>
  );
};

export default ContactViewer;