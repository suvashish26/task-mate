import React, { useState } from "react";

type CardProps = {
    title: string;
    description: string;
    icon: React.ReactNode;
}
function Card({title,description,icon}:CardProps) {
    return(
        <div className="card-section">
        <div className="card">
         <h3>{title}</h3>
         <p>{description}</p>
         {icon}
        </div>
        </div>
      
    )
}
export default Card