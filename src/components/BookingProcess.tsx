import { MousePointer2, Settings2, CalendarCheck, PartyPopper } from "lucide-react";

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

export default BookingProcess;
