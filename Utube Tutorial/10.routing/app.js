/**
 * Created by darshan on 3/16/2015.
 */
var app=angular.module('myApp',['ngRoute']);
app.controller('myCtrl',function($scope,$routeParams) {
	console.log($routeParams);
$scope.mydata="This is my data";

});

app.config(function($routeProvider){
	$routeProvider
		.when('/',{templateUrl:'view1.html',controller:'myCtrl'})
		.when('/new',{templateUrl:'view2.html',controller:'myCtrl'})
		.when('/test',{redirectTo:function(routeParams,path,search){
			console.log(routeParams,path,search);
			return '/test/junk';
		}//'/test/junk'
	})
		.when('/test/:myparam',{templateUrl:'view2.html',controller:'myCtrl'})
		.otherwise({template:'Couldnt find a route'})
		;
});