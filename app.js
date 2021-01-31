function filterOutOdds() {
    var nums = Array.prototype.slice.call(arguments);
    return nums.filter(function(num) {
      return num % 2 === 0
    });
  }
  
function myFilterOutOdds(...vals) {
    return vals.filter((val) => val % 2 === 0);
}

function findMin(...nums) {
    return nums.reduce((localMin, nextNum) => nextNum < localMin ? nextNum : localMin);
}

function mergeObjects(obj1, obj2) {
    return {...obj1, ...obj2};
}

function doubleAndReturnArgs(arr, ...nums){
    return [...arr, ...nums.map((num) => num *2)];
}

function removeRandom(items) {

}

function extend(array1, array2){
    return [...array1, ...array2];
}

function addKeyVal(obj, key, val) {
    return {...obj, [key]: val};
}

function removeKey(obj, key) {
    let newObj = {...obj};
    delete newObj[key];
    return newObj;
}

function combine(obj1, obj2) {
    return {...obj1, ...obj2};
}