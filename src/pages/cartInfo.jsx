import { ShoppingCart } from "lucide-react";
import { useAppContext } from "../context/AppContext";

export default function(){
    const { getCartCount } = useAppContext();
    return(
        <div className="min-h-screen bg-gray-50 dark:bg-gray-900 pt-28 pb-12">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="mb-8">
                    <div className="flex items-center gap-3 mb-2">
                        <ShoppingCart className="w-8 h-8 text-primary" />
                        <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
                            Shopping Cart
                        </h1>
                    </div>
                    <p className="text-gray-600 dark:text-gray-400">
                        {getCartCount()} {getCartCount() === 1 ? 'item' : 'items'} in your cart
                    </p>
                </div>
            </div>
            
        </div>
    )
}