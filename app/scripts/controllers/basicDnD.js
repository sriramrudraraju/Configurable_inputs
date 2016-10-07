/**
 * Created by Sriram on 10/6/2016.
 */
'use strict';

(function() {
  angular.module('App')
    .controller('BasicDnDCtrl', BasicDnDCtrl); //main controller for modify.html

  function BasicDnDCtrl($scope, inputConfigsFactory) {
    $scope.model= [
      {
        "label": "Men",
        "allowedTypes": [
          "man"
        ],
        "max": 4,
        "people": [
          {
            "name": "Bob",
            "type": "man"
          },
          {
            "name": "Charlie",
            "type": "man"
          },
          {
            "name": "Frank",
            "type": "man"
          },
          {
            "name": "Dave",
            "type": "man"
          }
        ]
      },
      {
        "label": "Women",
        "allowedTypes": [
          "woman"
        ],
        "max": 4,
        "people": [
          {
            "name": "Alice",
            "type": "woman"
          },
          {
            "name": "Eve",
            "type": "woman"
          },
          {
            "name": "Peggy",
            "type": "woman"
          }
        ]
      },
      {
        "label": "People",
        "allowedTypes": [
          "man",
          "woman"
        ],
        "max": 6,
        "people": [
          {
            "name": "Frank",
            "type": "man"
          },
          {
            "name": "Mallory",
            "type": "woman"
          },
          {
            "name": "Alex",
            "type": "unknown"
          },
          {
            "name": "Oscar",
            "type": "man"
          },
          {
            "name": "Wendy",
            "type": "woman"
          }
        ]
      }
    ];

    $scope.$watch('model', function(model) {
      $scope.modelAsJson = angular.toJson(model, true);
    }, true);
  }
})();
