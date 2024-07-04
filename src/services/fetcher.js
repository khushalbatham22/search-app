import axios from "axios";

const apiUrl = process.env.REACT_APP_API;

export default async function fetcher({
  method = "get",
  payload = {},
  queryUrl = apiUrl,
}) {
  const url = queryUrl;

  try {
    const response = await axios({
      method,
      url,
      params: payload,
    });

    return response.data;
  } catch (error) {
    console.error("err", error);
    throw error;
  }
}
