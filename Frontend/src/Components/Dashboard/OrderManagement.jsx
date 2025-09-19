import React, { useState } from 'react';
import { Eye, Trash2, RefreshCcw } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const OrderManagement = () => {
	const navigate = useNavigate();

	const [orders, setOrders] = useState([
		{
			id: 'ORD1001',
			customer: 'John Doe',
			date: '2025-09-15',
			amount: 250,
			status: 'Pending',
			payment: 'Paid',
			items: 3,
		},
		{
			id: 'ORD1002',
			customer: 'Emma Watson',
			date: '2025-09-16',
			amount: 120,
			status: 'Shipped',
			payment: 'Paid',
			items: 1,
		},
		{
			id: 'ORD1003',
			customer: 'Michael Smith',
			date: '2025-09-17',
			amount: 89,
			status: 'Delivered',
			payment: 'COD',
			items: 2,
		},
	]);

	// Delete order
	const handleDelete = (id) => {
		setOrders(orders.filter((order) => order.id !== id));
	};

	// Update order status
	const handleStatusChange = (id) => {
		setOrders(
			orders.map((order) =>
				order.id === id
					? {
							...order,
							status:
								order.status === 'Pending'
									? 'Shipped'
									: order.status === 'Shipped'
									? 'Delivered'
									: 'Delivered',
					  }
					: order
			)
		);
	};

	return (
		<div className="p-6 max-w-7xl mx-auto">
			{/* Header */}
			<div className="flex justify-between items-center mb-6">
				<h2 className="text-2xl font-bold">Order Management</h2>
			</div>

			{/* Table */}
			<div className="overflow-x-auto bg-white shadow-md rounded-lg">
				<table className="w-full border-collapse">
					<thead className="bg-gray-100 text-left">
						<tr>
							<th className="p-3">Order ID</th>
							<th className="p-3">Customer</th>
							<th className="p-3">Date</th>
							<th className="p-3">Amount</th>
							<th className="p-3">Items</th>
							<th className="p-3">Payment</th>
							<th className="p-3">Status</th>
							<th className="p-3 text-center">Actions</th>
						</tr>
					</thead>
					<tbody>
						{orders.map((order) => (
							<tr
								key={order.id}
								className="border-b hover:bg-gray-50 transition"
							>
								<td className="p-3 font-medium">{order.id}</td>
								<td className="p-3">{order.customer}</td>
								<td className="p-3">{order.date}</td>
								<td className="p-3">${order.amount}</td>
								<td className="p-3">{order.items}</td>
								<td className="p-3">{order.payment}</td>
								<td
									className={`p-3 font-semibold ${
										order.status === 'Pending'
											? 'text-yellow-600'
											: order.status === 'Shipped'
											? 'text-blue-600'
											: 'text-green-600'
									}`}
								>
									{order.status}
								</td>
								<td className="p-3 flex justify-center gap-3">
									{/* View Order */}
									<button
										className="p-2 rounded-lg hover:bg-gray-100"
										onClick={() => navigate(`/orders/${order.id}`)}
									>
										<Eye size={18} className="text-blue-600" />
									</button>

									{/* Update Status */}
									<button
										className="p-2 rounded-lg hover:bg-gray-100"
										onClick={() => handleStatusChange(order.id)}
									>
										<RefreshCcw size={18} className="text-yellow-500" />
									</button>

									{/* Delete Order */}
									<button
										className="p-2 rounded-lg hover:bg-gray-100"
										onClick={() => handleDelete(order.id)}
									>
										<Trash2 size={18} className="text-red-600" />
									</button>
								</td>
							</tr>
						))}
					</tbody>
				</table>
			</div>
		</div>
	);
};

export default OrderManagement;
