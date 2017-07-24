exports = typeof window === 'undefined' ? global : window;

var self = exports.arraysAnswers = {
  indexOf: function(arr, item) {
      return arr.indexOf(item);
  },

  sum: function(arr) {
      // arr.reduce(function(pv, cv) { return pv + cv; }, 0); //too slow
      var count=0;
      for (var i=arr.length; i--;) count+=arr[i];
      return count;

  },

  remove: function(arr, item) {
      for (var i=arr.length; i--;) {
          if( arr[i] === item ) arr.splice(i, 1);
      }
      return arr;
  },

  removeWithoutCopy: function(arr, item) {
      return self.remove(arr, item);
  },

  append: function(arr, item) {
      arr.push(item);
      return arr;
  },

  truncate: function(arr) {
      arr.pop();
      return arr;
  },

  prepend: function(arr, item) {
      arr.unshift(item);
      return arr;
  },

  curtail: function(arr) {
      arr.shift();
      return arr;
  },

  concat: function(arr1, arr2, arr3) {
      return arr3 = arr1.concat(arr2);
  },

  insert: function(arr, item, index) {
      arr.splice(index, 0, item);
      return arr;
  },

  count: function(arr, item) {
      var result = 0;
      //slightly faster but not as fancy
      // for (var i=arr.length; i--;) {
      //     result = arr[i] === item ? result + 1 :  result;
      // }
      for(var i=0,len=arr.length; i<len; result = arr[i++] === item ? result + 1 :  result);
      return result;
  },

  duplicates: function(arr) {
    var duplicates = [],
      counts={};

    for (var i=arr.length;i--;) {
        var item = arr[i];
        counts[item] = counts[item] >= 1 ? counts[item] + 1 : 1;
        if (counts[item] === 2) {
            duplicates.push(item);
        }
    }

    return duplicates;
  },

  square: function(arr) {
    for (var i=0, len = arr.length;i<len;i++) {
      var item = arr[i];
      arr[i]=item * item;//is considerably faster than Math.pow();
    }
    return arr;
  },

  findAllOccurrences: function(arr, target) {
    var indexes = [];
    for(var i = 0, len = arr.length; i < len; i++){
        if (arr[i] === target) indexes.push(i);
    }
    return indexes;
  }
};
