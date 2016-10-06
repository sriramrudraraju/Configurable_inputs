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
      'directives',
      'dndLists'
    ])
    .config(function($stateProvider, $urlRouterProvider){

      // For any unmatched url, send to /route1
      $urlRouterProvider.otherwise("/Create");

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
        .state('Modify', {
          url: "/Modify",
          templateUrl: "views/modify.html",
          controller: 'ModifyCtrl',
        }) 
        .state('BasicDnD', {
        url: "/BasicDnD",
        templateUrl: "views/basicDnD.html",
        controller: 'BasicDnDCtrl',
      });
    });

})();
