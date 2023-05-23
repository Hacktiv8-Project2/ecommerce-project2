import Button from "../button/Button";

export default function Hero() {
  return (
    <div className="max-h-[325px] bg-[#fceee3] rounded-2xl flex items-center py-10 pl-24 gap-x-36">
      <div className="max-w-2xl">
        <h2 className="text-5xl text-[#003e29] font-semibold mb-8">Solusi Terbaik untuk Belanja Online yang Mudah dan Aman</h2>
        <Button
          type="button"
          className="bg-[#003e29] text-white px-5 py-3 rounded-full capitalize font-medium hover:bg-[#070707] active:bg-[#003e29] outline-none">
          jelajahi sekarang
        </Button>
      </div>
        <img 
          className="w-80 object-cover" 
          src="./images/hero.jpg" 
          alt="hero" 
        />
    </div>
  );
}