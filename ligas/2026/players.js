
function show_player_list(players) {
   const olPlayers = document.getElementById('players');

   Object.keys(players).forEach(key => {
      console.log(key + ' => ' + players[key]);
   })
}

const requestURL = 'players.json';
const request = new XMLHttpRequest();

request.open('GET', requestURL);
request.responseType = 'json';
request.send();

request.onload = function () {
   const players = request.response;
   show_player_list(players);
}


