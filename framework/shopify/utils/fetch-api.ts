import { API_URL } from './../consts';
import {
  ApiFetcherResults,
  ApiFetcherOptions,
} from "./../../common/types/api";

const fetchApi = async <T>({
  query,
  variables
}: ApiFetcherOptions): Promise<ApiFetcherResults<T>> => {

  const response = await fetch(API_URL!, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      query: query,
      variables
    }),
  });

  const { data, error } = await response.json();
  if (error) {
    throw new Error(error[0].message ?? error.message);
  }
  return { data };
};
export default fetchApi;
