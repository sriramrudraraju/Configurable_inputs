'use strict';

(function(){
  angular
    .module('App', [
      'ngAnimate',
      'ngCookies',
      'ngResource',
      'ngRoute',
      'ngSanitize',
      'ngMaterial',
      'ngMessages',
      'ui.router',
      'service'
    ])
    .config(function($stateProvider, $urlRouterProvider){

      // For any unmatched url, send to /route1
      $urlRouterProvider.otherwise("/Home");

      $stateProvider
        .state('Home', {
          url: "/Home",
          templateUrl: "views/main.html",
          controller: 'MainCtrl',
        })
        .state('About', {
          url: "/About",
          templateUrl: "views/about.html",
          controller: 'AboutCtrl',
        });
    });

})();
