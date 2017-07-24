exports = typeof window === 'undefined' ? global : window;

exports.stringsAnswers = {
  reduceString: function(str, amount) {
      var re = new RegExp("(.)(?=\\1{" + amount + "})","g");
      return str.replace(re, "");
  },

  wordWrap: function(str, cols) {

  },

  reverseString: function(str) {

  }
};
