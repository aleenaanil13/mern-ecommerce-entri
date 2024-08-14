// components/Footer.jsx
const Footer = () => {
    return (
      <footer className="bg-gray-800 text-white py-6">
        <div className="container mx-auto text-center">
          <p>&copy; {new Date().getFullYear()}  E-commerce. All rights reserved.</p>
          <div className="flex justify-center mt-4 space-x-4">
            <a href="#" className="hover:text-green-500">Privacy Policy</a>
            <a href="#" className="hover:text-green-500">Terms of Service</a>
            <a href="#" className="hover:text-green-500">Contact Us</a>
          </div>
        </div>
      </footer>
    );
  };
  
  export default Footer;
  