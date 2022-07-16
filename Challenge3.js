Challenge #3

We have a nested object, we would like a function that you pass in the object and a key and get back the value. How this is implemented is up to you. Example Inputs object = {“a”:{“b”:{“c”:”d”}}} key = a/b/c object = {“x”:{“y”:{“z”:”a”}}} key = x/y/z value = a

---------------------------------------------------------

let obj = {
	a: {
		b: {
			c: 'd',
		},
	},
	x: {
		y: 
         {
           z: 'a'
         },
	},
};


function getObjectValues(object, key) {
	const keys = key.split('/');
	let obj = object;
	
	for (let ikey of keys) {
		for (let [objKey, value] of Object.entries(obj)) {
		    
			if (!keys.includes(objKey)) {
				continue;
			}
			obj = value;
		}
	}
	return obj;
}

console.log(getObjectValues(obj, 'a/b/c'));
console.log(getObjectValues(obj, 'x/y/z'));
------------------------------------------------------------