'use strict';

angular.module('firechatApp')
  .controller('ChatCtrl', function ($scope, $firebase, $routeParams, $stateParams) {
    updateSidebar();
    var url = 'https://vivid-fire-2288.firebaseio.com/rooms/'+ $stateParams.roomId +'/chat',
        fireRef = new Firebase(url);
    
    $scope.messages = $firebase(fireRef.limit(15));
    $scope.username = 'Guest' + Math.floor(Math.random()*101);
    
    $scope.addMessage = function() {
      $scope.messages.$add({
        from: $scope.username,
        content: $scope.message
      });
      $scope.message = '';
    };
  });
