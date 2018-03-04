/* Magic Mirror
 * Module: MMM-URHere
 * 
 * By Mykle1 - MIT Licensed
 * 
 */

Module.register("MMM-URHere",{
		
	defaults: {
			height:"430px",
			width:"617px"
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
	}

});
