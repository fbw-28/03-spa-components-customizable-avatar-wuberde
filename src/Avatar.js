import React from 'react';
import image from './img/1.jpg';
import './css/style.css';

export default function Avatar({ size = 's', type = 'square' }) {
  return (
    <div className="card">
      <div className="image">
        <img className={`${size} ${type}`} src={image} alt="image" />
      </div>

      <div className="content">
        <p>size s</p>
        <p>type: square</p>
      </div>
    </div>
  );
}
