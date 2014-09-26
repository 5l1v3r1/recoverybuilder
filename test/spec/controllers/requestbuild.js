'use strict';

describe('Controller: RequestbuildCtrl', function () {

  // load the controller's module
  beforeEach(module('recoverybuilderApp'));

  var RequestbuildCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    RequestbuildCtrl = $controller('RequestbuildCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});