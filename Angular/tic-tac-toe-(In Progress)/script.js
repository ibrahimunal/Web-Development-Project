var board=angular.module('boardApp',[]);
board.controller('boardCtrl',function($scope){
 
    $scope.clicked = function(){
        $scope.color1='blue';
        $scope.color2='yellow';
    }
})