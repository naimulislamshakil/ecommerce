import React from 'react';

const Discount2 = () => {
	return (
		<div className="container mx-auto py-7 px-3 md:px-0">
			<div className="grid grid-cols-1 md:grid-cols-3 gap-3">
				<div className="phone-img rounded-md flex justify-end items-center pr-16 col-span-2">
					<div>
						<h4 className="text-lg text-white">New Generation</h4>
						<h4 className="text-2xl text-white font-semibold font-poppins">
							New Redmi Note 8 Pro.
						</h4>
						<button className="mt-1 py-2 px-4 bg-[#facd00] text-black font-semibold rounded-full">
							Shop Now
						</button>
					</div>
				</div>
				<div className="headset-img rounded-md flex justify-start items-center p-5">
					<div>
						<h4 className="text-white text-lg">New Generation</h4>
						<h4 className="text-white text-xl font-semibold font-poppins">
							Branded Laptop
						</h4>
						<button className="mt-1 py-2 px-4 bg-[#000] text-white font-semibold rounded-full">
							Save 40%
						</button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Discount2;
