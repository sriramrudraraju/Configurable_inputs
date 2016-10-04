'use strict';

describe('testing my first', function () {
  var scope,
    controller;
  beforeEach(function () {
    module('App');
  });

  describe('MainCtrl', function () {
    beforeEach(inject(function ($rootScope, $controller) {
      scope = $rootScope.$new();
      controller = $controller('MainCtrl', {
        '$scope': scope
      });
    }));
    it('to be defined', function () {
      expect(controller).toBeDefined();
    });

    it('watches the name and updates the counter', function () {
      expect(scope.lol).toBe('lol');
    });
    
  });
});
