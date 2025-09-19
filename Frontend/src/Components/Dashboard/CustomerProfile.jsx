import React, { useState } from 'react';
import { ShoppingBag, User, Settings, MapPin } from 'lucide-react';

const CustomerProfile = () => {
	const [address, setAddress] = useState('Barishal, Bangladesh');
	const [isModalOpen, setIsModalOpen] = useState(false);
	const [newAddress, setNewAddress] = useState(address);

	const handleSave = () => {
		setAddress(newAddress);
		setIsModalOpen(false);
	};
	return (
		<div className="max-w-6xl mx-auto px-6 py-10">
			{/* Profile Header */}
			<div className="bg-white shadow rounded-2xl p-6 flex items-center gap-6 mb-10">
				<img
					src="https://i.pravatar.cc/100"
					alt="profile"
					className="w-20 h-20 rounded-full border"
				/>
				<div>
					<h2 className="text-xl font-semibold">Naimul Islam</h2>
					<p className="text-gray-500">naimul@example.com</p>
					<p className="text-sm text-gray-400">Customer</p>
				</div>
			</div>

			{/* Profile Sections */}
			<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
				{/* Orders */}
				<div className="bg-white p-6 rounded-2xl shadow">
					<div className="flex items-center gap-2 mb-4">
						<ShoppingBag className="w-5 h-5 text-indigo-500" />
						<h3 className="font-semibold">Recent Orders</h3>
					</div>
					<ul className="space-y-3 text-sm">
						<li className="flex justify-between">
							<span>#1023 - Headphones</span>
							<span className="text-green-600">Delivered</span>
						</li>
						<li className="flex justify-between">
							<span>#1024 - Smart Watch</span>
							<span className="text-yellow-600">Pending</span>
						</li>
					</ul>
				</div>

				{/* Wishlist */}
				<div className="bg-white p-6 rounded-2xl shadow">
					<div className="flex items-center gap-2 mb-4">
						<User className="w-5 h-5 text-pink-500" />
						<h3 className="font-semibold">Wishlist</h3>
					</div>
					<p className="text-gray-500 text-sm">No items in wishlist.</p>
				</div>

				{/* Addresses */}
				<div className="bg-white p-6 rounded-2xl shadow md:col-span-2">
					<div className="flex items-center justify-between mb-4">
						<div className="flex items-center gap-2">
							<Settings className="w-5 h-5 text-blue-500" />
							<h3 className="font-semibold">Saved Address</h3>
						</div>
						<button
							onClick={() => setIsModalOpen(true)}
							className="text-sm px-3 py-1 bg-indigo-500 text-white rounded-lg hover:bg-indigo-600"
						>
							<MapPin className="w-4 h-4 inline mr-1" />
							Add / Edit
						</button>
					</div>
					<p className="text-gray-500 text-sm">{address}</p>
				</div>
			</div>

			{/* Address Modal */}
			{isModalOpen && (
				<div className="fixed inset-0 flex items-center justify-center bg-black/40 z-50">
					<div className="bg-white rounded-xl shadow-lg w-96 p-6">
						<h2 className="text-lg font-semibold mb-4">Update Address</h2>
						<textarea
							value={newAddress}
							onChange={(e) => setNewAddress(e.target.value)}
							className="w-full border rounded-lg p-3 text-sm focus:outline-none focus:ring focus:ring-indigo-300"
							rows="3"
						/>
						<div className="flex justify-end gap-3 mt-4">
							<button
								onClick={() => setIsModalOpen(false)}
								className="px-4 py-2 text-sm border rounded-lg hover:bg-gray-100"
							>
								Cancel
							</button>
							<button
								onClick={handleSave}
								className="px-4 py-2 text-sm bg-indigo-500 text-white rounded-lg hover:bg-indigo-600"
							>
								Save
							</button>
						</div>
					</div>
				</div>
			)}
		</div>
	);
};

export default CustomerProfile;
