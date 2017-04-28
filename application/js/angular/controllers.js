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

app.controller('chartsCtrl', ['$scope','getChartData', function($scope, getChartData){
    getChartData.getInfo().success(function(data){
        $scope.chartData = data;
        $scope.labels = $scope.chartData[0].labels;
        $scope.data = $scope.chartData[1].data;
        $scope.color = $scope.chartData[2].color;
        console.log("Data aa chuka");
        $scope.test = "abhishek";
    });
}]);