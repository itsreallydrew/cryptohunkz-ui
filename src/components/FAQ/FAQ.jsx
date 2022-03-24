import React, { useState } from 'react';
import Accordion from 'react-bootstrap/esm/Accordion';
import AccordionBody from 'react-bootstrap/esm/AccordionBody';
import AccordionHeader from 'react-bootstrap/esm/AccordionHeader';
import AccordionItem from 'react-bootstrap/esm/AccordionItem';
import info from '../../utils/Questions';

const FAQ = () => {
	const [revealed, setRevealed] = useState(null);

	const handleClick = (i) => {
		if (revealed === i) return setRevealed(null);
		setRevealed(i);
	};

	return (
		<div className='faq-page' id='faqPage'>
			<h1>FAQ</h1>
			<div className='accordion'>
				{info.map((item, i) => (
					<div className='item'>
						<div className='item-title' onClick={() => handleClick(i)}>
							<h4>{item.question}</h4>
							<span>{revealed === i ? '-' : '+'}</span>
						</div>
						<div className={`content ${revealed === i ? 'show' : null}`}>
							{item.answer}
						</div>
					</div>
				))}
			</div>
		</div>
	);
};

export default FAQ;
