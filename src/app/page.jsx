import Image from "next/image";

export default function Home() {
  return (
     <section className="relative h-96 flex items-center justify-center overflow-hidden">
          {/* Background Image */}
          <div className="absolute inset-0 z-0">
            <Image
              src="/images/talent_hero.jpg" // Replace with your actual hero background image
              alt="Tech Talent Hero Background"
              fill
              className="object-cover object-center"
              priority
              quality={90}
            />
            {/* Dark overlay for better text readability */}
            <div className="absolute inset-0 bg-black/30"></div>
          </div>
    
          {/* Content */}
          <div className="relative z-10 text-center">
            <h1 className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-bold text-white tracking-wide">
             Home
            </h1>
          </div>
        </section>
  );
}
