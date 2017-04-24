var app = angular.module('myApp',[]);

app.controller('myCtrl', function($scope){

    $scope.username = "";
    $scope.password = "";
    $scope.login = false;

    $scope.checkLogin = function(){

        if(
            ($scope.username=="admin" && $scope.password == "password")||
            ($scope.username=="sanjana" && $scope.password == "password")
        ){
            $scope.login = true;
            localStorage.setItem('auth', 'true');
            location.href = "../../application/content/index.html"
        }
        else{
            $scope.login = false;
            localStorage.setItem('auth', 'false');
            sweetAlert("", "Invalid Username or Password", "error");
        }
    }


});

