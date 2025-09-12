import React from 'react';
import { X } from 'lucide-react';

const AddProductReview = ({
	setShowModal,
	newReview,
	setNewReview,
	handleAddReview,
}) => {
	return (
		<div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
			<div className="bg-white p-6 rounded-lg shadow-xl w-full max-w-4xl relative max-h-[90vh] overflow-y-auto">
				<button
					className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
					onClick={() => setShowModal(false)}
				>
					<X size={24} />
				</button>
				<h2 className="text-2xl font-bold mb-6 text-center">Write a Review</h2>

				<div className="grid grid-cols-1 md:grid-cols-2 gap-8">
					{/* Left side: Product Image */}
					<div className="flex justify-center items-start pt-4">
						<img
							src="https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=600&q=80"
							alt="Wireless Headphones"
							className="rounded-lg shadow-md w-full max-w-xs object-cover"
						/>
					</div>

					{/* Right side: Review Form */}
					<form onSubmit={handleAddReview} className="space-y-4">
						<div>
							<label
								htmlFor="rating"
								className="block text-sm font-medium text-gray-700 mb-1"
							>
								Rating{' '}
							</label>
							<select
								id="rating"
								name="rating"
								className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:outline-none"
								value={newReview.rating}
								// onChange={handleReviewChange}
								required
							>
								<option value="">Select Rating</option>
								{[1, 2, 3, 4, 5].map((star) => (
									<option key={star} value={star}>
										{star} Star{star > 1 ? 's' : ''}
									</option>
								))}
							</select>
						</div>

						<div>
							<label
								htmlFor="name"
								className="block text-sm font-medium text-gray-700 mb-1"
							>
								Name
							</label>
							<input
								type="text"
								id="name"
								name="name"
								placeholder="Your Name"
								className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:outline-none"
								value={newReview.name}
								// onChange={handleReviewChange}
								required
							/>
						</div>

						<div>
							<label
								htmlFor="subject"
								className="block text-sm font-medium text-gray-700 mb-1"
							>
								Review Subject{' '}
							</label>
							<input
								type="text"
								id="subject"
								name="subject"
								placeholder="e.g., Great headphones for daily use!"
								className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:outline-none"
								value={newReview.subject}
								// onChange={handleReviewChange}
								required
							/>
						</div>

						<div>
							<label
								htmlFor="comment"
								className="block text-sm font-medium text-gray-700 mb-1"
							>
								Comments{' '}
							</label>
							<textarea
								id="comment"
								name="comment"
								rows="5" // Set initial rows for textarea
								placeholder="Share your thoughts about the product..."
								className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:outline-none"
								value={newReview.comment}
								// onChange={handleReviewChange}
								required
							></textarea>
						</div>

						<button
							type="submit"
							className="w-full py-2 px-4 border border-transparent rounded-md shadow-sm text-lg font-medium text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-700 transition-colors mt-6"
						>
							Submit Review
						</button>
					</form>
				</div>
			</div>
		</div>
	);
};

export default AddProductReview;
