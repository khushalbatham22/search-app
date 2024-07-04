import React from "react";

import { DataGrid } from "@mui/x-data-grid";

import { truncateString } from "../../utils";

const SearchResults = ({
  results = null,
  handleOnCellClick,
  loadingResults,
}) => {
  if (results === null) return <p>Please Search from Search bar</p>;

  if (loadingResults) return <p>Loading</p>;

  if (Array.isArray(results) && results?.length === 0) {
    return <p>No Record found!</p>;
  }

  const columns = [
    { field: "id", headerName: "ID", width: 70 },
    {
      field: "title",
      headerName: "Title",
      width: 130,
      valueGetter: (value, row) => `${truncateString(value, 30)}`,
    },
    {
      field: "snippet",
      headerName: "Snippet",
      width: 130,
      valueGetter: (value, row) => `${truncateString(value, 30)}`,
    },
    { field: "wordcount", headerName: "WordCounts", width: 130 },
    { field: "size", headerName: "Size", width: 130 },
  ];

  const rows =
    results?.map((row, index) => ({
      id: index,
      ...row,
    })) ?? [];

  return (
    <DataGrid
      rows={rows}
      columns={columns}
      disableSelectionOnClick
      onCellClick={handleOnCellClick}
      pageSizeOptions={[5, 10]}
    />
  );
};

export default SearchResults;
