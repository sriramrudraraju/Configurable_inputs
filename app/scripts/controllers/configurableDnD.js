/**
 * Created by Sriram on 10/7/2016.
 */
'use strict';

(function() {
  angular.module('App')
    .controller('ConfigurableDnDCtrl', ConfigurableDnDCtrl);

  function ConfigurableDnDCtrl($scope, $mdDialog, $state, DnDinputConfigsFactory) {

    $scope.model= DnDinputConfigsFactory.getConvertedPatternVal();


    //function to open $dialog(modal) to configure input properties
    $scope.showAdvanced = function(ev) {
      $mdDialog.show({
        controller: DnDinputsDialogCtrl,
        templateUrl: 'dialog1.tmpl.html',
        parent: angular.element(document.body),
        targetEvent: ev,
        clickOutsideToClose:false, //modal cannot be closed if clicked outside
      })
        .then(function(answer) {
          $scope.status = 'You said the information was "' + answer + '".';
        }, function() {
          $scope.status = 'You cancelled the dialog.';
        });
    };

    //controller/function for $dialog(modal)
    function DnDinputsDialogCtrl($scope, $mdDialog) {
      $scope.model= DnDinputConfigsFactory.getConvertedPatternVal();

      //watch changes in inputFields
      /*Basic validation on configurable inputs $dialog
      * Ui throws warning if user tries to uncheck display property if  that input's required property is checked*/
      $scope.$watch('model', function(newValue, oldValue) {
        for(var j=0; j<newValue.length; j++){
          for(var i=0; i<newValue[j].inputs.length; i++){
            debugger;
            if(newValue[j].inputs[i].required == true && newValue[j].inputs[i].show == false){
              //  throw error saying.. required need to be displayed
              toastr.warning('required fields need to be displayed');
              $scope.model = oldValue; //if true assign its old value
               return;
            }
            else{
              $scope.model = newValue; //else assign new value
            }
          }
        }
      },true);

      $scope.hide = function() {
        $mdDialog.hide();
      };

      $scope.cancel = function() {
        $mdDialog.cancel();
      };

      $scope.answer = function(answer) {
        //on clicking 'ok' update the the changed values
        DnDinputConfigsFactory.updateVal(answer);
        $mdDialog.hide(answer);
        $state.reload(); // refresh the page
      };
    }


    //$watch changing $model and display on screen
    $scope.$watch('model', function(model) {
      $scope.modelAsJson = angular.toJson(model, true);
    }, true);
  }
})();
