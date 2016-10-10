'use strict';

(function() {
  angular.module('App')
    .controller('ModifyCtrl', ModifyCtrl); //main controller for modify.html

  function ModifyCtrl($scope, inputConfigsFactory) {

    $scope.inputFields = inputConfigsFactory.getVal();

    //watch changes in inputFields
    $scope.$watch('inputFields', function(newValue, oldValue) {
      for(var i=0; i<newValue.length; i++){
        if(newValue[i].required == true && newValue[i].show == false){
          //  throw error saying.. required need to be displayed
          //adding custom validations to the input check/unchecks
          toastr.warning('required fields need to be displayed');
          $scope.inputFields = oldValue;
          break;
        }
        else{
          $scope.inputFields = newValue;
        }
      }
    }, true);

    //update the changes in the factory
    $scope.applyChanges = function(changes){
      inputConfigsFactory.updateVal(changes);
    }

  }
})();
