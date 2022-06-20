const url = "https://api.pokemontcg.io/v2/cards?page=1";
fetch(url, {
  method: "GET",
  withCredentials: true,
  headers: {
    "X-Auth-Token": "fdbe2f09-3c4a-447a-8d36-8ad8f1a521ee",
    "Content-Type": "application/json"
  }
})
  .then(resp => resp.json())
  .then(function(data) {
    console.log(data);

    createCards(data);
  })
  .catch(function(error) {
    console.log(error);
  });