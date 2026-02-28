import cinemaImg from "@/assets/cinema-setup.jpeg";
import poolImg from "@/assets/pool-party.jpeg";
import togetherImg from "@/assets/get-together.jpeg";
import birthdayImg from "@/assets/birthday-setup.jpeg";
import gamingImg from "@/assets/gaming-setup.jpeg";
import customImg from "@/assets/custom-setup.jpeg";

export type ExperienceCategory =
  | "cinema"
  | "pool"
  | "together"
  | "birthday"
  | "gaming"
  | "custom";

export const experiences: {
  id: ExperienceCategory;
  title: string;
  desc: string;
  image: string;
}[] = [
  {
    id: "cinema",
    title: "Cinema Setup",
    desc: "Outdoor or indoor movie night with projector, screen, cozy seating, fairy lights and snacks.",
    image: cinemaImg,
  },
  {
    id: "pool",
    title: "Pool Party Setup",
    desc: "Inflatable pool with LED lights, floats, snack station & music to make your backyard epic.",
    image: poolImg,
  },
  {
    id: "together",
    title: "Get Together Setup",
    desc: "Elegant outdoor gathering with pallet tables, cushion seating, string lights & florals.",
    image: togetherImg,
  },
  {
    id: "birthday",
    title: "Birthday Party Setup",
    desc: "Balloon arches, themed décor, cake table styling and photo-ready backdrops.",
    image: birthdayImg,
  },
  {
    id: "gaming",
    title: "Gaming Setup",
    desc: "Console or PC gaming night with RGB lights, bean bags, snacks & competitive vibes.",
    image: gamingImg,
  },
  {
    id: "custom",
    title: "Custom Setup",
    desc: "Tell us your vision — we'll design a fully customized experience just for you.",
    image: customImg,
  },
];

const ExperiencesSection = ({
  onBook,
}: {
  onBook: (category: ExperienceCategory) => void;
}) => (
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
          <div
            key={exp.id}
            className="group bg-card rounded-xl overflow-hidden border border-border hover:border-primary/30 transition-all duration-300 hover:shadow-gold"
          >
            <div className="relative h-56 overflow-hidden">
              <img
                src={exp.image}
                alt={exp.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                loading="lazy"
              />
            </div>
            <div className="p-5">
              <h3 className="font-display text-xl font-semibold mb-2">{exp.title}</h3>
              <p className="text-muted-foreground text-sm mb-4 leading-relaxed">{exp.desc}</p>
              <button
                onClick={() => onBook(exp.id)}
                className="w-full bg-gradient-gold text-primary-foreground py-2.5 rounded-lg font-semibold text-sm hover:opacity-90 transition-opacity"
              >
                Book Now
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default ExperiencesSection;
