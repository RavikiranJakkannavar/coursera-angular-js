(function () {

angular.module('myFirstApp',[])
.controller('myFirstController',function ($scope) {
$scope.name = "ravikiran";
$scope.sayHello= function () {
  return "Hello Coursera!";
};
});
})();
