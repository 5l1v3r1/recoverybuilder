'use strict';

describe('Controller: LatestCtrl', function () {

  // load the controller's module
  beforeEach(module('recoverybuilderApp'));

  var LatestCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    LatestCtrl = $controller('LatestCtrl', {
      $scope: scope
    });
  }));
});
