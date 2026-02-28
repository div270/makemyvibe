import { Phone, MapPin, Instagram, MessageCircle } from "lucide-react";

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

export default ContactSection;
