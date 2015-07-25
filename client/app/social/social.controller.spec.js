'use strict';

describe('Controller: SocialCtrl', function () {

  // load the controller's module
  beforeEach(module('velorioAguaApp'));

  var SocialCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    SocialCtrl = $controller('SocialCtrl', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});
