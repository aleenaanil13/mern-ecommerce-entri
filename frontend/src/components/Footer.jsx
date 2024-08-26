import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom

const Footer = () => {
  return (
    <footer className="bg-gray-600 dark:bg-gray-800 text-gray-800 dark:text-gray-500 py-10">
      <div className="container mx-auto px-4 md:px-8 lg:px-16">
        {/* Top Section: Links and Social Icons */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Column 1: About Us */}
          <div>
            <h3 className="text-white text-xl font-semibold mb-4">About Us</h3>
            <p className="text-gray-400">
              Welcome to our e-commerce platform where we offer the best products and services to meet all your needs.
            </p>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h3 className="text-white text-xl font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/" className="hover:text-green-400">Home</Link></li>
              <li><Link to="/AboutUs" className="hover:text-green-400">About Us</Link></li> {/* Updated Link */}
            </ul>
          </div>

          {/* Column 3: Customer Service */}
          <div>
            <h3 className="text-white text-xl font-semibold mb-4">Privacy</h3>
            <ul className="space-y-2">
              <li><Link to="/PrivacyPolicy" className="hover:text-green-400">Privacy Policy</Link></li>
              <li><Link to="/TermsandConditions" className="hover:text-green-400">Terms and Conditions</Link></li>
            </ul>
          </div>

          {/* Column 4: Follow Us */}
          <div>
            <h3 className="text-white text-xl font-semibold mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-green-400"><FaFacebook size={24} /></a>
              <a href="#" className="hover:text-green-400"><FaTwitter size={24} /></a>
              <a href="#" className="hover:text-green-400"><FaInstagram size={24} /></a>
              <a href="#" className="hover:text-green-400"><FaLinkedin size={24} /></a>
            </div>
          </div>
        </div>

        {/* Bottom Section: Copyright */}
        <div className="border-t border-gray-700 pt-6 flex flex-col md:flex-row justify-between items-center text-sm">
          <p>&copy; {new Date().getFullYear()} E-commerce. All rights reserved.</p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <Link to="/PrivacyPolicy" className="hover:text-green-400">Privacy Policy</Link>
            <Link to="/TermsandConditions" className="hover:text-green-400">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
