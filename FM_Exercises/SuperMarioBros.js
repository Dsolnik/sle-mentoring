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

	var getHealthBar = function() { return healthbar; }

	// switch on healtbar statuses
	var healthBarStatus = function() {
		switch(getHealthBar()) {
			case 0:
				status = "you are dead";
				break;
			case 2: 
				status = "you are alive + powered up";
				break;
			default: 
				status = "you are alive";
		}
	};

	// Public Methods & Properties
	return {
		// some stuff here...
		// getHealthBar: function() { return healthbar; }
	}


})();
