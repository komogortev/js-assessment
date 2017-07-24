exports = typeof window === 'undefined' ? global : window;

exports.regexAnswers = {
  containsNumber: function(str) {
    return (/\d/).test(str);
  },

  containsRepeatingLetter: function(str) {
    return str.match(/([A-z])\1/) ? true : false;
  },

  endsWithVowel: function(str) {
    return str.match(/(A|a|E|e|I|i|O|o|U|u)$/) ? true : false;
  },

  captureThreeNumbers: function(str) {
      return str.match(/\d{3}/) ? str.match(/\d{3}/)[0] : false;
  },

  matchesPattern: function(str) {
      return str.match( /^(\d{3})-(\d{3})-(\d{4})$/ ) ? true : false;
  },

  isUSD: function(str) {
      return (/^\$\d{1,3}(,\d{3})*(\.\d{2})?$/).test(str);
  }
};
