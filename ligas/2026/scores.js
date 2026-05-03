
const score_sort = (a, b) => { return b.score - a.score }

const score_add = (scores, match) => {
   if (match.finished) {
       scores[match.white]['score'] += match.white_score
       if (scores[match.white]['matchs'] !== undefined) {
          scores[match.white]['matchs'] += 1; 
       } else {
          scores[match.white]['matchs'] = 1; 
       }

       scores[match.black]['score'] += match.black_score
       if (scores[match.black]['matchs'] !== undefined) {
          scores[match.black]['matchs'] += 1; 
       } else {
          scores[match.black]['matchs'] = 1; 
       }

   }
}

const score_show = (p) => {
   const scores_ol = document.getElementById('scores');
   const player_item = document.createElement("li");

   player_item.textContent = p.score + " - " + p.name + " (" + p.number + ")";
   scores_ol.appendChild(player_item)
}

const score_tb_hd_create = () => {
   const head = document.createElement('tr');
   head.classList.add('w3-black');

   const pos = document.createElement('td');
   pos.textContent = 'Puesto';

   const player = document.createElement('td');
   player.textContent = 'Jugador';

   const points = document.createElement('td');
   points.textContent = 'Pts';

   const matchs = document.createElement('td');
   matchs.textContent = 'PJ';

   head.appendChild(pos);
   head.appendChild(player);
   head.appendChild(points);
   head.appendChild(matchs);

   return head;
}

const score_tb_pos_create = (p, sc) => {
   const row = document.createElement('tr');

   const pos = document.createElement('td');
   pos.classList.add('w3-right-align');
   pos.textContent = p;

   const player = document.createElement('td');
   player.textContent = sc.name + " (" + sc.number + ")";

   const points = document.createElement('td');
   points.classList.add('w3-right-align');
   points.textContent = sc.score;

   const matchs = document.createElement('td');
   matchs.classList.add('w3-right-align');
   matchs.textContent = sc.matchs;

   row.appendChild(pos);
   row.appendChild(player);
   row.appendChild(points);
   row.appendChild(matchs);

   return row;
}

const score_tb_create = (sc) => {
   const content = document.getElementById('scores');

   const table = document.createElement('table');
   table.classList.add('w3-table-all');
   table.classList.add('w3-bordered');
   table.classList.add('w3-striped');
   table.classList.add('w3-border');
   table.classList.add('w3-hoverable');

   table.appendChild(score_tb_hd_create());
   
   for (i=0; i<sc.length; i++) {
      table.appendChild(score_tb_pos_create(i+1, sc[i]))
   }

   content.appendChild(table);
}


