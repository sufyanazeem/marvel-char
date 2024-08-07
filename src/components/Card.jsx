import React from "react";
import { Link } from "react-router-dom";

export default function Card({ name, id, thumbnail }) {
  return (
    <Link to={`/${id}`} target="_blank">
      <div className="card">
        <img src={thumbnail} alt="thumbnail" />
        <h5 className="card-name">{name}</h5>
      </div>
    </Link>
  );
}
