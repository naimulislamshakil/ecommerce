import React from 'react';
import { Heart, Maximize2, ShoppingCart } from 'lucide-react';
import { Link } from 'react-router-dom';

const ProductCard = ({ product }) => {
	return (
		<div className="group bg-white rounded-2xl shadow-md hover:shadow-xl transition-shadow duration-300 overflow-hidden flex flex-col max-w-sm">
			{/* Product Image */}
			<Link to="/product">
				<div className="relative">
					<img
						src={product?.img}
						alt={product?.title}
						className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-105"
					/>
					{/* Discount Badge */}
					{product?.discount && (
						<span className="absolute top-3 left-3 bg-[#F87171] text-white text-xs font-semibold px-3 py-1 rounded-full shadow">
							{product?.discount}
						</span>
					)}

					{/* Quick Actions */}
					<div className="absolute top-3 right-3 flex flex-col gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
						<button className="p-2 bg-white rounded-full shadow hover:bg-gray-100">
							<Maximize2 className="w-5 h-5 text-gray-700" />
						</button>
						<button className="p-2 bg-white rounded-full shadow hover:bg-gray-100">
							<Heart className="w-5 h-5 text-gray-700" />
						</button>
					</div>
				</div>

				{/* Product Info */}
				<div className="p-4 flex flex-col flex-1">
					<h3 className="font-semibold text-lg text-gray-800 mb-1 line-clamp-1">
						{product?.title}
					</h3>
					<span
						className={`text-sm font-medium ${
							product?.inStock === 1 ? 'text-green-600' : 'text-red-500'
						}`}
					>
						{product?.inStock === 1 ? 'In Stock' : 'Out of Stock'}
					</span>

					{/* Rating */}
					<div className="flex items-center mt-2">
						<span className="text-yellow-400">⭐</span>
						<span className="ml-1 text-sm text-gray-600">
							{product?.rating || '4.5'}
						</span>
					</div>

					{/* Price */}
					<div className="flex items-center justify-between mt-3">
						<div>
							{product?.oldPrice && (
								<span className="text-gray-400 line-through mr-2 text-sm">
									${product.oldPrice}
								</span>
							)}
							<span className="text-lg font-bold text-gray-800">
								${product?.newPrice}
							</span>
						</div>
					</div>

					{/* CTA Button */}
					<button
						className={`mt-4 flex items-center justify-center gap-2 rounded-full px-4 py-2 text-sm font-medium transition ${
							product?.inStock === 1
								? 'w-fit bg-blue-500 text-white py-2 px-7 mt-2 rounded-lg font-medium hover:bg-blue-600 transition-colors cursor-pointer'
								: 'bg-gray-300 text-gray-600 w-fit font-medium py-2 px-7 mt-2 rounded-lg'
						}`}
						disabled={product?.inStock !== 1}
					>
						<ShoppingCart className="w-4 h-4" />
						Add to Cart
					</button>
				</div>
			</Link>
		</div>
	);
};

export default ProductCard;
