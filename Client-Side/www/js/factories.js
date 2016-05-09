angular.module('starter.factories', [])

// Mandali-todo  :  GET JSON From Server
.factory('Concert', function($http) {
  var o = {
    evening_concerts: [],
    junior_concerts: [],
    spiritual_concerts: []
  }

  o.populateEveningConcerts = function() {
// Mandali-todo : too many requests, find better ways
    return $http({
      method: 'GET',
      url: 'http://127.0.0.1:5000/evening_concerts'
    }).then(function successCallback(response) {
          // merge data into the queue
          o.evening_concerts = response.data;

      }, function errorCallback(response) {
        // called asynchronously if an error occurs
        // Mandali-todo : Load Offline concert list here
        // o.evening_concerts = JSON here
      });

  }

  o.populateJuniorConcerts = function() {
// Mandali-todo : too many requests, find better ways
    return $http({
      method: 'GET',
      url: 'http://127.0.0.1:5000/junior_concerts'
    }).then(function successCallback(response) {
          // merge data into the queue
          o.junior_concerts = response.data;

      }, function errorCallback(response) {
        // called asynchronously if an error occurs
        // Mandali-todo : Load Offline concert list here
        // o.evening_concerts = JSON here
      });

  }

  o.populateSpritualConcerts = function() {
// Mandali-todo : too many requests, find better ways
    return $http({
      method: 'GET',
      url: 'http://127.0.0.1:5000/spiritual_concerts'
    }).then(function successCallback(response) {
          // merge data into the queue
          o.spiritual_concerts = response.data;

      }, function errorCallback(response) {
        // called asynchronously if an error occurs
        // Mandali-todo : Load Offline concert list here
        // o.evening_concerts = JSON here
      });

  }


  return o;
});
