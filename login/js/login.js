var app = angular.module('myApp',[]);

app.controller('myCtrl','$http','loginValidation', function($scope){

    $scope.username = "";
    $scope.password = "";
    $scope.login = false;

    $scope.checkLogin = function(){
        
        var user= {
            userId : $scope.username,
            password: $scope.password
        }
        
        //calling post method
        loginValidation.validateUser(user);                        
    }


});

