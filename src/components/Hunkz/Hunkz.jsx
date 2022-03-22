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
					<button
						onClick={onClick}
						data-number='0'
						data-selected='false'
						id='skin'
						className={`hunkz-button ${
							index === '0' ? 'selected-hunk' : null
						}`}>
						<span className='hunkz-type'>Humanoid</span>
					</button>
					<button
						onClick={onClick}
						data-number='1'
						data-selected='false'
						id='alien'
						className={`hunkz-button ${
							index === '1' ? 'selected-hunk' : null
						}`}>
						<span className='hunkz-type'>Alien</span>
					</button>
					<button
						onClick={onClick}
						data-number='2'
						data-selected='false'
						id='cyborg'
						className={`hunkz-button ${
							index === '2' ? 'selected-hunk' : null
						}`}>
						<span className='hunkz-type'>Cyborg</span>
					</button>
					<button
						onClick={onClick}
						data-number='3'
						data-selected='false'
						id='zombie'
						className={`hunkz-button ${
							index === '3' ? 'selected-hunk' : null
						}`}>
						<span className='hunkz-type'>Zombie</span>
					</button>
					<button
						onClick={onClick}
						data-number='4'
						data-selected='false'
						id='legend'
						className={`hunkz-button ${
							index === '4' ? 'selected-hunk' : null
						}`}>
						<span className='hunkz-type'>Legendary</span>
					</button>
				</div>
			</div>
		</div>
	);
};

export default Hunkz;
