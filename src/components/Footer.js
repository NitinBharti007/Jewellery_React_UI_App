import {
  FaFacebook,
  FaInstagram,
  FaTwitter,
  FaPinterest,
} from "react-icons/fa";
import logo2 from "../assets/logo.png";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-[#2C3E50] text-white py-12 px-4">
      <div className="max-w-6xl mx-auto text-center">
        {/* Logo and Branding */}
        <div className="flex justify-center items-center mb-8">
          <Link to={"/"}>
            <img
              src={logo2}
              alt="Pahadi Sunar Logo"
              className="rounded-md w-16 h-auto mr-3"
            />
          </Link>
          <h2 className="text-3xl font-serif font-extrabold text-[#F39C12]">
            Pahadi Sunar
          </h2>
        </div>

        {/* Social Media Links */}
        <div className="flex justify-center gap-6 mb-8">
          <a
            href="https://facebook.com/"
            className="text-2xl hover:text-[#F39C12] transition-all duration-300"
          >
            <FaFacebook />
          </a>
          <a
            href="https://instagram.com/"
            className="text-2xl hover:text-[#F39C12] transition-all duration-300"
          >
            <FaInstagram />
          </a>
          <a
            href="https://twitter.com/"
            className="text-2xl hover:text-[#F39C12] transition-all duration-300"
          >
            <FaTwitter />
          </a>
          <a
            href="https://pinterest.com/"
            className="text-2xl hover:text-[#F39C12] transition-all duration-300"
          >
            <FaPinterest />
          </a>
        </div>

        {/* Footer Navigation Links */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 mb-8">
          <div>
            <h3 className="font-semibold text-xl mb-4">Quick Links</h3>
            <ul>
              <li>
                <Link to={"/"} className="hover:text-[#F39C12]">
                  Home
                </Link>
              </li>
              <li>
                <Link to={"/about"} className="hover:text-[#F39C12]">
                  About Us
                </Link>
              </li>
              <li>
                <Link to={"/collections"} className="hover:text-[#F39C12]">
                  Collections
                </Link>
              </li>
              <li>
                <Link to={"/contact"} className="hover:text-[#F39C12]">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-xl mb-4">Customer Service</h3>
            <ul>
              <li>
                <a href="/" className="hover:text-[#F39C12]">
                  Shipping & Returns
                </a>
              </li>
              <li>
                <a href="/" className="hover:text-[#F39C12]">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="/" className="hover:text-[#F39C12]">
                  Terms & Conditions
                </a>
              </li>
              <li>
                <a href="/" className="hover:text-[#F39C12]">
                  FAQs
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-xl mb-4">Contact Us</h3>
            <p>
              Email:{" "}
              <a
                href="mailto:info@pahadisunar.com"
                className="hover:text-[#F39C12]"
              >
                info@pahadisunar.com
              </a>
            </p>
            <p>
              Phone:{" "}
              <a href="tel:+911234567890" className="hover:text-[#F39C12]">
                +91 8865099999
              </a>
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-xl mb-4">Join Our Newsletter</h3>
            <input
              type="email"
              placeholder="Enter your email"
              className="bg-[#34495E] text-white p-3 rounded-md w-full mb-4"
            />
            <button className="bg-[#F39C12] text-white py-2 px-6 rounded-full hover:bg-[#D35400] transition-all duration-300">
              Subscribe
            </button>
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="text-center text-sm mt-8 border-t border-[#BDC3C7] pt-4">
        <p>© 2025 Pahadi Sunar. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
