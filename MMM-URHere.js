/* Magic Mirror
 * Module: MMM-URHere
 * 
 * By Mykle1 - MIT Licensed
 * 
 */

Module.register("MMM-URHere",{
		
	defaults: {
			height:"325px",
			width:"420px"
	},
	
	getStyles: function() {
        return ["MMM-URHere.css"];
    },


	
	getDom: function() {
		
		
		var iframe = document.createElement("IFRAME");
		iframe.classList.add("iframe");
		iframe.style = "border:none";
		iframe.width = this.config.width;
		iframe.height = this.config.height;
		type="text/javascript";
		iframe.src =  '//100widgets.com/js_data.php?id=167';
		
		return iframe;
	},
	
	 /////  Add this function to the modules you want to control with voice //////

    notificationReceived: function(notification, payload) {
        if (notification === 'HIDE_LOCATION') {
            this.hide(1000);
        }  else if (notification === 'SHOW_LOCATION') {
            this.show(1000);
        }
            
    },

});
