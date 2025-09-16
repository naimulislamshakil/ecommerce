import React from 'react';
import Topbar from '../Common/Topbar';
import Footer from '../Common/Footer';
import { CheckCircle, ShoppingCart } from 'lucide-react';

const Thankyou = () => {
	const order = {
		id: '12345',
		total: 99.99,
		items: [{ name: 'T-shirt', qty: 2, price: 49.99 }],
	};
	return (
		<div>
			<Topbar />
			<div className="min-h-screen flex items-center justify-center bg-gray-50 px-4 py-10">
				<div className="bg-white shadow-xl rounded-md p-10 max-w-lg w-full text-center animate-fadeIn">
					<CheckCircle className="mx-auto text-green-500 w-20 h-20 mb-6" />
					<h1 className="text-4xl font-bold text-gray-800 mb-2">
						Payment Successful!
					</h1>
					<p className="text-gray-600 mb-6">
						Thank you for your purchase. Your order has been confirmed.
					</p>

					{/* Order Summary */}
					{order && (
						<div className="bg-gray-50 p-4 rounded-lg mb-6 text-left">
							<h2 className="text-lg font-semibold text-gray-700 mb-2">
								Order Summary
							</h2>
							<p className="text-gray-600 mb-2">
								Order ID: <span className="font-medium">{order.id}</span>
							</p>
							<ul className="mb-2">
								{order.items.map((item, index) => (
									<li
										key={index}
										className="flex justify-between text-gray-700"
									>
										<span>
											{item.name} x {item.qty}
										</span>
										<span>${item.price.toFixed(2)}</span>
									</li>
								))}
							</ul>
							<p className="font-semibold text-gray-800 text-right">
								Total: ${order.total.toFixed(2)}
							</p>
						</div>
					)}

					{/* Action Buttons */}
					<div className="flex flex-col sm:flex-row gap-4 justify-center">
						<button
							onClick={() => (window.location.href = '/')}
							className="flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-6 rounded-lg transition-colors"
						>
							<ShoppingCart className="w-5 h-5" /> Continue Shopping
						</button>
						<button
							onClick={() =>
								(window.location.href = `/orders/${order?.id || ''}`)
							}
							className="border border-blue-600 text-blue-600 hover:bg-blue-50 font-semibold py-2 px-6 rounded-lg transition-colors"
						>
							View Order
						</button>
					</div>
				</div>
			</div>
			<Footer />
		</div>
	);
};

export default Thankyou;
