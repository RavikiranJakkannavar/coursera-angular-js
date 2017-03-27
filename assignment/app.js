(function() {
'use strict';

angular.module('myApp',[])
.controller('myController',MSgcontroller);

MSgcontroller.$inject=['$scope'];
function MSgcontroller($scope) {
  var comma = ',';

  $scope.name="";

$scope.clickTrigger=function () {
  var findLength=$scope.name.split(',').length;
console.log(findLength);

  if($scope.name == "")
  $scope.name="Empty!";
  else if (findLength <= 3) {
  $scope.name="Enjoy!";
  }
  else {
  $scope.name="Too much!";
  }
  
}

};
})();
