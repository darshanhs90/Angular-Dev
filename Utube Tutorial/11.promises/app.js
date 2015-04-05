/**
 * Created by darshan on 3/16/2015.
 */
var app=angular.module('myApp',['ngRoute']);
app.controller('myCtrl',function($scope,$routeParams,$q,$timeout) {

$scope.mydata="old data";

var defer=$q.defer();
defer.promise
	.then(function(val){
		$scope.mydata=val;
	});
$timeout(function(){
	defer.resolve("New data");
},3000);
});
