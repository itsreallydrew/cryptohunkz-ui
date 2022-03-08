import React from 'react';
import HunkzLogo from '../../assets/Pixelated 3D logo.mp4';

const LandingPage = () => {
	return (
		<div className='banner'>
			{/* <img
				src='https://kaijukingz.io/static/media/KaijuKingz-1000px.6d41b11e.png'
				alt='cryptohunkz'
			/> */}
			<div className='video-container'>
				<video src={HunkzLogo} autoPlay loop></video>
			</div>
			<p>
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed tempora
				assumenda voluptates sint vel nihil enim consequuntur minima architecto
				quam. Optio consectetur quam quaerat beatae eligendi. Doloribus
				asperiores quisquam natus? 7777 CryptoHunkz coming to overtake the
				metaverse and establish themselves as the premier
			</p>
			<a href='#' className='discord-button'>
				Join our discord
			</a>
		</div>
	);
};

export default LandingPage;
