(function() {
'use strict';

angular.module('DIapp',[])
.controller('myDIController',DIcontroller);

function DIcontroller($scope,
                      $filter,
                      $injector) {
  $scope.name="ravikiran";

$scope.upper=function () {
  var upCaseLetter = $filter('uppercase');
  $scope.name= upCaseLetter($scope.name);
};


console.log($injector.annotate(DIcontroller));

}

function AnnotateMe(name,job,blah){
  return "blah!";
}

console.log(AnnotateMe.toString());


})();
