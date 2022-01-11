import React from 'react';

const FAQ = () => {
	return (
		<div className='faq-page' id='faqPage'>
			<h1>FAQ</h1>
			<div className='faq-accordion-item'>
				<h4 className='faq-accordion-header' id='headingOne'>
					<button
						className='faq-accordion-button collapsed'
						type='button'
						data-bs-toggle='collapse'
						data-bs-target='#collapseOne'
						aria-expanded='false'
						aria-controls='collapseOne'>
						What is this project about?
					</button>
				</h4>
				<div
					id='collapseOne'
					className='accordion-collapse collapse'
					aria-labelledby='headingOne'
					data-bs-parent='#faqPage'>
					<div className='faq-accordion-body'>
						<p>Being pumped.</p>
					</div>
				</div>
			</div>

			<div className='faq-accordion-item'>
				<h4 className='faq-accordion-header' id='headingTwo'>
					<button
						className='faq-accordion-button collapsed'
						type='button'
						data-bs-toggle='collapse'
						data-bs-target='#collapseTwo'
						aria-expanded='false'
						aria-controls='collapseTwo'>
						What's the price?
					</button>
				</h4>
				<div
					id='collapseTwo'
					className='accordion-collapse collapse'
					aria-labelledby='headingTwo'
					data-bs-parent='#faqPage'>
					<div className='faq-accordion-body'>
						<p>0.077E.</p>
					</div>
				</div>
			</div>

			<div className='faq-accordion-item'>
				<h4 className='faq-accordion-header' id='headingThree'>
					<button
						className='faq-accordion-button collapsed'
						type='button'
						data-bs-toggle='collapse'
						data-bs-target='#collapseThree'
						aria-expanded='false'
						aria-controls='collapseThree'>
						How many can we mint?
					</button>
				</h4>
				<div
					id='collapseThree'
					className='accordion-collapse collapse'
					aria-labelledby='headingThree'
					data-bs-parent='#faqPage'>
					<div className='faq-accordion-body'>
						<p>Max 5 per wallet.</p>
					</div>
				</div>
			</div>

			<div className='faq-accordion-item'>
				<h4 className='faq-accordion-header' id='headingFour'>
					<button
						className='faq-accordion-button collapsed'
						type='button'
						data-bs-toggle='collapse'
						data-bs-target='#collapseFour'
						aria-expanded='false'
						aria-controls='collapseFour'>
						Is there a roadmap?
					</button>
				</h4>
				<div
					id='collapseFour'
					className='accordion-collapse collapse'
					aria-labelledby='headingFour'
					data-bs-parent='#faqPage'>
					<div className='faq-accordion-body'>
						<p>
							Yes. Our plan is to provide the best experience to the Hunkz
							community throughout the metaverse. You can see the full roadmap
							above.
						</p>
					</div>
				</div>
			</div>

			<div className='faq-accordion-item'>
				<h4 className='faq-accordion-header' id='headingFive'>
					<button
						className='faq-accordion-button collapsed'
						type='button'
						data-bs-toggle='collapse'
						data-bs-target='#collapseFive'
						aria-expanded='false'
						aria-controls='collapseFive'>
						Why should I buy?
					</button>
				</h4>
				<div
					id='collapseFive'
					className='accordion-collapse collapse'
					aria-labelledby='headingFive'
					data-bs-parent='#faqPage'>
					<div className='faq-accordion-body'>
						<p>Because only the strong survive and Hunkz are the strongest</p>
					</div>
				</div>
			</div>

			<div className='question-2'>
				<h4>What's the price?</h4>
				<p>0.07E</p>
			</div>
			<div className='question-3'>
				<h4>How many can we mint?</h4>
				<p>Max 5 per wallet</p>
			</div>
			<div className='question-4'>
				<h4>Is there a roadmap?</h4>
				<p>
					Yes. Our plan is to provide the best experience to the Hunkz community
					throughout the metaverse. You can see the full roadmap above.
				</p>
			</div>
			<div className='question-5'>
				<h4>Why should I buy?</h4>
				<p>Because only the strong survive and Hunkz are the strongest</p>
			</div>
		</div>
	);
};

export default FAQ;
