'use strict';

(function() {
  angular.module('App')
    .controller('CreateCtrl', CreateCtrl);

  function CreateCtrl($scope,inputConfigsFactory) {
    $scope.lol = 'lol'; //just sample ;)

    $scope.inputConfig= {};

    //toastr settings
    toastr.options.closeMethod = 'fadeOut';
    toastr.options.closeDuration = 300;
    toastr.options.closeEasing = 'swing';

    //on-click add input, send those values to create custom input
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

      toastr.success('Input added to list');
    }

  }
})();
