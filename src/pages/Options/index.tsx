import React, { useEffect, useState, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import Pointer from '../../components/Pointer/index.tsx';
import './index.scss';

const Options: React.FC = () => {
	const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
	const navigate = useNavigate();
	
  	const handleMouseMove = (event: React.MouseEvent) => {
		setMousePosition({ x: event.clientX, y: event.clientY });
	};

	const handleKey = useCallback((event: KeyboardEvent) => {
		const actions: { [key: string]: () => void } = {
			'ArrowRight': () => navigate('/options')
		};

		const action = actions[event.key];
		if (action) {
			action();
		}
	}, [navigate]);

	useEffect(() => {
		window.addEventListener('keydown', handleKey);
		
		return () => { 
			window.removeEventListener('keydown', handleKey);
		};
	}, [handleKey]);

	return (
		<div className='option-container' onMouseMove={handleMouseMove}>
			<Pointer x={mousePosition.x} y={mousePosition.y} />
			<div className='border'/>
			<div className='option-content'>
				<div className='option-main'>
					<p className='option-title-jap'>いらしゃいませ</p>
					<p className='option-title'>welcome</p>
				</div>
			</div>
		</div>
	);
}

export default Options;
