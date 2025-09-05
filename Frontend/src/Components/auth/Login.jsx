import React from 'react';
import { setTitle } from '../../CustomHook/Title';

const Login = () => {
	setTitle('Login');
	return (
		<div className="min-h-screen bg-gray-100 flex items-center justify-center px-4">
			<div className="w-full max-w-md bg-white p-8 rounded-2xl shadow-lg">
				<h2 className="text-2xl font-heading font-bold text-black mb-6 text-center">
					Login
				</h2>

				{/* Login Form */}
				<form className="space-y-4">
					{/* Email */}
					<div>
						<label
							className="block text-sm font-medium text-gray-700 mb-1"
							htmlFor="email"
						>
							Email
						</label>
						<input
							type="email"
							id="email"
							placeholder="john@example.com"
							className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:outline-none"
						/>
					</div>

					{/* Password */}
					<div>
						<label
							className="block text-sm font-medium text-gray-700 mb-1"
							htmlFor="password"
						>
							Password
						</label>
						<input
							type="password"
							id="password"
							placeholder="********"
							className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:outline-none"
						/>
					</div>

					{/* Submit Button */}
					<input
						type="submit"
						value="Login"
						className="w-full bg-blue-500 text-white py-2 rounded-lg font-medium hover:bg-blue-600 transition-colors cursor-pointer"
					/>

					{/* Additional Links */}

					<div className="flex flex-col space-y-2 mt-4">
						<p className="text-sm text-gray-600 text-center">
							Don't have an account?{' '}
							<a
								href="/register"
								className="text-blue-500 font-medium hover:underline"
							>
								Register here
							</a>
						</p>

						<p className="text-sm text-gray-600 text-center">
							<a
								href="/forgot-password"
								className="text-blue-500 font-medium hover:underline"
							>
								Forgot Password?
							</a>
						</p>
					</div>
				</form>

				<div className="flex items-center my-6">
					<hr className="flex-1 border-gray-300" />
					<span className="px-2 text-gray-500 text-sm">or</span>
					<hr className="flex-1 border-gray-300" />
				</div>

				{/* Social Media Section */}
				<div className="flex flex-col space-y-3 mb-6">
					<input
						type="button"
						value="Login with Google"
						className="w-full flex items-center justify-center gap-2 py-2 rounded-lg border border-gray-300 hover:bg-gray-100 transition-colors cursor-pointer"
					/>
					<input
						type="button"
						value="Login with Facebook"
						className="w-full flex items-center justify-center gap-2 py-2 rounded-lg border border-gray-300 hover:bg-gray-100 transition-colors cursor-pointer"
					/>
				</div>
			</div>
		</div>
	);
};

export default Login;
