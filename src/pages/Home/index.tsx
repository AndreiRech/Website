import React, { useCallback, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Pointer from '../../components/Pointer/index.tsx';
import './index.scss';

const Home: React.FC = () => {
	const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
	const [selectedOption, setSelectedOption] = useState(false);
	const navigate = useNavigate();
	
  	const handleMouseMove = (event: React.MouseEvent) => {
		setMousePosition({ x: event.clientX, y: event.clientY });
	};

	const handlePageChange = useCallback((page: string) => {
		navigate(page);
	}, [navigate]);

	const handleKey = useCallback((event: KeyboardEvent) => {
		const actions: { [key: string]: () => void } = {
			'ArrowRight': () => navigate('/options'),
			'ArrowDown': () => setSelectedOption(true),
			'ArrowUp': () => setSelectedOption(false),
			'Enter': () => handlePageChange('/options'),
		};

		const action = actions[event.key];
		if (action) {
			action();
		}
	}, [navigate, handlePageChange]);

	useEffect(() => {
		window.addEventListener('keydown', handleKey);
		
		return () => { 
			window.removeEventListener('keydown', handleKey);
		};
	}, [handleKey]);

	return (
		<div className='home-container' onMouseMove={handleMouseMove}>
			<Pointer x={mousePosition.x} y={mousePosition.y} />
			<div className='home-content'>
				<div className='home-main'>
					<p className='home-title-jap'>いらしゃいませ</p>
					<p className='home-title'>welcome</p>
				</div>
				<div className='home-bottom'>
					<p className={`home-options ${selectedOption ? 'selected' : ''}`} onClick={() => handlePageChange('/options')}>options</p>
					<p className='home-navigate'>← use arrows to navigate →</p>
				</div>
			</div>
		</div>
	);
}

export default Home;
