
const requestURL = 'players.json';
const request = new XMLHttpRequest();

request.open('GET', requestURL);
request.responseType = 'json';
request.send();

request.onload = function () {
   const players = request.response;
   console.log(players);
}

