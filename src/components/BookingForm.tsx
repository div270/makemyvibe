import { useState } from "react";
import { X, CalendarIcon } from "lucide-react";
import { format } from "date-fns";
import { cn } from "@/lib/utils";
import { Calendar } from "@/components/ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import type { ExperienceCategory } from "./ExperiencesSection";

const locationTypes = [
  "Home Garden", "Terrace", "Balcony", "Living Room", "Lawn", "Pool Area", "Farmhouse",
];

const budgetRanges = [
  "₹5,000–₹10,000",
  "₹10,000–₹20,000",
  "₹20,000–₹40,000",
  "Premium Experience",
];

const mealOptions = ["Silver", "Gold", "Diamond", "Special"];

const categoryLabels: Record<ExperienceCategory, string> = {
  cinema: "Cinema Setup",
  pool: "Pool Party Setup",
  together: "Get Together Setup",
  birthday: "Birthday Party Setup",
  gaming: "Gaming Setup",
  custom: "Custom Setup",
};

const categoryQuestions: Record<ExperienceCategory, { label: string; type: "text" | "select"; options?: string[] }[]> = {
  cinema: [
    { label: "Preferred Genre / Movie", type: "text" },
    { label: "Indoor or Outdoor?", type: "select", options: ["Indoor", "Outdoor"] },
    { label: "Screen Size Preference", type: "select", options: ["Standard (100\")", "Large (120\")", "Premium (150\")"] },
  ],
  pool: [
    { label: "Pool Type", type: "select", options: ["Inflatable Pool", "Existing Pool"] },
    { label: "Number of Pools Needed", type: "text" },
  ],
  together: [
    { label: "Theme Preference", type: "text" },
    { label: "Seating Style", type: "select", options: ["Floor Cushions", "Chairs & Tables", "Mixed"] },
  ],
  birthday: [
    { label: "Birthday Person's Name", type: "text" },
    { label: "Age Turning", type: "text" },
    { label: "Theme / Color Scheme", type: "text" },
  ],
  gaming: [
    { label: "Console / PC Preference", type: "select", options: ["PlayStation", "Xbox", "PC", "Nintendo", "Multiple"] },
    { label: "Number of Screens", type: "text" },
  ],
  custom: [
    { label: "Describe Your Vision", type: "text" },
    { label: "Reference Images (describe)", type: "text" },
  ],
};

const addOnsList = [
  "Decoration Upgrade",
  "Photographer",
  "BBQ Setup",
  "Extra Lighting",
  "Music System",
  "Meal & Catering",
];

interface BookingFormProps {
  category: ExperienceCategory;
  onClose: () => void;
}

