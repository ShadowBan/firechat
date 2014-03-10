'use strict';

angular.module('firechatApp')
  .directive('ckHeader', function () {
    return {
      templateUrl: 'views/shared/header.html',
      restrict: 'E',
      controller: 'MainCtrl',
      link: function postLink(scope, element, attrs) {
        
      }
    };
  });
