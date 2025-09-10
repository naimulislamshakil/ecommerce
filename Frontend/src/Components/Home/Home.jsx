import React from 'react';
import Topbar from '../Common/Topbar';
import Banner from './Banner';
import ShopCategories from './ShopCategories';
import Discount1 from './Discount1';
import FaturedProduct from './FaturedProduct';

const Home = () => {
	return (
		<div>
			<Topbar />
			<Banner />
			<ShopCategories />
			<Discount1 />
			<FaturedProduct />
		</div>
	);
};

export default Home;
