/**
 * Created by darshan on 3/16/2015.
 */
var app=angular.module('myApp',[]);
app.controller('myCtrl',function($scope) {


});

app.directive('content',function(){
return {
    restrict:'E',
    transclude:true,
    template:'<div>This is the inner content!<div ng-transclude></div></div>',
    replace:true
}
});