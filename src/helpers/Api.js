const API_BASE = 'https://jsonplaceholder.typicode.com';

const basicFetch = async (endpoint) => {
	const req = await fetch(`${API_BASE}${endpoint}`);
	const json = await req.json();
	return json;
};

const Api = {
	getAllPosts: async () => {
		return await basicFetch('/posts');
	},

	getPostsComments: async (postId) => {
		return await basicFetch(`/posts/${postId}/comments`);
	},
	getAllUsers: async () => {
		return await basicFetch(`/users`);
	},
	getUserInfo: async (id) => {
		return await basicFetch(`/users/${id}`);
	},
};

export default Api;
