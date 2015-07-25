'use strict';

describe('Controller: MainCtrl', function() {

    // load the controller's module
    beforeEach(module('velorioAguaApp'));
    beforeEach(module('socketMock'));

    var MainCtrl,
        scope,
        $httpBackend;

    // Initialize the controller and a mock scope
    beforeEach(inject(function(_$httpBackend_, $controller, $rootScope) {
        $httpBackend = _$httpBackend_;
        $httpBackend.expectGET('/api/denunciations')
            .respond(['HTML5 Boilerplate', 'AngularJS', 'Karma', 'Express']);

        scope = $rootScope.$new();
        MainCtrl = $controller('MainCtrl', {
            $scope: scope
        });
    }));

    it('should attach a list of denunciations to the scope', function() {
        $httpBackend.flush();
        expect(scope.awesomeDenunciations.length).toBe(4);
    });
});