'use strict';

angular.module('velorioAguaApp')
    .config(function($stateProvider) {
        $stateProvider
            .state('denunciation', {
                url: '/denunciation',
                templateUrl: 'app/denunciation/denunciation.html',
                controller: 'DenunciationCtrl'
            });
    });