//Logic
//Conditions
//Loops
//arrays
//constructors
//callbacks

//Constants
var startingHealth= 100;
var startingHits= 0;
var playerName= "PlayerName";

// Item Constructor HERE




//global items placeholder HERE
var items = {
  
};

var player = {
  name: "PlayerName",
  health: startingHealth,
  hits: startingHits,
  
  slap: function() {
    this.hit(1);
  },
  punch: function() {
    this.hit(5);
  },
  kick: function() {
    this.hit(10);
  },
  hit: function(damage) {
    this.health -= damage;
    this.hits++;
    if (this.health <= 0) {
      this.health = 0;
    }
    update();
  },
  reset: function() {
      this.health = startingHealth,
      this.hits = startingHits,
    update();
  },
}

function update() {
  document.getElementById("health").innerText = player.health;
  document.getElementById("name").innerText = player.name;
  document.getElementById("hits").innerText = player.hits;
  
  //IF HEALTH STATEMENT
  if(player.health <= 0){
		 document.getElementById("player-panel").classList.add("panel-danger")
	}else{
		 document.getElementById("player-panel").classList.remove("panel-danger")
	}
  
}

update();