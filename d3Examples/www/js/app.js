// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
var rootURL = '/main';

angular.module('starter', ['ionic', 'starter.mainController', 'starter.barController', 'starter.pieController', 'starter.lineController'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    if(window.cordova && window.cordova.plugins.Keyboard) {
      // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
      // for form inputs)
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);

      // Don't remove this line unless you know what you are doing. It stops the viewport
      // from snapping when text inputs are focused. Ionic handles this internally for
      // a much nicer keyboard experience.
      cordova.plugins.Keyboard.disableScroll(true);
    }
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }
  });
})

.config(function ($stateProvider, $urlRouterProvider) {
    //$httpProvider.defaults.withCredentials = true;

    $stateProvider.state('main', {
        url: '/main',
        templateUrl: 'templates/main.html',
        controller: 'mainController'
    });

    $stateProvider.state('pie', {
        url: '/pie',
        templateUrl: 'templates/pie.html',
        controller: 'pieController'
    });

    $stateProvider.state('bar', {
        url: '/bar',
        templateUrl: 'templates/bar.html',
        controller: 'barController'
    });

     $stateProvider.state('line', {
        url: '/line',
        templateUrl: 'templates/line.html',
        controller: 'lineController'
    });

    $urlRouterProvider.otherwise(rootURL);

});
