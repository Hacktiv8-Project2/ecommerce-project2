import CardsComponent from "../components/cards/CardsComponent";
import Hero from "../components/hero/HeroComponent";

function HomePages() {
  return (
    <div className="max-w-[1400px] mx-auto px-5">
      <Hero />
      <CardsComponent className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 auto-cols-max gap-x-5 justify-center" />
    </div>
  );
}

export default HomePages;
