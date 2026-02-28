const meals = [
  {
    tier: "Silver",
    items: ["1 Sabji", "1 Roti", "1 Rice"],
    highlight: false,
  },
  {
    tier: "Gold",
    items: ["1 Sabji", "1 Roti", "1 Rice", "1 Sweet"],
    highlight: false,
  },
  {
    tier: "Diamond",
    items: ["2 Sabji", "2 Roti", "1 Rice", "2 Sweet"],
    highlight: true,
  },
  {
    tier: "Special",
    items: ["Welcome Drink", "Soup", "2 Sabji", "2 Roti", "Rice", "2 Sweet", "Mocktails"],
    highlight: false,
  },
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
          <div
            key={m.tier}
            className={`rounded-xl p-6 border text-center transition-all ${
              m.highlight
                ? "border-primary bg-primary/5 shadow-gold"
                : "border-border bg-card"
            }`}
          >
            {m.highlight && (
              <span className="inline-block bg-gradient-gold text-primary-foreground text-xs font-bold px-3 py-1 rounded-full mb-3">
                Popular
              </span>
            )}
            <h3 className="font-display text-xl font-bold mb-4">{m.tier} Meal</h3>
            <ul className="space-y-2">
              {m.items.map((item) => (
                <li key={item} className="text-muted-foreground text-sm">
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default MealsSection;
