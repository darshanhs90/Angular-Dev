(function(){
   var app=angular.module("Store",[]);
   app.controller("Ctrl",function($scope){
   $scope.clean=function(){
     $scope.val=$scope.val.replace(/[^a-zA-Z0-9]/,'');
   };
    });
   
   
   app.controller("Contacts",function($scope){
   $scope.people=[{name:'asd',age:20},{name:'asd3',age:30},{name:'asd4',age:40}];
   
   });
})();