import React, { useState } from 'react';
import { Package, Truck, CheckCircle, Clock } from 'lucide-react';

const Order = () => {
	const [expandedOrder, setExpandedOrder] = useState(null);

	const toggleExpand = (id) => {
		setExpandedOrder(expandedOrder === id ? null : id);
	};
	const ordersData = [
		{
			id: '12345',
			date: '2025-09-12',
			status: 'Delivered',
			total: '$120.00',
			products: [
				{ name: 'Wireless Headphones', qty: 1, price: '$80' },
				{ name: 'Phone Case', qty: 2, price: '$20' },
			],
			address: '123 Main Street, Barishal, Bangladesh',
			payment: 'Credit Card',
			timeline: ['Placed', 'Packed', 'Shipped', 'Delivered'],
		},
		{
			id: '12346',
			date: '2025-09-10',
			status: 'Shipped',
			total: '$60.00',
			products: [{ name: 'Smart Watch', qty: 1, price: '$60' }],
			address: '123 Main Street, Barishal, Bangladesh',
			payment: 'Cash on Delivery',
			timeline: ['Placed', 'Packed', 'Shipped'],
		},
		{
			id: '12347',
			date: '2025-09-08',
			status: 'Pending',
			total: '$45.00',
			products: [{ name: 'Bluetooth Speaker', qty: 1, price: '$45' }],
			address: '123 Main Street, Barishal, Bangladesh',
			payment: 'Credit Card',
			timeline: ['Placed'],
		},
	];

	return (
		<div className="max-w-5xl mx-auto px-6 py-8">
			<h2 className="text-2xl font-bold mb-6">My Orders</h2>

			<div className="space-y-4">
				{ordersData.map((order) => (
					<div
						key={order.id}
						className="bg-white p-6 rounded-xl shadow cursor-pointer transition hover:shadow-lg"
						onClick={() => toggleExpand(order.id)}
					>
						{/* Order Summary */}
						<div className="flex justify-between items-center">
							<div>
								<h3 className="font-semibold">Order #{order.id}</h3>
								<p className="text-sm text-gray-500">{order.date}</p>
							</div>
							<div className="text-right">
								<p className="font-bold">{order.total}</p>
								<span
									className={`px-2 py-1 text-xs rounded-full ${
										order.status === 'Delivered'
											? 'bg-green-100 text-green-600'
											: order.status === 'Shipped'
											? 'bg-blue-100 text-blue-600'
											: 'bg-yellow-100 text-yellow-600'
									}`}
								>
									{order.status}
								</span>
							</div>
						</div>

						{/* Expanded Details */}
						{expandedOrder === order.id && (
							<div className="mt-6 border-t pt-4">
								{/* Products */}
								<h4 className="font-semibold mb-2">Products</h4>
								<ul className="space-y-2 mb-4">
									{order.products.map((p, i) => (
										<li
											key={i}
											className="flex justify-between text-sm border-b pb-1"
										>
											<span>
												{p.name} (x{p.qty})
											</span>
											<span>{p.price}</span>
										</li>
									))}
								</ul>

								{/* Shipping Address */}
								<h4 className="font-semibold mb-2">Shipping Address</h4>
								<p className="text-sm text-gray-600 mb-4">{order.address}</p>

								{/* Payment */}
								<h4 className="font-semibold mb-2">Payment Method</h4>
								<p className="text-sm text-gray-600 mb-4">{order.payment}</p>

								{/* Order Tracking */}
								<h4 className="font-semibold mb-4">Order Tracking</h4>
								<div className="flex items-center justify-between">
									{['Placed', 'Packed', 'Shipped', 'Delivered'].map(
										(step, index) => {
											const isCompleted = order.timeline.includes(step);
											return (
												<div
													key={index}
													className="flex-1 flex flex-col items-center relative"
												>
													{/* Icon */}
													<div
														className={`w-10 h-10 flex items-center justify-center rounded-full ${
															isCompleted
																? 'bg-green-500 text-white'
																: 'bg-gray-200 text-gray-400'
														}`}
													>
														{step === 'Placed' && <Clock className="w-5 h-5" />}
														{step === 'Packed' && (
															<Package className="w-5 h-5" />
														)}
														{step === 'Shipped' && (
															<Truck className="w-5 h-5" />
														)}
														{step === 'Delivered' && (
															<CheckCircle className="w-5 h-5" />
														)}
													</div>

													{/* Label */}
													<p className="text-xs mt-2">{step}</p>

													{/* Line connector */}
													{index < 3 && (
														<div
															className={`absolute top-5 left-1/2 w-full h-1 ${
																isCompleted ? 'bg-green-500' : 'bg-gray-300'
															}`}
														></div>
													)}
												</div>
											);
										}
									)}
								</div>
							</div>
						)}
					</div>
				))}
			</div>
		</div>
	);
};

export default Order;
