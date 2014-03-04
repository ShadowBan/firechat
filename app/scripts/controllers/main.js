'use strict';

angular.module('firechatApp')
  .controller('MainCtrl', function ($scope, $firebase) {
    var url = 'https://vivid-fire-2288.firebaseio.com/test/chat',
        fireRef = new Firebase(url);
    $scope.messages = $firebase(fireRef.limit(15));
    $scope.username = 'Guest' + Math.floor(Math.random()*101);
    $scope.addMessage = function() {
      $scope.messages.$add({
        from: $scope.username, content: $scope.message
      });
      $scope.message = "";
    }
  });
