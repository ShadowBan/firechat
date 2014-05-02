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
        // HOME STATES AND NESTED VIEWS ========================================
        .state('home', {
            url: '/',
            templateUrl: 'views/main.html',
            controller: 'MainCtrl'
        })
        // ABOUT PAGE AND MULTIPLE NAMED VIEWS =================================
        .state('chat', {
          url: '/chat/:roomId', 
          templateUrl: 'views/chat.html',
          controller: 'ChatCtrl'  
        });      
  });
