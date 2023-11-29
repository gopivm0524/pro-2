var obj1 = { name: "Person 1", age: 5 };
var obj2 = { age: 5, name: "Person 1" };

function areObjectsEqual(obj1, obj2) {
    
  var str1 = JSON.stringify(obj1);
  var str2 = JSON.stringify(obj2);

  var parsedObj1 = JSON.parse(str1);
  var parsedObj2 = JSON.parse(str2);

  return JSON.stringify(parsedObj1) === JSON.stringify(parsedObj2);
}

console.log(areObjectsEqual(obj1, obj2));
