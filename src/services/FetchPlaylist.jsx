import React from "react";

export default async function FetchPlaylist(KEY, pageToken = "") {
  let response;
  await fetch(
    "https://youtube.googleapis.com/youtube/v3/playlistItems?part=snippet&maxResults=50&playlistId=PLc_afqBp7xRGyCYx9vXkHkSz9oOor-iar&key=" +
      KEY +
      "&pageToken=" +
      pageToken
  )
    .then((res) => res.json())
    .then((json) => {
      response = json;
    });

  return response;
}
