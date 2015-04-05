(function(){
   var app=angular.module("Store",[]);
   app.controller("Ctrl",function($scope){
   $scope.message="Hello";
   $scope.click=function(){
     alert($scope.message); 
   };
   });
   /*app.directive('click',function(){
      return{
         restrict:'A',
         link:function(scope,element,attrs){
            element.bind('click',function(){
               scope.$eval(attrs.click)
               })
         }
         };*/
   app.directive('clicker',function(){
      return{
         restrict:'E',
         replace:true,
         transclude:true,
         template:'<button ng-transclude></button>',
         link:function(scope,element,attrs){
            element.bind('click',function(){
               scope.$eval(attrs.click)
               })
         }
         };
      
      })
})();