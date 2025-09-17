import React from 'react';
import { X } from 'lucide-react';

const CreateTricket = ({
	setShowCreate,
	handleCreateSubmit,
	newTicket,
	setNewTicket,
}) => {
	return (
		<div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
			<div className="bg-white rounded-xl w-full max-w-lg p-6 relative">
				<button
					onClick={() => setShowCreate(false)}
					className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
				>
					<X className="w-6 h-6" />
				</button>
				<h3 className="text-xl font-bold mb-4">Create New Ticket</h3>
				<form className="space-y-4" onSubmit={handleCreateSubmit}>
					<input
						type="text"
						placeholder="Subject"
						required
						className="w-full border rounded-lg px-3 py-2"
						value={newTicket.subject}
						onChange={(e) =>
							setNewTicket({ ...newTicket, subject: e.target.value })
						}
					/>
					<input
						type="text"
						placeholder="Category"
						required
						className="w-full border rounded-lg px-3 py-2"
						value={newTicket.category}
						onChange={(e) =>
							setNewTicket({ ...newTicket, category: e.target.value })
						}
					/>
					<select
						className="w-full border rounded-lg px-3 py-2"
						value={newTicket.priority}
						onChange={(e) =>
							setNewTicket({ ...newTicket, priority: e.target.value })
						}
					>
						<option>Low</option>
						<option>Medium</option>
						<option>High</option>
					</select>
					<textarea
						placeholder="Description"
						required
						className="w-full border rounded-lg px-3 py-2"
						value={newTicket.description}
						onChange={(e) =>
							setNewTicket({ ...newTicket, description: e.target.value })
						}
					/>
					<button
						type="submit"
						className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700"
					>
						Submit Ticket
					</button>
				</form>
			</div>
		</div>
	);
};

export default CreateTricket;
