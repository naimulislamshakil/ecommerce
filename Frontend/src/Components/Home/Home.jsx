import React from 'react';
import Topbar from '../Common/Topbar';
import Banner from './Banner';
import TopProduct from './TopProduct';

const Home = () => {
	return (
		<div>
			<Topbar />
			<Banner />
			<TopProduct/>
		</div>
	);
};

export default Home;
