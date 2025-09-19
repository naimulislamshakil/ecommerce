import React, { useState } from 'react';
import { Plus, Edit, Trash2, Eye } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const ProductManagement = () => {
	const navigate = useNavigate();

	const [products, setProducts] = useState([
		{
			id: 1,
			name: 'Wireless Headphones',
			category: 'Electronics',
			price: 120,
			stock: 15,
			status: 'Active',
			image:
				'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&w=500&q=80',
		},
		{
			id: 2,
			name: 'Smart Watch',
			category: 'Accessories',
			price: 80,
			stock: 8,
			status: 'Low Stock',
			image:
				'https://images.unsplash.com/photo-1519744792095-2f2205e87b6f?auto=format&fit=crop&w=500&q=80',
		},
	]);

	const [showModal, setShowModal] = useState(false);
	const [newProduct, setNewProduct] = useState({
		name: '',
		category: '',
		price: '',
		stock: '',
		status: 'Active',
		image: '',
	});

	// Add product
	const handleAddProduct = () => {
		if (!newProduct.name || !newProduct.category || !newProduct.price) return;
		setProducts([
			...products,
			{ ...newProduct, id: Date.now(), price: Number(newProduct.price) },
		]);
		setNewProduct({
			name: '',
			category: '',
			price: '',
			stock: '',
			status: 'Active',
			image: '',
		});
		setShowModal(false);
	};

	// Delete product
	const handleDelete = (id) => {
		setProducts(products.filter((product) => product.id !== id));
	};

	return (
		<div className="p-6 max-w-7xl mx-auto">
			{/* Header */}
			<div className="flex justify-between items-center mb-6">
				<h2 className="text-2xl font-bold">Product Management</h2>
				<button
					onClick={() => setShowModal(true)}
					className="flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition"
				>
					<Plus size={18} /> Add Product
				</button>
			</div>

			{/* Table */}
			<div className="overflow-x-auto bg-white shadow-md rounded-lg">
				<table className="w-full border-collapse">
					<thead className="bg-gray-100 text-left">
						<tr>
							<th className="p-3">Image</th>
							<th className="p-3">Name</th>
							<th className="p-3">Category</th>
							<th className="p-3">Price</th>
							<th className="p-3">Stock</th>
							<th className="p-3">Status</th>
							<th className="p-3 text-center">Actions</th>
						</tr>
					</thead>
					<tbody>
						{products.map((product) => (
							<tr
								key={product.id}
								className="border-b hover:bg-gray-50 transition"
							>
								<td className="p-3">
									<img
										src={product.image}
										alt={product.name}
										className="w-14 h-14 object-cover rounded-md"
									/>
								</td>
								<td className="p-3 font-medium">{product.name}</td>
								<td className="p-3">{product.category}</td>
								<td className="p-3">${product.price}</td>
								<td className="p-3">{product.stock}</td>
								<td
									className={`p-3 font-semibold ${
										product.status === 'Active'
											? 'text-green-600'
											: 'text-red-600'
									}`}
								>
									{product.status}
								</td>
								<td className="p-3 flex justify-center gap-3">
									<button
										className="p-2 rounded-lg hover:bg-gray-100"
										onClick={() => navigate(`/products/${product.id}`)}
									>
										<Eye size={18} className="text-blue-600" />
									</button>
									<button
										className="p-2 rounded-lg hover:bg-gray-100"
										onClick={() => navigate(`/products/${product.id}/edit`)}
									>
										<Edit size={18} className="text-yellow-500" />
									</button>
									<button
										className="p-2 rounded-lg hover:bg-gray-100"
										onClick={() => handleDelete(product.id)}
									>
										<Trash2 size={18} className="text-red-600" />
									</button>
								</td>
							</tr>
						))}
					</tbody>
				</table>
			</div>

			{/* Add Product Modal */}
			{showModal && (
				<div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-40">
					<div className="bg-white p-6 rounded-lg w-full max-w-md shadow-lg">
						<h3 className="text-lg font-semibold mb-4">Add Product</h3>
						<div className="space-y-3">
							<input
								type="text"
								placeholder="Product Name"
								className="w-full border p-2 rounded"
								value={newProduct.name}
								onChange={(e) =>
									setNewProduct({ ...newProduct, name: e.target.value })
								}
							/>
							<input
								type="text"
								placeholder="Category"
								className="w-full border p-2 rounded"
								value={newProduct.category}
								onChange={(e) =>
									setNewProduct({ ...newProduct, category: e.target.value })
								}
							/>
							<input
								type="number"
								placeholder="Price"
								className="w-full border p-2 rounded"
								value={newProduct.price}
								onChange={(e) =>
									setNewProduct({ ...newProduct, price: e.target.value })
								}
							/>
							<input
								type="number"
								placeholder="Stock"
								className="w-full border p-2 rounded"
								value={newProduct.stock}
								onChange={(e) =>
									setNewProduct({ ...newProduct, stock: e.target.value })
								}
							/>
							<input
								type="text"
								placeholder="Image URL"
								className="w-full border p-2 rounded"
								value={newProduct.image}
								onChange={(e) =>
									setNewProduct({ ...newProduct, image: e.target.value })
								}
							/>
							<select
								className="w-full border p-2 rounded"
								value={newProduct.status}
								onChange={(e) =>
									setNewProduct({ ...newProduct, status: e.target.value })
								}
							>
								<option value="Active">Active</option>
								<option value="Low Stock">Low Stock</option>
								<option value="Inactive">Inactive</option>
							</select>
						</div>
						<div className="flex justify-end gap-3 mt-4">
							<button
								onClick={() => setShowModal(false)}
								className="px-4 py-2 rounded bg-gray-300 hover:bg-gray-400"
							>
								Cancel
							</button>
							<button
								onClick={handleAddProduct}
								className="px-4 py-2 rounded bg-blue-600 text-white hover:bg-blue-700"
							>
								Add
							</button>
						</div>
					</div>
				</div>
			)}
		</div>
	);
};

export default ProductManagement;
