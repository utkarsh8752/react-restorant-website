// import React from 'react'

// function Home() {
//   return (
//     <div>

//     </div>
//   )
// }

export default function Home() {
    return (
        <>
            <section className="bg-gradient-to-r from-orange-500 to-red-500 text-white py-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h2 className="text-5xl font-bold mb-4">Welcome to Delicious Bites</h2>
                    <p className="text-xl mb-8">Experience the finest flavors in town</p>
                    <a
                        href="menu.html"
                        className="bg-white text-orange-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition"
                    >
                        View Our Menu
                    </a>
                </div>
            </section>

            {/* Features Section */}
            <section className="py-16">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-3xl font-bold text-center mb-12">
                        Why Choose Us?
                    </h2>

                    <div className="grid md:grid-cols-3 gap-8">
                        <div className="text-center p-6 bg-white rounded-lg shadow-md">
                            <div className="text-4xl mb-4">🍕</div>
                            <h3 className="text-xl font-semibold mb-2">Fresh Ingredients</h3>
                            <p className="text-gray-600">
                                We use only the freshest, locally sourced ingredients in all our
                                dishes.
                            </p>
                        </div>

                        <div className="text-center p-6 bg-white rounded-lg shadow-md">
                            <div className="text-4xl mb-4">👨‍🍳</div>
                            <h3 className="text-xl font-semibold mb-2">Expert Chefs</h3>
                            <p className="text-gray-600">
                                Our experienced chefs create culinary masterpieces every day.
                            </p>
                        </div>

                        <div className="text-center p-6 bg-white rounded-lg shadow-md">
                            <div className="text-4xl mb-4">⭐</div>
                            <h3 className="text-xl font-semibold mb-2">5-Star Service</h3>
                            <p className="text-gray-600">
                                We pride ourselves on providing exceptional service to every
                                guest.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
