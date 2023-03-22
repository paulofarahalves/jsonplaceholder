import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import './style.css';
import Api from '../../helpers/Api';

const User = () => {
	const { id } = useParams();

	const [userInfo, setUserInfo] = useState({});

	useEffect(() => {
		const loadUserInfo = async () => {
			let userInformation = await Api.getUserInfo(id);
			setUserInfo(userInformation);
		};
		loadUserInfo();
	}, [id]);

	return (
		<div className="page">
			<h1>User</h1>
			<h3>
				#{userInfo.id} {userInfo.username}
			</h3>
			<div className="userInfos">
				<div className="userInfo">
					<strong>Name:</strong> {userInfo.name}
				</div>
				<div className="userInfo">
					<strong>Email:</strong> {userInfo.email}
				</div>
				<div className="userInfo">
					<strong>Phone:</strong> {userInfo.phone}
				</div>
				<div className="userInfo">
					<strong>Website:</strong> {userInfo.website}
				</div>
			</div>
		</div>
	);
};

export default User;
