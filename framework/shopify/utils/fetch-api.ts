type FetchParam = {
  query: string;
};
type FetcherResult<T> = {
  data: T;
};
const fetchApi = async <T>({
  query,
}: FetchParam): Promise<FetcherResult<T>> => {
  const url = "http://localhost:4000/graphql";

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
