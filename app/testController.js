/**
 * Created by Yevgen.Kliakhin on 2/2/2017.
 */

function testCtrl($scope) {

    $scope.title = 'Hello world!';

}

angular.module('app').controller('testCtrl', testCtrl);
