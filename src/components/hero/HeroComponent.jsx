import Button from "../button/Button";

export default function Hero() {
  const handleScroll = () => {
    const element = document.getElementById("product-list");

    element?.scrollIntoView({ behavior: 'smooth' });
  }

  return (
    <div className="grid bg-[#fceee3] py-10 px-3 md:grid-cols-[1.5fr_1fr] md:mt-10 md:items-center md:px-10 md:rounded-xl lg:px-18 lg:py-5">
      <div className="order-2 text-center sm:max-w-xl sm:mx-auto md:order-1 md:text-left md:max-w-full lg:max-w-2xl">
        <h2 className="text-3xl text-[#003e29] font-semibold mb-8 lg:text-5xl">Solusi Terbaik untuk Belanja Online yang Mudah dan Aman</h2>
        <Button
          className="bg-[#003e29] text-white text-sm px-5 py-3 rounded-full capitalize font-medium hover:bg-[#070707] active:bg-[#003e29] outline-none"
          onClick={handleScroll}
          type="button">
          jelajahi sekarang
        </Button>
      </div>
      <div className="order-1 mb-5 md:order-2 md:mb-0">
        <img 
          className="max-w-[200px] mx-auto lg:max-w-[300px]"
          src="./images/hero.jpg" 
          alt="hero" 
        />
      </div>
    </div>
  );
}