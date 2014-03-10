'use strict';

describe('Directive: ckHeader', function () {

  // load the directive's module
  beforeEach(module('firechatApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<ck-header></ck-header>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('this is the ckHeader directive');
  }));
});
