'use strict';

angular.module('velorioAguaApp')
    .config(function($stateProvider) {
        $stateProvider
            .state('denunciation', {
                url: '/denunciation/:id',
                templateUrl: 'app/denunciation/denunciation.html',
                controller: 'DenunciationCtrl'
            });
    });