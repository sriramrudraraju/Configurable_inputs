'use strict';

(function() {
  angular.module('App')
    .controller('CreateCtrl', CreateCtrl);

  function CreateCtrl($scope,inputConfigsFactory) {
    $scope.lol = 'lol';

    $scope.inputConfig= {};
    

    $scope.addInput = function(data){
      //send this data to factory to append to array of inputs
      inputConfigsFactory.addVal( {
        pattern: data.inputPattern,
        patternMessage:data.inputPatternMessage,
        name: data.inputName,
        type: data.inputType,
        classs: data.classs,
        required: data.requiredValue,
        show: data.showValue,
        disabled: data.disabledValue
      });
    }

  }
})();
