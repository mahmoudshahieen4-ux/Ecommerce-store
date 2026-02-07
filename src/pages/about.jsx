import { Users, Shield, Globe, Award } from "lucide-react";

export default function About() {
    return (
        <div className="min-h-screen bg-white dark:bg-gray-900">
            {/* Hero Section */}
            <div className="bg-primary py-20 text-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Mission to Redefine Shopping</h1>
                    <p className="text-xl max-w-2xl mx-auto opacity-90">
                        We're dedicated to bringing you the best products with an exceptional shopping experience.
                    </p>
                </div>
            </div>

            {/* Main Content */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-20">
                    <div>
                        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">Our Story</h2>
                        <p className="text-gray-600 dark:text-gray-300 mb-4 text-lg">
                            Started in 2024, Mahmoud Shahieen Store has grown from a small local business to a premier online destination. Our journey has always been guided by a single principle: putting our customers first.
                        </p>
                        <p className="text-gray-600 dark:text-gray-300 text-lg">
                            Today, we serve thousands of customers worldwide, offering a curated selection of electronics, fashion, and jewelry that meet our high standards for quality and value.
                        </p>
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                        <div className="bg-gray-100 dark:bg-gray-800 p-8 rounded-2xl text-center">
                            <span className="block text-3xl font-bold text-primary mb-2">10k+</span>
                            <span className="text-gray-600 dark:text-gray-400">Happy Customers</span>
                        </div>
                        <div className="bg-gray-100 dark:bg-gray-800 p-8 rounded-2xl text-center">
                            <span className="block text-3xl font-bold text-primary mb-2">2k+</span>
                            <span className="text-gray-600 dark:text-gray-400">Premium Products</span>
                        </div>
                        <div className="bg-gray-100 dark:bg-gray-800 p-8 rounded-2xl text-center">
                            <span className="block text-3xl font-bold text-primary mb-2">24/7</span>
                            <span className="text-gray-600 dark:text-gray-400">Expert Support</span>
                        </div>
                        <div className="bg-gray-100 dark:bg-gray-800 p-8 rounded-2xl text-center">
                            <span className="block text-3xl font-bold text-primary mb-2">50+</span>
                            <span className="text-gray-600 dark:text-gray-400">Partner Brands</span>
                        </div>
                    </div>
                </div>

                {/* Values */}
                <div className="text-center mb-16">
                    <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-12">Our Core Values</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                        {[
                            { icon: Shield, title: "Quality First", desc: "Rigorous quality checks for every product we list." },
                            { icon: Users, title: "Customer Obsessed", desc: "Your satisfaction is our top priority, always." },
                            { icon: Award, title: "Authenticity", desc: "100% genuine products directly from manufacturers." },
                            { icon: Globe, title: "Sustainability", desc: "Committed to eco-friendly packaging and practices." },
                        ].map((value) => (
                            <div key={value.title} className="p-6 border border-gray-200 dark:border-gray-800 rounded-2xl hover:shadow-xl transition-all">
                                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                                    <value.icon className="text-primary w-6 h-6" />
                                </div>
                                <h3 className="font-bold text-xl text-gray-900 dark:text-white mb-2">{value.title}</h3>
                                <p className="text-gray-600 dark:text-gray-400">{value.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}