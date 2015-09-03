exports = (typeof window === 'undefined') ? global : window;

exports.arraysAnswers = {

  indexOf : function(arr, item) {
    var copy = arr.slice(0);
    while (copy.length > 0){
      if (copy.pop() === item){
        return copy.length;
      } 
    }
    return -1;
  },

  //note1: return
  //note2: reduce takes a callback and tells us what to do with the parameters we pass in
  sum : function(arr) { 
    return arr.reduce(function(acc, val){
      return acc + val;
    }, 0);
  },

  //use splice to remove item
  remove : function(arr, item) {
    arr.forEach(function(val, index){
      if (val === item){
        arr.splice(index, 1);
      }
    })
    return arr;
  },

  //???
  removeWithoutCopy : function(arr, item) {
    arr.forEach(function(val, index){
      if (val === item){
        arr.splice(index, 1);
      }
    })
    return arr;
  },

  append : function(arr, item) {
    arr.push(item);
    return arr;
  },

  truncate : function(arr) {
    arr.pop();
    return arr;
  },

  prepend : function(arr, item) {
    arr.unshift(item);
    return arr;
  },

  curtail : function(arr) {
    arr.shift();
    return arr;
  },

  //concat method
  concat : function(arr1, arr2) {
    return arr1.concat(arr2);
  },

  //splice(index, num of items to remove, item to add)
  insert : function(arr, item, index) {
    arr.splice(index, 0, item);
    return arr;
  },

  //cannot use regex for this because searching for 1 in '[11]' will return true
  count : function(arr, item) {
    var counter = 0;
    arr.forEach(function(val){
      if (item === val){
        counter++;
      }
    })
    return counter;
  },

  duplicates : function(arr) {
    var obj = {};
    var dupl = [];
    arr.forEach(function(val){
      if (obj[val] === undefined){
        obj[val] = false;
      }
      if (obj[val] === false){
        dupl.push(val);
        obj[val] = true;
      }
    })
    return dupl;
  },

  square : function(arr) {

  },

  findAllOccurrences : function(arr, target) {

  }
};
