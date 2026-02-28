import { useState } from "react";
import { ChevronDown, ChevronRight, Copy, Check } from "lucide-react";
import Navbar from "@/components/Navbar";

const codeFiles: { name: string; code: string }[] = [
  {
    name: "App.tsx",
    code: `import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;`,
  },
  {
    name: "pages/Index.tsx",
    code: `import { useState } from "react";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ExperiencesSection from "@/components/ExperiencesSection";
import AddOnsSection from "@/components/AddOnsSection";
import MealsSection from "@/components/MealsSection";
import BookingProcess from "@/components/BookingProcess";
import GallerySection from "@/components/GallerySection";
import TestimonialsSection from "@/components/TestimonialsSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import BookingForm from "@/components/BookingForm";
import { MessageCircle } from "lucide-react";

const Index = () => {
  const [bookingCategory, setBookingCategory] = useState(null);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <HeroSection onBookClick={() => setBookingCategory("cinema")} />
      <AboutSection />
      <ExperiencesSection onBook={setBookingCategory} />
      <AddOnsSection />
      <MealsSection />
      <BookingProcess />
      <GallerySection />
      <TestimonialsSection />
      <ContactSection />
      <Footer />
      {bookingCategory && (
        <BookingForm category={bookingCategory} onClose={() => setBookingCategory(null)} />
      )}
      <a href="https://wa.me/917498487315" target="_blank" rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-40 w-14 h-14 bg-gradient-gold rounded-full flex items-center justify-center shadow-gold hover:scale-110 transition-transform"
        aria-label="Chat on WhatsApp">
        <MessageCircle className="w-6 h-6 text-primary-foreground" />
      </a>
    </div>
  );
};

export default Index;`,
  },
  {
    name: "components/Navbar.tsx",
    code: `import { useState } from "react";
import { Menu, X } from "lucide-react";

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

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border">
      <div className="container flex items-center justify-between h-16">
        <a href="#hero" className="font-display text-xl font-bold text-gradient-gold">MakeMyVibe</a>
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((l) => (
            <a key={l.href} href={l.href} className="text-sm text-muted-foreground hover:text-primary transition-colors">{l.label}</a>
          ))}
          <a href="https://wa.me/917498487315" target="_blank" rel="noopener noreferrer"
            className="bg-gradient-gold text-primary-foreground px-5 py-2 rounded-lg text-sm font-semibold hover:opacity-90 transition-opacity">
            Book Now
          </a>
        </div>
        <button onClick={() => setOpen(!open)} className="md:hidden text-foreground">
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
      {open && (
        <div className="md:hidden bg-background border-b border-border pb-4">
          {navLinks.map((l) => (
            <a key={l.href} href={l.href} onClick={() => setOpen(false)}
              className="block px-6 py-3 text-sm text-muted-foreground hover:text-primary transition-colors">{l.label}</a>
          ))}
          <div className="px-6 pt-2">
            <a href="https://wa.me/917498487315" target="_blank" rel="noopener noreferrer"
              className="block text-center bg-gradient-gold text-primary-foreground px-5 py-2.5 rounded-lg text-sm font-semibold">
              Book Now
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;`,
  },
  {
    name: "components/HeroSection.tsx",
    code: `import heroBg from "@/assets/hero-bg.jpg";

const HeroSection = ({ onBookClick }) => {
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0">
        <img src={heroBg} alt="Luxury home cinema setup" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/70 to-background/40" />
      </div>
      <div className="relative z-10 container text-center px-4 pt-20">
        <p className="text-primary font-body text-sm tracking-[0.3em] uppercase mb-4 animate-fade-in-up">
          Luxury Home Experiences
        </p>
        <h1 className="font-display text-4xl sm:text-5xl md:text-7xl font-bold leading-tight mb-6 animate-fade-in-up">
          Make Every Moment<br /><span className="text-gradient-gold">A Vibe</span>
        </h1>
        <p className="text-muted-foreground text-lg md:text-xl max-w-2xl mx-auto mb-10 animate-fade-in-up">
          Luxury Experiences & Celebrations Designed At Your Home.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up">
          <button onClick={onBookClick}
            className="bg-gradient-gold text-primary-foreground px-8 py-3.5 rounded-lg font-semibold text-base shadow-gold hover:opacity-90 transition-opacity">
            Book Your Setup
          </button>
          <a href="#experiences"
            className="border border-primary/40 text-foreground px-8 py-3.5 rounded-lg font-semibold text-base hover:bg-primary/10 transition-colors">
            Explore Experiences
          </a>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;`,
  },
  {
    name: "components/AboutSection.tsx",
    code: `import { Sparkles, Star, Heart } from "lucide-react";

const AboutSection = () => (
  <section id="about" className="py-20 bg-gradient-warm">
    <div className="container px-4">
      <div className="max-w-3xl mx-auto text-center">
        <p className="text-primary text-sm tracking-[0.2em] uppercase mb-3">About Us</p>
        <h2 className="font-display text-3xl md:text-4xl font-bold mb-6">
          Why <span className="text-gradient-gold">MakeMyVibe</span>?
        </h2>
        <p className="text-muted-foreground text-lg leading-relaxed mb-12">
          MakeMyVibe creates unforgettable at-home experiences including cinema setups, pool parties,
          gaming nights, birthdays and customized celebrations.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
          {[
            { icon: Sparkles, title: "Premium Setups", desc: "Luxury-grade décor & equipment" },
            { icon: Heart, title: "Personalized", desc: "Tailored to your vision & space" },
            { icon: Star, title: "Hassle-Free", desc: "We handle setup & cleanup" },
          ].map((item) => (
            <div key={item.title} className="flex flex-col items-center gap-3">
              <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center">
                <item.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-display text-lg font-semibold">{item.title}</h3>
              <p className="text-muted-foreground text-sm">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default AboutSection;`,
  },
  {
    name: "components/ExperiencesSection.tsx",
    code: `import cinemaImg from "@/assets/cinema-setup.jpeg";
import poolImg from "@/assets/pool-party.jpeg";
import togetherImg from "@/assets/get-together.jpeg";
import birthdayImg from "@/assets/birthday-setup.jpeg";
import gamingImg from "@/assets/gaming-setup.jpeg";
import customImg from "@/assets/custom-setup.jpeg";

export const experiences = [
  { id: "cinema", title: "Cinema Setup", desc: "Outdoor or indoor movie night with projector, screen, cozy seating, fairy lights and snacks.", image: cinemaImg },
  { id: "pool", title: "Pool Party Setup", desc: "Inflatable pool with LED lights, floats, snack station & music.", image: poolImg },
  { id: "together", title: "Get Together Setup", desc: "Elegant outdoor gathering with pallet tables, cushion seating, string lights & florals.", image: togetherImg },
  { id: "birthday", title: "Birthday Party Setup", desc: "Balloon arches, themed décor, cake table styling and photo-ready backdrops.", image: birthdayImg },
  { id: "gaming", title: "Gaming Setup", desc: "Console or PC gaming night with RGB lights, bean bags, snacks & competitive vibes.", image: gamingImg },
  { id: "custom", title: "Custom Setup", desc: "Tell us your vision — we'll design a fully customized experience just for you.", image: customImg },
];

const ExperiencesSection = ({ onBook }) => (
  <section id="experiences" className="py-20">
    <div className="container px-4">
      <div className="text-center mb-14">
        <p className="text-primary text-sm tracking-[0.2em] uppercase mb-3">What We Offer</p>
        <h2 className="font-display text-3xl md:text-4xl font-bold">
          Our <span className="text-gradient-gold">Experiences</span>
        </h2>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {experiences.map((exp) => (
          <div key={exp.id} className="group bg-card rounded-xl overflow-hidden border border-border hover:border-primary/30 transition-all duration-300 hover:shadow-gold">
            <div className="relative h-56 overflow-hidden">
              <img src={exp.image} alt={exp.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" loading="lazy" />
            </div>
            <div className="p-5">
              <h3 className="font-display text-xl font-semibold mb-2">{exp.title}</h3>
              <p className="text-muted-foreground text-sm mb-4 leading-relaxed">{exp.desc}</p>
              <button onClick={() => onBook(exp.id)}
                className="w-full bg-gradient-gold text-primary-foreground py-2.5 rounded-lg font-semibold text-sm hover:opacity-90 transition-opacity">
                Book Now
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default ExperiencesSection;`,
  },
  {
    name: "components/AddOnsSection.tsx",
    code: `import { Palette, Camera, Flame, Music, Lightbulb, UtensilsCrossed } from "lucide-react";

const addons = [
  { icon: Palette, title: "Decoration Upgrade", desc: "Premium balloon arches, florals & themed décor" },
  { icon: Camera, title: "Photographer", desc: "Professional photos & reels of your celebration" },
  { icon: Flame, title: "BBQ Setup", desc: "Live grill station with charcoal & essentials" },
  { icon: Music, title: "Music System", desc: "Bluetooth speakers with party lighting" },
  { icon: Lightbulb, title: "Extra Lighting", desc: "Fairy lights, LED strips & ambient lamps" },
  { icon: UtensilsCrossed, title: "Meal & Catering", desc: "Curated meal packages for your guests" },
];

const AddOnsSection = () => (
  <section className="py-20 bg-gradient-warm">
    <div className="container px-4">
      <div className="text-center mb-14">
        <p className="text-primary text-sm tracking-[0.2em] uppercase mb-3">Enhance Your Experience</p>
        <h2 className="font-display text-3xl md:text-4xl font-bold">
          Add-On <span className="text-gradient-gold">Services</span>
        </h2>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6 max-w-4xl mx-auto">
        {addons.map((a) => (
          <div key={a.title} className="bg-card border border-border rounded-xl p-5 text-center hover:border-primary/30 transition-colors">
            <a.icon className="w-8 h-8 text-primary mx-auto mb-3" />
            <h3 className="font-display font-semibold text-sm md:text-base mb-1">{a.title}</h3>
            <p className="text-muted-foreground text-xs md:text-sm">{a.desc}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default AddOnsSection;`,
  },
  {
    name: "components/MealsSection.tsx",
    code: `const meals = [
  { tier: "Silver", items: ["1 Sabji", "1 Roti", "1 Rice"], highlight: false },
  { tier: "Gold", items: ["1 Sabji", "1 Roti", "1 Rice", "1 Sweet"], highlight: false },
  { tier: "Diamond", items: ["2 Sabji", "2 Roti", "1 Rice", "2 Sweet"], highlight: true },
  { tier: "Special", items: ["Welcome Drink", "Soup", "2 Sabji", "2 Roti", "Rice", "2 Sweet", "Mocktails"], highlight: false },
];

const MealsSection = () => (
  <section id="meals" className="py-20">
    <div className="container px-4">
      <div className="text-center mb-14">
        <p className="text-primary text-sm tracking-[0.2em] uppercase mb-3">Catering</p>
        <h2 className="font-display text-3xl md:text-4xl font-bold">
          Meal <span className="text-gradient-gold">Packages</span>
        </h2>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 max-w-5xl mx-auto">
        {meals.map((m) => (
          <div key={m.tier} className={\`rounded-xl p-6 border text-center transition-all \${
            m.highlight ? "border-primary bg-primary/5 shadow-gold" : "border-border bg-card"
          }\`}>
            {m.highlight && (
              <span className="inline-block bg-gradient-gold text-primary-foreground text-xs font-bold px-3 py-1 rounded-full mb-3">Popular</span>
            )}
            <h3 className="font-display text-xl font-bold mb-4">{m.tier} Meal</h3>
            <ul className="space-y-2">
              {m.items.map((item) => (
                <li key={item} className="text-muted-foreground text-sm">{item}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default MealsSection;`,
  },
  {
    name: "components/BookingProcess.tsx",
    code: `import { MousePointer2, Settings2, CalendarCheck, PartyPopper } from "lucide-react";

const steps = [
  { icon: MousePointer2, title: "Select Experience", desc: "Choose from our curated setups" },
  { icon: Settings2, title: "Customize Setup", desc: "Add-ons, meals & preferences" },
  { icon: CalendarCheck, title: "Confirm Booking", desc: "Pick date, time & finalize" },
  { icon: PartyPopper, title: "Enjoy Your Moment", desc: "We set up, you celebrate!" },
];

const BookingProcess = () => (
  <section className="py-20 bg-gradient-warm">
    <div className="container px-4">
      <div className="text-center mb-14">
        <p className="text-primary text-sm tracking-[0.2em] uppercase mb-3">How It Works</p>
        <h2 className="font-display text-3xl md:text-4xl font-bold">
          Booking <span className="text-gradient-gold">Process</span>
        </h2>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
        {steps.map((s, i) => (
          <div key={s.title} className="text-center">
            <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-primary/10 border border-primary/20 flex items-center justify-center relative">
              <s.icon className="w-7 h-7 text-primary" />
              <span className="absolute -top-2 -right-2 w-6 h-6 bg-gradient-gold text-primary-foreground text-xs font-bold rounded-full flex items-center justify-center">
                {i + 1}
              </span>
            </div>
            <h3 className="font-display font-semibold text-sm md:text-base mb-1">{s.title}</h3>
            <p className="text-muted-foreground text-xs md:text-sm">{s.desc}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default BookingProcess;`,
  },
  {
    name: "components/GallerySection.tsx",
    code: `import cinemaImg from "@/assets/cinema-setup.jpeg";
import poolImg from "@/assets/pool-party.jpeg";
import togetherImg from "@/assets/get-together.jpeg";
import birthdayImg from "@/assets/birthday-setup.jpeg";
import gamingImg from "@/assets/gaming-setup.jpeg";
import customImg from "@/assets/custom-setup.jpeg";
import heroImg from "@/assets/hero-bg.jpg";

const images = [cinemaImg, poolImg, togetherImg, birthdayImg, gamingImg, customImg, heroImg];

const GallerySection = () => (
  <section id="gallery" className="py-20">
    <div className="container px-4">
      <div className="text-center mb-14">
        <p className="text-primary text-sm tracking-[0.2em] uppercase mb-3">Our Work</p>
        <h2 className="font-display text-3xl md:text-4xl font-bold">
          Setup <span className="text-gradient-gold">Gallery</span>
        </h2>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4 max-w-5xl mx-auto">
        {images.map((img, i) => (
          <div key={i} className={\`rounded-xl overflow-hidden \${i === 0 ? "md:row-span-2" : ""}\`}>
            <img src={img} alt={\`Setup \${i + 1}\`}
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" loading="lazy" />
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default GallerySection;`,
  },
  {
    name: "components/TestimonialsSection.tsx",
    code: `import { Star } from "lucide-react";

const reviews = [
  { name: "Priya Sharma", text: "MakeMyVibe transformed our terrace into a magical cinema night! The kids absolutely loved it.", rating: 5 },
  { name: "Rahul Mehta", text: "Booked a birthday setup for my wife — the balloon décor and lighting were stunning.", rating: 5 },
  { name: "Ananya Patel", text: "The pool party setup was incredible. LED lights in the pool, music, snacks — our friends couldn't stop raving.", rating: 5 },
];

const TestimonialsSection = () => (
  <section className="py-20 bg-gradient-warm">
    <div className="container px-4">
      <div className="text-center mb-14">
        <p className="text-primary text-sm tracking-[0.2em] uppercase mb-3">Reviews</p>
        <h2 className="font-display text-3xl md:text-4xl font-bold">
          Happy <span className="text-gradient-gold">Customers</span>
        </h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
        {reviews.map((r) => (
          <div key={r.name} className="bg-card border border-border rounded-xl p-6">
            <div className="flex gap-1 mb-4">
              {Array.from({ length: r.rating }).map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-primary text-primary" />
              ))}
            </div>
            <p className="text-muted-foreground text-sm leading-relaxed mb-4">"{r.text}"</p>
            <p className="font-display font-semibold text-sm">{r.name}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default TestimonialsSection;`,
  },
  {
    name: "components/ContactSection.tsx",
    code: `import { Phone, MapPin, Instagram, MessageCircle } from "lucide-react";

const ContactSection = () => (
  <section id="contact" className="py-20">
    <div className="container px-4">
      <div className="text-center mb-14">
        <p className="text-primary text-sm tracking-[0.2em] uppercase mb-3">Get In Touch</p>
        <h2 className="font-display text-3xl md:text-4xl font-bold">
          Contact <span className="text-gradient-gold">Us</span>
        </h2>
      </div>
      <div className="max-w-2xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-8">
          <a href="tel:+917498487315" className="flex items-center gap-4 bg-card border border-border rounded-xl p-5 hover:border-primary/30 transition-colors">
            <Phone className="w-6 h-6 text-primary" />
            <div>
              <p className="text-xs text-muted-foreground">Call Us</p>
              <p className="font-semibold text-sm">+91 74984 87315</p>
            </div>
          </a>
          <a href="https://wa.me/917498487315" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 bg-card border border-border rounded-xl p-5 hover:border-primary/30 transition-colors">
            <MessageCircle className="w-6 h-6 text-primary" />
            <div>
              <p className="text-xs text-muted-foreground">WhatsApp</p>
              <p className="font-semibold text-sm">Chat with us</p>
            </div>
          </a>
          <a href="https://instagram.com/makemyvibe" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 bg-card border border-border rounded-xl p-5 hover:border-primary/30 transition-colors">
            <Instagram className="w-6 h-6 text-primary" />
            <div>
              <p className="text-xs text-muted-foreground">Instagram</p>
              <p className="font-semibold text-sm">@makemyvibe</p>
            </div>
          </a>
          <div className="flex items-center gap-4 bg-card border border-border rounded-xl p-5">
            <MapPin className="w-6 h-6 text-primary" />
            <div>
              <p className="text-xs text-muted-foreground">Service Areas</p>
              <p className="font-semibold text-sm">Pan-City Service</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default ContactSection;`,
  },
  {
    name: "components/Footer.tsx",
    code: `const Footer = () => (
  <footer className="border-t border-border py-8">
    <div className="container px-4 text-center">
      <p className="font-display text-lg font-bold text-gradient-gold mb-2">MakeMyVibe</p>
      <p className="text-muted-foreground text-sm">
        © {new Date().getFullYear()} MakeMyVibe. All rights reserved.
      </p>
    </div>
  </footer>
);

export default Footer;`,
  },
];

