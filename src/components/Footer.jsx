import { Waves, Github, Mail } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="border-t border-border bg-card mt-20">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <div className="flex items-center gap-2 font-bold text-xl text-primary mb-4">
              <Waves className="w-6 h-6" />
              <span>FloodWatch</span>
            </div>
            <p className="text-sm text-muted-foreground">
              AI-powered flood prediction and awareness platform to help save lives 
              and property through early detection and prevention.
            </p>
          </div>
          
          <div>
            <h3 className="font-semibold mb-4">Quick Links</h3>
            <div className="space-y-2">
              <Link to="/" className="block text-sm text-muted-foreground hover:text-primary transition-colors">
                Home
              </Link>
              <Link to="/upload" className="block text-sm text-muted-foreground hover:text-primary transition-colors">
                Upload & Analyze
              </Link>
              <Link to="/contact" className="block text-sm text-muted-foreground hover:text-primary transition-colors">
                Contact Us
              </Link>
            </div>
          </div>
          
          <div>
            <h3 className="font-semibold mb-4">About</h3>
            <p className="text-sm text-muted-foreground mb-4">
              Developed to address flood disasters in North India using Machine Learning 
              and satellite imagery analysis.
            </p>
            <div className="flex gap-4">
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Github className="w-5 h-5" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
        
        <div className="border-t border-border mt-8 pt-8 text-center text-sm text-muted-foreground">
          <p>© 2025 FloodWatch. Built to save lives through technology.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

