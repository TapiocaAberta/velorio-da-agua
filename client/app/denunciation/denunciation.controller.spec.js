'use strict';

describe('Controller: DenunciationCtrl', function() {

    // load the controller's module
    beforeEach(module('velorioAguaApp'));

    var DenunciationCtrl, scope;

    // Initialize the controller and a mock scope
    beforeEach(inject(function($controller, $rootScope) {
        scope = $rootScope.$new();
        DenunciationCtrl = $controller('DenunciationCtrl', {
            $scope: scope
        });
    }));

    it('should ...', function() {
        expect(1).toEqual(1);
    });
});