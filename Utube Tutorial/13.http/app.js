/**
 * Created by darshan on 3/16/2015.
 */
var app=angular.module('myApp',[]);
app.controller('myCtrl',function($scope,$http) {
$scope.getter=function(){
	$http.get('https://api.github.com/users/angular')
			.success(function(data,status,headers,config){
				console.log(status);
				console.log(data);
			})
			.error(function(data,status,headers,config){
				console.log(status);
				console.log(data);
			});

/*	$http({method:'POST',url:'https://api.github.com/users/angular'})
			.success(function(data,status,headers,config){
				console.log(status);
				console.log(data);
			})
			.error(function(data,status,headers,config){
				console.log(status);
				console.log(data);
			});*/



}
});