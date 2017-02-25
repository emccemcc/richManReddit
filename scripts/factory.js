var app = angular.module('myModule');

app.factory('ourFactory', function($http) {
  var redditData = {};


  return {
      searchReddit: function(){
        $http({
          method:'GET',
          url: 'https://www.reddit.com/r/aww/.json'
        }).then(function sucessfulCallback(response){
            //check to see if it's working
            console.log(response);
            //jazz V is the response data
            var redditCallData = response.data.data.children;
            console.log(redditCallData);
//for each item in the array, store a new object?
              redditData = redditCallData;


            //redditTitles = redditCallData.data.data.children[0].data.title;
            //console.log(redditData.title = redditCallData.data.data.children[0].data.title);
            //redditData.author = redditCallData.data.children[0].data.author;
            //redditData.time = redditCallData.data.children.data.created_utc;
            //redditData.thumbnail = redditCallData.data.children.data.thumbnail;

        }, function(error){
          console.log(error); //in case messed up the pull or server issue
        });
      },
      returnReddit: function() { //rename
          return redditData;
      }
  }
});
