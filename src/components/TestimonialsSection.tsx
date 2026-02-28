import { Star } from "lucide-react";

const reviews = [
  {
    name: "Priya Sharma",
    text: "MakeMyVibe transformed our terrace into a magical cinema night! The kids absolutely loved it. Worth every rupee.",
    rating: 5,
  },
  {
    name: "Rahul Mehta",
    text: "Booked a birthday setup for my wife — the balloon décor and lighting were stunning. She was so surprised!",
    rating: 5,
  },
  {
    name: "Ananya Patel",
    text: "The pool party setup was incredible. LED lights in the pool, music, snacks — our friends couldn't stop raving about it.",
    rating: 5,
  },
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

export default TestimonialsSection;
