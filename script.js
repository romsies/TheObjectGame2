//Logic
//Conditions
//Loops
//arrays
//constructors
//callbacks

//Constants
var startingHealth = 100;
var startingHits = 0;
var playerName = "PlayerName";

// Item Constructor HERE
var Obj = function (name, modifier, description) {
  this.name = name;
  this.modifier = modifier;
  this.description = description;
  this.draw = function () {
    //...
  }
}




//global items placeholder HERE
var item = {
  shield: new item("Shield", 3, "This is an awesome shield!"),
  chainMail: new item("chainMail", 1, "This should block a slap!"),
  helmet: new item("helmet", 5, "This is a light weight helmet!"),

}


var player = {
  name: "PlayerName",
  health: startingHealth,
  hits: startingHits,
  items: [item.sheild, item.chainMail, item.helmet],

  slap: function () {
    this.hit(1);
  },
  punch: function () {
    this.hit(5);
  },
  kick: function () {
    this.hit(10);
  },
  hit: function (damage) {
    this.health -= damage;
    this.health -= (damage - (damage * this.addMods()));
    this.hits++;
    if (this.health <= 0) {
      this.health = 0;
    }
    update();
  },
  reset: function () {
    this.health = startingHealth,
    this.hits = startingHits,
    update();
  },
  
  
  addMods: function () {
    var total;
    for (var i = 0; i < items.length; i++) {
      total += this.items[i].modifier;
    }
    return total;
  }
}

function update() {
  document.getElementById("health").innerText = player.health;
  document.getElementById("name").innerText = player.name;
  document.getElementById("hits").innerText = player.hits;
  
  //IF HEALTH STATEMENT
  if (player.health <= 0) {
    document.getElementById("player-panel").classList.add("panel-danger")
  } else {
    document.getElementById("player-panel").classList.remove("panel-danger")
  }

}

update();