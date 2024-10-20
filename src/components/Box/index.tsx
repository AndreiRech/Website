import React from 'react';
import './index.scss';

interface BoxProps {
  color: 'grey' | 'snow';
  children?: React.ReactNode;
}

const Box: React.FC<BoxProps> = ({ color, children }) => {
  return (
    <div className={`box-container ${color}`}>
      {children}
    </div>
  );
};

export default Box;