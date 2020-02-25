const fs = require('fs');
const readlinesync = require('readline-sync');
var name = readlinesync.question('Enter your file name: ');
var key = readlinesync.question('Enter your key: ');
function cip() {
	return new Promise((resolve, reject) => {
		fs.readFile(name, function(err, data) {
			var arr1 = [],
				arr3 = [];
			for (var i = 0; i < data.toString().length; i++) {
				arr1.push(data.toString().charCodeAt(i));
			}
			var arr2 = arr1.map((n) => {
				return n ^ key;
			});
			for (var j = 0; j < arr2.length; j++) {
				arr3.push(arr2[j] ^ key);
				arr2[j] = String.fromCharCode(arr2[j]);
				arr3[j] = String.fromCharCode(arr3[j]);
			}
			resolve(`Encrypted:${arr2.join('')}\nDecrypted:${arr3.join('')}`);
		});
	});
}
async function output() {
	console.log(await cip());
}
output();
