/**
 * Created by darshan on 3/16/2015.
 */
var app=angular.module('myApp',[]);
app.controller('myCtrl',function($scope) {

$scope.callme=function(msg){
    console.log("you gave me :"+msg);
}
});

app.directive('row',function(){
    return{
        restrict:'E',//element directive,can be A(attr-default),C-class,M-comment
        compile:function(tElement,attrs){
          var content=angular.element('<div class="row"></div>');
          content.append(tElement.contents());
          tElement.replaceWith(content);
        }
    }
});


app.directive('column',function(){
    return{
        restrict:'E',//element directive,can be A(attr-default),C-class,M-comment
        compile:function(tElement,attrs){
        var content=angular.element('<div class="class"></div>');
        content.append(tElement.contents());
        tElement.replaceWith(content);
        }
    }
});

