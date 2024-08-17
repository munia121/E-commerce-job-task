import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa';

const Footer = () => {
    return (
        <footer className="bg-gray-800 text-white py-6">
            <div className="container mx-auto flex flex-col md:flex-row justify-between items-center px-4">
                <div className="mb-4 md:mb-0">
                    <h3 className="text-lg font-bold mb-2">ShopePlace</h3>
                    <p>123 Street Name, City, State, 12345</p>
                    <p>Email: <a href="mailto:info@company.com" className="underline">info@company.com</a></p>
                    <p>Phone: (123) 456-7890</p>
                </div>
                <div className="mb-4 md:mb-0">
                    <h4 className="text-md font-semibold mb-2">Quick Links</h4>
                    <ul>
                        <li><a href="/" className="hover:underline">Home</a></li>
                        <li><a href="" className="hover:underline">Products</a></li>
                        <li><a href="" className="hover:underline">About Us</a></li>
                        <li><a href="" className="hover:underline">Contact</a></li>
                    </ul>
                </div>
                <div className="mb-4 md:mb-0">
                    <h4 className="text-md font-semibold mb-2">Follow Us</h4>
                    <div className="flex space-x-4">
                        <a target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-700">
                            <FaFacebookF size={20} />
                        </a>
                        <a  target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-500">
                            <FaTwitter size={20} />
                        </a>
                        <a  target="_blank" rel="noopener noreferrer" className="text-pink-500 hover:text-pink-600">
                            <FaInstagram size={20} />
                        </a>
                        <a  target="_blank" rel="noopener noreferrer" className="text-blue-700 hover:text-blue-800">
                            <FaLinkedinIn size={20} />
                        </a>
                    </div>
                </div>
            </div>
            <div className="text-center py-4 border-t border-gray-700">
                <p className="text-sm">&copy; {new Date().getFullYear()} Company Name. All rights reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;
