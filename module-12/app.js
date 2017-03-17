(function() {

'use strict';

angular.module('MsgApp',[])
.controller('MsgController',MSgcontroller);

MSgcontroller.$inject=['$scope'];
function MSgcontroller($scope) {
  $scope.name="Hi Angular";
  $scope.changeLang= "java"

$scope.MyMessage=function() {
  return "MyMessage demo returned";
}

$scope.dispalyLanguage= function () {
  $scope.changeLang= "angular";
}


};



})();
