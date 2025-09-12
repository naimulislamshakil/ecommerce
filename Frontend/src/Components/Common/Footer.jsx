import React from 'react';
import { Facebook, Instagram, Twitter, Youtube, Mail } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
	return (
		<footer className="bg-gray-900 text-gray-300">
			<div className="container mx-auto  py-12 grid grid-cols-1 md:grid-cols-4 gap-8">
				{/* Brand */}
				<div>
					<h2 className="text-2xl font-bold text-white mb-4">
						Tren<span className="text-[#F87171]">dora</span>
					</h2>
					<p className="text-sm">
						Your one-stop shop for all tech gadgets. Discover the latest deals
						and premium products just for you.
					</p>
				</div>

				{/* Navigation */}
				<div>
					<h3 className="text-lg font-semibold text-white mb-4">Quick Links</h3>
					<ul className="space-y-2">
						<li>
							<Link to="/" className="hover:text-white">
								Home
							</Link>
						</li>
						<li>
							<Link to="/" className="hover:text-white">
								Shop
							</Link>
						</li>
						<li>
							<Link to="/" className="hover:text-white">
								About Us
							</Link>
						</li>
						<li>
							<Link to="/" className="hover:text-white">
								Contact
							</Link>
						</li>
						<li>
							<Link to="/" className="hover:text-white">
								FAQs
							</Link>
						</li>
					</ul>
				</div>

				{/* Contact */}
				<div>
					<h3 className="text-lg font-semibold text-white mb-4">Contact Us</h3>
					<p>Email: support@shopease.com</p>
					<p>Phone: +123 456 7890</p>
					<p>Address: 123 Tech Street, NY</p>
					<div className="flex space-x-4 mt-4">
						<Link to="/" className="hover:text-white">
							<Facebook size={20} />
						</Link>
						<Link to="/" className="hover:text-white">
							<Instagram size={20} />
						</Link>
						<Link to="/" className="hover:text-white">
							<Twitter size={20} />
						</Link>
						<Link to="/" className="hover:text-white">
							<Youtube size={20} />
						</Link>
					</div>
				</div>

				{/* Newsletter */}
				<div>
					<h3 className="text-lg font-semibold text-white mb-4">Newsletter</h3>
					<p className="text-sm mb-4">Subscribe for the latest deals.</p>
					<div className="flex">
						<input
							type="email"
							placeholder="Enter your email"
							className="w-full px-4 py-2 rounded-l-lg text-white border-t-2 border-l-2 border-b-2 focus:outline-none"
						/>
						<button className="bg-blue-600 px-4 py-2 rounded-r-lg hover:bg-blue-700">
							<Mail size={18} />
						</button>
					</div>
				</div>
			</div>

			{/* App Download & Payment Section */}
			<div className="container mx-auto pb-8 grid grid-cols-1 md:grid-cols-2 gap-6 border-t border-gray-700 pt-8">
				{/* App Download */}
				<div>
					<h3 className="text-lg font-semibold text-white mb-4">Get Our App</h3>
					<div className="flex space-x-4">
						<Link to="/">
							<img
								src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg"
								alt="Google Play"
								className="h-12"
							/>
						</Link>
						<Link to="/">
							<img
								src="https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg"
								alt="App Store"
								className="h-12"
							/>
						</Link>
					</div>
				</div>

				{/* Payment Methods */}
				<div>
					<h3 className="text-lg font-semibold text-white mb-4">We Accept</h3>
					<div className="flex space-x-4">
						<img
							src="https://upload.wikimedia.org/wikipedia/commons/0/04/Visa.svg"
							alt="Visa"
							className="h-8 bg-white rounded p-1"
						/>
						<img
							src="https://upload.wikimedia.org/wikipedia/commons/0/0c/MasterCard_logo.png"
							alt="MasterCard"
							className="h-8 bg-white rounded p-1"
						/>
						<img
							src="https://upload.wikimedia.org/wikipedia/commons/b/b5/PayPal.svg"
							alt="PayPal"
							className="h-8 bg-white rounded p-1"
						/>
					</div>
				</div>
			</div>

			<div className="border-t border-gray-700 py-4 text-center text-sm">
				© {new Date().getFullYear()} Trendora. All Rights Reserved.
			</div>
		</footer>
	);
};

export default Footer;
