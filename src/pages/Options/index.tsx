import React, { useEffect, useState, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import Pointer from '../../components/Pointer/index.tsx';
import './index.scss';
import Box from '../../components/Box/index.tsx';
import Card from '../../components/Card/index.tsx';

const Options: React.FC = () => {
	const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
	const navigate = useNavigate();
	
  	const handleMouseMove = (event: React.MouseEvent) => {
		setMousePosition({ x: event.clientX, y: event.clientY });
	};

	const handleKey = useCallback((event: KeyboardEvent) => {
		const actions: { [key: string]: () => void } = {
			'ArrowRight': () => navigate('/')
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
			<Box color='grey'></Box>
			<div className='option-content'>
				<div className='option-top'>
					<Card color='grey'>
						<div className='card-options'>
							<p className='card-title-jap'>オプション</p>
							<p className='card-title'>options</p>
						</div>
					</Card>
					<Card color='grey'>
						<div className='card-restore'>
							<p className='card-title-jap'>復元</p>
							<p className='card-title'>restore settings</p>
						</div>
					</Card>
					<Card color='grey'>
						<div className='card-exit'>
							<p className='card-title-jap'>出かける</p>
							<p className='card-title'>exit</p>
						</div>
					</Card>
				</div>
				<div className='option-bottom'>

					<div className='option-colors'>
						<Card color='grey'>
							<div className='card-color'>
								<div className='card-color-top'>
									<p className='card-color-title'>color</p>
									<p className='card-text'>bright</p>
								</div>
								<div className='card-color-bottom'>
									<p className='card-color-jap'>ライトモード</p>
								</div>
							</div>
						</Card>
						<Card color='grey'>
						<div className='card-background'>
							<div className='card-background-top'>
								<p className='card-background-title'>background</p>
								<p className='card-text'>dark</p>
							</div>
							<div className='card-background-bottom'>
								<p className='card-background-jap'>ダークモード</p>
							</div>
						</div>
					</Card>
					</div>

					<Card color='grey'>
						<div className='card-language'>
							<div className='card-language-title'>
								<p className='card-title-jap'>言語</p>
								<p className='card-title'>language</p>
							</div>
							<div className='card-language-body'>
								<p className='card-text'>english</p>
								<p className='card-text'>portugues</p>
								<p className='card-text'>espanol</p>
								<p className='card-text'>日本語</p>
							</div>
						</div>
					</Card>
				</div>
			</div>
		</div>
	);
}

export default Options;
