(function () {
'use strict';

angular.module('NameCaculator',[])
.controller('NameCalculatorController',function ($scope) {

$scope.name = "";
$scope.totalValue=0;

$scope.displayNumeric = function () {
  var totalValue =calculateNemricForString($scope.name); //get the total value
  $scope.totalValue=totalValue;
};

function calculateNemricForString(string) {
  var totalStringValue=0;
  for(var i=0;i<string.length;i++)
  {
    totalStringValue += string.charCodeAt(i);
  }
  return totalStringValue;
}

});
})();
