import React from 'react';
import './index.scss';

interface CardProps {
  color: 'grey' | 'snow';
  children?: React.ReactNode;
}

const Card: React.FC<CardProps> = ({ color, children }) => {
  return (
    <div className={`card-container ${color}`}>
      {children}
    </div>
  );
};

export default Card;