// main Controller on base page
app.controller('myCtrl',function($scope){

    //$scope.name = "Peter";

});


app.controller('dashboardController', function($scope){
    
    $scope.value = 0;
    $scope.tab_val = 0;
    
    $scope.setbuttonId = function(selected_value){
        $scope.value = selected_value;
    }
    $scope.settabId = function(selected_tab){
        $scope.tab_val = selected_tab;
    }
});

app.controller('detailedController',function($scope){
    
     $scope.value = 0;
     $scope.setbuttonId = function(selected_value){
        $scope.value = selected_value;
    }
 
});
    
