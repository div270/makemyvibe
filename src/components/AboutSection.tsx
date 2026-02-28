import { Sparkles, Star, Heart } from "lucide-react";

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
          gaming nights, birthdays and customized celebrations. We bring comfort, luxury and celebration
          together — right at your home.
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

export default AboutSection;
