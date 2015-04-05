(function(){
   var app=angular.module("Store",[]);
   app.controller("filter",function($scope){
   $scope.price=11.50;
   $scope.amount=10.1234567890;
   $scope.message="Hello, world!";
   $scope.date=new Date();
   $scope.names=["Tom","Laura","Zol","joffrey"];
   $scope.people=[{firstname:"Tom",lastname:"asdasd"},
                  {firstname:"Joffrey",lastname:"gameoOfthrones"}];
    });
})();