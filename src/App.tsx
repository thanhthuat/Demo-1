import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './style/main.scss';
import Header from './components/Header/header';
import LayoutContainer from './components/Container/layout-container';
function App() {
	return (
		<>
			<Header />
			<div className="wapper mt-3">
				<LayoutContainer />
			</div>
		</>
	);
}

export default App;
