import { Heart, Trash2, ShoppingCart } from "lucide-react";
import { useAppContext } from "../context/AppContext";
import { Link } from "react-router-dom";

export default function Wishlist() {
    const { wishlistItems, removeFromWishlist, addToCart } = useAppContext();

    const handleAddToCart = (item) => {
        addToCart(item);
    };

    return (
        <div className="min-h-screen bg-gray-50 dark:bg-gray-900 pt-28 pb-12">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header */}
                <div className="mb-8">
                    <div className="flex items-center gap-3 mb-2">
                        <Heart className="w-8 h-8 text-primary fill-primary" />
                        <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
                            My Wishlist
                        </h1>
                    </div>
                    <p className="text-gray-600 dark:text-gray-400">
                        {wishlistItems.length} {wishlistItems.length === 1 ? 'item' : 'items'} saved for later
                    </p>
                </div>

                {/* Wishlist Items */}
                {wishlistItems.length === 0 ? (
                    <div className="text-center py-16">
                        <Heart className="w-24 h-24 mx-auto text-gray-300 dark:text-gray-700 mb-4" />
                        <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-2">
                            Your wishlist is empty
                        </h2>
                        <p className="text-gray-600 dark:text-gray-400 mb-6">
                            Start adding products you love!
                        </p>
                        <Link
                            to="/"
                            className="inline-block px-6 py-3 bg-primary text-white rounded-full hover:bg-dark-primary transition-colors"
                        >
                            Continue Shopping
                        </Link>
                    </div>
                ) : (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                        {wishlistItems.map((item) => (
                            <div
                                key={item.id}
                                className="bg-white dark:bg-gray-800 rounded-xl shadow-sm hover:shadow-lg transition-shadow overflow-hidden group"
                            >
                                <div className="relative h-64 overflow-hidden bg-gray-100 dark:bg-gray-700 flex items-center justify-center">
                                    <img
                                        src={item.image}
                                        alt={item.title}
                                        className="w-full h-full object-contain p-4 transition-transform duration-300 group-hover:scale-110"
                                    />
                                    <button
                                        onClick={() => removeFromWishlist(item.id)}
                                        className="absolute top-3 right-3 p-2 bg-white/90 hover:bg-red-500 text-gray-700 hover:text-white rounded-full shadow-lg transition-all duration-200"
                                    >
                                        <Trash2 className="w-5 h-5" />
                                    </button>
                                </div>

                                <div className="p-4">
                                    <span className="text-xs text-gray-500 dark:text-gray-400 uppercase mb-1 block">
                                        {item.category}
                                    </span>
                                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2 line-clamp-2 min-h-[56px]">
                                        {item.title}
                                    </h3>
                                    <div className="flex items-center justify-between mb-4">
                                        <span className="text-2xl font-bold text-primary">
                                            ${item.price.toFixed(2)}
                                        </span>
                                        <div className="flex items-center gap-1">
                                            <span className="text-sm text-yellow-500">★</span>
                                            <span className="text-sm text-gray-600 dark:text-gray-400">
                                                {item.rating?.rate || 'N/A'}
                                            </span>
                                        </div>
                                    </div>
                                    <button
                                        onClick={() => handleAddToCart(item)}
                                        className="w-full flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg font-medium transition-all bg-primary hover:bg-dark-primary text-white shadow-md hover:shadow-lg"
                                    >
                                        <ShoppingCart className="w-5 h-5" />
                                        Add to Cart
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
}
