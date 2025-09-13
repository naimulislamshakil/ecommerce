import React, { useState } from 'react';
import {
	Search,
	Heart,
	ShoppingCart,
	CircleUserRound,
	LogIn,
} from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';

const Topbar = () => {
	const navigate = useNavigate();
	const [isOpen, setIsOpen] = useState(false);

	const toggleDropdown = () => {
		setIsOpen(!isOpen);
	};

	const navLinks = [
		{
			name: 'Home',
			path: '/',
		},
		{
			name: 'Shop All',
			path: '/shop-all',
		},
		{
			name: 'Offer Shop',
			path: '/offer-shop',
		},
		{
			name: 'Clothing & Fashion',
			path: '/clothing-fashion',
		},
		{
			name: 'Accessories',
			path: '/accessories',
		},
		{
			name: 'About Us',
			path: '/about-us',
		},
		{
			name: 'Contact Us',
			path: '/contact-us',
		},
	];
	return (
		<div>
			{/* Warning Message */}
			<div className="bg-red-600 py-2">
				<h5 className="text-sm text-white text-center">
					<span className="font-bold">⚠️ COVID-19 Update:</span> Deliveries may
					be delayed due to
					<span className="font-bold"> safety measures</span>.
				</h5>
			</div>

			{/* Secendary Menu */}
			<div>
				<div className="container mx-auto py-4">
					<div className="grid grid-cols-5 gap-4">
						<div>
							<h3 className="text-4xl font-bold">
								Tren<span className="text-[#F87171]">dora</span>
							</h3>
						</div>
						<div className="col-span-3 flex justify-center">
							<div className="flex items-center border border-green-300 rounded-md px-3 py-2 bg-white w-full max-w-lg">
								<input
									type="text"
									placeholder="Search for items..."
									className="flex-1 outline-none text-sm text-gray-700 placeholder-gray-400"
								/>
								<Search className="w-5 h-5 text-green-500" />
							</div>
						</div>
						<div className="flex justify-end items-center gap-10">
							<div className="relative inline-block">
								<Heart className="w-6 h-6 text-gray-700" />
								<span className="absolute -top-2 -right-2 bg-[#F87171] text-white text-xs font-bold px-1.5 py-0.5 rounded-full">
									3
								</span>
							</div>

							<div
								className="relative inline-block"
								onClick={() => navigate('/cart')}
							>
								<ShoppingCart className="w-6 h-6 text-gray-700" />
								<span className="absolute -top-2 -right-2 bg-[#F87171] text-white text-xs font-bold px-1.5 py-0.5 rounded-full">
									3
								</span>
							</div>

							<div className="relative inline-block text-left">
								<div>
									<CircleUserRound
										className="w-6 h-6 text-gray-700"
										onClick={toggleDropdown}
									/>
								</div>

								{/* Dropdown menu */}
								{isOpen && (
									<div
										className="origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white z-50"
										role="menu"
									>
										<div className="py-1" role="none">
											<Link
												to="/"
												className="flex justify-start gap-3 items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
												role="menuitem"
											>
												<CircleUserRound />
												My Account
											</Link>

											<hr className="border-t border-gray-300"></hr>
											<Link
												to="/"
												className="flex justify-start gap-3 items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
												role="menuitem"
											>
												<Heart />
												My Wishlist
											</Link>
											<hr className="border-t border-gray-300"></hr>
											<Link
												to="/login"
												className="flex justify-start gap-3 items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
												role="menuitem"
											>
												<LogIn />
												Login
											</Link>
										</div>
									</div>
								)}
							</div>
						</div>
					</div>
				</div>
				<hr className="border-t border-gray-300"></hr>
			</div>

			{/* Main Menu */}
			<div>
				<div className="container mx-auto py-3">
					<ul className="hidden md:flex space-x-8 text-gray-500 font-medium text-md">
						{navLinks.map((nav) => (
							<li
								key={nav.name}
								className="hover:text-[#F87171] cursor-pointer"
							>
								<Link
									to={nav.path}
									className="hover:text-[#F87171] transition-colors"
								>
									{nav.name}
								</Link>
							</li>
						))}
					</ul>
				</div>
				<hr className="border-t border-gray-300"></hr>
			</div>
		</div>
	);
};

export default Topbar;
