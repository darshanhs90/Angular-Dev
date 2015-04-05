(function(){
  var app=angular.module('StoreApp',[]);
  app.controller('Ctrl',function($scope){
   $scope.name="Darshan";
   $scope.age="24";
   
  });
    app.controller('AnotherCtrl',function($scope){
   $scope.name="Darshan";
   $scope.age="24";
   $scope.$watch('name',function(){
      console.log($scope.name);
      });
  });
})();