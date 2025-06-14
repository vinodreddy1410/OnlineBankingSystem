export default function Footer() {
  return (
    <footer className="bg-[#0a1f44] text-white mt-20">
      <div className="max-w-7xl mx-auto px-6 py-10 grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Logo and Description */}
        <div>
          <h2 className="text-xl font-bold mb-3">BANKIO</h2>
          <p className="text-sm text-gray-300">
            Simple and secure banking experience trusted by millions. Fast payments, investments, and rewards.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Quick Links</h3>
          <ul className="space-y-2 text-sm text-gray-300">
            <li><a href="#">Home</a></li>
            <li><a href="#">Features</a></li>
            <li><a href="#">Pricing</a></li>
            <li><a href="#">Support</a></li>
          </ul>
        </div>

        {/* Resources */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Resources</h3>
          <ul className="space-y-2 text-sm text-gray-300">
            <li><a href="#">Blog</a></li>
            <li><a href="#">FAQs</a></li>
            <li><a href="#">Privacy Policy</a></li>
            <li><a href="#">Terms</a></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Contact Us</h3>
          <p className="text-sm text-gray-300">Email: support@bankio.com</p>
          <p className="text-sm text-gray-300">Phone: +91 98765 43210</p>
          {/* <div className="flex space-x-4 mt-4">
            <a href="#"><img src="/icons/facebook.svg" alt="Facebook" className="w-5 h-5" /></a>
            <a href="#"><img src="/icons/twitter.svg" alt="Twitter" className="w-5 h-5" /></a>
            <a href="#"><img src="/icons/linkedin.svg" alt="LinkedIn" className="w-5 h-5" /></a>
          </div> */}
        </div>
      </div>

      {/* Bottom line */}
      <div className="border-t border-gray-700 text-center py-4 text-sm text-gray-400">
        © {new Date().getFullYear()} BANKIO. All rights reserved.
      </div>
    </footer>
  );
}
