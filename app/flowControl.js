exports = typeof window === 'undefined' ? global : window;

exports.flowControlAnswers = {
  fizzBuzz: function(num) {
    return (num % 3 == 0) ? (num % 5 == 0) ? 'fizzbuzz' : 'fizz' : num % 5 == 0 ? 'buzz' : Number.isInteger(num) ? num : false     ;
  }
};
