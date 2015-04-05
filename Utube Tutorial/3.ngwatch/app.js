/**
 * Created by darshan on 3/16/2015.
 */
var app=angular.module('myApp',[]);
app.controller('myCtrl',function($scope){
    $scope.mydata={val:"jake"};
    $scope.$watch('mydata.val',function(newval,oldval){
        $scope.mydata.toolong=newval.length>10;
    });




});
