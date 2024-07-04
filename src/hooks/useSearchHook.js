import getSearchResults from "../services/getSearchResults";
import { useDispatch } from "react-redux";
import {
  setError,
  setIsLoadingResults,
  setSearchResults,
  setSelectedSearchResults,
} from "../redux/features/searchSlice";

const useSearchHook = () => {
  const dispatch = useDispatch();
  const searchData = async ({ key }) => {
    dispatch(setIsLoadingResults(true));
    getSearchResults({ key })
      .then((res) => {
        const resVal = !res ? [] : res;
        dispatch(setSearchResults(resVal));
      })
      .catch((err) => dispatch(setError(err ?? "Something went wrong")))
      .finally(() => {
        dispatch(setIsLoadingResults(false));
      });
  };

  const setSelectedRow = ({ rowData }) => {
    dispatch(setSelectedSearchResults(rowData));
  };

  return {
    searchData,
    setSelectedRow,
  };
};

export default useSearchHook;
