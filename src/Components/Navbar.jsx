import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <div>
        <nav className="bg-white shadow-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex-shrink-0">
              <h1 className="text-2xl font-bold text-orange-600">🍽️ Delicious Bites</h1>
            </div>

            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                <Link to="/" className="text-orange-600 font-semibold px-3 py-2 rounded-md">Home</Link>
                <Link to="/about" className="text-gray-700 hover:text-orange-600 px-3 py-2 rounded-md">About</Link>
                <Link to="/menu" className="text-gray-700 hover:text-orange-600 px-3 py-2 rounded-md">Menu</Link>
                <Link to="/contact" className="text-gray-700 hover:text-orange-600 px-3 py-2 rounded-md">Contact</Link>
              </div>
            </div>

            <div className="md:hidden">
              <button className="text-gray-700 hover:text-orange-600">
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </nav>

      
    </div>
  )
}

export default Navbar