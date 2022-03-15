import React from 'react';
import { useState } from 'react';
import hunkz from '../../utils/demoHunkz';

const Hunkz = () => {
	// store the selected image and description to be displayed in state
	const [selected, setSelected] = useState(hunkz[0]);
	const [index, setIndex] = useState(0);

	console.log(selected, index);

	const onClick = (e) => {
		// console.log(e.target.attributes[1].value);
		// console.log(e.target.attributes[2].value);
		// console.log(e);
		// const active = e.target.attributes[2].value;
		const index = e.target.attributes[0].value;
		// console.log(index);
		setSelected(hunkz[index]);
		setIndex(index);
		// if (active === 'false') {
		// }
	};

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
					{/* <button onClick={() => setSelected(hunkz[0])} id='skin'>
						<span className='hunkz-type'>Humanoid</span>
					</button>
					<button onClick={() => setSelected(hunkz[1])} id='alien'>
						<span className='hunkz-type'>Alien</span>
					</button>
					<button onClick={() => setSelected(hunkz[2])} id='cyborg'>
						<span className='hunkz-type'>Cyborg</span>
					</button>
					<button onClick={() => setSelected(hunkz[3])} id='zombie'>
						<span className='hunkz-type'>Zombie</span>
					</button>
					<button onClick={() => setSelected(hunkz[4])} id='legend'>
						<span className='hunkz-type'>Legendary</span>
					</button> */}
					<button
						onClick={onClick}
						data-number='0'
						data-selected='false'
						id='skin'
						className={`${index === '0' ? 'active-class' : null}`}>
						<span className='hunkz-type'>Humanoid</span>
					</button>
					<button
						onClick={onClick}
						data-number='1'
						data-selected='false'
						id='alien'
						className={`${index === '1' ? 'active-class' : null}`}>
						<span className='hunkz-type'>Alien</span>
					</button>
					<button
						onClick={onClick}
						data-number='2'
						data-selected='false'
						id='cyborg'
						className={`${index === '2' ? 'active-class' : null}`}>
						<span className='hunkz-type'>Cyborg</span>
					</button>
					<button
						onClick={onClick}
						data-number='3'
						data-selected='false'
						id='zombie'
						className={`${index === '3' ? 'active-class' : null}`}>
						<span className='hunkz-type'>Zombie</span>
					</button>
					<button
						onClick={onClick}
						data-number='4'
						data-selected='false'
						id='legend'
						className={`${index === '4' ? 'active-class' : null}`}>
						<span className='hunkz-type'>Legendary</span>
					</button>
				</div>
				{/* <div className='hunkz-selector'>
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
				</div> */}
			</div>
		</div>
	);
};

export default Hunkz;
