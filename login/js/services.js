window.ENDPOINTS = window.ENDPOINTS || {};
ENDPOINTS.BASE_URL = 'http://del1-vm-kohls:8080/Survey';

app.factory('AuthenticationService',['$http', function ($http) {    
    
return {
    
     // function for validating login.
     validateLogin: function(loginData){
         var validateLogin = {
             method: 'POST',
             url: ENDPOINTS.BASE_URL.concat('/user/login'),
             data: loginData,
             headers: {
                 'Content-Type' : 'application/json;charset=UTF-8'
             } 
         };
         return $http(validateLogin);
      }, 
    }
}]);
