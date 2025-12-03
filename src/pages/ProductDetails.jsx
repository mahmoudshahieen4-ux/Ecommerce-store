import { useParams, Link } from "react-router-dom";
import { useAppContext } from "../context/AppContext";
import { Star, ShoppingCart, ArrowLeft, Heart, Check } from "lucide-react";
import { useState, useEffect } from "react";
import mahmoud from "../assets/mahmoud.jpg";

export default function ProductDetails() {
    const { id } = useParams();
    const { products, addToCart, isInCart, addToWishlist, isInWishlist, removeFromWishlist } = useAppContext();
    const [product, setProduct] = useState(null);
    const [loading, setLoading] = useState(true);

    // Comment state
    const [comments, setComments] = useState([
        {
            id: 1,
            user: "mahmoud shahieen",
            avatar: mahmoud,
            text: "sorry, iam the only user till now",
            rating: 4.5
        }
    ]);
    const [newComment, setNewComment] = useState("");
    const [rating, setRating] = useState(0);
    const [hoverRating, setHoverRating] = useState(0);

    useEffect(() => {
        if (products.length > 0) {
            const foundProduct = products.find(p => p.id === parseInt(id));
            setProduct(foundProduct);
            setLoading(false);
        }
    }, [products, id]);

    const handleAddComment = () => {
        if (!newComment.trim() || rating === 0) return;

        const comment = {
            id: Date.now(),
            user: "Guest User",
            avatar: "https://ui-avatars.com/api/?name=Guest+User&background=random",
            text: newComment,
            rating: rating
        };

        setComments([...comments, comment]);
        setNewComment("");
        setRating(0);
    };

    if (loading) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-gray-50 dark:bg-gray-900">
                <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary"></div>
            </div>
        );
    }

    if (!product) {
        return (
            <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 dark:bg-gray-900">
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Product not found</h2>
                <Link to="/" className="text-primary hover:underline">
                    Back to Home
                </Link>
            </div>
        );
    }

    const isAddedToCart = isInCart(product.id);
    const isAddedToWishlist = isInWishlist(product.id);

    return (
        <div className="min-h-screen bg-gray-50 dark:bg-gray-900 pt-28 pb-12">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <Link
                    to="/"
                    className="inline-flex items-center text-gray-600 dark:text-gray-400 hover:text-primary mb-8 transition-colors"
                >
                    <ArrowLeft className="w-5 h-5 mr-2" />
                    Back to Shopping
                </Link>

                <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg overflow-hidden">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
                        {/* Image Section */}
                        <div className="p-8 bg-white flex items-center justify-center min-h-[400px] md:h-full border-b md:border-b-0 md:border-r border-gray-100 dark:border-gray-700">
                            <img
                                src={product.image}
                                alt={product.title}
                                className="max-w-full max-h-[500px] object-contain hover:scale-105 transition-transform duration-500"
                            />
                        </div>

                        {/* Details Section */}
                        <div className="p-8 lg:p-12 flex flex-col justify-center">
                            <div className="mb-6">
                                <span className="inline-block px-3 py-1 text-xs font-semibold tracking-wider text-primary uppercase bg-primary/10 rounded-full mb-4">
                                    {product.category}
                                </span>
                                <h1 className="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-4 leading-tight">
                                    {product.title}
                                </h1>

                                <div className="flex items-center gap-4 mb-6">
                                    <div className="flex items-center bg-yellow-100 dark:bg-yellow-900/30 px-2 py-1 rounded-lg">
                                        <Star className="w-5 h-5 text-yellow-500 fill-current" />
                                        <span className="ml-1 font-bold text-gray-900 dark:text-white">
                                            {product.rating?.rate}
                                        </span>
                                        <span className="ml-1 text-sm text-gray-500 dark:text-gray-400">
                                            ({product.rating?.count} reviews)
                                        </span>
                                    </div>
                                    <span className="text-gray-300 dark:text-gray-600">|</span>
                                    <span className="text-green-600 dark:text-green-400 font-medium">
                                        In Stock
                                    </span>
                                </div>

                                <p className="text-gray-600 dark:text-gray-300 text-lg leading-relaxed mb-8">
                                    {product.description}
                                </p>

                                <div className="flex items-end gap-4 mb-8">
                                    <span className="text-4xl font-bold text-gray-900 dark:text-white">
                                        ${product.price.toFixed(2)}
                                    </span>
                                </div>

                                <div className="flex flex-col sm:flex-row gap-4">
                                    <button
                                        onClick={() => addToCart(product)}
                                        disabled={isAddedToCart}
                                        className={`flex-1 flex items-center justify-center px-8 py-4 rounded-xl font-bold text-lg transition-all transform active:scale-95 ${isAddedToCart
                                            ? "bg-green-600 text-white cursor-default"
                                            : "bg-primary text-white hover:bg-dark-primary shadow-lg hover:shadow-primary/30"
                                            }`}
                                    >
                                        {isAddedToCart ? (
                                            <>
                                                <Check className="w-6 h-6 mr-2" />
                                                Added to Cart
                                            </>
                                        ) : (
                                            <>
                                                <ShoppingCart className="w-6 h-6 mr-2" />
                                                Add to Cart
                                            </>
                                        )}
                                    </button>

                                    <button
                                        onClick={() => isAddedToWishlist ? removeFromWishlist(product.id) : addToWishlist(product)}
                                        className={`p-4 rounded-xl border-2 transition-all ${isAddedToWishlist
                                            ? "border-red-500 bg-red-50 text-red-500 dark:bg-red-900/20"
                                            : "border-gray-200 dark:border-gray-700 text-gray-400 hover:border-red-500 hover:text-red-500"
                                            }`}
                                    >
                                        <Heart className={`w-6 h-6 ${isAddedToWishlist ? "fill-current" : ""}`} />
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* Comments Section */}
            <div className="comments max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-8 pb-12">
                <h2 className="text-3xl font-bold mb-6 text-gray-900 dark:text-white">Comments ({comments.length})</h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                    {comments.map((comment) => (
                        <div key={comment.id} className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg overflow-hidden">
                            <div className="p-8">
                                <div className="user flex items-center mb-4">
                                    <img
                                        src={comment.avatar}
                                        alt={comment.user}
                                        className="rounded-full w-16 h-16 mr-4 object-cover border-2 border-gray-100 dark:border-gray-700"
                                    />
                                    <div>
                                        <h3 className="text-xl font-bold text-gray-900 dark:text-white">{comment.user}</h3>
                                        <div className="flex items-center gap-1">
                                            {[...Array(5)].map((_, i) => (
                                                <Star
                                                    key={i}
                                                    className={`w-4 h-4 ${i < Math.round(comment.rating) ? "text-yellow-500 fill-current" : "text-gray-300"}`}
                                                />
                                            ))}
                                            <span className="text-sm text-gray-500 ml-2">{comment.rating}</span>
                                        </div>
                                    </div>
                                </div>
                                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                                    {comment.text}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Add Comment Form */}
                <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-6 md:p-8 border border-gray-100 dark:border-gray-700">
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">Add a Review</h3>

                    <div className="flex flex-col gap-4">
                        <div className="flex items-center gap-2 mb-2">
                            <span className="text-gray-700 dark:text-gray-300 font-medium mr-2">Your Rating:</span>
                            <div className="flex items-center">
                                {[1, 2, 3, 4, 5].map((star) => (
                                    <button
                                        key={star}
                                        type="button"
                                        onClick={() => setRating(star)}
                                        onMouseEnter={() => setHoverRating(star)}
                                        onMouseLeave={() => setHoverRating(0)}
                                        className="p-1 focus:outline-none transition-transform hover:scale-110"
                                    >
                                        <Star
                                            className={`w-8 h-8 ${star <= (hoverRating || rating)
                                                    ? "text-yellow-500 fill-current"
                                                    : "text-gray-300 dark:text-gray-600"
                                                }`}
                                        />
                                    </button>
                                ))}
                            </div>
                            <span className="ml-2 text-lg font-bold text-yellow-500">
                                {hoverRating || rating ? (hoverRating || rating) : 0}
                            </span>
                        </div>

                        <div className="flex flex-col sm:flex-row gap-4">
                            <input
                                type="text"
                                value={newComment}
                                onChange={(e) => setNewComment(e.target.value)}
                                placeholder="Share your thoughts about this product..."
                                className="flex-1 px-4 py-3 rounded-xl border border-gray-300 dark:border-gray-600 bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all"
                            />
                            <button
                                onClick={handleAddComment}
                                disabled={!newComment.trim() || rating === 0}
                                className="bg-primary hover:bg-dark-primary disabled:opacity-50 disabled:cursor-not-allowed text-white px-8 py-3 rounded-xl font-bold transition-all shadow-md hover:shadow-lg whitespace-nowrap"
                            >
                                Post Comment
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
