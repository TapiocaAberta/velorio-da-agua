'use strict';

angular.module('velorioAguaApp')
    .config(function($stateProvider) {
        $stateProvider
            .state('social', {
                url: '/social',
                templateUrl: 'app/social/social.html',
                controller: 'SocialCtrl'
            });
    });
