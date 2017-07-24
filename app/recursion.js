exports = typeof window === 'undefined' ? global : window;

var recurSelf = exports.recursionAnswers = {
  listFiles: function(data, dirName) {
    var fileList = [],
        folderList = [];

    function processPackage(obj){
      var files = obj.files;

      folderList.push(obj.dir);

      for(var i=0, len=files.length; i<len; i++) {
         if (typeof files[i] === 'string'){
           if (!dirName ||  folderList.indexOf(dirName) > -1) {
            fileList.push(files[i]);
           }
        } else {
           processPackage(files[i]);
        }
      }

      folderList.pop();
    }

    processPackage(data);

    return folderList.length > 0 ? folderList : fileList;
  },

  permute: function(arr) {
    function doPermutation(a) {
      var result = [];

      for (var i = 0, len = a.length; i < len; i++) {

          var restA = a.slice(0, i).concat(a.slice(i + 1));
          var rest = doPermutation(restA);

          if (rest.length === 0) {
              result.push([a[i]]);
          } else {
              for (var j = 0; j < rest.length; j++) {
                  result.push([a[i]].concat(rest[j]));
              }
          }

      }
      return result;
  }

    return doPermutation(arr);
  },

  fibonacci: function(n) {
      if (n <= 2){ return 1; }

      var a = b = 1;
      for (var i=2; i <= n; i++){
          var tmp = a;
          a = a + b;
          b = tmp;
          if ( i+1 == n ){ return a; }
      }
  },

  validParentheses: function(n) {
//       var char = '()';
//       var string = '';
//
//       for (var i=0; i<n;i++){
//           string += char;
//       }
//
//       function doPermutation(a) {
//           var result = [];
//
//           for (var i = 0, len = a.length; i < len; i++) {
// var counter = 0;
//
//               var restA = a.slice(0, i).concat(a.slice(i + 1));
//               var rest = doPermutation(restA);
//
//               if (rest.length === 0) {
//                   console.log('rest',a[i]);
//
//                   counter = a[i] === ')' ? counter - 1 : counter + 1;
//
//                   if ( counter == -1 ){
//                       break;
//                   } else {
//                       result.push([a[i]]);
//                   }
//
//               } else {
//
//                   for (var j = 0; j < rest.length; j++) {
//                       console.log('RA',[a[i]].concat(rest[j]), counter);
//                       result.push([a[i]].concat(rest[j]));
//                   }
//               }
//
//           }
//
//
//           console.log('result ', result);
//           return result;
//       }
//
//       return doPermutation(string.split(''));

      //
      // function p(n){
      //     console.clear();
      //     var arr = [], resp = [], tmp =[];
      //     for (var i=1; i <= n*2; i++){
      //         arr.push(i%2 ? "(":")");
      //     }
      //     resp.push(arr.join(''));
      //     for (var i=1; i <= n*2; i++){
      //         tmp.push(i<=n ? "(":")");
      //     }
      //     resp.push(tmp.join(''));
      //     var l = arr.length;
      //     for(var i=1; i<=l-2; i+=2){
      //         for(var j=i+2; j<=l; j+=2){
      //             var tmp = arr.slice();
      //             tmp.splice(i,1)
      //             tmp.splice(j,0,')');
      //             console.log(i,j,tmp.join(''));
      //             resp.push(tmp.join(''));
      //         }
      //     }
      //
      //     console.log(resp)
      // }
      // p(4);
      function nPair(n) {
          if (n == 0)
              return [""];

          var result = [];
          for (var i = 0; i < n; ++i) {

              var lefts = nPair(i);
              var rights = nPair(n - i - 1);

              for (var l = 0; l < lefts.length; ++l) {
                  for (var r = 0; r < rights.length; ++r){
                      result.push("(" + lefts[l] + ")" + rights[r]);
                  }
              }
          }

          return result;
      }

      return nPair(n);
  }
};
