import { ShoppingCart, Trash2, Plus, Minus, ArrowRight, Tag } from "lucide-react";
import { useAppContext } from "../context/AppContext";
import { Link } from "react-router-dom";
import { useState } from "react";

export default function Cart() {
    const { cartItems, removeFromCart, updateCartQuantity, getCartTotal, getCartCount } = useAppContext();
    const [promoCode, setPromoCode] = useState("");
    const [discount, setDiscount] = useState(0);

    const applyPromoCode = () => {
        if (promoCode.toUpperCase() === "SAVE10") {
            setDiscount(0.1);
            alert("Promo code applied! 10% discount");
        } else if (promoCode.toUpperCase() === "SAVE20") {
            setDiscount(0.2);
            alert("Promo code applied! 20% discount");
        } else if (promoCode) {
            alert("Invalid promo code");
        }
    };

    const subtotal = getCartTotal();
    const discountAmount = subtotal * discount;
    const shipping = subtotal > 100 ? 0 : 10;
    const tax = (subtotal - discountAmount) * 0.08;
    const total = subtotal - discountAmount + shipping + tax;

    return (
        <div className="cart min-h-screen bg-gray-50 dark:bg-gray-900 flex-col justify-center pb-12">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header */}
                <div className="mb-8 ">
                    <div className="flex items-center justify-center rounded-t-2xl py-2 gap-3 mb-2 bg-primary text  ">
                        <ShoppingCart className="w-8 h-8 text-primary" />
                        <h1 className="text-3xl font-bold text-white dark:text-gray-800">
                            Shopping Cart
                        </h1>
                    </div>
                    <p className="text-gray-600 dark:text-gray-400">
                        {getCartCount()} {getCartCount() === 1 ? 'item' : 'items'} in your cart
                    </p>
                </div>

                {cartItems.length === 0 ? (
                    <div className="text-center py-16">
                        <ShoppingCart className="w-24 h-24 mx-auto text-gray-300 dark:text-gray-700 mb-4" />
                        <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-2">
                            Your cart is empty
                        </h2>
                        <p className="text-gray-600 dark:text-gray-400 mb-6">
                            Add some products to get started!
                        </p>
                        <Link
                            to="/"
                            className="inline-block px-6 py-3 bg-primary text-white rounded-full hover:bg-dark-primary transition-colors"
                        >
                            Continue Shopping
                        </Link>
                    </div>
                ) : (
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                        {/* Cart Items */}
                        <div className="lg:col-span-2 space-y-4">
                            {cartItems.map((item) => (
                                <div
                                    key={item.id}
                                    className="bg-white dark:bg-gray-800 rounded-xl shadow-sm p-4 sm:p-6"
                                >
                                    <div className="flex gap-4">
                                        <Link to={`/product/${item.id}`} className="flex-shrink-0 w-24 h-24 sm:w-32 sm:h-32 rounded-lg overflow-hidden bg-gray-100 dark:bg-gray-700 flex items-center justify-center group">
                                            <img
                                                src={item.image}
                                                alt={item.title}
                                                className="w-full h-full object-contain p-2 group-hover:scale-110 transition-transform duration-300"
                                            />
                                        </Link>

                                        <div className="flex-1 min-w-0">
                                            <div className="flex justify-between items-start mb-2">
                                                <div className="flex-1 pr-4">
                                                    <Link to={`/product/${item.id}`}>
                                                        <h3 className="text-lg font-semibold text-gray-900 dark:text-white line-clamp-2 hover:text-primary transition-colors">
                                                            {item.title}
                                                        </h3>
                                                    </Link>
                                                    <span className="text-xs text-gray-500 dark:text-gray-400 uppercase">
                                                        {item.category}
                                                    </span>
                                                </div>
                                                <button
                                                    onClick={() => removeFromCart(item.id)}
                                                    className="p-2 text-gray-400 hover:text-red-500 transition-colors"
                                                >
                                                    <Trash2 className="w-5 h-5" />
                                                </button>
                                            </div>

                                            <p className="text-2xl font-bold text-primary mb-4">
                                                ${item.price.toFixed(2)}
                                            </p>

                                            <div className="flex flex-col items-start sm:flex-row justify-between">
                                                <div className="flex items-center gap-3">
                                                    <span className="text-sm text-gray-600 dark:text-gray-400">
                                                        Quantity:
                                                    </span>
                                                    <div className="flex items-center gap-2 bg-gray-100 dark:bg-gray-700 rounded-lg p-1">
                                                        <button
                                                            onClick={() => updateCartQuantity(item.id, item.quantity - 1)}
                                                            className="p-1 hover:bg-gray-200 dark:hover:bg-gray-600 rounded transition-colors"
                                                        >
                                                            <Minus className="w-4 h-4" />
                                                        </button>
                                                        <span className="px-3 font-semibold text-gray-900 dark:text-white">
                                                            {item.quantity}
                                                        </span>
                                                        <button
                                                            onClick={() => updateCartQuantity(item.id, item.quantity + 1)}
                                                            className="p-1 hover:bg-gray-200 dark:hover:bg-gray-600 rounded transition-colors"
                                                        >
                                                            <Plus className="w-4 h-4" />
                                                        </button>
                                                    </div>
                                                </div>

                                                <div className="text-right">
                                                    <span className="text-sm text-gray-600 dark:text-gray-400">Subtotal:</span>
                                                    <p className="text-lg font-bold text-gray-900 dark:text-white">
                                                        ${(item.price * item.quantity).toFixed(2)}
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* Order Summary */}
                        <div className="lg:col-span-1">
                            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 sticky top-24">
                                <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-6">
                                    Order Summary
                                </h2>

                                {/* Promo Code */}
                                <div className="mb-6">
                                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                                        Promo Code
                                    </label>
                                    <div className="flex gap-2">
                                        <div className="relative flex-1">
                                            <Tag className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                                            <input
                                                type="text"
                                                value={promoCode}
                                                onChange={(e) => setPromoCode(e.target.value)}
                                                placeholder="SAVE10 / SAVE20"
                                                className="w-full pl-10 pr-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-primary focus:border-transparent outline-none"
                                            />
                                        </div>
                                        <button
                                            onClick={applyPromoCode}
                                            className="px-4 py-2 bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 font-medium rounded-lg hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors"
                                        >
                                            Apply
                                        </button>
                                    </div>
                                </div>

                                {/* Price Breakdown */}
                                <div className="space-y-3 mb-6 pb-6 border-b border-gray-200 dark:border-gray-700">
                                    <div className="flex justify-between text-gray-600 dark:text-gray-400">
                                        <span>Subtotal</span>
                                        <span className="font-medium">${subtotal.toFixed(2)}</span>
                                    </div>
                                    {discount > 0 && (
                                        <div className="flex justify-between text-green-600 dark:text-green-400">
                                            <span>Discount ({(discount * 100).toFixed(0)}%)</span>
                                            <span className="font-medium">-${discountAmount.toFixed(2)}</span>
                                        </div>
                                    )}
                                    <div className="flex justify-between text-gray-600 dark:text-gray-400">
                                        <span>Shipping</span>
                                        <span className="font-medium">
                                            {shipping === 0 ? (
                                                <span className="text-green-600">Free</span>
                                            ) : (
                                                `$${shipping.toFixed(2)}`
                                            )}
                                        </span>
                                    </div>
                                    {subtotal > 0 && subtotal < 100 && (
                                        <p className="text-xs text-gray-500 dark:text-gray-400">
                                            Add ${(100 - subtotal).toFixed(2)} more for free shipping!
                                        </p>
                                    )}
                                    <div className="flex justify-between text-gray-600 dark:text-gray-400">
                                        <span>Tax (8%)</span>
                                        <span className="font-medium">${tax.toFixed(2)}</span>
                                    </div>
                                </div>

                                {/* Total */}
                                <div className="flex justify-between items-center mb-6">
                                    <span className="text-lg font-bold text-gray-900 dark:text-white">
                                        Total
                                    </span>
                                    <span className="text-2xl font-bold text-primary">
                                        ${total.toFixed(2)}
                                    </span>
                                </div>

                                {/* Checkout Button */}
                                <Link
                                    to="/checkout"
                                    className="w-full flex items-center justify-center gap-2 px-6 py-3 bg-primary hover:bg-dark-primary text-white font-semibold rounded-lg shadow-md hover:shadow-lg transition-all"
                                >
                                    Proceed to Checkout
                                    <ArrowRight className="w-5 h-5" />
                                </Link>

                                <Link
                                    to="/"
                                    className="block text-center mt-4 text-sm text-gray-600 dark:text-gray-400 hover:text-primary transition-colors"
                                >
                                    Continue Shopping
                                </Link>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>

    );
}
