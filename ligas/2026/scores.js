
const score_sort = (a, b) => { return b.score - a.score }

const score_add = (scores, match) => {
   if (match.finished) {
       scores[match.white]['score'] += match.white_score
       scores[match.black]['score'] += match.black_score
   }
}

const score_show = (p) => {
   const scores_ol = document.getElementById('scores');
   const player_item = document.createElement("li");

   player_item.textContent = p.score + " - " + p.name + " (" + p.number + ")";
   scores_ol.appendChild(player_item)
}

