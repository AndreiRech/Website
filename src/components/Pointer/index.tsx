import React from 'react';
import './index.scss';

interface PointerProps {
  x: number;
  y: number;
  visible?: boolean;
}

const Pointer: React.FC<PointerProps> = ({ x, y, visible = true }) => {
    const pointerOutStyle: React.CSSProperties = {
      transform: `translate(${x - 10}px, ${y - 10}px)`
    };
  
    return (
      <div className="pointer-container">
        <div className={`pointer ${visible ? 'show' : 'hide'}`} style={{ left: `${x}px`, top: `${y}px` }}></div>
        <div className={`pointer-out ${visible ? 'show' : 'hide'}`} style={pointerOutStyle}></div>
      </div>
    );
};
  
export default Pointer;