import React from 'react';
import { useState } from 'react';
import hunkz from '../../utils/demoHunkz';

const Hunkz = () => {
	// store the selected image and description to be displayed in state
	const [selected, setSelected] = useState(hunkz[0]);

	console.log(selected, selected.description, selected.image);

	// On click function placed on each button that sets the displayed image to the selected image
	return (
		<div className='hunkz-display'>
			<div className='hunkz-wrapper'>
				<div className='hunkz-title'>Hunkz</div>
				<div className='hunkz-card'>
					<div className='hunkz-img'>
						<img src={selected.image} alt='' />
					</div>
					<p>{selected.description}</p>
				</div>
				<div className='hunkz-selector'>
					<button onClick={() => setSelected(hunkz[0])} id='skin'>
						Humanoid
					</button>
					<button onClick={() => setSelected(hunkz[1])} id='alien'>
						Alien
					</button>
					<button onClick={() => setSelected(hunkz[2])} id='cyborg'>
						Cyborg
					</button>
					<button onClick={() => setSelected(hunkz[3])} id='zombie'>
						Zombie
					</button>
					<button onClick={() => setSelected(hunkz[4])} id='legend'>
						Legendary
					</button>
				</div>
				{/* <div className='hunkz-selector-large'>
					<button onClick={() => setSelected(hunkz[0])} id='skin'>
						Humanoid
					</button>
					<button onClick={() => setSelected(hunkz[1])} id='alien'>
						Alien
					</button>
					<button onClick={() => setSelected(hunkz[2])} id='cyborg'>
						Cyborg
					</button>
					<button onClick={() => setSelected(hunkz[3])} id='zombie'>
						Zombie
					</button>
					<button onClick={() => setSelected(hunkz[4])} id='legend'>
						Legendary
					</button>
				</div>
				<div className='hunkz-selector-mobile'>
					<button onClick={() => setSelected(hunkz[0])} id='skin'></button>
					<button onClick={() => setSelected(hunkz[1])} id='alien'></button>
					<button onClick={() => setSelected(hunkz[2])} id='cyborg'></button>
					<button onClick={() => setSelected(hunkz[3])} id='zombie'></button>
					<button onClick={() => setSelected(hunkz[4])} id='legend'></button>
				</div> */}
			</div>
		</div>
	);
};

export default Hunkz;
