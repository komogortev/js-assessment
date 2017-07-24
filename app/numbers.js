exports = typeof window === 'undefined' ? global : window;

exports.numbersAnswers = {
  valueAtBit: function(num, bit) {
      var arr = num.toString(2).split('').reverse();
      return Number.parseInt(arr[bit-1]);
  },

  base10: function(str) {
    return Number.parseInt(str, 2);
  },

  convertToBinary: function(num) {
    var bitstr = num.toString(2);
    return bitstr="00000000".substr(bitstr.length)+bitstr;
  },

  multiply: function(a, b) {
    return Number((a * b).toFixed(12));
  }
};
