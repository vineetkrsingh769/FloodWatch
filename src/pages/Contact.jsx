import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Mail, MapPin, Phone } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const { toast } = useToast();

  const handleSubmit = (e) => {
    e.preventDefault();
    toast({
      title: "Message sent!",
      description: "We'll get back to you soon.",
    });
  };

  return (
    <div className="min-h-screen py-12 px-4">
      <div className="container mx-auto max-w-5xl">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">Contact Us</h1>
          <p className="text-lg text-muted-foreground">
            Have questions or suggestions? We'd love to hear from you.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <Card className="p-6 text-center">
            <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
              <Mail className="w-6 h-6 text-primary" />
            </div>
            <h3 className="font-semibold mb-2">Email</h3>
            <p className="text-sm text-muted-foreground">sauravseniordatascientest@floodwatch.com</p>
          </Card>

          <Card className="p-6 text-center">
            <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
              <Phone className="w-6 h-6 text-primary" />
            </div>
            <h3 className="font-semibold mb-2">Phone</h3>
            <p className="text-sm text-muted-foreground">+91 1800-0566-00</p>
          </Card>

          <Card className="p-6 text-center">
            <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
              <MapPin className="w-6 h-6 text-primary" />
            </div>
            <h3 className="font-semibold mb-2">Location</h3>
            <p className="text-sm text-muted-foreground">LPU, India</p>
          </Card>
        </div>

        <Card className="p-8 max-w-2xl mx-auto">
          <h2 className="text-2xl font-bold mb-6">Send us a message</h2>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-sm font-medium mb-2">Name</label>
              <Input placeholder="Your name" required />
            </div>
            
            <div>
              <label className="block text-sm font-medium mb-2">Email</label>
              <Input type="email" placeholder="your.email@example.com" required />
            </div>
            
            <div>
              <label className="block text-sm font-medium mb-2">Subject</label>
              <Input placeholder="What's this about?" required />
            </div>
            
            <div>
              <label className="block text-sm font-medium mb-2">Message</label>
              <Textarea 
                placeholder="Tell us more..." 
                rows={6}
                required 
              />
            </div>

            <Button type="submit" size="lg" className="w-full">
              Send Message
            </Button>
          </form>
        </Card>

        
      </div>
    </div>
  );
};

export default Contact;




