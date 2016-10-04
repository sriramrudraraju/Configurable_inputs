'use strict';

(function() {
  angular.module('App')
    .controller('MainCtrl', MainCtrl);

  function MainCtrl($scope,UserService) {
    $scope.lol = 'lol';

        // UserService.getUsers()
        // .then(function(res) {
        //   $scope.users = res;
        // }, function(err) {
        //   console.log(err);
        // });
  }
})();
