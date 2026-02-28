import { useState } from "react";
import { Menu, X, Phone } from "lucide-react";
import { useNavigate, useLocation } from "react-router-dom";

const navLinks = [
  { label: "Home", href: "#hero" },
  { label: "About", href: "#about" },
  { label: "Experiences", href: "#experiences" },
  { label: "Meals", href: "#meals" },
  { label: "Gallery", href: "#gallery" },
  { label: "Contact", href: "#contact" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const isCodePage = location.pathname === "/code";

  const handleNavClick = (href: string) => {
    setOpen(false);
    if (isCodePage) {
      navigate("/" + href);
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border">
      <div className="container flex items-center justify-between h-16">
        <a href="/" onClick={(e) => { e.preventDefault(); navigate("/"); }} className="font-display text-xl font-bold text-gradient-gold">
          MakeMyVibe
        </a>

        {/* Desktop */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((l) => (
            <a
              key={l.href}
              href={isCodePage ? "/" + l.href : l.href}
              onClick={isCodePage ? (e) => { e.preventDefault(); handleNavClick(l.href); } : undefined}
              className="text-sm text-muted-foreground hover:text-primary transition-colors"
            >
              {l.label}
            </a>
          ))}
          <a
            href="https://wa.me/917498487315"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gradient-gold text-primary-foreground px-5 py-2 rounded-lg text-sm font-semibold hover:opacity-90 transition-opacity"
          >
            Book Now
          </a>
        </div>

        {/* Mobile toggle */}
        <button onClick={() => setOpen(!open)} className="md:hidden text-foreground">
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-background border-b border-border pb-4">
          {navLinks.map((l) => (
            <a
              key={l.href}
              href={isCodePage ? "/" + l.href : l.href}
              onClick={isCodePage ? (e) => { e.preventDefault(); handleNavClick(l.href); } : () => setOpen(false)}
              className="block px-6 py-3 text-sm text-muted-foreground hover:text-primary transition-colors"
            >
              {l.label}
            </a>
          ))}
          <div className="px-6 pt-2">
            <a
              href="https://wa.me/917498487315"
              target="_blank"
              rel="noopener noreferrer"
              className="block text-center bg-gradient-gold text-primary-foreground px-5 py-2.5 rounded-lg text-sm font-semibold"
            >
              Book Now
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
