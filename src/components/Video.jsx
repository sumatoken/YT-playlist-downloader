import React, { useState } from "react";

export default function Video({ title, videoId, thumbnail }) {
  return (
    <div>
      <div className="card">
        <img className="card-img-top" src={thumbnail} alt="Card image cap" />
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <div className="form-check">
            <label className="form-check-label">Select</label>
          </div>
        </div>
      </div>
    </div>
  );
}
