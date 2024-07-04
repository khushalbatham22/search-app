import fetcher from "./fetcher";

const getSearchResults = async ({ key, size = 10 }) => {
  //   const queryUrl = process.env.REACT_APP_API;
  const queryUrl = "https://en.wikipedia.org/w/api.php";
  const payload = {
    action: "query",
    list: "search",
    prop: "info",
    inprop: "url",
    utf8: "",
    format: "json",
    origin: "*",
    srlimit: size,
    srsearch: key,
  };

  try {
    const data = await fetcher({ method: "get", payload, queryUrl });
    return data.query.search;
  } catch (error) {
    console.error("Search error:", error);
  }
};

export default getSearchResults;
