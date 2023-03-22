import React from 'react';
import { Link } from 'react-router-dom';
import './style.css';

export default function Header() {
	return (
		<nav id="header">
			<Link to={'/jsonplaceholder'}>
				<h4>Home</h4>
			</Link>
		</nav>
	);
}
