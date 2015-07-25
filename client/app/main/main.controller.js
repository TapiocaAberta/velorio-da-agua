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

            var denunciationJson = {
                name: $scope.name,
                address: $scope.address,
                description: $scope.description,
                date: new Date(),
                hour: $scope.hour
            }

            $http.post('/api/denunciations', denunciationJson);

            $scope.name = '';
            $scope.address = '';
            $scope.description = '';
            $scope.date = '';
            $scope.hour = '';
        };

        $scope.deleteDenunciation = function(denunciation) {
            $http.delete('/api/denunciations/' + denunciation._id);
        };

        $scope.$on('$destroy', function() {
            socket.unsyncUpdates('denunciation');
        });
    });
