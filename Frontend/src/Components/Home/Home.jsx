import React from 'react';
import Topbar from '../Common/Topbar';
import Banner from './Banner';
import TopProduct from './TopProduct';
import ShopCategories from './ShopCategories';
import Discount1 from './Discount1';

const Home = () => {
	return (
		<div>
			<Topbar />
			<Banner />
			<ShopCategories />
			<Discount1 />
			<TopProduct />
		</div>
	);
};

export default Home;
