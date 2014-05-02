'use strict';

angular.module('firechatApp', [
  'ngCookies',
  'ngResource',
  'ngSanitize',
  'ngRoute',
  'firebase',
  'ui.router'
])
  .config(function($stateProvider, $urlRouterProvider) {
    
    $urlRouterProvider.otherwise('/');
    
    $stateProvider
        .state('home', {
            url: '/',
            templateUrl: 'views/main.html',
            controller: 'MainCtrl'
        })
        .state('chat', {
          url: '/chat/:roomId', 
          templateUrl: 'views/chat.html',
          controller: 'ChatCtrl'  
        });      
  });
