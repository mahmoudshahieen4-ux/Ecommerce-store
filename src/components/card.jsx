import { Star, Heart, ShoppingCart } from "lucide-react";
import { Link } from "react-router-dom";
import { useAppContext } from "../context/AppContext";
import { useState } from "react";

export default function Card({ product }) {
  const { addToCart, addToWishlist, removeFromWishlist, isInWishlist, isInCart } = useAppContext();
  const [addedToCart, setAddedToCart] = useState(false);

  const handleAddToCart = () => {
    addToCart(product);
    setAddedToCart(true);
    setTimeout(() => setAddedToCart(false), 2000);
  };

  const handleToggleWishlist = () => {
    if (isInWishlist(product.id)) {
      removeFromWishlist(product.id);
    } else {
      addToWishlist(product);
    }
  };

  const inWishlist = isInWishlist(product.id);
  const inCart = isInCart(product.id);

  // Calculate star rating (FakeStore API provides rating.rate)
  const renderStars = () => {
    const rating = product.rating?.rate || 0;
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      stars.push(
        <Star
          key={i}
          className={`w-4 h-4 ${i <= Math.round(rating)
            ? "fill-yellow-400 text-yellow-400"
            : "text-gray-300"
            }`}
        />
      );
    }
    return stars;
  };

  return (
    <div className="card flex flex-col justify-between shadow-lg rounded-lg overflow-hidden hover:shadow-xl transition-all duration-300 dark:text-white dark:border dark:border-gray-700 min-w-[160px] w-[180px] sm:min-w-[220px] sm:w-[240px] md:min-w-[240px] md:w-[260px] lg:min-w-[260px] lg:w-[280px] bg-white dark:bg-gray-800 group/card flex-shrink-0">
      {/* Image Container */}
      <div className="relative h-48 bg-gray-100 dark:bg-gray-700 flex items-center justify-center overflow-hidden">
        <Link to={`/product/${product.id}`} className="w-full h-full flex items-center justify-center">
          <img
            src={product.image}
            alt={product.title}
            className="w-full h-full object-contain p-4 group-hover/card:scale-110 transition-transform duration-300"
          />
        </Link>

        {/* Wishlist Button - Floating */}
        <button
          onClick={handleToggleWishlist}
          className={`absolute top-3 right-3 p-2 rounded-full shadow-lg transition-all duration-200 ${inWishlist
            ? "bg-red-500 text-white"
            : "bg-white/90 dark:bg-gray-800/90 text-gray-700 dark:text-gray-300 hover:bg-red-500 hover:text-white"
            }`}
        >
          <Heart className={`w-5 h-5 ${inWishlist ? "fill-current" : ""}`} />
        </button>

        {/* Badge if in cart */}
        {inCart && (
          <div className="absolute top-3 left-3 bg-green-500 text-white text-xs font-semibold px-2 py-1 rounded-full">
            In Cart
          </div>
        )}
      </div>

      {/* Content */}
      <div className="p-4 flex flex-col gap-2 flex-1">
        <Link to={`/product/${product.id}`}>
          <h3 className="font-semibold text-sm line-clamp-2 text-gray-900 dark:text-white min-h-[40px] hover:text-primary transition-colors">
            {product.title}
          </h3>
        </Link>

        {/* Category */}
        <span className="text-xs text-gray-500 dark:text-gray-400 uppercase">
          {product.category}
        </span>

        {/* Rating */}
        <div className="flex items-center gap-1">
          {renderStars()}
          <span className="text-xs text-gray-600 dark:text-gray-400 ml-1">
            ({product.rating?.count || 0})
          </span>
        </div>

        {/* Price */}
        <p className="text-2xl font-bold text-primary mt-auto">
          ${product.price.toFixed(2)}
        </p>

        {/* Buttons */}
        <div className="flex gap-2 mt-2">
          <button
            onClick={handleAddToCart}
            className={`flex-1 flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg font-medium transition-all ${addedToCart
              ? "bg-green-500 text-white"
              : "bg-primary hover:bg-dark-primary text-white"
              } shadow-md hover:shadow-lg`}
          >
            <ShoppingCart className="w-4 h-4" />
            {addedToCart ? "Added!" : inCart ? "Add More" : "Add to Cart"}
          </button>
        </div>
      </div>
    </div>
  );
}
