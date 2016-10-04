/**
 * Created by Sriram on 6/14/2016.
 */
'use strict';

describe('service', function () {
  // var scope;

  beforeEach(function () {
    module('service');
  });

  describe('Basic Service', function () {

    var $httpBackend,
      expectedUrl = 'http://mocker.egen.io/users',
      promise,
      successCallback,
      errorCallback,
      myService;

    beforeEach(inject(function (_$httpBackend_, UserService) {
      $httpBackend = _$httpBackend_;
      successCallback = jasmine.createSpy();
      errorCallback = jasmine.createSpy();
      myService = UserService;
    }));

    afterEach(function() {
      $httpBackend.verifyNoOutstandingExpectation();
      $httpBackend.verifyNoOutstandingRequest();
    });

    it('returns http requests successfully and resolves the promise', function () {
      var data = '{"translationKey":"translationValue"}';
      $httpBackend.expectGET(expectedUrl).respond(200, data);
      promise = myService.getUsers();
      promise.then(successCallback, errorCallback);

      $httpBackend.flush();

      expect(successCallback).toHaveBeenCalledWith(angular.fromJson(data));
      expect(errorCallback).not.toHaveBeenCalled();
    });

    it('returns http requests with an error and rejects the promise', function () {
      $httpBackend.expectGET(expectedUrl).respond(500, 'Not Found');
      promise = myService.getUsers();
      promise.then(successCallback, errorCallback);

      $httpBackend.flush();

      expect(successCallback).not.toHaveBeenCalled();
      expect(errorCallback).toHaveBeenCalled();
    });
  });

});
