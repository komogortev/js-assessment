exports = typeof window === 'undefined' ? global : window;

exports.functionsAnswers = {
  argsAsArray: function(fn, arr) {
      return fn(... arr);
  },

  speak: function(fn, obj) {
      var newSpeak = fn.bind(obj);
      return newSpeak(obj);
  },

  functionFunction: function(str) {

    return function(arg) {
        return str+', '+arg;
    }
  },

  makeClosures: function(arr, fn) {
    var resultItem = function newFn(item) {
      return function() {
        return fn(item);
      };
    }

    var resultArr = [];
    var len = arr.length;
    for(var i=0; i<len; i++){
      resultArr.push(resultItem(arr[i]));
    }

    return resultArr;
  },

  partial: function(fn, str1, str2) {
    return function(str3){
       return fn(str1, str2, str3);
    };
  },

  useArguments: function() {
    var sum=0, len = arguments.length;

    for(var i=0; i<len; i++){
      sum += arguments[i];
    }

    return sum;
  },

  callIt: function(fn) {
     var newArgs = [].slice.call(arguments, 1, arguments.length);
     fn.apply(null,newArgs);
  },

  partialUsingArguments: function(fn) {
      var args = [].slice.call(arguments, 1, arguments.length);

      return function(){
          var allArgs = args.concat([].slice.call(arguments));
          return fn.apply(null, allArgs);
      }
  },

  curryIt: function(fn) {
      function applyArguments(_fn, args) {
          return _fn.apply(null, args);
      }

      function getArgumentAccumulator(accumulatedArguments, expectedArgumentsCount) {
          return function (currentArgument) {
              accumulatedArguments.push(currentArgument);

              var allArgumentsProvided = accumulatedArguments.length === expectedArgumentsCount;

              if (allArgumentsProvided) {
                  return applyArguments(fn, accumulatedArguments);
              }

              return getArgumentAccumulator(accumulatedArguments, expectedArgumentsCount);
          };
      }

      return getArgumentAccumulator([], fn.length);
  }
};
