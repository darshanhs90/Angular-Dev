var app=angular.module('myApp',['app.angularGit']);
app.controller('myCtrl',function($scope,AngularGit) {


var params={category:'commits',sha:'90e7a4558490f7ffd33142844b9153a5ed00e86'};
console.log(AngularGit.get(params));

});

angular.module('app.angularGit',['ngResource'])
	.factory('AngularGit',function($resource){
		return $resource('https://api.github.com/repos/angular/angular.js:/category/:sha');
});
