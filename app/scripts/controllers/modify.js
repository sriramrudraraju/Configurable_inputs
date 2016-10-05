'use strict';

(function() {
  angular.module('App')
    .controller('ModifyCtrl', ModifyCtrl);

  function ModifyCtrl($scope, inputConfigsFactory) {
    $scope.inputFields = inputConfigsFactory.getVal();


    $scope.applyChanges = function(changes){
      debugger;
      inputConfigsFactory.updateVal(changes);
    }
  }
  })();
