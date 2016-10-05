'use strict';

(function() {
  angular.module('App')
    .controller('ModifyCtrl', ModifyCtrl); //main controller for modify.html

  function ModifyCtrl($scope, inputConfigsFactory) {

    $scope.inputFields = inputConfigsFactory.getVal();
    
    //watch changes in inputFields
    $scope.$watch('inputFields', function(newValue, oldValue) {
      debugger;
      for(var i=0; i<newValue.length; i++){
        if(newValue[i].required == true && newValue[i].show == false){
          //  throw error saying.. required need to be displayed
          toastr.warning('required fields need to be displayed');
          $scope.inputFields = oldValue;
          break;
        }
        else{
          $scope.inputFields = newValue;
        }
      }
    }, true);

    $scope.applyChanges = function(changes){
      debugger;
      inputConfigsFactory.updateVal(changes);
    }

  }
})();
