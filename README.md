##The Slap Object Game - Part 1

####Objective:
Students will use javascript in order to interact with the DOM to create a dynamic webpage. Since students
will work in groups they will practice using a shared repository or may use pull requests.

###Step 1 - GIT - Project Initialization

1. Everyone should break into groups of 2 or 3.
1. A member of the group should create a git repository named TheObjectGame
1. Create the file index.html and a script file called game.js and a css file name game.css.
1. Commit changes and push them back to GitHub.
1. Each team member should then clone the repository via GIT.

###Step 2 - HTML - Create page layout and Slap button

1. link bootstrap game.js and game.css to index.html.
1. Start by adding a bootstrap panel with a header, body and footer. http://getbootstrap.com/components/#panels
1. Add an image to the body of a stick figure with a width of 200px
1. Add a button to the footer with the text "Slap"

###Step 3 - JS - Declare variables and write the Slap function

1. create a global variable: var health=100;
1. create a function: slap()
  - have the function reduce the health variable by 1.
  - for now, have the function alert(health).
  - test the function by calling slap() at the end of the game.js file. 
    - you should see an alert of 99 show on the screen.
    - if this is working, remove the test to prevent popups on every page load.

###Step 4 - HTML - Link the Slap button to the Slap function
1. On the slap button element, add the attribute onClick="slap()"
  - if things are working properly you should be able to hit the slap button and see the
  alert window with a decrease in health.
1. To prevent having to show the players health in popup, let's link the player's health directly to the user interface.
1. Add a span element to the header for the players health: example - <span>Health:<span id="health">--</span></span>
  - the id is important so we can call the element from JS easily.

###Step 5 - JS - Update the user interface
1. We are now going to add a function to manipulate the user interface by using the DOM API.
  - To do this, javascript is required.
  - You should know by now that selectors are required in order to select specific elements inside the DOM.
  - In this case, we will use the infamous "document.getElementById("WHATEVER-ID")";
1. Add a function called update(). This will be responsible for updating the user interface whenever a value changes.
  - have the function set the "innerText" of the element with the id "health"
  - see if you and the group can figure this out on your own, if not ask a mentor.
1. Add a call to the update() function at the bottom of your js file. If it is working, you should see the player health on the screen.
  - There is no need to delete the call you just added, it is recommended so you always start off with populated values.
1. If it is working, make sure you add a call to update at the end of the punch function. This way the screen is updated after ever punch.

###Step 6 - HTML - Add the other buttons and stuff...
1. Add 2 more buttons Punch, and Kick to the UI, as well as their respective functions in javascript.
  - Have the punch function decrease the player health by 5, and kick by 10.
  - Don't forget to call update inside each function.
1. Declare 2 more variables 'name', and 'hits' where you initialized the health variable. 
  -name your player whatever you want, what datatype would a name be?
  -set the variable hits with a value of 0, every time the player is hit by a Slap, Punch, or Kick
this variable should be increased by 1.
1. Add a placeholder for player name, and hits inside the header next to health.
1. Wire everything up like you did for "Slap".

###Step 7 - Testing Time
1. You should now have a functioning application. Test the following
  - In the panel header you should see an indicator for Health, Name, and Hits; their respective values should be 100, "Whatever Name You Chose", and 0.
  - Click the slap button, you should see the player health drop to 99 and hit count to 1.
  - Click the punch button, you should see the player health drop to 94 and hit count to 2.
  - Finally click the Kick button, you should see the player health drop to 84 and hit count to 3.
  - Keep pressing buttons... What happens when the player has been hit for over 100 hit points? Why does this happen?
  - Discuss with the group some ideas on improvements, write these ideas down and be prepared to share.

###Step 1 - JS - Refactor to Player Object

1. Create a player object variable
1. Assign the player object properties, health: name: hitCount: 
1. Move your existing attack functions to player properties slap, kick, punch
1. Utilize the keyword 'this' to deduct the appropriate health.
1. Update your html onclick attributes to target the appropriate functions.
1. Test your game, then commit and push your changes.

##The Slap Object Game - Part 2

###Step 1 - JS - Health Condition
- We are now going to add a component that changes the color of the background when the player's health drops below
a certain threshold. We will need to use a conditional statement to determine the health. 
1. inside the update() function add an if statement
```javascript
	if("[PlayerHealth]" <= 0){
		 document.getElementById("player-panel").classList.add("panel-danger")
	}else{
		 document.getElementById("player-panel").classList.remove("panel-danger")
	}
``` 
1. When the player's health drops below zero, the panel should turn red.

###Step 2 - Items
- It's now time to add items to our game. Items are objects that will be created using a constructor.
the items are responsible for reducing the damage done to the player on hit.
1. Create an Item constructor that takes in the following "options": (name, modifier, description).
1. The Item should have 3 properties: name, modifier, description.
1. Add an empty draw method to the Item.
1. Your constructor should look like the one below. 

```javascript
var Obj = function(option1, option2, option3){
	this.option1 = option1;
	this.option2 = option2;
	this.option3 = option3;
	this.draw = function(){
     //...
	}
}
```
 
###Step 3 - Create the items
- Since our game will have multiple items, we need to find an easy way to access them. 
 We can use an array to store a collection of objects. However, arrays are not always the easiest to use, because they require us
 to loop over the entire collection when we are looking for a specific item. What if we instead, create an object that uses the name of the item as a property?
1. Create an object called items.
1. following the example below, add 2 more items.

```javascript
var items{
	shield:new Item("Shield",0.3,"This is an awesome shield!"),
	...
	...
}
```
 - We can now easily reference the shield item by calling items.shield.
 - What would items.shield.name return?
 
###Step 4 - Give some items to our player.
- We are using an object to store the master list of items in our game. However, we need to be able to give our 
player items. In this case, we need to use an array, because it may be possible for the player to have multiples of the same item.
1. Create an array property named items on the player object.
1. Place the shield in the first index of the items array.

```javascript
 items:[items.shield]
``` 
1. keep in mind that the \[items] object that is global, is completly different than the \[items] array on the player.
 
###Step 5 - REDUCE THE DAMAGE!... almost
- How are you at math?
1. create a function on the player object called, addMods().
1. using a "for i loop", calculate the combined value of modifiers in the player.items array.
	- this may be tricky, but think it through before reading the following hints.
	##HINTS
	1. we need to create a variable to hold the running modifier total.
	1. this variable should be outside of the loop.
	1. inside the loop, increase the running total by the 'current items modifier'
	1. arrays need to be accessed by index. \[i]
1. have the function return the total.

###Step 6 - REDUCE THE DAMAGE!... for real this time.
- before you being this step, try to solve the problem... without the help from a mentor. Remeber math in javascript
is the same as on paper. Order of operations matters: **5 - (5 * .3) =  3.5**
- stuck?
- look at the hit function()
- total damage done = damage - (damage * \[sum of all modifiers])
- did you get it! I think the following works
```javascript
this.health -= (damage - (damage * this.addMods())));
```

###UPSHIFT CHALLENGE
1. Add this to the body of the item.draw method.

```javascript
	return '<div class="item">'+ this.name +'</div>';
```

Create a drawItems method under the update() function.
Have the update() function call the drawItems() function.
retrieve from the dom the element id = "player-items"
set the innerHTML of the element equal to a concatenation of all the items.draw() results.

Add to the UI a way to give your player items.