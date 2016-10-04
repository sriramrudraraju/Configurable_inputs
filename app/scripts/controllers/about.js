'use strict';

(function() {
  angular.module('App')
    .controller('AboutCtrl', AboutCtrl);

  function AboutCtrl() {
    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  }
  })();
