(function(){
   var app=angular.module("Store",[]);
   app.controller("filter",function($scope){
   $scope.text="Hello,.;'.; world;''asd"
   });
   app.filter('clean',function(){
      return function(input,separator){
         return input.replace(/[^a-z0-9]/ig,'-')
                     .replace(/\s+/,(separator||'-'))
                     .replace(/-+/ig,(separator||'-'))
                     ;
         
      }
      
      })
})();