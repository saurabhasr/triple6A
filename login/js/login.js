var app = angular.module('myApp',[]);
    
app.controller('myCtrl', ['$scope', '$rootScope','$http', 'AuthenticationService', function($scope, $rootScope, $http, AuthenticationService){

    $scope.username = "";
    $scope.password = "";
    $scope.loginData = {
        userId: "",
        password: ""
    };
    $rootScope.login = false;
    $rootScope.token= "";
    $rootScope.userData = {}; // user data recieved after login

    $scope.checkLogin = function(){
        
        $scope.loginData.userId = $scope.username;
        $scope.loginData.password = $scope.password; 
        
        // calling Authentication Service
        AuthenticationService.validateLogin($scope.loginData)
            .success(function(response){
                    $rootScope.userData = response;
                    console.log($rootScope.userData);
                    console.log(response);
                    $rootScope.token = response.token;
                    $rootScope.login = true;
                    location.href = "../../application/content/index.html";
            }).error(function(error){
                     $scope.login = false;
                     sweetAlert("", "Invalid Username or Password", "error");
            });
            
    }


}]);
