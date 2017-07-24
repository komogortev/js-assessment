exports = typeof window === 'undefined' ? global : window;

exports.countAnswers = {
  count: function (start, end) {
    var timer;
    function populateCount(){
        console.log(start++);
        if (start <= end ) timer = setTimeout( populateCount, 100);
      }
      populateCount();
    return {
      cancel: function() {timer && clearTimeout(timer)}
    };
  }
};
