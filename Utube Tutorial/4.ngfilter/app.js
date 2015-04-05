/**
 * Created by darshan on 3/16/2015.
 */
var app=angular.module('myApp',[]);
app.controller('myCtrl',function($scope){
$scope.arr=[{name:"jake",age:40},{name:"kane",age:21},{name:"jane",age:55}];
});
app.filter('charLimit',function(){
    return function(input,length){
      if(!input)
        return '';
      if(!length)
        length= 10;
      if(input.length<=length)
        return input;
      else
        return input.substring(0,length)+'...';
    };
});

app.filter('canDrink',function(){
    return function (data,minAge) {
      var filtered=[];
        if(!minAge)
            minAge=21;
        for(var i=0;i<data.length;i++)
        {
            if(data[i].age>minAge)
                filtered.push(data[i]);
        }
            return filtered;
    };
});
