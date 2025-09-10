import React from 'react';
import Topbar from '../Common/Topbar';
import Banner from './Banner';
import ShopCategories from './ShopCategories';
import Discount1 from './Discount1';
import FaturedProduct from './FaturedProduct';
import Discount2 from './Discount2';

const Home = () => {
	return (
		<div>
			<Topbar />
			<Banner />
			<ShopCategories />
			<Discount1 />
			<FaturedProduct />
			<Discount2 />
		</div>
	);
};

export default Home;
