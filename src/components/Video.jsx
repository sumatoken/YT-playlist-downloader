import React, { useState } from "react";

export default function Video({ title, videoId, thumbnail }) {
  const [selected, setSelected] = useState([]);
  const handleCheckBox = (video) => {
    console.log(video);
  };
  return (
    <div>
      <div className="card">
        <img className="card-img-top" src={thumbnail} alt="Card image cap" />
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <div className="form-check">
            <input
              type="checkbox"
              className="form-check-input"
              id="exampleCheck1"
              onChange={handleCheckBox(videoId)}
            />
            <label className="form-check-label">Select</label>
          </div>
        </div>
      </div>
    </div>
  );
}
