'use strict';

angular.module('velorioAguaApp')
    .config(function($stateProvider) {
        $stateProvider
            .state('social2', {
                url: '/social2',
                templateUrl: 'app/social2/social2.html',
                controller: 'Social2Ctrl'
            });
    });
