import React, { useState } from 'react';
import Topbar from '../Common/Topbar';
import Footer from '../Common/Footer';
import { Search, SlidersHorizontal, Heart, Star, X } from 'lucide-react';
import ProductCard from '../Home/ProductCard';

const products = [
	{
		id: 1,
		img: 'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=500&q=80',
		title: 'Wireless Headphones',
		discount: '28% OFF',
		inStock: 1,
		givenRetting: '4.5',
		oldPrice: '120',
		newPrice: '85',
	},
	{
		id: 2,
		img: 'https://images.unsplash.com/photo-1579586337278-3befd40fd17a?w=500&auto=format&fit=crop&q=60',
		title: 'Smart Watch',
		discount: '15% OFF',
		inStock: 1,
		givenRetting: '4.7',
		oldPrice: '150',
		newPrice: '127',
	},
	{
		id: 3,
		img: 'https://images.unsplash.com/photo-1589571894960-20bbe2828d0a?w=500&q=80',
		title: 'Gaming Mouse',
		discount: '10% OFF',
		inStock: 0,
		givenRetting: '4.3',
		oldPrice: '60',
		newPrice: '54',
	},
	{
		id: 4,
		img: 'https://images.unsplash.com/photo-1687363251749-9e9c7cffc171?q=80&w=869&auto=format&fit=crop',
		title: 'Bluetooth Speaker',
		discount: '20% OFF',
		inStock: 1,
		givenRetting: '4.6',
		oldPrice: '80',
		newPrice: '64',
	},
	{
		id: 5,
		img: 'https://images.unsplash.com/photo-1488684430052-f2d92fb178c2?auto=format&fit=crop&w=1000&q=80',
		title: 'DSLR Camera',
		discount: '18% OFF',
		inStock: 1,
		givenRetting: '4.8',
		oldPrice: '900',
		newPrice: '738',
	},
	{
		id: 6,
		img: 'https://images.unsplash.com/photo-1598970434795-0c54fe7c0648?w=500&q=80',
		title: '4K LED Smart TV',
		discount: '25% OFF',
		inStock: 1,
		givenRetting: '4.9',
		oldPrice: '1200',
		newPrice: '899',
	},
	{
		id: 7,
		img: 'https://images.unsplash.com/photo-1562075950-23ba332df71c?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
		title: 'Wireless Keyboard',
		discount: '12% OFF',
		inStock: 1,
		givenRetting: '4.4',
		oldPrice: '50',
		newPrice: '44',
	},
	{
		id: 8,
		img: 'https://images.unsplash.com/photo-1603302576837-37561b2e2302?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
		title: 'Gaming Laptop',
		discount: '22% OFF',
		inStock: 1,
		givenRetting: '4.9',
		oldPrice: '1500',
		newPrice: '1170',
	},
];

const AllProduct = () => {
	const [filters, setFilters] = useState({
		category: 'All',
		color: 'All',
		size: 'All',
	});
	const [sort, setSort] = useState('Default');
	const [search, setSearch] = useState('');

	const handleFilterChange = (type, value) =>
		setFilters((prev) => ({ ...prev, [type]: value }));

	const activeFilters = Object.entries(filters)
		.filter(([_, v]) => v !== 'All')
		.map(([k, v]) => ({ type: k, value: v }));

	const filteredProducts = products
		.filter(
			(p) => filters.category === 'All' || p.category === filters.category
		)
		.filter((p) => filters.color === 'All' || p.color === filters.color)
		.filter((p) => filters.size === 'All' || p.size === filters.size)
		.filter((p) => p.title.toLowerCase().includes(search.toLowerCase()))
		.sort((a, b) =>
			sort === 'Low to High'
				? a.price - b.price
				: sort === 'High to Low'
				? b.price - a.price
				: 0
		);
	return (
		<div>
			<Topbar />
			<div className="container mx-auto py-8">
				{/* <h1 className="text-3xl font-bold mb-6 text-center">All Products</h1> */}

				{/* 🔍 Modern Top Filter Bar */}
				<div className="p-4 mb-6 flex flex-wrap items-center justify-between gap-4">
					{/* Search */}
					<div className="flex items-center bg-gray-100 rounded-md px-3 py-2">
						<Search size={18} className="text-gray-500 mr-2" />
						<input
							type="text"
							placeholder="Search products..."
							className="bg-transparent w-fit outline-none text-sm"
							value={search}
							onChange={(e) => setSearch(e.target.value)}
						/>
					</div>

					{/* Filters */}
					{['category', 'color', 'size', 'Brands'].map((type) => (
						<select
							key={type}
							value={filters[type]}
							onChange={(e) => handleFilterChange(type, e.target.value)}
							className="border border-gray-400 rounded-md px-3 py-2 text-sm"
						>
							{type === 'category' &&
								['Select Category', 'Electronics', 'Fashion', 'Home'].map(
									(c) => <option key={c}>{c}</option>
								)}
							{type === 'color' &&
								[
									'Select Color',
									'Black',
									'Pink',
									'Green',
									'White',
									'Purple',
								].map((c) => <option key={c}>{c}</option>)}
							{type === 'size' &&
								['Select Size', 'S', 'M', 'L', 'XL'].map((c) => (
									<option key={c}>{c}</option>
								))}
							{type === 'Brands' &&
								[
									'Select Brands',
									'Apple',
									'Samsung',
									'Google',
									'Xiaomi',
									'OnePlus',
									'Oppo',
									'Vivo',
									'Motorola',
									'Nokia',
									'Realme',
									'Huawei',
									'Sony',
									'Tesla',
									'BYD',
									'Volkswagen',
									'General Motors',
									'Hyundai',
									'Kia',
									'Ford',
									'Rivian',
									'Lucid Motors',
									'Polestar',
									'NIO',
								].map((c) => <option key={c}>{c}</option>)}
						</select>
					))}

					{/* Sort */}
					<select
						value={sort}
						onChange={(e) => setSort(e.target.value)}
						className="border border-gray-300 rounded-lg px-3 py-2 text-sm"
					>
						<option>Default</option>
						<option>Low to High</option>
						<option>High to Low</option>
					</select>

					<button className="ml-auto bg-gray-900 text-white px-4 py-2 rounded-lg hover:bg-gray-700 flex items-center gap-2">
						<SlidersHorizontal size={16} /> Filters
					</button>
				</div>

				{/* Active Filters */}
				{activeFilters.length > 0 && (
					<div className="flex flex-wrap gap-2 mb-4">
						{activeFilters.map((f, i) => (
							<span
								key={i}
								className="flex items-center gap-1 bg-gray-100 text-sm px-3 py-1 rounded-full"
							>
								{f.value}
								<X
									size={14}
									className="cursor-pointer"
									onClick={() => handleFilterChange(f.type, 'All')}
								/>
							</span>
						))}
					</div>
				)}

				{/* 🛍 Product Cards */}
				<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
					{filteredProducts.map((p, i) => (
						<ProductCard product={p} key={i} />
					))}
				</div>
			</div>
			<Footer />
		</div>
	);
};

export default AllProduct;
