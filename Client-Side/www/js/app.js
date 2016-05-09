// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.controllers' is found in controllers.js
angular.module('starter', ['ionic','ngCordova', 'starter.controllers','starter.factories', 'ngSanitize'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if(window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
    }
    if(window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }
    if(typeof analytics !== undefined) {
                   analytics.startTrackerWithId("UA-76076824-2");
                   analytics.trackView("Main");
                   console.log("started GA");
               } else {
                   console.log("Google Analytics Unavailable");
               }
  });
})

.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider

    .state('app', {
      url: "/app",
      abstract: true,
      templateUrl: "templates/menu.html",
      controller: 'AppCtrl'
    })

    .state('app.evening', {
      url: "/evening",
      views: {
        'menuContent' :{
          templateUrl: "templates/evening.html",
          controller: 'EveningCtrl'
        }
      }
  })
    .state('app.fund', {
      url: "/fund",
      views: {
        'menuContent' :{
          templateUrl: "templates/fund.html",
          controller: 'FundCtrl'
        }
      }
  })
    .state('app.about', {
      url: "/about",
      views: {
        'menuContent' :{
          templateUrl: "templates/about.html"
        }
      }
  })
    .state('app.favorites', {
      url: "/favorites",
      views: {
        'menuContent' :{
          templateUrl: "templates/favorites.html",
          controller: 'FavCtrl'
        }
      }
    })
    .state('app.junior', {
      url: "/junior",
      views: {
        'menuContent' :{
          templateUrl: "templates/junior.html",
          controller: 'JuniorCtrl'
        }
      }
 })
    .state('app.spiritual', {
      url: "/spiritual",
      views: {
        'menuContent' :{
          templateUrl: "templates/spiritual.html",
          controller: 'SpiritualCtrl'
        }
      }
 });


  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/app/evening');
});
