import Image from "next/image";
import { FaInstagram, FaFacebook, FaEnvelope, FaLinkedin, FaPhone } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="w-full bg-gray-100 py-6 font-poppins">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          
          
          <div className="flex items-center space-x-3">
            <Image
              src="/logo.jpeg" 
              alt="Logo"
              width={60}
              height={60}
            />
            <span className="text-lg font-bold">MY LIBRARY</span>
          </div>

          <div className="flex flex-col items-center space-y-2">
            <span className="font-medium">Fale conosco</span>
            <div className="flex space-x-4 text-xl">
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                <FaInstagram className="hover:text-pink-500 cursor-pointer" />
              </a>
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                <FaFacebook className="hover:text-blue-600 cursor-pointer" />
              </a>
              <a href="mailto:contato@mylibrary.com">
                <FaEnvelope className="hover:text-gray-600 cursor-pointer" />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                <FaLinkedin className="hover:text-blue-700 cursor-pointer" />
              </a>
              <a href="tel:+5511999999999">
                <FaPhone className="hover:text-green-600 cursor-pointer" />
              </a>
            </div>
          </div>

        </div>
      </div>
    </footer>
  );
}
