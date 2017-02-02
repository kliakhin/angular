/**
 * Created by Yevgen.Kliakhin on 2/2/2017.
 */

function testCtrl($scope) {

    $scope.title = 'Hello world!';

    $scope.$watch('flag', function (newVal, oldVal) {

    });

    $scope.clickHandler = function () {
        console.log($scope.title);
    }

}


angular.module('app').controller('testCtrl', testCtrl);
