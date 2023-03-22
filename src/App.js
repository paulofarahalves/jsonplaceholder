import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Home from './pages/Home';
import User from './pages/User';
import Footer from './components/Footer';

function App() {
	return (
		<>
			<Header />
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/user/:id" element={<User />} />
			</Routes>
			<Footer />
		</>
	);
}

export default App;
