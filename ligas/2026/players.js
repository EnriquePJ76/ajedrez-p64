

function show_player_list(players) {
   const ol_players = document.getElementById('players');

   console.log(players.sort((a, b) => { return a['number'] - b['number'] }));

   players.forEach(p => {
      console.log(p.number + ' => ' + p.name);
      
      const player_item = document.createElement("li");
      player_item.textContent = p.name;
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


