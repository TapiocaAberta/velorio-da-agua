'use strict';

angular.module('velorioAguaApp')
    .controller('MainCtrl', function($scope, $http, socket) {
        $scope.awesomeDenunciations = [];

        $http.get('/api/denunciations').success(function(awesomeDenunciations) {
            $scope.awesomeDenunciations = awesomeDenunciations;
            socket.syncUpdates('denunciation', $scope.awesomeDenunciations);
        });

        $scope.addDenunciation = function() {
            if ($scope.newDenunciation === '') {
                return;
            }
            $http.post('/api/denunciations', {
                name: $scope.newDenunciation
            });
            $scope.newDenunciation = '';
        };

        $scope.deleteDenunciation = function(denunciation) {
            $http.delete('/api/denunciations/' + denunciation._id);
        };

        $scope.$on('$destroy', function() {
            socket.unsyncUpdates('denunciation');
        });
    });
