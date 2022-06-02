import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Video from "./components/Video";

export default function Playlist() {
  const KEY = process.env.REACT_APP_KEY;
  const [items, setItems] = useState([]);
  useEffect(() => {
    fetch(
      "https://youtube.googleapis.com/youtube/v3/playlistItems?part=snippet&maxResults=50&playlistId=PLc_afqBp7xRGyCYx9vXkHkSz9oOor-iar&key=" +
        KEY
    )
      .then((res) => res.json())
      .then((json) => {
        setItems(json.items);
      });
  }, [items]);
  return (
    <>
      <div className="row">
        <Link to="/">Home</Link>
        {items.map((item, i) => (
          <div key={i} className="col-4">
            <Video
              key={i}
              title={item.snippet.title}
              videoId={item.snippet.resourceId.videoId}
              thumbnail={item.snippet.thumbnails.high.url}
            />
          </div>
        ))}
      </div>
      <br />
      <button type="button" className="btn btn-outline-primary">
        Download
      </button>
    </>
  );
}
