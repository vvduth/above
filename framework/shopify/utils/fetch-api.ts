import {
  ApiFetcherResults,
  ApitFetcherOptions,
} from "./../../common/types/api";

const fetchApi = async <T>({
  url,
  query,
}: ApitFetcherOptions): Promise<ApiFetcherResults<T>> => {

  const response = await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      query: query,
    }),
  });

  const { data, error } = await response.json();
  if (error) {
    throw new Error(error[0].message ?? error.message);
  }
  return { data };
};
export default fetchApi;
