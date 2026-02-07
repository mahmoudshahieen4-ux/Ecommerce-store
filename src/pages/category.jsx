import { useParams } from "react-router-dom";
import Products from "../components/products";

export default function Category() {
    const { category } = useParams();

    return (
        <div className="category min-h-screen bg-gray-50 dark:bg-gray-900 pb-12">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <Products label={category.charAt(0).toUpperCase() + category.slice(1)} category={category} />
            </div>
        </div>
    );
}