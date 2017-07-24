exports = typeof window === 'undefined' ? global : window;

exports.objectsAnswers = {
  alterContext: function(fn, obj) {
    return fn.call(obj);
  },

  alterObjects: function(constructor, greeting) {
    return constructor.prototype.greeting = greeting;
  },

  iterate: function(obj) {
    var arr = [];
    for(var propt in obj){
      if (obj.hasOwnProperty(propt)){
        arr.push(propt + ': ' + obj[propt]);
      }
    }
    return arr;
  }
};
