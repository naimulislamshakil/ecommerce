import React from 'react';

const DashboardHome = () => {
	return (
		<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
			<div className="bg-white p-6 rounded-xl shadow">
				<h2 className="text-gray-500">Total Sales</h2>
				<p className="text-2xl font-bold">$12,345</p>
			</div>
			<div className="bg-white p-6 rounded-xl shadow">
				<h2 className="text-gray-500">Orders</h2>
				<p className="text-2xl font-bold">1,234</p>
			</div>
		</div>
	);
};

export default DashboardHome;
