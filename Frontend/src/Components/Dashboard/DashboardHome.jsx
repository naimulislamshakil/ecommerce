import React from 'react';
import {
	Package,
	Truck,
	CheckCircle,
	XCircle,
	Heart,
	Gift,
	User,
} from 'lucide-react';

const DashboardHome = () => {
	return (
		<div className="max-w-7xl mx-auto px-6 py-8">
			{/* Welcome Section */}
			<div className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white p-6 rounded-2xl shadow mb-8 flex justify-between items-center">
				<div>
					<h2 className="text-2xl font-bold">Welcome back, Naimul 👋</h2>
					<p className="text-sm text-blue-100">
						Here’s your shopping activity at a glance
					</p>
				</div>
				<div className="bg-white p-2 rounded-full">
					<User className="w-10 h-10 text-blue-600" />
				</div>
			</div>

			{/* Order Status Cards */}
			<div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
				<div className="bg-white p-4 rounded-xl shadow flex items-center gap-3">
					<Package className="w-6 h-6 text-yellow-500" />
					<div>
						<p className="text-gray-500 text-sm">In Progress</p>
						<h3 className="text-lg font-bold">3 Orders</h3>
					</div>
				</div>
				<div className="bg-white p-4 rounded-xl shadow flex items-center gap-3">
					<Truck className="w-6 h-6 text-blue-500" />
					<div>
						<p className="text-gray-500 text-sm">Shipped</p>
						<h3 className="text-lg font-bold">2 Orders</h3>
					</div>
				</div>
				<div className="bg-white p-4 rounded-xl shadow flex items-center gap-3">
					<CheckCircle className="w-6 h-6 text-green-500" />
					<div>
						<p className="text-gray-500 text-sm">Delivered</p>
						<h3 className="text-lg font-bold">10 Orders</h3>
					</div>
				</div>
				<div className="bg-white p-4 rounded-xl shadow flex items-center gap-3">
					<XCircle className="w-6 h-6 text-red-500" />
					<div>
						<p className="text-gray-500 text-sm">Cancelled</p>
						<h3 className="text-lg font-bold">1 Order</h3>
					</div>
				</div>
			</div>

			{/* Recent Orders + Wishlist */}
			<div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
				{/* Recent Orders */}
				<div className="bg-white p-6 rounded-xl shadow">
					<h3 className="text-lg font-bold mb-4">Recent Orders</h3>
					<ul className="space-y-3">
						<li className="flex justify-between border-b pb-2">
							<span>#12345 - Wireless Headphones</span>
							<span className="text-sm text-green-600">Delivered</span>
						</li>
						<li className="flex justify-between border-b pb-2">
							<span>#12346 - Smart Watch</span>
							<span className="text-sm text-yellow-600">In Progress</span>
						</li>
						<li className="flex justify-between">
							<span>#12347 - Bluetooth Speaker</span>
							<span className="text-sm text-blue-600">Shipped</span>
						</li>
					</ul>
					<button className="mt-4 text-blue-600 text-sm font-medium hover:underline">
						View All Orders →
					</button>
				</div>

				{/* Wishlist */}
				<div className="bg-white p-6 rounded-xl shadow">
					<h3 className="text-lg font-bold mb-4 flex items-center gap-2">
						<Heart className="w-5 h-5 text-pink-500" /> Wishlist
					</h3>
					<div className="grid grid-cols-2 gap-4">
						<div className="bg-gray-100 p-3 rounded-lg text-center">
							<img
								src="https://images.unsplash.com/photo-1585386959984-a4155223fca1?auto=format&fit=crop&w=300&q=80"
								alt="Shoes"
								className="h-20 mx-auto mb-2 rounded"
							/>
							<p className="text-sm">Running Shoes</p>
						</div>
						<div className="bg-gray-100 p-3 rounded-lg text-center">
							<img
								src="https://images.unsplash.com/photo-1585386959984-a4155223fca1?auto=format&fit=crop&w=300&q=80"
								alt="Bag"
								className="h-20 mx-auto mb-2 rounded"
							/>
							<p className="text-sm">Travel Bag</p>
						</div>
					</div>
				</div>
			</div>

			{/* Recommended + Quick Links */}
			<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
				{/* Recommended */}
				<div className="bg-white p-6 rounded-xl shadow">
					<h3 className="text-lg font-bold mb-4">Recommended for You</h3>
					<div className="grid grid-cols-2 gap-4">
						<div className="bg-gray-100 p-3 rounded-lg text-center">
							<img
								src="https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?auto=format&fit=crop&w=300&q=80"
								alt="Watch"
								className="h-20 mx-auto mb-2 rounded"
							/>
							<p className="text-sm">Smart Watch</p>
						</div>
						<div className="bg-gray-100 p-3 rounded-lg text-center">
							<img
								src="https://images.unsplash.com/photo-1606813902912-6f03a42ec1e8?auto=format&fit=crop&w=300&q=80"
								alt="Headphones"
								className="h-20 mx-auto mb-2 rounded"
							/>
							<p className="text-sm">Wireless Headphones</p>
						</div>
					</div>
				</div>

				{/* Quick Links */}
				<div className="bg-white p-6 rounded-xl shadow">
					<h3 className="text-lg font-bold mb-4 flex items-center gap-2">
						<Gift className="w-5 h-5 text-purple-500" /> Quick Links
					</h3>
					<ul className="space-y-2 text-sm">
						<li>
							<a href="#" className="text-blue-600 hover:underline">
								Manage Profile
							</a>
						</li>
						<li>
							<a href="#" className="text-blue-600 hover:underline">
								Track Orders
							</a>
						</li>
						<li>
							<a href="#" className="text-blue-600 hover:underline">
								Manage Payment Methods
							</a>
						</li>
						<li>
							<a href="#" className="text-blue-600 hover:underline">
								Customer Support
							</a>
						</li>
					</ul>
				</div>
			</div>
		</div>
	);
};

export default DashboardHome;
