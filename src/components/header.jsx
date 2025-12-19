import banner1 from "../assets/banner_home1.png"
import banner2 from "../assets/banner_home2.png"
import banner3 from "../assets/banner_home3.png"
import HeaderCard from "./headerCard"
import banner4 from "../assets/banner3_1.png"
import banner5 from "../assets/banner3_2.png"
import banner6 from "../assets/banner3_3.png"
import banner7 from "../assets/banner3_4.png"
import { useState, useEffect, useRef } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"

const banners = [banner1, banner2];
// Add clones to start and end for infinite loop
const extendedBanners = [banners[banners.length - 1], ...banners, banners[0]];

export default function Header() {
  const [currentIndex, setCurrentIndex] = useState(1);
  const [isTransitioning, setIsTransitioning] = useState(true);
  const timerRef = useRef(null);

  // Auto-play
  useEffect(() => {
    startTimer();
    return () => clearInterval(timerRef.current);
  }, [currentIndex]);

  const startTimer = () => {
    clearInterval(timerRef.current);
    timerRef.current = setInterval(() => {
      nextSlide();
    }, 5000);
  };

  const nextSlide = () => {
    if (!isTransitioning) return;
    setCurrentIndex((prev) => prev + 1);
    setIsTransitioning(true);
  };

  const prevSlide = () => {
    if (!isTransitioning) return;
    setCurrentIndex((prev) => prev - 1);
    setIsTransitioning(true);
  };

  const handleTransitionEnd = () => {
    if (currentIndex === 0) {
      setIsTransitioning(false);
      setCurrentIndex(banners.length);
    } else if (currentIndex === extendedBanners.length - 1) {
      setIsTransitioning(false);
      setCurrentIndex(1);
    }
  };

  // Re-enable transition after snapping
  useEffect(() => {
    if (!isTransitioning) {
      // Force reflow to ensure the snap happens without transition
      // Then re-enable transition in the next tick
      const timeout = setTimeout(() => {
        setIsTransitioning(true);
      }, 50);
      return () => clearTimeout(timeout);
    }
  }, [isTransitioning]);

  // Calculate the actual active index for indicators
  const activeIndicatorIndex = (currentIndex - 1 + banners.length) % banners.length;

  return (
    <header>
      <div className="header-content flex flex-col md:flex-row max-w-7xl mx-auto mb-6 gap-4 w-full sm:px-4 md:px-6 overflow-hidden">
        <div className="banner-slider w-full md:w-3/4 h-64 md:h-96 rounded-xl relative overflow-hidden shadow-lg ">

          {/* Carousel Container */}
          <div
            className={`flex h-full ${isTransitioning ? 'transition-transform duration-700 ease-in-out' : ''}`}
            style={{ transform: `translateX(-${currentIndex * (100 / extendedBanners.length)}%)`, width: `${extendedBanners.length * 100}%` }}
            onTransitionEnd={handleTransitionEnd}
          >
            {extendedBanners.map((banner, index) => (
              <div key={index} className="h-full relative flex-shrink-0" style={{ width: `${100 / extendedBanners.length}%` }}>
                <img
                  src={banner}
                  alt={`Banner`}
                  className="w-full h-full object-cover object-center"
                />
              </div>
            ))}
          </div>

          {/* Navigation Buttons */}
          <button
          
            onClick={() => {
              startTimer();
              prevSlide();
            }}
            className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/30 hover:bg-white/50 backdrop-blur-sm p-2 rounded-full text-white opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-opacity duration-300 z-10"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          <button
            onClick={() => {
              startTimer();
              nextSlide();
            }}
            className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/30 hover:bg-white/50 backdrop-blur-sm p-2 rounded-full text-white opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-opacity duration-300 z-10"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Slider Indicators */}
          <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2 z-10">
            {banners.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  startTimer();
                  setIsTransitioning(true);
                  setCurrentIndex(index + 1);
                }}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${index === activeIndicatorIndex ? "bg-white w-6" : "bg-white/50 hover:bg-white/80"}`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>

        <div className="hidden md:block w-1/4 h-96 rounded-xl overflow-hidden shadow-lg relative group">
          <img
            src={banner3}
            alt="Side Banner"
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition-colors duration-300"></div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-1 sm:px-4 md:px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-10">
          <HeaderCard src={banner4} />
          <HeaderCard src={banner5} />
          <HeaderCard src={banner6} />
          <HeaderCard src={banner7} />
        </div>
      </div>
    </header>
  );
}
