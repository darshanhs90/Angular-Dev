(function(){
   var app=angular.module("Store",[]);
   app.controller("Ctrl",function($scope){
   $scope.names=[{name:"A",age:20},{name:"B",age:30},{name:"C",age:40}];
    });  
})();