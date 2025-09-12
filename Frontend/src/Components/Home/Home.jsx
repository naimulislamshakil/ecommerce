import React from 'react';
import Topbar from '../Common/Topbar';
import Banner from './Banner';
import ShopCategories from './ShopCategories';
import Discount1 from './Discount1';
import FaturedProduct from './FaturedProduct';
import Discount2 from './Discount2';
import BestSellingProduct from './BestSellingProduct';
import Footer from '../Common/Footer';
import Discount3 from './Discount3';
import NewProduct from './NewProduct';

const Home = () => {
	return (
		<div>
			<Topbar />
			<Banner />
			<ShopCategories />
			<Discount1 />
			<FaturedProduct />
			<Discount2 />
			<BestSellingProduct />
			<Discount3 />
			<NewProduct />
			<Footer />
		</div>
	);
};

export default Home;
