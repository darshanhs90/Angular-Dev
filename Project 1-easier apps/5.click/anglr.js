(function(){
   var app=angular.module("Store",[]);
   app.controller("Ctrl",function($scope){
   $scope.names=[{name:"A",age:20},{name:"B",age:30},{name:"C",age:40}];
   $scope.add=function(){
      $scope.names.push({name:$scope.new_name,age:$scope.new_age});
      $scope.new_name="";
      $scope.new_age="";
      };
   $scope.remove=function(index){
      $scope.names.splice(index,1);
      };
    });  
})();