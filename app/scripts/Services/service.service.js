/**
 * Created by Sriram on 6/14/2016.
 */

//sample service syntax
'use strict';

(function() {
  angular.module('service', [])
    .service('UserService', UserService);


  function UserService($http, $q) {
    var service = this;

    function getUsers() {
      var deferred = $q.defer();

      $http.get('http://mocker.egen.io/users')
        .then(function(res) {
          deferred.resolve(res.data);
        })
        .catch(function(e) {
          deferred.reject(e.data);
        });

      return deferred.promise;
    }

    service.getUsers = getUsers;
  }

})();
