import React, { useState } from "react";

function Card({title,description,icon}:{title:string,description:string,icon:React.ReactNode}) {
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