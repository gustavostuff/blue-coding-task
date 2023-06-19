export async function getResults(query) {
  const params = {
    q: query,
    api_key: 'pLURtkhVrUXr3KG25Gy5IvzziV5OrZGa',// should be in an .env file
    limit: 10,
  }
  const queryParam = new URLSearchParams(params);
  const data = await fetch('https://api.giphy.com/v1/gifs/search' + '?' + queryParam);
  const result = await data.json();
  return result.data;
}
