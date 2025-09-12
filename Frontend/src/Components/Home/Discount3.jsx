import React from 'react';

const Discount3 = () => {
	return (
		<div className="container mx-auto py-7 px-3 md:px-0">
			<div className="grid grid-cols-1 md:grid-cols-2 gap-3">
				<div className="football-img rounded-md flex justify-end items-center pr-16">
					<div>
						<h4 className="text-lg text-white">Big Discounts</h4>
						<h4 className="text-2xl text-white font-semibold font-poppins">
							Latest Sport's <br /> Accessories.
						</h4>
						<button className="mt-1 py-2 px-4 bg-[#facd00] text-black font-semibold rounded-full">
							Shop Now
						</button>
					</div>
				</div>
				<div className="tv-img rounded-md flex justify-end items-center p-16">
					<div>
						<h4 className="text-black text-lg">Save 35% - 45% OFF</h4>
						<h4 className="text-black text-xl font-semibold font-poppins">
							Smart TV with <br /> High Quality
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

export default Discount3;
