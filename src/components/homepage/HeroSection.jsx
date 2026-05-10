import founderHero from "../../assets/founder-hero.png";

export default function HeroSection() {
  return (
    <section className="relative min-h-screen overflow-hidden border-b border-white/10 relative bg-transparent pt-16">
      <div className="flex min-h-[calc(100vh-4rem)] items-center justify-center px-4 py-8 lg:px-10">
        <img
          src={founderHero}
          alt="Fundamental.co founder hero"
          className="h-auto w-full max-w-[1600px] object-contain"
        />
      </div>
    </section>
  );
}