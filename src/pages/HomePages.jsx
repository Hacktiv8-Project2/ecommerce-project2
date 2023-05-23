import CardsComponent from "../components/cards/CardsComponent";
import Hero from "../components/hero/HeroComponent";
import ScrollUp from "../components/scroll-up/ScrollUpComponent";

function HomePages() {
  return (
    <div className="md:max-w-[1400px] mx-auto md:px-10 xl:px-0">
      <Hero />
      <CardsComponent className="my-12 grid grid-cols-1 sm:grid-cols-2 sm:px-10 md:grid-cols-3 md:px-0 lg:grid-cols-4 gap-6 justify-center" />
      <ScrollUp />
    </div>
  );
}

export default HomePages;
