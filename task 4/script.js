let url = 'https://jsonplaceholder.typicode.com/posts';

let targetedUser = 4

fetch(url)
  .then(response => response.json())
  .then(data => data.filter((dataObj) => dataObj.userId === targetedUser))
  .then(json => console.log(json, 'json inside a fetch'))
