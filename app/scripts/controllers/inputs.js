/**
 * Created by Sriram on 10/4/2016.
 */
'use strict';

(function() {
  angular.module('App')
    .controller('InputsCtrl', InputsCtrl);

  function InputsCtrl($scope, inputConfigsFactory) {

    $scope.value= [];
    
    // get the json data from factory to display the inputs
    $scope.fields = inputConfigsFactory.getConvertedPatternVal();
  }
})();
