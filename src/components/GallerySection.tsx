import cinemaImg from "@/assets/cinema-setup.jpeg";
import poolImg from "@/assets/pool-party.jpeg";
import togetherImg from "@/assets/get-together.jpeg";
import birthdayImg from "@/assets/birthday-setup.jpeg";
import gamingImg from "@/assets/gaming-setup.jpeg";
import customImg from "@/assets/custom-setup.jpeg";
import heroImg from "@/assets/hero-bg.jpg";

const images = [cinemaImg, poolImg, togetherImg, birthdayImg, gamingImg, customImg, heroImg];

const GallerySection = () => (
  <section id="gallery" className="py-20">
    <div className="container px-4">
      <div className="text-center mb-14">
        <p className="text-primary text-sm tracking-[0.2em] uppercase mb-3">Our Work</p>
        <h2 className="font-display text-3xl md:text-4xl font-bold">
          Setup <span className="text-gradient-gold">Gallery</span>
        </h2>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4 max-w-5xl mx-auto">
        {images.map((img, i) => (
          <div
            key={i}
            className={`rounded-xl overflow-hidden ${i === 0 ? "md:row-span-2" : ""}`}
          >
            <img
              src={img}
              alt={`Setup ${i + 1}`}
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
              loading="lazy"
            />
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default GallerySection;
