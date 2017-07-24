exports = typeof window === 'undefined' ? global : window;

exports.asyncAnswers = {
  async: function(value) {
      var dfd = $.Deferred();
      setTimeout(function(){dfd.resolve(value)}, 1);
      return dfd.promise();
  },

  manipulateRemoteData: function(url) {
      var dfd = $.Deferred();

      $.ajax({url:url}).then(function(data){
          var arr = $.map(data.people, function(value) {
              return value.name;
          });
          dfd.resolve(arr.sort());
      });
      return dfd.promise();
  }
};
