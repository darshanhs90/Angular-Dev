(function(){
   var app=angular.module("Store",[]);
   app.config(function($routeProvider){
      $routeProvider
         .when('/contact/:index ',{
      templateUrl:'edit.html',
      controller: 'Edit'
      })
      .when('/',{
       templateUrl:'list.html'  
         })
   }).controller('Edit',function($scope,$routeParams){
      $scope.contact=$scope.contacts[$routeParams.index];
      $scope.index=$routeParams.index;
    }).controller("Contacts",function($scope){
      $scope.contacts=[
      {name:'1om',number:'111111'},
      {name:'2om',number:'222222'},
      {name:'3om',number:'333333'}
   ]
    });
})();