const CodeBlock = ({ file }: { file: { name: string; code: string } }) => {
  const [open, setOpen] = useState(false);
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(file.code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="border border-border rounded-xl overflow-hidden bg-card">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between px-5 py-4 hover:bg-muted/50 transition-colors"
      >
        <div className="flex items-center gap-3">
          {open ? <ChevronDown className="w-4 h-4 text-primary" /> : <ChevronRight className="w-4 h-4 text-muted-foreground" />}
          <span className="font-mono text-sm font-semibold text-foreground">{file.name}</span>
        </div>
        <span className="text-xs text-muted-foreground">{file.code.split("\n").length} lines</span>
      </button>
      {open && (
        <div className="relative border-t border-border">
          <button
            onClick={handleCopy}
            className="absolute top-3 right-3 z-10 flex items-center gap-1.5 bg-muted border border-border rounded-lg px-3 py-1.5 text-xs text-muted-foreground hover:text-foreground transition-colors"
          >
            {copied ? <Check className="w-3.5 h-3.5 text-primary" /> : <Copy className="w-3.5 h-3.5" />}
            {copied ? "Copied!" : "Copy"}
          </button>
          <pre className="p-5 overflow-x-auto text-sm leading-relaxed">
            <code className="text-muted-foreground font-mono">
              {file.code.split("\n").map((line, i) => (
                <div key={i} className="flex">
                  <span className="select-none w-10 shrink-0 text-right pr-4 text-muted-foreground/40">{i + 1}</span>
                  <span className="text-foreground/80">{line}</span>
                </div>
              ))}
            </code>
          </pre>
        </div>
      )}
    </div>
  );
};

const CodeView = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <div className="container px-4 pt-24 pb-16">
        <div className="text-center mb-12">
          <p className="text-primary text-sm tracking-[0.2em] uppercase mb-3">Source Code</p>
          <h1 className="font-display text-3xl md:text-4xl font-bold mb-4">
            Website <span className="text-gradient-gold">Code</span>
          </h1>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Browse the complete source code of the MakeMyVibe website. Click on any file to expand and view its code.
          </p>
        </div>
        <div className="max-w-4xl mx-auto space-y-3">
          {codeFiles.map((file) => (
            <CodeBlock key={file.name} file={file} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default CodeView;
