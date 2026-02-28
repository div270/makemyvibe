import heroBg from "@/assets/hero-bg.jpg";

const HeroSection = ({ onBookClick }: { onBookClick: () => void }) => {
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <img src={heroBg} alt="Luxury home cinema setup" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/70 to-background/40" />
      </div>

      <div className="relative z-10 container text-center px-4 pt-20">
        <p className="text-primary font-body text-sm tracking-[0.3em] uppercase mb-4 animate-fade-in-up">
          Luxury Home Experiences
        </p>
        <h1 className="font-display text-4xl sm:text-5xl md:text-7xl font-bold leading-tight mb-6 animate-fade-in-up" style={{ animationDelay: "0.15s" }}>
          Make Every Moment
          <br />
          <span className="text-gradient-gold">A Vibe</span>
        </h1>
        <p className="text-muted-foreground text-lg md:text-xl max-w-2xl mx-auto mb-10 animate-fade-in-up" style={{ animationDelay: "0.3s" }}>
          Luxury Experiences & Celebrations Designed At Your Home.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up" style={{ animationDelay: "0.45s" }}>
          <button
            onClick={onBookClick}
            className="bg-gradient-gold text-primary-foreground px-8 py-3.5 rounded-lg font-semibold text-base shadow-gold hover:opacity-90 transition-opacity"
          >
            Book Your Setup
          </button>
          <a
            href="#experiences"
            className="border border-primary/40 text-foreground px-8 py-3.5 rounded-lg font-semibold text-base hover:bg-primary/10 transition-colors"
          >
            Explore Experiences
          </a>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
