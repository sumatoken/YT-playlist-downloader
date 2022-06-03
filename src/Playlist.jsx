import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Video from "./components/Video";

export default function Playlist() {
  const KEY = process.env.REACT_APP_KEY;
  const [items, setItems] = useState([]);
  const [selected, setSelected] = useState([]);
  /* useEffect(() => {
    fetch(
      "https://youtube.googleapis.com/youtube/v3/playlistItems?part=snippet&maxResults=50&playlistId=PLc_afqBp7xRGyCYx9vXkHkSz9oOor-iar&key=" +
        KEY
    )
      .then((res) => res.json())
      .then((json) => {
        setItems(json.items);
      });
  }, [items]); */
  const itemss = [
    {
      id: 1,
      title: "First",
      thumbnail: "https://picsum.photos/200/200",
    },
    {
      id: 2,
      title: "Second",
      thumbnail: "https://picsum.photos/200/200",
    },
    {
      id: 3,
      title: "Third",
      thumbnail: "https://picsum.photos/200/200",
    },
  ];
  const handleCheck = (video) => {
    console.log(5);
    console.log(video);
  };
  return (
    <>
      <Link to="/">Home</Link>
      <div className="row">
        {itemss.map((item, i) => (
          <div key={i} className="col-4">
            {/*  <Video
              key={i}
              title={item.snippet.title}
              videoId={item.snippet.resourceId.videoId}
              thumbnail={item.snippet.thumbnails.high.url}
            /> */}
            <Video
              key={i}
              title={item.title}
              videoId={item.videoId}
              thumbnail={item.thumbnail}
              onClick={handleCheck(item.id)}
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
