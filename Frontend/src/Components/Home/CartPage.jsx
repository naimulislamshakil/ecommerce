import React, { useState } from 'react';
import Topbar from '../Common/Topbar';
import Footer from '../Common/Footer';
import { ShoppingCart, Trash2 } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const CartPage = () => {
	const navigate = useNavigate();
	const initialCartItems = [
		{
			id: 1,
			name: 'Basic Tee',
			color: 'Sand',
			size: 'Large',
			price: 32.0,
			quantity: 1,
			imageUrl: 'https://placehold.co/100x100/E5E7EB/A1A1AA?text=Tee',
			status: 'In stock',
		},
		{
			id: 2,
			name: 'Basic Tee',
			color: 'Black',
			size: 'Large',
			price: 32.0,
			quantity: 1,
			imageUrl: 'https://placehold.co/100x100/1F2937/F3F4F6?text=Tee',
			status: 'Ships in 3-4 weeks',
		},
		{
			id: 3,
			name: 'Nomad Tumbler',
			color: 'White',
			price: 35.0,
			quantity: 1,
			imageUrl: 'https://placehold.co/100x100/FFFFFF/333333?text=Tumbler',
			status: 'In stock',
		},
	];

	const [cartItems, setCartItems] = useState(initialCartItems);

	// Hardcoded values for totals and estimates
	const subtotal = 99.0;
	const shippingEstimate = 5.0;
	const taxEstimate = 8.3;
	const discount = -10.0;
	const orderTotal = subtotal + shippingEstimate + taxEstimate + discount;

	// Handle quantity increase for an item
	const handleIncreaseQuantity = (itemId) => {
		setCartItems((prevItems) =>
			prevItems.map((item) =>
				item.id === itemId ? { ...item, quantity: item.quantity + 1 } : item
			)
		);
	};

	// Handle quantity decrease for an item
	const handleDecreaseQuantity = (itemId) => {
		setCartItems((prevItems) =>
			prevItems.map((item) =>
				item.id === itemId && item.quantity > 1
					? { ...item, quantity: item.quantity - 1 }
					: item
			)
		);
	};

	// Handle removing an item from the cart
	const handleRemoveItem = (itemId) => {
		setCartItems((prevItems) => prevItems.filter((item) => item.id !== itemId));
	};

	// Format price to a currency string
	const formatPrice = (price) => {
		return `$${price.toFixed(2)}`;
	};

	// Conditional rendering for an empty cart
	if (cartItems.length === 0) {
		return (
			<div className="min-h-screen bg-gray-100 p-4 sm:p-8 flex items-center justify-center font-sans">
				<div className="bg-white rounded-lg shadow-xl p-8 max-w-xl w-full text-center">
					<h1 className="text-3xl font-bold mb-4 text-gray-800">Your Cart</h1>
					<svg
						className="w-24 h-24 mx-auto mb-6 text-gray-400"
						fill="none"
						stroke="currentColor"
						viewBox="0 0 24 24"
						xmlns="http://www.w3.org/2000/svg"
					>
						<path
							strokeLinecap="round"
							strokeLinejoin="round"
							strokeWidth="2"
							d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.105 1.767.707 1.767H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
						></path>
					</svg>
					<p className="text-gray-600 text-lg">Your shopping cart is empty.</p>
					<button className="mt-6 bg-indigo-600 text-white font-semibold py-3 px-6 rounded-md shadow-lg hover:bg-indigo-700 transition-colors">
						Continue Shopping
					</button>
				</div>
			</div>
		);
	}

	return (
		<div>
			<Topbar />
			<div className="min-h-screen bg-white p-4 sm:p-8 font-sans">
				<div className="container mx-auto">
					<h1 className="text-3xl font-bold mb-6 text-gray-800">
						Shopping Cart
					</h1>

					<div className="lg:flex lg:space-x-8">
						{/* Cart Items List */}
						<div className="lg:w-2/3">
							<div className="divide-y divide-gray-200 rounded-lg shadow-sm border border-gray-200">
								{cartItems.map((item) => (
									<div
										key={item.id}
										className="p-4 flex items-start justify-between"
									>
										{/* Product Details */}
										<div className="flex items-center space-x-4">
											<img
												src={item.imageUrl}
												alt={item.name}
												className="w-24 h-24 rounded-lg object-cover"
											/>
											<div>
												<h2 className="text-lg font-medium text-gray-900">
													{item.name}
												</h2>
												<p className="text-gray-600 text-sm">
													{item.color}, {item.size}
												</p>
												<p className="text-gray-600 text-sm font-semibold">
													{formatPrice(item.price)}
												</p>
												<div className="mt-2 flex items-center text-sm text-green-600">
													<svg
														className="w-4 h-4 mr-1"
														fill="currentColor"
														viewBox="0 0 20 20"
														xmlns="http://www.w3.org/2000/svg"
													>
														<path
															fillRule="evenodd"
															d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
															clipRule="evenodd"
														></path>
													</svg>
													<span>{item.status}</span>
												</div>
											</div>
										</div>

										{/* Quantity and Remove */}
										<div className="flex items-start space-x-4">
											{/* Quantity Control Buttons */}
											<div className="flex items-center border border-gray-300 rounded-md">
												<button
													onClick={() => handleDecreaseQuantity(item.id)}
													className="p-2 text-gray-600 hover:bg-gray-200 rounded-l-md transition-colors"
												>
													<svg
														className="w-4 h-4"
														fill="none"
														stroke="currentColor"
														viewBox="0 0 24 24"
														xmlns="http://www.w3.org/2000/svg"
													>
														<path
															strokeLinecap="round"
															strokeLinejoin="round"
															strokeWidth="2"
															d="M20 12H4"
														></path>
													</svg>
												</button>
												<span className="w-10 text-center border-l border-r border-gray-300 text-gray-800">
													{item.quantity}
												</span>
												<button
													onClick={() => handleIncreaseQuantity(item.id)}
													className="p-2 text-gray-600 hover:bg-gray-200 rounded-r-md transition-colors"
												>
													<svg
														className="w-4 h-4"
														fill="none"
														stroke="currentColor"
														viewBox="0 0 24 24"
														xmlns="http://www.w3.org/2000/svg"
													>
														<path
															strokeLinecap="round"
															strokeLinejoin="round"
															strokeWidth="2"
															d="M12 6v6m0 0v6m0-6h6m-6 0H6"
														></path>
													</svg>
												</button>
											</div>

											<button
												onClick={() => handleRemoveItem(item.id)}
												className="text-gray-400 hover:text-gray-600 transition-colors"
												aria-label="Remove item"
											>
												<svg
													className="w-6 h-6"
													fill="none"
													stroke="currentColor"
													viewBox="0 0 24 24"
													xmlns="http://www.w3.org/2000/svg"
												>
													<path
														strokeLinecap="round"
														strokeLinejoin="round"
														strokeWidth="2"
														d="M6 18L18 6M6 6l12 12"
													></path>
												</svg>
											</button>
										</div>
									</div>
								))}
							</div>
						</div>

						{/* Order Summary */}
						<div className="lg:w-1/3 mt-6 lg:mt-0">
							<div className="bg-gray-50 rounded-lg p-6">
								<h2 className="text-2xl font-bold mb-4 text-gray-800">
									Order summary
								</h2>

								<div className="space-y-3 text-gray-600">
									<div className="flex justify-between items-center">
										<span className="text-lg">Subtotal</span>
										<span className="text-lg font-medium text-gray-900">
											{formatPrice(subtotal)}
										</span>
									</div>
									<div className="flex justify-between items-center">
										<span className="text-lg">Shipping estimate</span>
										<span className="text-lg font-medium text-gray-900">
											{formatPrice(shippingEstimate)}
										</span>
									</div>
									<div className="flex justify-between items-center">
										<span className="text-lg">Tax estimate</span>
										<span className="text-lg font-medium text-gray-900">
											{formatPrice(taxEstimate)}
										</span>
									</div>
									{/* Discount row */}
									<div className="flex justify-between items-center">
										<span className="text-lg">Discount</span>
										<span className="text-lg font-medium text-red-500">
											{formatPrice(discount)}
										</span>
									</div>
									<div className="border-t border-gray-300 pt-4 mt-4 flex justify-between items-center text-xl font-bold text-gray-900">
										<span>Order total</span>
										<span>{formatPrice(orderTotal)}</span>
									</div>
								</div>

								<button
									onClick={() => navigate('/ckeckout')}
									className="w-full mt-6 bg-indigo-600 text-white font-semibold py-3 rounded-md shadow-lg hover:bg-indigo-700 transition-colors"
								>
									Checkout
								</button>
							</div>
						</div>
					</div>
				</div>
			</div>
			<Footer />
		</div>
	);
};

export default CartPage;
