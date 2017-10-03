// Create a Vue instance
var demo = new Vue({

	// A DOM element to mount our initial view model, linked to an id in index.html
	el: '#menu',

	// Define some data and properties
	data: {
		homeActive: false,
		projectsActive: false,
		servicesActive: false,
		contactActive: false,
		message: 'Please click a menu item'
	},

	// Define some functions (functions go in methods)
	methods: {
		makeActive: function(item, label) {
			// console.log('makeActive - item: ', item, ', label: ', label);

			// Remove active class from previous anchor
			this.homeActive = false;
			this.projectsActive = false;
			this.servicesActive = false;
			this.contactActive = false;

			// Add active class to selected anchor
			switch(item) {
				case 'homeMenu':
					// console.log('switch homeMenu');
					this.homeActive = true;
					break;
				case 'projectsMenu':
					this.projectsActive = true;
					break;
				case 'servicesMenu':
					this.servicesActive = true;
					break;
				case 'contactMenu':
					this.contactActive = true;
					break;
			}

			// Change message text
			this.message = 'You chose ' + label;
		}
	}

});