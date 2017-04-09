'use strict'

module.exports = {
	aritGeo: function(list){
		var a, b;
    	var common_diff = (list[1]-list[0]);
    	var common_ratio = list[1]/list[0];
    	var checkArit = true;
    	var checkGeo = (isFinite(common_ratio) && common_ratio != 0);

		if (list.length < 1){
			return 0;
		} else {
			for (a = 1, b = 2; checkArit && b < list.length; a++, b++) {
        		if (checkArit && list[b] - list[a] != common_diff) {
            		checkArit = false;
        	}
    	}
    	for (a = 1, b = 2; checkGeo && b < list.length; a++, b++) {
        	if (checkGeo && list[b] / list[a] != common_ratio) {
            	checkGeo = false;
        	}
    	}

    	return(!(checkArit || checkGeo) ? -1 :
        	   checkArit                ? 'Arithmetic' : 
            	               checkGeo ? 'Geometric'  : '');
		}
	}
}
