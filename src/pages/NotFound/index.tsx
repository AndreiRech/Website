import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Pointer from '../../components/Pointer/index.tsx';
import './index.scss';

const NotFound: React.FC = () => {
	const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
	const navigate = useNavigate();
	
  	const handleMouseMove = (event: React.MouseEvent) => {
		setMousePosition({ x: event.clientX, y: event.clientY });
	};

	const handlePageChange = () => {
        navigate('/');
    };

	return (
		<div className='error-container' onMouseMove={handleMouseMove}>
			<Pointer x={mousePosition.x} y={mousePosition.y} />
			<div className='error-content'>
				<p className='error-text'>Page not found :/</p>
				<p className='error-button' onClick={handlePageChange}>Go back to home page</p>
			</div>
		</div>
	);
}

export default NotFound;
