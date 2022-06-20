import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Video from "./components/Video";
import ReactPaginate from "react-paginate";
import FetchPlaylist from "./services/FetchPlaylist";
export default function Playlist() {
  const KEY = process.env.REACT_APP_KEY;
  const [isLoaded, setIsLoaded] = useState(0);
  const [items, setItems] = useState([]);
  const [response, setResponse] = useState([]);
  const [selected, setSelected] = useState([]);
  const [pageToken, setPageToken] = useState("");
  const [nextPageToken, setNextPageToken] = useState("");
  const [totalPages, setTotalPages] = useState(0);
  const handleFetch = (nextPageToken = "") => {
    FetchPlaylist(KEY, nextPageToken)
      .then((res) => {
        setIsLoaded(1);
        setItems(res.items);
        console.log(res);
        setTotalPages(res.pageInfo.totalResults / 50);
        setNextPageToken(res.nextPageToken);
      })
      .catch((err) => console.log(err));
  };
  /*  const itemss = [
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
  ]; */

  const handleCheck = (video) => {
    if (selected.includes(video)) {
      setSelected(selected.filter((v) => v !== video));
      console.log("removed " + video);
    } else {
      setSelected([...selected, video]);
      console.log("added " + video);
      console.log(selected);
    }

    setSelected((s) => {
      console.log(s);
      return s;
    });
  };
  const handleSelectAll = () => {
    items.map((item, i) =>
      !selected.includes(item.snippet.resourceId.videoId)
        ? selected.push(item.snippet.resourceId.videoId)
        : console.log("Item exists " + item.snippet.resourceId.videoId)
    );
    console.log(selected);
  };
  return (
    <>
      <Link to="/">Home</Link>
      <button
        type="button"
        className="btn btn-outline-primary"
        onClick={() => handleFetch()}
      >
        Fetch playlist
      </button>
      <button
        type="button"
        className="btn btn-outline-primary"
        onClick={() => {
          handleSelectAll();
        }}
      >
        Select All
      </button>
      <button
        type="button"
        className="btn btn-outline-primary"
        onClick={() => {
          setSelected([]);
        }}
      >
        Clear
      </button>
      <div className="row">
        {items.map((item, i) => (
          <div
            key={i}
            className="col-4"
            onClick={(e) => {
              handleCheck(item.snippet.resourceId.videoId);
            }}
          >
            <Video
              key={i}
              title={item.snippet.title}
              videoId={item.snippet.resourceId.videoId}
              thumbnail={item.snippet.thumbnails.high.url}
            />
            {/*  <Video
              key={i}
              title={item.title}
              videoId={item.videoId}
              thumbnail={item.thumbnail}
            /> */}
          </div>
        ))}
      </div>
      <br />
      {isLoaded ? (
        <ReactPaginate
          pageCount={Math.ceil(totalPages)}
          pageRange={2}
          marginPagesDisplayed={2}
          onPageChange={(e) => {
            handleFetch(nextPageToken);
          }}
          containerClassName={"pagination_container"}
          previousLinkClassName={"page"}
          breakClassName={"page"}
          nextLinkClassName={"page"}
          pageClassName={"page"}
          disabledClassNae={"disabled"}
          activeClassName={"active"}
        />
      ) : (
        <div>Nothing to show</div>
      )}
      <button type="button" className="btn btn-outline-primary">
        Download
      </button>
    </>
  );
}
