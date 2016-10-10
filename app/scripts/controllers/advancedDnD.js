/**
 * Created by Sriram on 10/6/2016.
 */
'use strict';

(function() {
  angular.module('App')
    .controller('AdvancedDnDCtrl', AdvancedDnDCtrl);

  function AdvancedDnDCtrl($scope, inputConfigsFactory) {

    //mocked up data for display
    $scope.model= [
      {
        label: "Top",
        allowedTypes: [
          "top"
        ],
        max: 4,
        people: [
          {
            name: "Bob",
            type: "top",
            placeholder: "firstname",
            classs:"col-md-12",
            inputType: "text",
            required: true,
            show: true,
            disabled: false
          },
          {
            name: "Charlie",
            type: "top",
            classs:"col-md-12",
            inputType: "text",
            required: true,
            show: true,
            disabled: false
          },
          {
            name: "Frank",
            type: "top",
            classs:"col-md-12",
            inputType: "number",
            required: true,
            show: true,
            disabled: false
          },
          {
            name: "Dave",
            type: "top",
            classs:"col-md-12",
            inputType: "number",
            required: true,
            show: true,
            disabled: false
          }
        ]
      },
      {
        label: "Bottom",
        allowedTypes: [
          "bottom"
        ],
        max: 4,
        people: [
          {
            name: "Alice",
            type: "bottom",
            classs:"col-md-12",
            inputType: "text",
            required: true,
            show: true,
            disabled: false
          },
          {
            name: "Eve",
            type: "bottom",
            classs:"col-md-12",
            inputType: "text",
            required: true,
            show: true,
            disabled: false
          },
          {
            name: "Peggy",
            type: "bottom",
            classs:"col-md-12",
            inputType: "text",
            required: true,
            show: true,
            disabled: false
          }
        ]
      },
      {
        label: "Add-on",
        allowedTypes: [
          "top",
          "bottom"
        ],
        max: 6,
        people: [
          {
            name: "Frank",
            type: "top",
            classs:"col-md-12",
            inputType: "text",
            required: true,
            show: true,
            disabled: false
          },
          {
            name: "Mallory",
            type: "bottom",
            classs:"col-md-12",
            inputType: "text",
            required: true,
            show: true,
            disabled: false
          },
          {
            name: "Alex",
            type: "unknown",
            classs:"col-md-12",
            inputType: "text",
            required: true,
            show: true,
            disabled: false
          },
          {
            name: "Oscar",
            type: "top",
            classs:"col-md-12",
            inputType: "text",
            required: true,
            show: true,
            disabled: false
          },
          {
            name: "Wendy",
            type: "bottom",
            classs:"col-md-12",
            inputType: "text",
            required: true,
            show: true,
            disabled: false
          }
        ]
      }
    ];

    //$watch changing $model and display on screen 
    $scope.$watch('model', function(model) {
      $scope.modelAsJson = angular.toJson(model, true);
    }, true);
  }
})();

