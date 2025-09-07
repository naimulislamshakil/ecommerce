import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import Slider1 from '@/assets/slider.jpg';
import Slider2 from '@/assets/slider1.jpg';

const Banner = () => {
	const slides = [
		{
			img: Slider1,
			title: 'Beautiful Mountain',
			desc: 'Experience the serene beauty of the mountains.',
			text: 'Shop Now',
		},
		{
			img: Slider2,
			title: 'Peaceful Lake',
			desc: 'Relax and unwind near the calm waters.',
			text: 'Buy Now',
		},
	];

	const [current, setCurrent] = useState(0);

	const prevSlide = () => {
		setCurrent((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
	};

	const nextSlide = () => {
		setCurrent((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
	};
	return (
		<div className="relative w-full">
			{/* Image */}
			<div className="overflow-hidden relative">
				<img
					src={slides[current].img}
					alt={slides[current].title}
					className="w-full h-64 md:h-[500px] object-cover transition-all duration-500"
				/>

				{/* Text Overlay */}
				<div className="absolute inset-0 bg-black/40 flex flex-col justify-center p-10 pl-20 text-white">
					<h2 className="text-2xl md:text-4xl font-bold">
						{slides[current].title}
					</h2>
					<p className="text-sm md:text-lg">{slides[current].desc}</p>

					<button className="w-fit bg-blue-500 text-white py-2 px-7 mt-2 rounded-lg font-medium hover:bg-blue-600 transition-colors cursor-pointer">
						{slides[current].text}
					</button>
				</div>

				{/* Dots Inside Image */}
				<div className="absolute bottom-4 w-full flex justify-center gap-2">
					{slides.map((_, index) => (
						<button
							key={index}
							onClick={() => setCurrent(index)}
							className={`w-3 h-3 rounded-full transition ${
								current === index ? 'bg-blue-500' : 'bg-white/70'
							}`}
						/>
					))}
				</div>
			</div>

			{/* Left Button */}
			<button
				onClick={prevSlide}
				className="absolute top-1/2 left-4 -translate-y-1/2 bg-black/50 text-white p-2 rounded-full hover:bg-black transition"
			>
				<ChevronLeft className="w-6 h-6" />
			</button>

			{/* Right Button */}
			<button
				onClick={nextSlide}
				className="absolute top-1/2 right-4 -translate-y-1/2 bg-black/50 text-white p-2 rounded-full hover:bg-black transition"
			>
				<ChevronRight className="w-6 h-6" />
			</button>
		</div>
	);
};

export default Banner;
