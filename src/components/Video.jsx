import React, { useState } from "react";

export default function Video({ title, videoId, thumbnail }) {
  const [checked, setChecked] = useState(false);
  const handleCheckBox = (video) => {
    setChecked(!checked);
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
              checked={checked}
              onChange={handleCheckBox(videoId)}
            />
            <label className="form-check-label">Select</label>
          </div>
        </div>
      </div>
    </div>
  );
}
