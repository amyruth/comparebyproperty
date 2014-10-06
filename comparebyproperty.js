/*compare objects by property value*/
'use strict';
function compare(propertyName){
	return function(object1,object2){
		var val1 = object1[propertyName];
		var val2 = object2[propertyName];
		if(val1<val2){
			return -1; /*moves item to start of the list*/
		}else if(val1>val2){/* moves item to end of list*/
			return 1;
		}else{
			return 0;
		}
	};
	
}

/*array of objects*/
var stock =[{fruit: 'lemon', amt: 15}, {fruit:'banana', amt:20}, {fruit:'pear', amt:3}, {fruit:'orange', amt: 10}, {fruit:'apple', amt: 2}, {fruit: 'blueberry', amt: 400}];

stock.sort(compare('amt'));

/*Results:
[Object { fruit="pear", amt=3}
Object { fruit="orange", amt=10}
Object { fruit="apple", amt=11}
Object { fruit="banana", amt=20}]*/