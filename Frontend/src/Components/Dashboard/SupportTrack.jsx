import React, { useState } from 'react';
import { Eye, Trash2, Plus, X } from 'lucide-react';
import CreateTricket from './CreateTricket';

const SupportTrack = () => {
	const [tickets, setTickets] = useState([
		{
			id: 'TCK-101',
			subject: 'Payment not processed',
			category: 'Payment',
			status: 'Open',
			priority: 'High',
			date: '2025-09-15',
			description: 'I paid but my order is still pending.',
			resolvedBy: null,
		},
		{
			id: 'TCK-102',
			subject: 'Product damaged',
			category: 'Order',
			status: 'Resolved',
			priority: 'Medium',
			date: '2025-09-10',
			description: 'My product arrived broken.',
			resolvedBy: 'John Doe',
		},
	]);

	const [selectedTicket, setSelectedTicket] = useState(null);
	const [showCreate, setShowCreate] = useState(false);
	const [newTicket, setNewTicket] = useState({
		subject: '',
		category: '',
		priority: 'Low',
		description: '',
	});
	const [thankYou, setThankYou] = useState(false);

	const handleDelete = (id) => {
		setTickets(tickets.filter((t) => t.id !== id));
	};

	const handleCreateSubmit = (e) => {
		e.preventDefault();
		const ticketId = 'TCK-' + (Math.floor(Math.random() * 900) + 100);
		setTickets([
			...tickets,
			{
				...newTicket,
				id: ticketId,
				status: 'Open',
				date: new Date().toISOString().split('T')[0],
				resolvedBy: null,
			},
		]);
		setNewTicket({
			subject: '',
			category: '',
			priority: 'Low',
			description: '',
		});
		setShowCreate(false);
		setThankYou(ticketId);
	};

	return (
		<div className="max-w-7xl mx-auto p-6">
			<div className="flex justify-between items-center mb-6">
				<h2 className="text-2xl font-bold flex items-center gap-2">
					Support Tickets
				</h2>
				<button
					className="flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700"
					onClick={() => setShowCreate(true)}
				>
					<Plus className="w-4 h-4" /> Create Ticket
				</button>
			</div>

			{/* Ticket Table */}
			<div className="bg-white rounded-xl shadow overflow-x-auto">
				<table className="min-w-full text-sm">
					<thead className="bg-gray-100 text-gray-600 uppercase text-xs">
						<tr>
							<th className="px-4 py-3 text-left">Ticket ID</th>
							<th className="px-4 py-3 text-left">Subject</th>
							<th className="px-4 py-3 text-left">Category</th>
							<th className="px-4 py-3 text-left">Status</th>
							<th className="px-4 py-3 text-left">Priority</th>
							<th className="px-4 py-3 text-left">Created</th>
							<th className="px-4 py-3 text-left">Actions</th>
						</tr>
					</thead>
					<tbody>
						{tickets.map((ticket) => (
							<tr key={ticket.id} className="border-b hover:bg-gray-50">
								<td className="px-4 py-3 font-medium">{ticket.id}</td>
								<td className="px-4 py-3">{ticket.subject}</td>
								<td className="px-4 py-3">{ticket.category}</td>
								<td className="px-4 py-3">{ticket.status}</td>
								<td className="px-4 py-3">{ticket.priority}</td>
								<td className="px-4 py-3">{ticket.date}</td>
								<td className="px-4 py-3 flex gap-2">
									<button
										className="text-blue-600 hover:underline flex items-center gap-1"
										onClick={() => setSelectedTicket(ticket)}
									>
										<Eye className="w-4 h-4" /> See
									</button>
									<button
										className="text-red-600 hover:underline flex items-center gap-1"
										onClick={() => handleDelete(ticket.id)}
									>
										<Trash2 className="w-4 h-4" /> Delete
									</button>
								</td>
							</tr>
						))}
					</tbody>
				</table>
			</div>

			{/* See Ticket Modal */}
			{selectedTicket && (
				<div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
					<div className="bg-white rounded-xl w-full max-w-2xl p-6 relative">
						<button
							onClick={() => setSelectedTicket(null)}
							className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
						>
							<X className="w-6 h-6" />
						</button>
						<h3 className="text-xl font-bold mb-4">
							{selectedTicket.subject} ({selectedTicket.id})
						</h3>
						<p className="mb-2">
							<strong>Category:</strong> {selectedTicket.category}
						</p>
						<p className="mb-2">
							<strong>Status:</strong> {selectedTicket.status}
						</p>
						<p className="mb-2">
							<strong>Priority:</strong> {selectedTicket.priority}
						</p>
						<p className="mb-2">
							<strong>Description:</strong> {selectedTicket.description}
						</p>
						<p className="mb-2">
							<strong>Created:</strong> {selectedTicket.date}
						</p>
						<p className="mb-2">
							<strong>Responsible / Resolved By:</strong>{' '}
							{selectedTicket.resolvedBy || 'Not assigned yet'}
						</p>
					</div>
				</div>
			)}

			{/* Create Ticket Modal */}
			{showCreate && (
				<CreateTricket
					handleCreateSubmit={handleCreateSubmit}
					newTicket={newTicket}
					setNewTicket={setNewTicket}
					setShowCreate={setShowCreate}
				/>
			)}

			{/* Thank You Message */}
			{thankYou && (
				<div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
					<div className="bg-white rounded-xl w-full max-w-md p-6 text-center">
						<h3 className="text-xl font-bold mb-4">Thank You!</h3>
						<p className="mb-4">Your ticket has been created successfully.</p>
						<p className="mb-4 font-semibold">Ticket ID: {thankYou}</p>
						<button
							onClick={() => setThankYou(false)}
							className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700"
						>
							Close
						</button>
					</div>
				</div>
			)}
		</div>
	);
};

export default SupportTrack;
