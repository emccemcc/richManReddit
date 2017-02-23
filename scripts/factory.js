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
            var redditCallData = response;
            redditData.title = responseBody.data.children.post.data.title;
            redditData.author = responseBody.data.children.post.data.author;
            redditData.time = responseBody.data.children.post.data.created_utc;
            redditData.thumbnail = responseBody.data.children.post.data.thumbnail;
        }, function(error){
          console.log(error); //in case messed up the pull or server issue
        });
      },
      returnReddit: function() { //rename
          return redditData;
      }
  }
});
