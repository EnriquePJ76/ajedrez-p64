
function show_player_list(players) {
   const ol_players = document.getElementById('players');

   console.log(Object.keys(players))

   Object.keys(players).forEach(key => {
      console.log(key + ' => ' + players[key]);
      
      const player_item = document.createElement("li");
      player_item.textContent = players[key];
      ol_players.appendChild(player_item)
   })
}

const rq_url = 'players.json';
const rq = new XMLHttpRequest();

rq.open('GET', rq_url);
rq.responseType = 'json';
rq.send();

rq.onload = function () {
   const players = rq.response;
   show_player_list(players);
}