const BookingForm = ({ category, onClose }: BookingFormProps) => {
  const [selectedAddOns, setSelectedAddOns] = useState<string[]>([]);
  const [mealSelected, setMealSelected] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [eventDate, setEventDate] = useState<Date>();

  const today = new Date();
  today.setHours(0, 0, 0, 0);
  const maxDate = new Date(today);
  maxDate.setDate(maxDate.getDate() + 15);

  const toggleAddOn = (addon: string) => {
    setSelectedAddOns((prev) =>
      prev.includes(addon) ? prev.filter((a) => a !== addon) : [...prev, addon]
    );
    if (addon === "Meal & Catering") {
      setMealSelected(!selectedAddOns.includes("Meal & Catering"));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const form = e.target as HTMLFormElement;
    const formData = new FormData(form);
    const data: Record<string, string> = {};
    formData.forEach((v, k) => { data[k] = v.toString(); });

    // Build WhatsApp message
    let msg = `*MakeMyVibe Booking*\n\n`;
    msg += `*Category:* ${categoryLabels[category]}\n`;
    Object.entries(data).forEach(([k, v]) => {
      if (v) msg += `*${k}:* ${v}\n`;
    });
    if (selectedAddOns.length) msg += `*Add-ons:* ${selectedAddOns.join(", ")}\n`;

    const encoded = encodeURIComponent(msg);
    window.open(`https://wa.me/917498487315?text=${encoded}`, "_blank");
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="fixed inset-0 z-50 flex items-center justify-center bg-background/80 backdrop-blur-sm p-4">
        <div className="bg-card border border-border rounded-2xl p-8 max-w-md w-full text-center">
          <h3 className="font-display text-2xl font-bold text-gradient-gold mb-3">Thank You!</h3>
          <p className="text-muted-foreground mb-6">Your booking inquiry has been sent via WhatsApp. We'll get back to you shortly!</p>
          <button onClick={onClose} className="bg-gradient-gold text-primary-foreground px-6 py-2.5 rounded-lg font-semibold">
            Close
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center bg-background/80 backdrop-blur-sm p-4 overflow-y-auto">
      <div className="bg-card border border-border rounded-2xl w-full max-w-2xl my-8 relative">
        {/* Header */}
        <div className="sticky top-0 bg-card border-b border-border rounded-t-2xl px-6 py-4 flex items-center justify-between z-10">
          <h3 className="font-display text-xl font-bold">
            Book <span className="text-gradient-gold">{categoryLabels[category]}</span>
          </h3>
          <button onClick={onClose} className="text-muted-foreground hover:text-foreground">
            <X size={20} />
          </button>
        </div>

        <form onSubmit={handleSubmit} className="p-6 space-y-6">
          {/* Customer Details */}
          <fieldset className="space-y-3">
            <legend className="font-display font-semibold text-sm text-primary mb-2 uppercase tracking-wider">Customer Details</legend>
            <input name="Full Name" required placeholder="Full Name" className="w-full bg-muted border border-border rounded-lg px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary" />
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <input name="Phone Number" required placeholder="Phone Number" type="tel" className="w-full bg-muted border border-border rounded-lg px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary" />
              <input name="WhatsApp Number" placeholder="WhatsApp Number" type="tel" className="w-full bg-muted border border-border rounded-lg px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary" />
            </div>
            <input name="Email" placeholder="Email" type="email" className="w-full bg-muted border border-border rounded-lg px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary" />
          </fieldset>

          {/* Location Details */}
          <fieldset className="space-y-3">
            <legend className="font-display font-semibold text-sm text-primary mb-2 uppercase tracking-wider">Location Details</legend>
            <input name="Address" required placeholder="Full Address" className="w-full bg-muted border border-border rounded-lg px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary" />
            <select name="Setup Location Type" required className="w-full bg-muted border border-border rounded-lg px-4 py-2.5 text-sm text-foreground focus:outline-none focus:border-primary">
              <option value="">Select Location Type</option>
              {locationTypes.map((t) => (
                <option key={t} value={t}>{t}</option>
              ))}
            </select>
            <input name="Available Space" placeholder="Available Space (approx sq ft)" className="w-full bg-muted border border-border rounded-lg px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary" />
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              <input name="Floor Number" placeholder="Floor Number" type="number" className="w-full bg-muted border border-border rounded-lg px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary" />
              <select name="Lift Available" className="w-full bg-muted border border-border rounded-lg px-4 py-2.5 text-sm text-foreground focus:outline-none focus:border-primary">
                <option value="">Lift Available?</option>
                <option value="Yes">Yes</option>
                <option value="No">No</option>
              </select>
              <select name="Parking Available" className="w-full bg-muted border border-border rounded-lg px-4 py-2.5 text-sm text-foreground focus:outline-none focus:border-primary">
                <option value="">Parking?</option>
                <option value="Yes">Yes</option>
                <option value="No">No</option>
              </select>
            </div>
          </fieldset>

          {/* Event Details */}
          <fieldset className="space-y-3">
            <legend className="font-display font-semibold text-sm text-primary mb-2 uppercase tracking-wider">Event Details</legend>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div>
                <label className="block text-xs text-muted-foreground mb-1.5">Event Date *</label>
                <input type="hidden" name="Event Date" value={eventDate ? format(eventDate, "yyyy-MM-dd") : ""} required />
                <Popover>
                  <PopoverTrigger asChild>
                    <button
                      type="button"
                      className={cn(
                        "w-full flex items-center gap-2 bg-muted border border-border rounded-lg px-4 py-2.5 text-sm text-left focus:outline-none focus:border-primary",
                        !eventDate && "text-muted-foreground"
                      )}
                    >
                      <CalendarIcon className="h-4 w-4 opacity-60" />
                      {eventDate ? format(eventDate, "PPP") : "Select date"}
                    </button>
                  </PopoverTrigger>
                  <PopoverContent className="w-auto p-0 z-[60]" align="start">
                    <Calendar
                      mode="single"
                      selected={eventDate}
                      onSelect={setEventDate}
                      disabled={(date) => date < today || date > maxDate}
                      initialFocus
                      className={cn("p-3 pointer-events-auto")}
                    />
                  </PopoverContent>
                </Popover>
              </div>
              <div>
                <label className="block text-xs text-muted-foreground mb-1.5">Setup Time *</label>
                <select name="Setup Time" required className="w-full bg-muted border border-border rounded-lg px-4 py-2.5 text-sm text-foreground focus:outline-none focus:border-primary">
                  <option value="">Select time</option>
                  {Array.from({ length: 24 }, (_, h) =>
                    ["00", "30"].map((m) => {
                      const val = `${String(h).padStart(2, "0")}:${m}`;
                      const label = `${h === 0 ? 12 : h > 12 ? h - 12 : h}:${m} ${h < 12 ? "AM" : "PM"}`;
                      return <option key={val} value={val}>{label}</option>;
                    })
                  )}
                </select>
              </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div>
                <label className="block text-xs text-muted-foreground mb-1.5">Duration (hours)</label>
                <input name="Event Duration" placeholder="e.g. 3" type="number" min="1" className="w-full bg-muted border border-border rounded-lg px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary" />
              </div>
              <div>
                <label className="block text-xs text-muted-foreground mb-1.5">Number of Guests</label>
                <input name="Number of Guests" placeholder="e.g. 10" type="number" min="1" className="w-full bg-muted border border-border rounded-lg px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary" />
              </div>
            </div>
          </fieldset>

          {/* Category Specific */}
          <fieldset className="space-y-3">
            <legend className="font-display font-semibold text-sm text-primary mb-2 uppercase tracking-wider">{categoryLabels[category]} Details</legend>
            {categoryQuestions[category].map((q) =>
              q.type === "select" ? (
                <select key={q.label} name={q.label} className="w-full bg-muted border border-border rounded-lg px-4 py-2.5 text-sm text-foreground focus:outline-none focus:border-primary">
                  <option value="">{q.label}</option>
                  {q.options?.map((o) => (
                    <option key={o} value={o}>{o}</option>
                  ))}
                </select>
              ) : (
                <input key={q.label} name={q.label} placeholder={q.label} className="w-full bg-muted border border-border rounded-lg px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary" />
              )
            )}
          </fieldset>

          {/* Add-ons */}
          <fieldset className="space-y-3">
            <legend className="font-display font-semibold text-sm text-primary mb-2 uppercase tracking-wider">Add-Ons</legend>
            <div className="grid grid-cols-2 gap-2">
              {addOnsList.map((a) => (
                <label
                  key={a}
                  className={`flex items-center gap-2 p-3 rounded-lg border cursor-pointer text-sm transition-colors ${
                    selectedAddOns.includes(a)
                      ? "border-primary bg-primary/10 text-foreground"
                      : "border-border bg-muted text-muted-foreground"
                  }`}
                >
                  <input
                    type="checkbox"
                    checked={selectedAddOns.includes(a)}
                    onChange={() => toggleAddOn(a)}
                    className="sr-only"
                  />
                  <div className={`w-4 h-4 rounded border flex items-center justify-center ${
                    selectedAddOns.includes(a) ? "bg-primary border-primary" : "border-muted-foreground"
                  }`}>
                    {selectedAddOns.includes(a) && <span className="text-primary-foreground text-xs">✓</span>}
                  </div>
                  {a}
                </label>
              ))}
            </div>
          </fieldset>

          {/* Meal Details */}
          {mealSelected && (
            <fieldset className="space-y-3 border border-primary/20 rounded-xl p-4 bg-primary/5">
              <legend className="font-display font-semibold text-sm text-primary mb-2 uppercase tracking-wider">Meal Details</legend>
              <input name="People for Food" placeholder="Number of People for Food" type="number" className="w-full bg-muted border border-border rounded-lg px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary" />
              <select name="Meal Package" className="w-full bg-muted border border-border rounded-lg px-4 py-2.5 text-sm text-foreground focus:outline-none focus:border-primary">
                <option value="">Select Meal Package</option>
                {mealOptions.map((m) => (
                  <option key={m} value={m}>{m}</option>
                ))}
              </select>
              <select name="Veg / Jain Preference" className="w-full bg-muted border border-border rounded-lg px-4 py-2.5 text-sm text-foreground focus:outline-none focus:border-primary">
                <option value="">Veg / Jain Preference</option>
                <option value="Veg">Veg</option>
                <option value="Jain">Jain</option>
              </select>
              <input name="Serving Time" type="time" className="w-full bg-muted border border-border rounded-lg px-4 py-2.5 text-sm text-foreground focus:outline-none focus:border-primary" />
            </fieldset>
          )}

          {/* Budget */}
          <fieldset className="space-y-3">
            <legend className="font-display font-semibold text-sm text-primary mb-2 uppercase tracking-wider">Budget</legend>
            <select name="Budget Range" className="w-full bg-muted border border-border rounded-lg px-4 py-2.5 text-sm text-foreground focus:outline-none focus:border-primary">
              <option value="">Select Budget Range</option>
              {budgetRanges.map((b) => (
                <option key={b} value={b}>{b}</option>
              ))}
            </select>
          </fieldset>

          {/* Notes */}
          <textarea name="Additional Notes" rows={3} placeholder="Special Instructions or Notes" className="w-full bg-muted border border-border rounded-lg px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary resize-none" />

          {/* Confirmation */}
          <label className="flex items-start gap-3 text-sm text-muted-foreground">
            <input type="checkbox" required className="mt-0.5 accent-primary" />
            <span>I confirm space availability for setup.</span>
          </label>

          <button
            type="submit"
            className="w-full bg-gradient-gold text-primary-foreground py-3 rounded-lg font-semibold text-base shadow-gold hover:opacity-90 transition-opacity"
          >
            Send Booking via WhatsApp
          </button>
        </form>
      </div>
    </div>
  );
};

export default BookingForm;
