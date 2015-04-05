/**
 * Created by darshan on 3/16/2015.
 */
var app=angular.module('myApp',[]);
app.controller('myCtrl',function($scope,constService,valService,myFactory,myService,providerTest){
/*Constants and Values*/
/*console.log(constService);
console.log(valService);
constService.attr="something new";
console.log(constService);*/

/*Factories*/
console.log(myFactory.getData());
myFactory.addData(" bla bla bla");
console.log(myFactory.getData());
/*Service*/
console.log(myService.getData());
myService.addData(" bla bla bla");
console.log(myService.getData());
/*Providers*/
console.log(providerTest.getData());
providerTest.addData(" bla bla bla");
console.log(providerTest.getData());

});
app.constant('constService',{attr:"this is const data!"});
app.value('valService',function(){
    return "this is val service"
});

app.factory('myFactory',function(){
   var myString="this is temp data";
   var addToString=function(newStr){
       myString+=newStr;
   }
   return {
       getData:function(){
           return "String contains :"+myString
       },
       addData:addToString
   }
});

app.service('myService',function(){
    var myString="this is temp data";
    var addToString=function(newStr){
        myString+=newStr;
    };
    this.getData=function(){
            return "String contains :"+myString
    };
    this.addData=addToString;
});

app.provider('providerTest',function() {
    var myString = "this is temp data";
    var addToString = function (newStr) {
        myString += newStr;
    }
    return {
        $get: function () {
            return {
                getData: function () {
                    return "String contains :" + myString
                },
                addData: addToString
            }
        }
    }
});

