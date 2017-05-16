 app.factory('loginValidation',['$http', function ($http) {
            
       return{
            var apiUrl = 'http://del1-vm-kohls:8080/Survey';
           
            // FOR VALIDATING USER
            validateUser:function(credentials){
                var validateUserer = {
                  url: apiUrl+'/user/login',
                  method: 'POST',
                  data: credentials,
                  headers: {'Content-Type': 'application/json',}
                }
                return $http(validateUser);
            }
        }                  
    }]);
