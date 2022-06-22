import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Video from "./components/Video";
import ReactPaginate from "react-paginate";
import FetchPlaylist from "./services/FetchPlaylist";
import async from "async";
import PlaylistItems from "./components/PlaylistItems";
export default function Playlist() {
  const [isLoaded, setIsLoaded] = useState(0);
  const [response, setResponse] = useState([]);
  const [selected, setSelected] = useState([]);
  const [pageNumber, setPageNumber] = useState(null);
  const [nextPageToken, setNextPageToken] = useState("");
  const [totalPages, setTotalPages] = useState(0);
  const [isLoading, setIsLoading] = useState(0);
  const [completed, setCompleted] = useState(0);
  const [items, setItems] = useState([]);

  useEffect(() => {
    const KEY = process.env.REACT_APP_KEY;

    if (isLoading) {
      FetchPlaylist(KEY, nextPageToken).then((res) => {
        setIsLoaded(1);
        setTotalPages(Math.ceil(res.pageInfo.totalResults / 50));
        res.nextPageToken
          ? setNextPageToken(res.nextPageToken)
          : setCompleted(1);
        setItems((items) => {
          setItems([...items, res.items]);
        });
      });
    }
  }, [isLoading, nextPageToken]);

  console.log(items);
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
  const handleCheck = (item) => {
    if (selected.includes(item.snippet.resourceId.videoId)) {
      setSelected(
        selected.filter((v) => v !== item.snippet.resourceId.videoId)
      );
      console.log("removed " + item.snippet.title);
    } else {
      setSelected([...selected, item.snippet.resourceId.videoId]);
      console.log("added " + item.snippet.title);
      console.log(selected);
    }

    setSelected((s) => {
      console.log(s);
      return s;
    });
  };

  const handleSelectAll = () => {
    items.map((pack, i) =>
      pack.map((item, k) => selected.push(item.snippet.resourceId.videoId))
    );
    console.log(selected);
  };
  return (
    <>
      <Link to="/">Home</Link>
      <button
        type="button"
        className="btn btn-outline-primary"
        onClick={() => setIsLoading(1)}
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
      <br />
      {completed ? (
        <>
          <PlaylistItems items={items} handleCheck={handleCheck} />

          <ReactPaginate
            pageCount={Math.ceil(totalPages)}
            pageRange={2}
            marginPagesDisplayed={2}
            onPageChange={(e) => {
              console.log(e);
            }}
            containerClassName={"pagination_container"}
            previousLinkClassName={"page"}
            breakClassName={"page"}
            nextLinkClassName={"page"}
            pageClassName={"page"}
            disabledClassNae={"disabled"}
            activeClassName={"active"}
          />
        </>
      ) : (
        <div>Nothing to show</div>
      )}
      <button type="button" className="btn btn-outline-primary">
        Download
      </button>
    </>
  );
}
