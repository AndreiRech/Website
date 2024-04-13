import React, { useState, useEffect } from 'react';
import Pointer from '../../components/Pointer/index.tsx';
import './index.scss';

const Home: React.FC = () => {
	const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
	const [typedText, setTypedText] = useState('');

	const text = 'WORK IN PROGRESS';
	let index = 0;
  
	useEffect(() => {
	  const typeText = () => {
		if (index < text.length) {
		  setTypedText(prevTypedText => prevTypedText + text.charAt(index));
		  index++;
		  setTimeout(typeText, 100); // Ajuste a velocidade da digitação aqui (em milissegundos)
		}
	  };
  
	  typeText();
	}, []);
	
  	const handleMouseMove = (event: React.MouseEvent) => {
		setMousePosition({ x: event.clientX, y: event.clientY });
	};



	return (
		<div className='home-container' onMouseMove={handleMouseMove}>
			<Pointer x={mousePosition.x} y={mousePosition.y} />
			<div className='home-content'>
				<p className='home-wait'>{typedText}</p>
			</div>
		</div>
	);
}

export default Home;
