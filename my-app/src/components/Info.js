import React from "react";

export default function Info(props) {
  return (
    <div className="info-style">
      <img src={`../images/${props.item.image}`} className="info-img" />
      
      <div className="info-text">
        
        <div className="container">
        <span className="info-pin">
          <img src={`../images/${props.item.pin}`}/>
        </span>
        <span className="info-location">
          {props.item.location}
        </span>
        <span className="info-url">
          <a href= {props.item.url} target="_blank">
          <p>View on Google Maps</p>
          </a>
        </span>
        </div>
        
        <div className="container2">
        <span className="info-title">{props.item.title}</span>
        <span className="info-date">{props.item.dates}</span>
        <span className="info-description">{props.item.description}</span>
        </div>

      </div>
    </div>
  )
}