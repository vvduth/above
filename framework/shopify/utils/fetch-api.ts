
type FetchParam = {
    query : string
}
const fetchApi = async ({query}:FetchParam) => {
    const url = "http://localhost:4000/graphql"

    const response = await fetch(url, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body : JSON.stringify({
            query: query
        })
    })

    const data  = await response.json() ; 
    return {data}
}
export default fetchApi ;