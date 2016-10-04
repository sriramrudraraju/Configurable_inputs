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
      'service',
      'directives'
    ])
    .config(function($stateProvider, $urlRouterProvider){

      // For any unmatched url, send to /route1
      $urlRouterProvider.otherwise("/Home");

      $stateProvider
        .state('Create', {
          url: "/Create",
          templateUrl: "views/create.html",
          controller: 'CreateCtrl',
        })
        .state('Inputs', {
          url: "/Inputs",
          templateUrl: "views/inputs.html",
          controller: 'InputsCtrl',
        })
        .state('About', {
          url: "/About",
          templateUrl: "views/about.html",
          controller: 'AboutCtrl',
        });
    });

})();
