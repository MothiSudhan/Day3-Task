//TASK 1
//! How tocompare two JSON have the same properties without order

let obj1 = {name:"person1", age:5};
let obj2 = {age:5, name:"person1"};

// Step 1: Convert the objects to string and sort
let str1 = JSON.stringify(obj1, Object.keys(obj1).sort());
let str2 = JSON.stringify(obj2, Object.keys(obj2).sort());


function Compare(str1, str2) {
 
  if (str1.length !== str2.length) {
    return false;
  }

  for (let key in str1) {
    if (str1[key] !== str2[key]) {
      return false;
    }
  }


  return true;
}

console.log(Compare(str1, str2)); 