import React from 'react';
import { useState } from 'react';
import alien from '../../assets/alien.gif';
import cyborg from '../../assets/cyborg.gif';
import zombie from '../../assets/zombie.gif';
import skin from '../../assets/skin.gif';
import legend from '../../assets/red_mask.gif';

const Hunkz = () => {
	// Destructured object that holds the images for each item
	const hunkz = { skin, alien, cyborg, zombie, legend };

	// store the selected image to be displayed in state
	const [selected, setSelected] = useState();

	console.log(selected);

	// On click function placed on each button that sets the displayed image to the selected image
	return (
		<div className='hunkz-display'>
			<div className='hunkz-title'>Hunkz</div>
			<div className='hunkz-img'>
				<img src={selected} alt='' />
			</div>
			<div className='hunkz-selector'>
				<button onClick={() => setSelected(hunkz.skin)} id='skin'>
					Skin
				</button>
				<button onClick={() => setSelected(hunkz.alien)} id='alien'>
					Alien
				</button>
				<button onClick={() => setSelected(hunkz.zombie)} id='zombie'>
					Zombie
				</button>
				<button onClick={() => setSelected(hunkz.cyborg)} id='cyborg'>
					Cyborg
				</button>
				<button onClick={() => setSelected(hunkz.legend)} id='legend'>
					Legendary
				</button>
			</div>
		</div>
	);
};

export default Hunkz;
