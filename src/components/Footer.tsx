const Footer = () => (
  <footer className="border-t border-border py-8">
    <div className="container px-4 text-center">
      <p className="font-display text-lg font-bold text-gradient-gold mb-2">MakeMyVibe</p>
      <p className="text-muted-foreground text-sm">
        © {new Date().getFullYear()} MakeMyVibe. All rights reserved.
      </p>
    </div>
  </footer>
);

export default Footer;
