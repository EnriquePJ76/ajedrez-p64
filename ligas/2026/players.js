

const sort_player = (a, b) => { return a.number - b.number }

const show_player = (p) => {
   const ol_players = document.getElementById('players');
   const player_item = document.createElement("li");

   player_item.textContent = p.name;
   ol_players.appendChild(player_item)
}

const get_players = () => {
    const rq_url = 'players.json';
    const rq = new XMLHttpRequest();
    var p = [] 
    
    rq.open('GET', rq_url);
    rq.responseType = 'json';
    rq.send();
    
    rq.onload = function () {
       players = rq.response.sort(sort_player);
       players.forEach(show_player)
    }

}


var players = [] 
get_players();

