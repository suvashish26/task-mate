import React from "react";

type CardProps = {
  title: string;
  description: string;
  icon: React.ReactNode;
}

function Card({ title, description, icon }: CardProps) {
  return (
    <div className="feature-card">
      <div className="card-icon">{icon}</div>
      <div>
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  )
}

export default Card