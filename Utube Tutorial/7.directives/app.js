/**
 * Created by darshan on 3/16/2015.
 */
var app=angular.module('myApp',[]);
app.controller('myCtrl',function($scope) {

$scope.callme=function(msg){
    console.log("you gave me :"+msg);
}
});

/*The refactored way*/
app.directive('photo',function(){
    return{
        restrict:'AEC',//element directive,can be A(attr-default),C-class,M-comment
        template:'<figure>'+
                    '<img width="500px" ng-src="{{photoSrc}}"/>'+
                    '<figcaption>{{caption}}</figcaption>'+
                  '</figure>',
        replace:true,
        scope:{
            caption:'@',
            photoSrc:'@',
            localFunc:'&'
        }
    }
});




/* The bigger way
app.directive('photo',function(){
   return{
       restrict:'E',//element directive
       template:'<figure><img width="500px"/><figcaption/></figure>',
       replace:true,//whether to replace when substituted
       link:function(scope,element,attrs){//transfers data between model and directive
           attrs.$observe('caption',function(value){
               element.find('figcaption').text(value);
           });
           attrs.$observe('photoSrc',function(value){
               element.find('img').attr('src',value);
           });
       }
   }
});*/


