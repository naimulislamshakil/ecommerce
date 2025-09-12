import React, { useRef, useState } from 'react';
import Topbar from '../Common/Topbar';
import Footer from '../Common/Footer';
import { ShoppingCart, Star, Pencil, MessageSquare } from 'lucide-react';
import { Link } from 'react-router-dom';
import AddProductReview from './AddProductReview';

const SingleProduct = () => {
	const [showModal, setShowModal] = useState(false);
	const [newReview, setNewReview] = useState({
		name: '',
		rating: 5,
		comment: '',
	});
	const reviewSectionRef = useRef(null);

	const reviews = [
		{
			id: 1,
			name: 'John Deo',
			email: 'john@john.com',
			rating: 4,
			date: '11th Sep 2020',
			comment: 'Silver Solo 2 Wireless',
		},
		{
			id: 2,
			name: 'Emily Carter',
			email: 'emily.carter@example.com',
			rating: 5,
			date: '23rd Jan 2021',
			comment: 'Absolutely love the sound quality and battery life!',
		},
		{
			id: 3,
			name: 'Rajiv Ahmed',
			email: 'rajiv.ahmed@example.com',
			rating: 3,
			date: '5th Mar 2021',
			comment: 'Decent performance, but the ear cushions could be softer.',
		},
		{
			id: 4,
			name: 'Sophia Lee',
			email: 'sophia.lee@example.com',
			rating: 5,
			date: '19th Jul 2021',
			comment: 'Perfect for gaming and music. Noise cancellation is top-notch.',
		},
		{
			id: 5,
			name: 'Carlos Mendez',
			email: 'carlos.mendez@example.com',
			rating: 4,
			date: '2nd Nov 2021',
			comment: 'Stylish design and great value for the price.',
		},
	];

	const handleAddReview = () => {
		setReviews([...reviews, newReview]);
		setNewReview({ name: '', rating: 5, comment: '' });
		setShowModal(false);
	};

	const handleClick = (e) => {
		e.preventDefault();
		if (reviewSectionRef.current) {
			reviewSectionRef.current.scrollIntoView({
				behavior: 'smooth',
				block: 'start', // Aligns the top of the element to the top of the viewport
			});
		}
	};
	return (
		<div>
			<Topbar />

			<div className="container mx-auto py-10">
				<div className="grid grid-cols-1 md:grid-cols-2 gap-10">
					{/* Left: Product Image */}
					<div className="flex justify-center">
						<img
							src="https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=600&q=80"
							alt="Wireless Headphones"
							className="rounded-2xl shadow-lg w-full max-w-md object-cover"
						/>
					</div>

					{/* Right: Product Info */}
					<div>
						<h1 className="text-3xl font-bold mb-3">Wireless Headphones</h1>
						<p className="text-gray-500 mb-4 capitalize">
							Category: Headphones
						</p>

						{/* Rating */}
						<div className="flex items-center justify-start gap-4 mb-6">
							<div className="flex items-center">
								{[...Array(5)].map((_, i) => (
									<Star
										key={i}
										size={20}
										className={
											i <
											Math.round(
												reviews.reduce((acc, r) => acc + r.rating, 0) /
													reviews.length
											)
												? 'text-yellow-400 fill-yellow-400'
												: 'text-gray-300'
										}
									/>
								))}
								<Link
									to="#review"
									onClick={handleClick}
									className="ml-5 text-gray-700 font-medium flex items-center gap-2"
								>
									<MessageSquare size="20px" />
									{reviews.length} Review{reviews.length > 1 ? 's' : ''}
								</Link>
							</div>

							<button
								className="flex gap-2 items-center text-gray-700"
								onClick={() => setShowModal(true)}
							>
								<Pencil size="20px" />
								Write a Review
							</button>
						</div>

						{/* Price */}
						<div className="flex items-center space-x-3 mb-6">
							<span className="text-3xl font-bold text-green-600">$85</span>
							<span className="line-through text-gray-500">$120</span>
							<span className="text-red-500 font-semibold">28% OFF</span>
						</div>

						<p className="text-green-600 mb-6">In Stock</p>

						{/* Buttons */}
						<div className="flex space-x-4 mb-8">
							<button className="flex items-center px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition">
								<ShoppingCart size={20} className="mr-2" /> Add to Cart
							</button>
							<button className="px-6 py-3 bg-green-600 text-white font-semibold rounded-lg hover:bg-green-700 transition">
								Buy Now
							</button>
						</div>

						{/* Description */}
						<div>
							<h2 className="text-lg font-semibold mb-2">Product Details</h2>
							<p className="text-gray-700 leading-relaxed">
								Experience crystal clear sound with our premium wireless
								headphones. Designed for music lovers, these headphones offer
								superior comfort, deep bass, and long-lasting battery life.
								Perfect for daily use or gaming.
							</p>
						</div>
					</div>
				</div>

				{/* Related Products */}
				<div className="mt-16">
					<h2 className="text-2xl font-bold mb-6">Related Products</h2>
				</div>

				{/* Reviews Section */}
				<div
					ref={reviewSectionRef}
					className=" mx-auto mt-10 p-6 bg-white shadow-md rounded-xl border border-gray-200"
				>
					{/* Tabs */}
					<div className="flex mb-6">
						<button className="border-b-2 px-4 py-2 font-semibold border-yellow-500 text-yellow-500">
							Reviews
						</button>
					</div>

					{/* Review List */}
					<div>
						<h3 className="text-xl font-bold mb-4">
							{reviews.length} Review{reviews.length > 1 ? 's' : ''}
						</h3>
						{reviews.map((review, index) => (
							<div key={index} className="mb-6 pb-4 border-b border-gray-200">
								<p className="font-semibold text-gray-800">{review.email}</p>
								<div className="flex items-center mb-2">
									{[...Array(5)].map((_, i) => (
										<Star
											key={i}
											size={16}
											className={
												i < review.rating
													? 'text-yellow-400 fill-yellow-400'
													: 'text-gray-300'
											}
										/>
									))}
								</div>
								<p className="text-gray-500 text-sm mb-2">
									Posted by {review.name} on {review.date}
								</p>
								<p className="text-gray-700">{review.comment}</p>
							</div>
						))}
					</div>
				</div>

				{/* Modal */}
				{showModal && (
					<AddProductReview
						handleAddReview={handleAddReview}
						newReview={newReview}
						setNewReview={setNewReview}
						setShowModal={setShowModal}
					/>
				)}
			</div>

			<Footer />
		</div>
	);
};

export default SingleProduct;
