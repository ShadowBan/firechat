'use strict';

angular.module('firechatApp')
  .controller('MainCtrl', function ($scope) {
    function makeid(size){
      var text = '';
      var possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
      for( var i=0; i < size; i++ ){
        text += possible.charAt(Math.floor(Math.random() * possible.length));
      }
      return text;
    };

    $scope.addChat = function(){
      if(jQuery.inArray($scope.newRoom, $scope.rooms) == -1){
        $scope.rooms.push($scope.newRoom);
      };
      window.location = "#/chat/" + $scope.newRoom;
      $scope.newRoom = makeid(10);
    };

    $scope.newRoom = makeid(10);
    $scope.rooms = [];
  });
