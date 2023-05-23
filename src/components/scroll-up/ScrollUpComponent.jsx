import { useEffect, useState } from "react";
import Button from "../button/Button";
import { ArrowUpIcon } from "@heroicons/react/24/outline";

export default function ScrollUp() {
  const [showGoToTop, setShowGoToTop] = useState(false);

  const handleScroll = () => {
    const scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
    setShowGoToTop(scrollTop > 500);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const goToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      {showGoToTop && (
        <Button
          className="fixed bottom-5 right-5 bg-[#003e29] text-white px-4 py-2 rounded-md shadow-md flex flex-col items-center transition-colors duration-300 hover:bg-gray-300 hover:text-gray-800"
          onClick={goToTop}
        >
          <ArrowUpIcon />
          <span className="text-xs font-medium mt-1">Top</span>
        </Button>
      )}
    </>
  )
}