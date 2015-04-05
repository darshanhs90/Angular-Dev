/**
 * Created by darshan on 3/16/2015.
 */
var app=angular.module('myApp',['ngRoute']);
app.controller('Mainctrl',function($scope) {

$scope.$on('myEvent',function(event,src){console.log('Main event',src);});

$scope.broad=function(origin){
	$scope.$broadcast('myEvent',origin);
};
$scope.emit=function(origin){
	$scope.$emit('myEvent',origin);
};
});

app.controller('Midctrl',function($scope) {
$scope.$on('myEvent',function(event,src){console.log('Middle event',src);});

$scope.broad=function(origin){
	$scope.$broadcast('myEvent',origin);
};
$scope.emit=function(origin){
	$scope.$emit('myEvent',origin);
};
});

app.controller('Btmctrl',function($scope) {
$scope.$on('myEvent',function(event,src){console.log('Bottom event',src);});

$scope.broad=function(origin){
	$scope.$broadcast('myEvent',origin);
};
$scope.emit=function(origin){
	$scope.$emit('myEvent',origin);
};
});