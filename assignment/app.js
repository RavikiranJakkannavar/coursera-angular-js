(function() {
'use strict';

angular.module('myApp',[])
.controller('myController',MSgcontroller);

MSgcontroller.$inject=['$scope'];
function MSgcontroller($scope) {
  var comma = ',';


  var monthString = 'Jan,Feb,Mar,Apr,May,Jun,Jul,Aug,Sep,Oct,Nov,Dec';
  $scope.name="empty";

$scope.clickTrigger=function () {
  var findLength=$scope.name.split(',').length;
console.log(findLength);

  if($scope.name == "")
  $scope.name="Please enter data first!";
else if (findLength <= 3) {

  $scope.name="enjoy!";
}
else {
      $scope.name="heavy!";
  }

}

};
})();
