// Module Super Mario Bros


// Requirements:
// Health Bar
//	- 0: dead
//	- 1: alive
//	- 2: powered up by Mushroom
// Jump
// Position


var marioBros = (function() {
	// Private Methods & Properties
	var healthBar = 1;

	var healthBarStatus = function(healthBar) {
		switch(healthBar) {
			case 0:
				text = "you are dead. GAME OVER.";
				break;
			case 2: 
				text = "you are alive + powered up";
				break;
			default: 
				text = "you are alive";
		}
		console.log(text);
	};

	var walk = function() { 
		healthBar = Math.round(Math.random() * 2); 
		console.log(healthBar);
		return healthBar; 
	};

	// Public Methods & Properties
	return {
		// some stuff here...
		startGame: function() { return healthBarStatus(walk()); },
		getHealthBar: function() { return healthBar; }
	};


})();
