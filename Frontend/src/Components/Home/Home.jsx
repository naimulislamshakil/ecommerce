import React from 'react';
import Topbar from '../Common/Topbar';
import Banner from './Banner';
import TopProduct from './TopProduct';
import ShopCategories from './ShopCategories';

const Home = () => {
	return (
		<div>
			<Topbar />
			<Banner />
			<ShopCategories />
			<TopProduct />
		</div>
	);
};

export default Home;
