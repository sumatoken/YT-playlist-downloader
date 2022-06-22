import React from "react";
import Video from "./Video";
function getThumbnail(item) {
  if (item.snippet.thumbnails.high) {
    console.log("high");
    return item.snippet.thumbnails.high.url;
  } else if (item.snippet.thumbnails.medium) {
    console.log("medium");
    return item.snippet.thumbnails.medium.url;
  } else {
    return "no thumbnail";
  }
}
export default function PlaylistItems({ items }) {
  return (
    <div className="row">
      {items.map((item, i) =>
        item.map((it, k) => (
          <div
            key={k}
            className="col-4"
            onClick={(e) => {
              //handleCheck(item.snippet.resourceId.videoId);
              console.log(e);
            }}
          >
            <Video
              key={i}
              title={it.snippet.title}
              videoId={it.snippet.resourceId.videoId}
              thumbnail={getThumbnail(it)}
            />
          </div>
        ))
      )}
    </div>
  );
}
