game.factory('helpService', [function(){

	var helpItems = [
	    {
	        Id: 1
	    },
	    {
	        Id: 2
	    },
	    {
	        Id: 3
	    },
	    {
	        Id: 4
	    },
	    {
	        Id: 5
	    },
	    {
	        Id: 6
	    },
	    {
	        Id: 7
	    },
	    {
	        Id: 8
	    },
	    {
	        Id: 9
	    },
	    {
	        Id: 10
	    }];

	function getHelpItems(){
		return helpItems;
	}

	return {
		'getHelpItems': getHelpItems
	};

}]);