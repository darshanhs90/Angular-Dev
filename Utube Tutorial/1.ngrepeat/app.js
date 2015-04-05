/**
 * Created by darshan on 3/16/2015.
 */
var app=angular.module('myApp',[]);
app.controller('myCtrl',function($scope){
   $scope.val=1;
    $scope.inc=function(){
        $scope.val+=1;
    };
 /*   $scope.myarr=[1,2,3,4,5,5];*/
    $scope.obj={name:"mike",age:"24",place:"texas"};
});
/*
* For production Applications
var app=angular.module('myApp',['controllers']);

angular.module('controllers',[]).controller('myCtrl',function($scope){
   $scope.val=123123;
});*/