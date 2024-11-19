import React from "react";
import "../styles/Card.css";


const Card = ({ id, title, type }) => {
  return (
    <div className="card">
      <div className="card-header">
        <span className="card-id">{id}</span>
        <img src="/images/dp.svg" alt="User" className="user-image" />
      </div>
      
      <h2 className="card-title">{title}</h2>
      <div className="card-footer">
        <div className="card-badge">
          <img src="/images/3 dot menu.svg" className="badge-icon"></img>
          <span className="badge-text">⚪{type}</span>
        </div>
      </div>
    </div>
  );
};

export default Card;
