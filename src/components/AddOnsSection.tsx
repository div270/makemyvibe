import { Palette, Camera, Flame, Music, Lightbulb, UtensilsCrossed } from "lucide-react";

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

export default AddOnsSection;
