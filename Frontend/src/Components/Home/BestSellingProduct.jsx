import React from 'react';
import ProductCard from './ProductCard';

const BestSellingProduct = () => {
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

	return (
		<div className="container mx-auto pb-5 px-3 md:px-0">
			<div className="pt-2 pb-5">
				<h2 className="text-2xl font-semibold">Best Selling Product</h2>
			</div>

			<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
				{products.map((product, i) => (
					<ProductCard product={product} key={i} />
				))}
			</div>
		</div>
	);
};

export default BestSellingProduct;
