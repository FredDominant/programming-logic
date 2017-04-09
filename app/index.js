'use strict'
module.exports = {
	getPrimes: function(num) {
		var result = [];
		if (typeof num !== 'number'){
		return 'Invalid. Please enter a number';
		} else {
			if (num === 0){
				return 'Please enter a non zero number';
			} else if (num < 0){
				return 'Please enter a positive number';
			} else if (num == 1){
				result = [];
			} else {
				if (num == 2){
					return [2];
				} else if (num == 3){
					return [2,3];
				} else if (num == 5){
					return [2,3,5];
				} else if (num == 7){
					return [2,3,5,7];
				} else {
					result = [2,3,5,7];
					for(var i = 2;i <= num; i++){
						if((i%2 != 0) && (i%3 != 0) && (i%5 !=0) && (i%7 != 0)){
							result.push(i);
						}
					}
				}
			}
		}
		return result;
	}
}
	/*if (num < 1){
		return 'Please enter a positive number';
	} else if (num === 0){
		return 'Please enter a Non Zero number'
	} else if 
}*/
//console.log(getPrimes(-2));