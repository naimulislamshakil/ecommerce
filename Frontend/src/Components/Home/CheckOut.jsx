import React from 'react';
import Topbar from '../Common/Topbar';
import Footer from '../Common/Footer';

const CheckOut = () => {
	return (
		<div>
			<Topbar />
			<div className="bg-gray-50 min-h-screen py-10">
				<div className="container mx-auto grid grid-cols-1 lg:grid-cols-3 gap-8">
					{/* Left Section */}
					<div className="lg:col-span-2 space-y-6">
						{/* Delivery Address */}
						<div className="p-6 rounded-md shadow-md bg-white space-y-4">
							<h2 className="text-xl font-semibold border-b border-gray-300 pb-3">
								Delivery Address
							</h2>
							<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
								<div>
									<label
										className="block text-sm font-medium text-gray-700 mb-1"
										htmlFor="name"
									>
										Full Name
									</label>
									<input
										type="text"
										id="name"
										placeholder="Naimul Islam"
										className="w-full px-4 py-2 rounded border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:outline-none"
									/>
								</div>

								<div>
									<label
										className="block text-sm font-medium text-gray-700 mb-1"
										htmlFor="phone"
									>
										Phone Number
									</label>
									<input
										type="text"
										id="phone"
										placeholder="+880 1879 212420"
										className="w-full px-4 py-2 rounded border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:outline-none"
									/>
								</div>
								<div>
									<label
										className="block text-sm font-medium text-gray-700 mb-1"
										htmlFor="st"
									>
										Street Address
									</label>
									<input
										type="text"
										id="st"
										placeholder="House-66, Road-10, Block D"
										className="w-full px-4 py-2 rounded border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:outline-none"
									/>
								</div>
								<div>
									<label
										className="block text-sm font-medium text-gray-700 mb-1"
										htmlFor="ap"
									>
										Apartment,Suite, Unit (Optional)
									</label>
									<input
										type="text"
										id="ap"
										placeholder="Banan, Dhaka, Bangladesh "
										className="w-full px-4 py-2 rounded border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:outline-none"
									/>
								</div>
								<div>
									<label
										className="block text-sm font-medium text-gray-700 mb-1"
										htmlFor="dis"
									>
										District
									</label>

									<select className="w-full px-4 py-2 rounded border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:outline-none">
										<option>Select Area</option>
										<option>Dhaka</option>
										<option>Chittagong</option>
										<option>Barishal</option>
									</select>
								</div>
								<div>
									<label
										className="block text-sm font-medium text-gray-700 mb-1"
										htmlFor="pc"
									>
										Postal Code
									</label>
									<input
										type="text"
										id="pc"
										placeholder="4085"
										className="w-full px-4 py-2 rounded border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:outline-none"
									/>
								</div>
								<div className="col-span-2">
									<label
										className="block text-sm font-medium text-gray-700 mb-1"
										htmlFor="ai"
									>
										Additional Information
									</label>
									<textarea
										rows={4}
										id="ai"
										placeholder="Additional Information"
										className="w-full px-4 py-2 rounded border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:outline-none"
									></textarea>
								</div>
							</div>
						</div>

						{/* Payment Methods */}
						<div className="p-6 rounded-2xl shadow-md bg-white space-y-4">
							<h2 className="text-xl font-semibold border-b pb-3">
								Payment Method
							</h2>
							<div className="space-y-3">
								<label className="flex items-center space-x-3">
									<input type="radio" name="payment" className="w-5 h-5" />
									<span>Cash on Delivery</span>
								</label>
								<label className="flex items-center space-x-3">
									<input type="radio" name="payment" className="w-5 h-5" />
									<span>Bkash</span>
								</label>
								<label className="flex items-center space-x-3">
									<input type="radio" name="payment" className="w-5 h-5" />
									<span>Card Payment</span>
								</label>
							</div>
						</div>
					</div>

					{/* Right Section: Order Summary */}
					<div>
						<div className="p-6 rounded-md shadow-md bg-white space-y-4">
							<h2 className="text-xl font-semibold border-b pb-3">
								Order Summary
							</h2>
							<div className="space-y-2 text-sm">
								<div className="flex justify-between">
									<span>Subtotal</span>
									<span>$120.00</span>
								</div>
								<div className="flex justify-between">
									<span>Shipping</span>
									<span>$5.00</span>
								</div>
								<div className="flex justify-between font-semibold">
									<span>Total</span>
									<span>$125.00</span>
								</div>
							</div>

							<div>
								<input
									type="email"
									id="email"
									placeholder="Enter Your Code Here"
									className="w-full px-4 py-2 rounded border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:outline-none"
								/>
								<button className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition mt-2">
									Apply
								</button>
							</div>

							<button className="w-full bg-blue-600 text-white py-3 rounded-md hover:bg-blue-700 transition">
								Place Order
							</button>
						</div>
					</div>
				</div>
			</div>
			<Footer />
		</div>
	);
};

export default CheckOut;
