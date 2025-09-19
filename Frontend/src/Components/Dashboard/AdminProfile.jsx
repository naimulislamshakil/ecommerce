import React from 'react';
import { ShieldCheck, Ticket, Settings } from 'lucide-react';


const AdminProfile = () => {
	return (
		<div className="max-w-6xl mx-auto px-6 py-10">
			{/* Profile Header */}
			<div className="bg-white shadow rounded-2xl p-6 flex items-center gap-6 mb-10">
				<img
					src="https://i.pravatar.cc/100?img=12"
					alt="profile"
					className="w-20 h-20 rounded-full border"
				/>
				<div>
					<h2 className="text-xl font-semibold">Admin User</h2>
					<p className="text-gray-500">admin@example.com</p>
					<p className="text-sm text-gray-400">Admin - Manager</p>
				</div>
			</div>

			{/* Profile Sections */}
			<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
				{/* Activity */}
				<div className="bg-white p-6 rounded-2xl shadow">
					<div className="flex items-center gap-2 mb-4">
						<ShieldCheck className="w-5 h-5 text-green-500" />
						<h3 className="font-semibold">Recent Activity</h3>
					</div>
					<ul className="space-y-3 text-sm">
						<li>✅ Added new product: "Wireless Earbuds"</li>
						<li>📦 Updated order #1023 status to "Delivered"</li>
						<li>🛠️ Resolved ticket #56</li>
					</ul>
				</div>

				{/* Tickets */}
				<div className="bg-white p-6 rounded-2xl shadow">
					<div className="flex items-center gap-2 mb-4">
						<Ticket className="w-5 h-5 text-orange-500" />
						<h3 className="font-semibold">Assigned Tickets</h3>
					</div>
					<ul className="space-y-3 text-sm">
						<li className="flex justify-between">
							<span>#56 - Refund issue</span>
							<span className="text-green-600">Resolved</span>
						</li>
						<li className="flex justify-between">
							<span>#59 - Payment failure</span>
							<span className="text-yellow-600">In Progress</span>
						</li>
					</ul>
				</div>

				{/* Performance */}
				<div className="bg-white p-6 rounded-2xl shadow md:col-span-2">
					<div className="flex items-center gap-2 mb-4">
						<Settings className="w-5 h-5 text-purple-500" />
						<h3 className="font-semibold">Performance</h3>
					</div>
					<p className="text-gray-500 text-sm">Sales Contribution: $12,500</p>
					<p className="text-gray-500 text-sm">Tickets Resolved: 45</p>
				</div>
			</div>
		</div>
	);
};

export default AdminProfile;
