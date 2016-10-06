/**
 * Created by Sriram on 10/6/2016.
 */
'use strict';

(function() {
  angular.module('App')
    .controller('BasicDnDCtrl', BasicDnDCtrl); //main controller for modify.html

  function BasicDnDCtrl($scope, inputConfigsFactory) {

    $scope.dragoverCallback = function(event, index, external, type) {
      $scope.logListEvent('dragged over', event, index, external, type);
      // Disallow dropping in the third row. Could also be done with dnd-disable-if.
      return index < 10;
    };

    $scope.dropCallback = function(event, index, item, external, type, allowedType) {
      $scope.logListEvent('dropped at', event, index, external, type);
      if (external) {
        if (allowedType === 'itemType' && !item.label) return false;
        if (allowedType === 'containerType' && !angular.isArray(item)) return false;
      }
      return item;
    };

    $scope.logEvent = function(message, event) {
      console.log(message, '(triggered by the following', event.type, 'event)');
      console.log(event);
    };

    $scope.logListEvent = function(action, event, index, external, type) {
      var message = external ? 'External ' : '';
      message += type + ' element is ' + action + ' position ' + index;
      $scope.logEvent(message, event);
    };

    $scope.model = [
      [
        [
          {
            "label": "Item 10"
          },
          {
            "label": "Item 11"
          },
          {
            "label": "Item 12"
          },
          {
            "label": "Item 13"
          },
          {
            "label": "Item 14"
          },
          {
            "label": "Item 15"
          },
          {
            "label": "Item 16"
          }
        ],
        [
          {
            "label": "Item 17"
          },
          {
            "label": "Item 18"
          },
          {
            "label": "Item 19"
          },
          {
            "label": "Item 20"
          },
          {
            "label": "Item 21"
          },
          {
            "label": "Item 22"
          },
          {
            "label": "Item 23"
          }
        ]
      ],
    ]

    $scope.$watch('model', function(model) {
      $scope.modelAsJson = angular.toJson(model, true);
    }, true);
  }
})();
