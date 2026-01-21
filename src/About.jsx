export default function About() {
  return (
    <section className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">About Delicious Bites</h2>
          <p className="text-xl text-gray-600">Our Story</p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <h3 className="text-2xl font-semibold mb-4 text-orange-600">Our Journey</h3>
            <p className="text-gray-700 mb-4">
              Delicious Bites was founded in 2010 with a simple mission: to bring authentic,
              flavorful cuisine to our community. What started as a small family restaurant
              has grown into a beloved local establishment known for its warm atmosphere and
              exceptional food.
            </p>
            <p className="text-gray-700 mb-4">
              Our chefs bring years of experience and passion to every dish, combining
              traditional recipes with modern culinary techniques. We believe that great
              food brings people together, and we're honored to be part of your special moments.
            </p>
            <p className="text-gray-700">
              Every ingredient is carefully selected, and every dish is prepared with love
              and attention to detail. We source locally whenever possible to support our
              community and ensure the freshest flavors.
            </p>
          </div>
          <div className="bg-orange-100 rounded-lg p-8 text-center">
            <div className="text-6xl mb-4">👨‍🍳</div>
            <h4 className="text-xl font-semibold mb-2">Chef's Special</h4>
            <p className="text-gray-700">Experience dishes crafted by our award-winning culinary team</p>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-lg p-8 mb-12">
          <h3 className="text-2xl font-semibold mb-6 text-center text-gray-800">Our Values</h3>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="text-3xl mb-3">🌱</div>
              <h4 className="font-semibold mb-2">Sustainability</h4>
              <p className="text-gray-600 text-sm">We're committed to sustainable practices and supporting local farmers.</p>
            </div>
            <div className="text-center">
              <div className="text-3xl mb-3">❤️</div>
              <h4 className="font-semibold mb-2">Passion</h4>
              <p className="text-gray-600 text-sm">Cooking is our passion, and it shows in every bite.</p>
            </div>
            <div className="text-center">
              <div className="text-3xl mb-3">🤝</div>
              <h4 className="font-semibold mb-2">Community</h4>
              <p className="text-gray-600 text-sm">We're proud to be part of this wonderful community.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}