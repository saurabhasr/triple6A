// main Controller on base page
app.controller('myCtrl',function($scope){

    //$scope.name = "Peter";
    
     $scope.value = 0;
     $scope.setbuttonId = function(selected_value){
        $scope.value = selected_value;
    }

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
    
 
});

app.controller('chartsCtrl', ['$scope','getChartData', function($scope, getChartData){
    getChartData.getInfo().success(function(data){
        $scope.chartData = data;
        $scope.labels = $scope.chartData[0].labels;
        $scope.data = $scope.chartData[0].data;
        $scope.options = {
            scales: {
                xAxes: [{
                    gridLines: {
                        display: false
                    
                    }
                    }],
                yAxes: [{
                    gridLines: {
                        display: false
                       
                    },
                     ticks: {
                      beginAtZero:true
                    }
                    }],
               responsive: true,
                maintainAspectRatio: true,
        barDatasetSpacing: 1,
        barShowStroke: true,
        barStrokeWidth : 2,
        barValueSpacing : 5
            }
        };
        $scope.colours= [{fillColor:["#f20c2a", "#f1cf0b", "#12cc46"]}]
        console.log("Data mila"+ $scope.data);
    });
}]);