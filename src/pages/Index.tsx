import { useState } from "react";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ExperiencesSection from "@/components/ExperiencesSection";
import type { ExperienceCategory } from "@/components/ExperiencesSection";
import AddOnsSection from "@/components/AddOnsSection";
import MealsSection from "@/components/MealsSection";
import BookingProcess from "@/components/BookingProcess";
import GallerySection from "@/components/GallerySection";
import TestimonialsSection from "@/components/TestimonialsSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import BookingForm from "@/components/BookingForm";
import { MessageCircle } from "lucide-react";

const Index = () => {
  const [bookingCategory, setBookingCategory] = useState<ExperienceCategory | null>(null);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <HeroSection onBookClick={() => setBookingCategory("cinema")} />
      <AboutSection />
      <ExperiencesSection onBook={setBookingCategory} />
      <AddOnsSection />
      <MealsSection />
      <BookingProcess />
      <GallerySection />
      <TestimonialsSection />
      <ContactSection />
      <Footer />

      {/* Booking Form Modal */}
      {bookingCategory && (
        <BookingForm category={bookingCategory} onClose={() => setBookingCategory(null)} />
      )}

      {/* Floating WhatsApp Button */}
      <a
        href="https://wa.me/917498487315"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-40 w-14 h-14 bg-gradient-gold rounded-full flex items-center justify-center shadow-gold hover:scale-110 transition-transform"
        aria-label="Chat on WhatsApp"
      >
        <MessageCircle className="w-6 h-6 text-primary-foreground" />
      </a>
    </div>
  );
};

export default Index;
