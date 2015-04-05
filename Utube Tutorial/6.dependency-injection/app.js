/**
 * Created by darshan on 3/16/2015.
 */
var app=angular.module('myApp',[]);
app.controller('myCtrl',['$scope','DataService',function(b,c) {
    b.myData= c.data;
}]);
app.factory('DataService',function(){
    return {
        data:"This is service data"
    }
});