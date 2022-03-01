import React from 'react';
import { useState } from 'react';
import alien from '../../assets/alien.gif';
import cyborg from '../../assets/cyborg.gif';
import zombie from '../../assets/zombie.gif';
import skin from '../../assets/skin.gif';
import legend from '../../assets/red_mask.gif';

const Hunkz = () => {
	// Destructured object that holds the images for each item
	// const hunkz = { skin, alien, cyborg, zombie, legend };
	const hunkz2 = [
		{
			image: skin,
			description:
				'The humanoids are the most prevalent group of Hunkz. They are the benchmark for strength in the metaverse and none can match their supremacy.',
		},
		{
			image: alien,
			description:
				'The alien Hunkz are beings have existed for eons and are distinguished by their gills, which allow them to lift ridiculously large amounts of weight.',
		},
		{
			image: cyborg,
			description:
				'The cyborg Hunkz are those who chose to augment parts of their bodies in order to increase the amount of physical activity they could perform. ',
		},
		{
			image: zombie,
			description:
				'The zombie Hunkz are those whose desire to pump outlasted even death,  furthering the reputation of the Hunkz being the strongest in the metaverse.',
		},
		{
			image: legend,
			description:
				'The legendary Hunkz are the most elite of all the Hunkz. Each of them is known for accomplishing a feat that is considered impossible to surpass.',
		},
	];

	// store the selected image to be displayed in state
	const [selected, setSelected] = useState();

	console.log(selected, selected.description, selected.image);

	// On click function placed on each button that sets the displayed image to the selected image
	return (
		<div className='hunkz-display'>
			<div className='hunkz-title'>Hunkz</div>
			{/* <div className='hunkz-img'>
				<img src={selected} alt='' />
			</div> */}
			<div className='hunkz-card'>
				<div className='hunkz-img'>
					<img src={selected.image} alt='' />
				</div>
				<p>{selected.description}</p>
			</div>
			<div className='hunkz-selector'>
				<button onClick={() => setSelected(hunkz2[0])} id='skin'>
					Humanoid
				</button>
				<button onClick={() => setSelected(hunkz2[1])} id='alien'>
					Alien
				</button>
				<button onClick={() => setSelected(hunkz2[2])} id='cyborg'>
					Cyborg
				</button>
				<button onClick={() => setSelected(hunkz2[3])} id='zombie'>
					Zombie
				</button>
				<button onClick={() => setSelected(hunkz2[4])} id='legend'>
					Legendary
				</button>
			</div>
		</div>
	);
};

export default Hunkz;
