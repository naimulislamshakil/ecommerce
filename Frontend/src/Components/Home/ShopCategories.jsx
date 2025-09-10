import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import Watch from '@/assets/watch.jpg';
import Speker from '@/assets/speker.jpg';
import Phone from '@/assets/phone.jpg';
import Home from '@/assets/Home.jpg';
import Game from '@/assets/game.jpg';
import Accessories from '@/assets/accessories.jpg';
import { Link } from 'react-router-dom';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

const ShopCategories = () => {
	const cards = [
		{
			image: Watch,
			name: 'Shop All',
			path: '/shop-all',
			subMenus: [
				{ name: 'Automotive', path: '/automotive' },
				{ name: 'Smart Home', path: '/smart-home' },
				{ name: 'Printers', path: '/printers' },
				{ name: 'Warranties & Services', path: '/warranties-services' },
			],
		},
		{
			image: Speker,
			name: 'Speakers',
			path: '/speakers',
			subMenus: [
				{ name: 'Boomboxes', path: '/boomboxes' },
				{ name: 'Radios', path: '/radios' },
				{ name: 'Portable Speakers', path: '/portable-speakers' },
				{ name: 'Minidise Players', path: '/minidise-players' },
			],
		},
		{
			image: Phone,
			name: 'Electronic',
			path: '/electronic',
			subMenus: [
				{ name: 'Smartphones & Mobiles', path: '/smartphones-and-mobiles' },
				{ name: 'Computers & Laptops', path: '/computers-and-laptops' },
			],
		},
		{
			image: Home,
			name: 'Home Audio',
			path: '/home-audio',
			subMenus: [
				{ name: 'Digital Voice Recorders', path: '/digital-voice-recorders' },
				{ name: 'Cassette Players', path: '/cassette-players' },
				{ name: 'Cassette Recorders', path: '/cassette-recorders' },
				{ name: 'DVD Players', path: '/dvd-players' },
			],
		},
		{
			image: Game,
			name: 'Gaming Accessories',
			path: '/gaming-accessories',
			subMenus: [
				{ name: 'Playstation 3', path: '/playstation-3' },
				{ name: 'Playstation 4', path: '/playstation-4' },
				{ name: 'Playstation vita', path: '/playstation-vita' },
				{ name: 'Sony PSP', path: '/sony-psp' },
			],
		},
		{
			image: Watch,
			name: 'Shop All',
			path: '/shop-all',
			subMenus: [
				{ name: 'Automotive', path: '/automotive' },
				{ name: 'Smart Home', path: '/smart-home' },
				{ name: 'Printers', path: '/printers' },
				{ name: 'Warranties & Services', path: '/warranties-services' },
			],
		},
	];

	const responsive = {
		superLargeDesktop: {
			// the naming can be any, depends on you.
			breakpoint: { max: 4000, min: 3000 },
			items: 5,
		},
		desktop: {
			breakpoint: { max: 3000, min: 1024 },
			items: 4,
		},
		tablet: {
			breakpoint: { max: 1024, min: 464 },
			items: 3,
		},
		mobile: {
			breakpoint: { max: 464, min: 0 },
			items: 1,
		},
	};
	return (
		<div className="container mx-auto px-5 md:px-0">
			<div className="py-5">
				<h2 className="text-2xl font-semibold">Shop Categories</h2>
			</div>

			<Carousel
				responsive={responsive}
				infinite={true}
				autoPlay={true}
				autoPlaySpeed={4000}
				arrows={false}
				customTransition="all 0.5s ease-in" // ✅ transition property
				transitionDuration={500}
			>
				{cards.map((cardInfo, i) => (
					<div key={i} className="mr-4">
						<img
							className="mb-3 w-full transition-transform duration-500 ease-in-out transform hover:scale-105"
							src={cardInfo.image}
							alt={cardInfo.name}
						/>
						<Link
							to={cardInfo.path}
							className="text-md font-semibold font-poppins"
						>
							{cardInfo.name}
						</Link>

						<div className="flex flex-col mt-3">
							{cardInfo.subMenus.map((route, i) => (
								<Link
									to={route.path}
									className="flex items-center text-gray-600"
									key={i}
								>
									<ChevronRight size="15px" />
									{route.name}
								</Link>
							))}
						</div>

						<Link
							to={cardInfo.path}
							className="flex items-center text-gray-600"
							key={i}
						>
							<ChevronRight size="15px" />
							View All
						</Link>
					</div>
				))}
			</Carousel>
		</div>
	);
};

export default ShopCategories;
