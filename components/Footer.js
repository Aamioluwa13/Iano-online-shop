'use client'

export default function Footer() {
  const currentYear = new Date().getFullYear()
  
  return (
    <footer className="bg-black text-white mt-16">
      <div className="max-w-3xl mx-auto px-4 py-8">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 mb-8">
          {/* About */}
          <div>
            <h4 className="font-bold mb-2">About</h4>
            <p className="text-sm text-gray-300">Quality products, exceptional service.</p>
          </div>
          
          {/* Quick Links */}
          <div>
            <h4 className="font-bold mb-2">Quick Links</h4>
            <ul className="text-sm text-gray-300 space-y-1">
              <li><a href="#" className="hover:text-white transition">Shop</a></li>
              <li><a href="#" className="hover:text-white transition">About Us</a></li>
              <li><a href="#" className="hover:text-white transition">Contact</a></li>
            </ul>
          </div>
          
          {/* Contact */}
          <div>
            <h4 className="font-bold mb-2">Contact</h4>
            <p className="text-sm text-gray-300">Email: info@iano.com</p>
            <p className="text-sm text-gray-300">Phone: +1 (555) 123-4567</p>
          </div>
        </div>
        
        <div className="border-t border-gray-700 pt-4">
          <p className="text-sm text-gray-400 text-center">
            &copy; {currentYear} Iano. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
