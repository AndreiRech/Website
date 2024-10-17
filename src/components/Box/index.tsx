import React from 'react';
import './index.scss';

interface BoxProps {
  color: 'grey' | 'snow';
}

const Box: React.FC<BoxProps> = ({ color }) => {
  return (
    <div className={`box-container ${color}`}/>
  );
};

export default Box;