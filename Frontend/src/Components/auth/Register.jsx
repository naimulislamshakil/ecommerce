import React from 'react';
import { setTitle } from '../../CustomHook/Title';
import Topbar from '../Common/Topbar';
import Footer from '../Common/Footer';

const Register = () => {
	setTitle('Student Register');
	return (
		<div>
			<Topbar />
			<div className="min-h-screen bg-[#F9FAFB] flex items-center justify-center py-4">
				<div className="w-full max-w-md bg-white p-8 rounded-2xl shadow-lg">
					<h2 className="text-2xl font-heading font-bold text-black mb-6 text-center">
						Register
					</h2>

					{/* Standard Registration Form */}
					<form className="space-y-4">
						<div>
							<label
								className="block text-sm font-medium text-text-secondary mb-1"
								htmlFor="fullName"
							>
								Full Name
							</label>
							<input
								type="text"
								id="fullName"
								placeholder="John Doe"
								className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary focus:outline-none"
							/>
						</div>

						<div>
							<label
								className="block text-sm font-medium text-text-secondary mb-1"
								htmlFor="email"
							>
								Email
							</label>
							<input
								type="email"
								id="email"
								placeholder="john@example.com"
								className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary focus:outline-none"
							/>
						</div>

						<div>
							<label
								className="block text-sm font-medium text-text-secondary mb-1"
								htmlFor="password"
							>
								Password
							</label>
							<input
								type="password"
								id="password"
								placeholder="********"
								className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary focus:outline-none"
							/>
						</div>

						<div>
							<label
								className="block text-sm font-medium text-text-secondary mb-1"
								htmlFor="confirmPassword"
							>
								Confirm Password
							</label>
							<input
								type="password"
								id="confirmPassword"
								placeholder="********"
								className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary focus:outline-none"
							/>
						</div>

						<input
							type="submit"
							value="Register"
							className="w-full bg-blue-500 text-white py-2 rounded-lg font-medium hover:bg-blue-600 transition-colors cursor-pointer"
						/>

						<p className="text-sm text-text-secondary text-center">
							Already have an account?{' '}
							<a
								href="/login"
								className="text-blue-500 font-medium hover:underline"
							>
								Login
							</a>
						</p>
					</form>

					<div className="flex items-center my-6">
						<hr className="flex-1 border-gray-300 dark:border-gray-600" />
						<span className="px-2 text-gray-500 dark:text-gray-400 text-sm">
							or
						</span>
						<hr className="flex-1 border-gray-300 dark:border-gray-600" />
					</div>

					{/* Social Media Section */}
					<div className="flex flex-col space-y-3 mb-6">
						<input
							type="button"
							value="Register with Google"
							className="w-full flex items-center justify-center gap-2 py-2 rounded-lg border border-gray-300 hover:bg-gray-100 transition-colors cursor-pointer"
						/>
						<input
							type="button"
							value="Register with Facebook"
							className="w-full flex items-center justify-center gap-2 py-2 rounded-lg border border-gray-300 hover:bg-gray-100 transition-colors cursor-pointer"
						/>
					</div>
				</div>
			</div>
			<Footer />
		</div>
	);
};

export default Register;
