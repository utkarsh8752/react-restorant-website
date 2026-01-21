export default function Menu() {
  return (
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Our Menu</h2>
            <p className="text-xl text-gray-600">Delicious dishes for every taste</p>
          </div>

          {/* Appetizers */}
          <Category title="🍤 Appetizers" items={[
            { name: "Bruschetta", price: "$8", desc: "Fresh tomatoes, basil, and mozzarella on toasted bread" },
            { name: "Caesar Salad", price: "$10", desc: "Crisp romaine lettuce with Caesar dressing and croutons" },
            { name: "Chicken Wings", price: "$12", desc: "Spicy buffalo wings served with blue cheese dip" },
            { name: "Spring Rolls", price: "$9", desc: "Fresh vegetables wrapped in crispy pastry" }
          ]} />

          {/* Main Courses */}
          <Category title="🍝 Main Courses" items={[
            { name: "Grilled Salmon", price: "$24", desc: "Fresh salmon with lemon butter sauce and seasonal vegetables" },
            { name: "Beef Steak", price: "$28", desc: "Tender ribeye steak cooked to perfection with mashed potatoes" },
            { name: "Pasta Carbonara", price: "$18", desc: "Creamy pasta with bacon, eggs, and parmesan cheese" },
            { name: "Chicken Parmesan", price: "$20", desc: "Breaded chicken with marinara sauce and melted mozzarella" }
          ]} />

          {/* Desserts */}
          <Category title="🍰 Desserts" items={[
            { name: "Chocolate Cake", price: "$8", desc: "Rich chocolate cake with vanilla ice cream" },
            { name: "Tiramisu", price: "$9", desc: "Classic Italian dessert with coffee and mascarpone" },
            { name: "Cheesecake", price: "$8", desc: "Creamy New York style cheesecake with berry sauce" },
            { name: "Ice Cream Sundae", price: "$7", desc: "Three scoops of ice cream with hot fudge and whipped cream" }
          ]} />

          {/* Beverages */}
          <Category title="🥤 Beverages" items={[
            { name: "Fresh Lemonade", price: "$4", desc: "Freshly squeezed lemonade" },
            { name: "Coffee", price: "$3", desc: "Freshly brewed coffee" },
            { name: "Soft Drinks", price: "$3", desc: "Assorted soft drinks" },
            { name: "Fresh Juice", price: "$5", desc: "Freshly squeezed fruit juice" }
          ]} />
        </div>
      </section>
  );
}

function Category({ title, items }) {
  return (
    <div className="mb-12">
      <h3 className="text-3xl font-semibold text-orange-600 mb-6">{title}</h3>
      <div className="grid md:grid-cols-2 gap-6">
        {items.map((item, idx) => (
          <div key={idx} className="bg-white rounded-lg shadow-md p-6">
            <div className="flex justify-between items-start mb-2">
              <h4 className="text-xl font-semibold">{item.name}</h4>
              <span className="text-orange-600 font-bold">{item.price}</span>
            </div>
            <p className="text-gray-600">{item.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
}


