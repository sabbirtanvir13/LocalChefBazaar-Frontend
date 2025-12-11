import React from 'react';

const Footer = () => {
    return (
         <footer className="bg-black border text-white pt-24 pb-6 ">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-10">

        {/* Left: Useful Links */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Useful Links</h3>
          <ul className="space-y-2 text-white/80">
            <li><a href="#" className="hover:text-white">Home</a></li>
            <li><a href="#" className="hover:text-white">Services</a></li>
            <li><a href="#" className="hover:text-white">Menu</a></li>
            <li><a href="#" className="hover:text-white">Blog</a></li>
            <li><a href="#" className="hover:text-white">Contact Us</a></li>
            <li><a href="#" className="hover:text-white">FAQ</a></li>
          </ul>
        </div>

        {/* Middle: Contact Details */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Contact Details</h3>
          <p className="text-white/80">📍 Dhaka, Bangladesh</p>
          <p className="text-white/80">📞 +880 1234-567890</p>
          <p className="text-white/80">✉️ info@example.com</p>

          <h3 className="text-xl font-semibold mt-6 mb-2">Working Hours</h3>
          <p className="text-white/80">Mon–Fri: 9:00 AM – 10:00 PM</p>
          <p className="text-white/80">Sat–Sun: 10:00 AM – 8:00 PM</p>
        </div>

        {/* Right: Subscribe + Social */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Subscribe</h3>
          <input
            type="text"
            placeholder="Enter Zip Code"
            className="w-full px-4 py-3 rounded-full text-white border outline-none mb-3"
          />
          <button className="w-full bg-orange-500 hover:bg-orange-600 py-3 rounded-full font-semibold">
            Submit
          </button>

          <div className="flex gap-4 mt-6 text-xl">
            <a href="#" className="hover:scale-110 transition">🌐</a>
            <a href="#" className="hover:scale-110 transition">📘</a>
            <a href="#" className="hover:scale-110 transition">📸</a>
            <a href="#" className="hover:scale-110 transition">🐦</a>
          </div>
        </div>

      </div>

      {/* Bottom */}
      <div className="border-t border-white/20 mt-10 pt-4">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-3 text-sm text-white/70">
          <p>© 2025 Foodi Company. All rights reserved</p>
          <div className="flex gap-4">
            <a href="#" className="hover:text-white">Privacy & Policy</a>
            <a href="#" className="hover:text-white">Terms & Conditions</a>
          </div>
        </div>
      </div>
    </footer>
    );
};

export default Footer;