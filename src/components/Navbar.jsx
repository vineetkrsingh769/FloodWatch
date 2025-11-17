import { Link, useLocation } from "react-router-dom";
import { Waves } from "lucide-react";

const Navbar = () => {
  const location = useLocation();
  
  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Upload", path: "/upload" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <nav className="sticky top-0 z-50 bg-card border-b border-border backdrop-blur-sm bg-card/95">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center gap-2 font-bold text-xl text-primary">
            <Waves className="w-7 h-7" />
            <span>FloodWatch</span>
          </Link>
          
          <div className="flex gap-6">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`text-sm font-medium transition-colors hover:text-primary ${
                  location.pathname === link.path
                    ? "text-primary"
                    : "text-muted-foreground"
                }`}
              >
                {link.name}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

