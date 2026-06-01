import { useState } from "react";

function Card({title,description}:{title:string,description:string}) {
    return(
        <div className="card-section">
        <div className="card">
         <h3>{title}</h3>
         <p>{description}</p>
        </div>
        </div>
      
    )
}
export default Card