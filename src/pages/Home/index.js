import React, { useState, useEffect } from 'react';
import Post from '../../components/Post';
import Api from '../../helpers/Api';
import './style.css';

function Home() {
	const [posts, setPosts] = useState([]);
	const [users, setUsers] = useState([]);
	const [loading, setLoading] = useState(false);

	useEffect(() => {
		setLoading(true);
		const loadAllPosts = async () => {
			let postList = await Api.getAllPosts();
			setPosts(postList);
		};
		loadAllPosts();
		setLoading(false);
	}, []);

	useEffect(() => {
		const loadAllUsers = async () => {
			let userList = await Api.getAllUsers();
			setUsers(userList);
		};
		loadAllUsers();
	}, []);

	return (
		<div className="page">
			<h1>Posts</h1>
			{loading && <p>Loading posts...</p>}
			{!loading && (
				<ul className="posts">
					{posts.map((post) => (
						<Post post={post} users={users} key={post.id} />
					))}
				</ul>
			)}
		</div>
	);
}

export default Home;
