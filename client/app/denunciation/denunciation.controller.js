'use strict';

angular.module('velorioAguaApp')
    .controller('DenunciationCtrl', function($scope, $http, $stateParams) {
        $scope.message = 'Hello';
        console.log($stateParams.id);


        $http.get('/api/denunciations/'+$stateParams.id).success(function(denunciation) {
            $scope.denunciation = denunciation;
            console.log($scope.denunciation);
        });
    });
