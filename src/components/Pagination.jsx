import React from "react";

export default function Pagination({ totalPages }) {
  return <div>{parseInt(totalPages) + 1}</div>;
}
