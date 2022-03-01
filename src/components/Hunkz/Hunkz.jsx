import React from 'react';
import { useState } from 'react';
import alien from '../../assets/alien.gif';
import cyborg from '../../assets/cyborg.gif';
import zombie from '../../assets/zombie.gif';
import skin from '../../assets/skin.gif';
import legend from '../../assets/red_mask.gif';

const Hunkz = () => {
	const [active, setActive] = useState(false);

	const onClick = (e) => {
		console.log(e.target.id, e.target.className);
		if (e.target.id === e.target.className) setActive(true);
	};
	return (
		<div className='hunkz-display'>
			Hunkz
			<div className='hunkz-img'>
				<img
					src={skin}
					alt=''
					className={`skin ${active ? 'active' : null} `}
				/>
				<img
					src={alien}
					alt=''
					className={`alien ${active ? 'active' : null} `}
				/>
				<img
					src={zombie}
					alt=''
					className={`zombie ${active ? 'active' : null} `}
				/>
				<img
					src={cyborg}
					alt=''
					className={`cyborg ${active ? 'active' : null} `}
				/>
				<img
					src={legend}
					alt=''
					className={`legend ${active ? 'active' : null} `}
				/>
			</div>
			<div className='hunkz-selector'>
				<button onClick={onClick} id='skin' className='skin'>
					Skin
				</button>
				<button onClick={onClick} id='alien' className='alien'>
					Alien
				</button>
				<button onClick={onClick} id='zombie' className='zombie'>
					Zombie
				</button>
				<button onClick={onClick} id='cyborg' className='cyborg'>
					Cyborg
				</button>
				<button onClick={onClick} id='legend' className='legend'>
					Legendary
				</button>
			</div>
		</div>
	);
};

export default Hunkz;
