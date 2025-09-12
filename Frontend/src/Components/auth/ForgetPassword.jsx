import React from 'react';
import Topbar from '../Common/Topbar';
import Footer from '../Common/Footer';

const ForgetPassword = () => {
	return (
		<div>
			<Topbar />
			<div className="min-h-screen bg-[#F9FAFB] flex items-center justify-center py-4">
				<div className="w-full max-w-md bg-white p-8 rounded-2xl shadow-lg">
					<form className="space-y-4 max-w-md mx-auto mt-8">
						<h2 className="text-2xl font-bold mb-4 text-center">
							Reset Password
						</h2>

						<div>
							<label
								className="block text-sm font-medium text-gray-700 mb-1"
								htmlFor="email"
							>
								Email Address
							</label>
							<input
								type="email"
								id="email"
								placeholder="john@example.com"
								className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:outline-none"
							/>
						</div>

						<input
							type="submit"
							value="Send Reset Link"
							className="w-full bg-blue-500 text-white py-2 rounded-lg font-medium hover:bg-blue-600 cursor-pointer"
						/>
					</form>
				</div>
			</div>
			<Footer />
		</div>
	);
};

export default ForgetPassword;
