import React from "react";

import { debounce } from "lodash";
import { useSelector } from "react-redux";

import useSearchHook from "../../hooks/useSearchHook";
import SearchResults from "./SearchResults";
import SearchResultDetails from "./SearchResultDetails";
import SearchBarSection from "./SearchBarSection";

const SearchView = () => {
  const { searchResults, selectedSearchResult, isLoadingResults } = useSelector(
    ({ search }) => search
  );

  const { searchData, setSelectedRow } = useSearchHook();

  const debouncedSearchData = debounce(searchData, 500);

  const handleOnChnage = (evt) => {
    const { value } = evt.target;
    debouncedSearchData({ key: value });
  };

  const handleOnCellClick = (value) => {
    setSelectedRow({ rowData: value.row });
  };

  const handleModalClose = () => setSelectedRow({ rowData: null });

  return (
    <div className="search-container">
      <SearchBarSection handleOnChnage={handleOnChnage} />
      <div className="results-list-container">
        <SearchResults
          results={searchResults}
          handleOnCellClick={handleOnCellClick}
          loadingResults={isLoadingResults}
        />
      </div>
      <SearchResultDetails
        resultDetail={selectedSearchResult}
        handleClose={handleModalClose}
      />
    </div>
  );
};

export default SearchView;
