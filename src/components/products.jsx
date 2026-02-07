import Card from "./card";
import { Tag, ChevronLeft, ChevronRight, Loader2 } from "lucide-react";
import { useRef } from "react";
import { useAppContext } from "../context/AppContext";

export default function Products({ label = "All Products", category }) {
  const scrollRef = useRef(null);
  const { products, loading } = useAppContext();

  // Filter products by category if specified
  const filteredProducts = category
    ? products.filter((p) => p.category === category)
    : products;

  const scroll = (direction) => {
    if (scrollRef.current) {
      const { current } = scrollRef;
      const scrollAmount = 300;
      if (direction === "left") {
        current.scrollBy({ left: -scrollAmount, behavior: "smooth" });
      } else {
        current.scrollBy({ left: scrollAmount, behavior: "smooth" });
      }
    }
  };

  if (loading) {
    return (
      <div className="w-full max-w-7xl mx-auto mb-8 py-12">
        <div className="flex items-center justify-center gap-3">
          <Loader2 className="w-8 h-8 animate-spin text-primary" />
          <span className="text-gray-600 dark:text-gray-400">Loading products...</span>
        </div>
      </div>
    );
  }

  if (filteredProducts.length === 0) {
    return (
      <div className="w-full max-w-7xl mx-auto">
        <div className="offer-span bg-primary text-white text-center max-w-60 p-2 text-xl font-bold flex justify-center items-center relative text-nowrap">
          <Tag className="text-white mr-2" />
          {label}
          <span className="triangle bg-dark-primary"></span>
        </div>
        <div className="text-center py-12 text-gray-600 dark:text-gray-400">
          No products found in this category
        </div>
      </div>
    );
  }

  return (
    <div className="w-full max-w-7xl mx-auto pb-2 sm:pb-4 md:pb-8">
      <div className="offer-span bg-primary text-white text-center max-w-70 p-2 text-xl font-bold flex justify-center items-center relative text-nowrap left-0">
        <Tag className="text-white mr-2" />
        {label}
        <span className="triangle bg-dark-primary"></span>
      </div>

      <div className="relative px-2 sm:px-4 md:px-0 group">
        <button
          onClick={() => scroll("left")}
          className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white/80 hover:bg-white text-gray-800 p-2 rounded-full shadow-lg opacity-100 transition-all duration-300 -ml-2 md:-ml-4 hidden md:block"
          aria-label="Scroll left"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>

        <div
          ref={scrollRef}
          className="products flex whitespace-nowrap gap-3 sm:gap-4 p-2 sm:p-4 bg-transparent border-t-3 border-primary pb-10 overflow-x-auto scroll-smooth no-scrollbar"
        >
          {filteredProducts.map((product) => (
            <Card key={product.id} product={product} />
          ))}
        </div>

        <button
          onClick={() => scroll("right")}
          className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white/80 hover:bg-white text-gray-800 p-2 rounded-full shadow-lg opacity-100 transition-all duration-300 -mr-2 md:-mr-4 hidden md:block"
          aria-label="Scroll right"
        >
          <ChevronRight className="w-6 h-6" />
        </button>
      </div>
    </div>
  );
}