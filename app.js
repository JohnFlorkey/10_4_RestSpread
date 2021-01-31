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