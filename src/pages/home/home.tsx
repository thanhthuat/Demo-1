import React from 'react';
import {LayoutContainer} from '../../components/container';
import AppTest from '../../components/demo/TestDnd';
import {Header} from '../../components/header';

function Home() {
	return (
		<>
			<Header />
			<div className="wapper mt-3">
				{/* <AppTest/> */}
				<LayoutContainer />
			</div>
		</>
	);
}

export default Home;
