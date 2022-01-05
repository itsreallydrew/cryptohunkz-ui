import React from 'react';
import testImage from '../../assets/Arnold-breathing-animation-2.gif';

const Team = () => {
	return (
		<div className='team'>
			<div className='team-member'>
				<div className='team-member-frame'>
					<img src={testImage} alt='' />
				</div>
				<h3>Vanilla Face</h3>
			</div>
			<div className='team-member'>
				<div className='team-member-frame'>
					<img src={testImage} alt='' />
				</div>
				<h3>RKhavoc</h3>
			</div>
			<div className='team-member'>
				<div className='team-member-frame'>
					<img src={testImage} alt='' />
				</div>
				<h3>Junji</h3>
			</div>
			<div className='team-member'>
				<div className='team-member-frame'>
					<img src={testImage} alt='' />
				</div>
				<h3>itsreallydrew</h3>
			</div>
		</div>
	);
};

export default Team;
