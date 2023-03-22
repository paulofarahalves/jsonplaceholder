import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Home from './pages/Home';
import User from './pages/User';
import Footer from './components/Footer';
import './App.css';

function App() {
	return (
		<>
			<Header />
			<div className="page">
				<Routes>
					<Route path="/jsonplaceholder" element={<Home />} />
					<Route
						path="/jsonplaceholder/user/:id"
						element={<User />}
					/>
				</Routes>
			</div>

			<Footer />
		</>
	);
}

export default App;
