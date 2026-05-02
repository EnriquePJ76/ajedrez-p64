
const matchday_sort = (a, b) => { return a.number - b.number }


function matchday_open_tab(e) { 
  tabName = 'matchday' + this.textContent;

  // Declare all variables
  var i, tabcontent, tablinks;

  // Get all elements with class="tabcontent" and hide them
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }
   
  // Get all elements with class="tablinks" and remove the class "active"
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }

  // Show the current tab, and add an "active" class to the button that opened the tab
  this.style.display = "block";
  document.getElementById(tabName).style.display = "block";
  e.currentTarget.className += " active";
}


const table_head_create = () => {
   const head = document.createElement('tr');
   head.classList.add('w3-black');

   const white = document.createElement('td');
   white.textContent = 'Blancas';

   const black = document.createElement('td');
   black.textContent = 'Negras';

   head.appendChild(white);
   head.appendChild(black);

   return head;
}

const table_match_create = (md) => {
   const row = document.createElement('tr');

   const players_dict = Object.fromEntries(players.map( x => [x.number, x.name]));

   const white = document.createElement('td');
   white.textContent = "("+md.white+") "+players_dict[md.white];

   const black = document.createElement('td');
   black.textContent = "("+md.black+") "+players_dict[md.black];

   row.appendChild(white);
   row.appendChild(black);

   return row;
}


const matchday_create_content = (content_id, md) => {
   const content = document.getElementById(content_id);

   const table = document.createElement('table');
   table.classList.add('w3-table-all');
   table.classList.add('w3-bordered');
   table.classList.add('w3-striped');
   table.classList.add('w3-border');
   table.classList.add('w3-hoverable');

   table.appendChild(table_head_create());
   
   md.matchs.forEach(item => {
      table.appendChild(table_match_create(item))
   })

   content.appendChild(table);

}


const matchday_create_tab = (md) => {
   const matchdays = document.getElementById('matchdays');
   const matchday_tabs = document.getElementById('matchdays_tabs');

   const matchday_button = document.createElement("button");
   const matchday_content = document.createElement("div");
   
   matchday_button.textContent = md.number;
   matchday_button.classList.add('tablinks');
   matchday_button.addEventListener('click', matchday_open_tab);

   matchday_tabs.appendChild(matchday_button);

   matchday_content.classList.add('tabcontent');
   matchday_content.classList.add('w3-responsive');
   matchday_content.id = 'matchday' + md.number;

   matchdays.appendChild(matchday_content);

   matchday_create_content(matchday_content.id, md);

}


const get_matchdays = () => {
    const rq_url = 'matchdays.json';
    const rq = new XMLHttpRequest();
    
    rq.open('GET', rq_url);
    rq.responseType = 'json';
    rq.send();
    
    rq.onload = function () {
       matchdays = rq.response;
       matchdays = rq.response.sort(matchday_sort);
       matchdays.forEach(matchday_create_tab)
    }

}


var matchdays = [] 
get_matchdays();

