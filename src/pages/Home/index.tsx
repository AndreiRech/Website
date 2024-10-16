import React, { useState } from 'react';
import Pointer from '../../components/Pointer/index.tsx';
import './index.scss';

const Home: React.FC = () => {
	const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
	
  	const handleMouseMove = (event: React.MouseEvent) => {
		setMousePosition({ x: event.clientX, y: event.clientY });
	};

	return (
		<div className='home-container' onMouseMove={handleMouseMove}>
			<Pointer x={mousePosition.x} y={mousePosition.y} />
			<div className='home-border'>
				<div className='home-content'>
					<div className='home-main'>
						<p className='home-title-jap'>いらしゃいませ</p>
						<p className='home-title'>welcome</p>
					</div>
					<div className='home-bottom'>
						<p className='home-options'>options</p>
						<p className='home-navigate'>← use arrows to navigate →</p>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Home;
