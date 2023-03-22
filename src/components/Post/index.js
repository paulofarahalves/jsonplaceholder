import React, { useState, useEffect } from 'react';
import './style.css';
import Api from '../../helpers/Api';
import { Link } from 'react-router-dom';

export default function Post({ post, users }) {
	const [selectedPost, setSelectedPost] = useState(null);
	const [comments, setComments] = useState([]);

	useEffect(() => {
		if (selectedPost) {
			const loadPostComments = async () => {
				let commentList = await Api.getPostsComments(selectedPost.id);
				setComments(commentList);
			};
			loadPostComments();
		}
	}, [selectedPost]);

	const handlePostClick = (post) => {
		if (selectedPost === post) {
			setSelectedPost(null);
		} else {
			setSelectedPost(post);
		}
	};

	let user = users?.filter((x) => x.id === post.userId)[0];

	return (
		<div className="postArea" onClick={() => handlePostClick(post)}>
			<li key={post.id} className="post">
				<h4>
					<Link to={`/user/${post.userId}`}>{user?.username}</Link>:{' '}
					{post.title}
				</h4>
			</li>
			<>
				{selectedPost && selectedPost.id === post.id && (
					<div className="commentsArea">
						<p>{selectedPost.body}</p>
						<h4>Comments</h4>
						<ul className="comments">
							{comments.map((comment) => (
								<li key={comment.id} className="comment">
									<h5>{comment.name}</h5>
									<p>{comment.body}</p>
								</li>
							))}
						</ul>
					</div>
				)}
			</>
		</div>
	);
}
