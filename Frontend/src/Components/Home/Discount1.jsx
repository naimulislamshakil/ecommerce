import React from 'react';

const Discount1 = () => {
	return (
		<div className="container mx-auto py-7 px-3 md:px-0">
			<div className="grid grid-cols-1 md:grid-cols-3 gap-3">
				<div className="airport-img rounded-md flex justify-end items-center p-5">
					<div>
						<h4 className="text-white text-lg">Big Saving</h4>
						<h4 className="text-white text-2xl font-semibold font-poppins">
							Apple Airpods
						</h4>
						<button className="mt-1 py-2 px-4 bg-[#facd00] font-semibold rounded-full">
							Save 20%
						</button>
					</div>
				</div>
				<div className="smartwatch-img rounded-md flex justify-end items-center p-5">
					<div>
						<h4 className="text-lg">New Arrivals</h4>
						<h4 className="text-xl font-semibold font-poppins">
							Smart Watches
						</h4>
						<button className="mt-1 py-2 px-4 bg-[#000] text-white font-semibold rounded-full">
							Shop Now
						</button>
					</div>
				</div>
				<div className="laptop-img rounded-md flex justify-end items-center p-5">
					<div>
						<h4 className="text-white text-lg">New Generation</h4>
						<h4 className="text-white text-xl font-semibold font-poppins">
							Branded Laptop
						</h4>
						<button className="mt-1 py-2 px-4 bg-[#facd00] font-semibold rounded-full">
							Save 40%
						</button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Discount1;
