//config or routing
app.config(['$routeProvider',function($routeProvider){
  $routeProvider
  //routing 
  .when('/dashboard',    {title:'ScoreData',templateUrl:'dashboard-page.html',controller:'dashboardController'})
  .when('/detailed',    {title:'ScoreData',templateUrl:'detailed-page.html',controller:'detailedController'})

  //default page 
  .otherwise({ redirectTo:'/dashboard'});
}])
.run(['$location', '$rootElement', '$window', '$rootScope', function($location, $rootElement, $window, $rootScope) {
  
  // For closing the opened pop ups when route changes
  $rootScope.$on('$routeChangeSuccess', function( ) {
    //Write code here ... 
    // if(localStorage.auth == "true"){
    //  console.log("Yes");
    // }
    // else{
    //  console.log("No");
    //  location.href = "../../login/content/index.html"
    // }
  });

}]);