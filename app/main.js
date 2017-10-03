var demo = new Vue({

	el: '#menu',

	data: {
		active: false
	},

	methods: {
		makeActive: function(item) {
			this.active = item;			
		}	
	}

});