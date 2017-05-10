// main Controller on base page
app.controller('myCtrl',function($scope){

    //$scope.name = "Peter";
    
     $scope.value = 0;
  
    
     $scope.setbuttonId = function(selected_value){
        $scope.value = selected_value;
    }
     $scope.settabId = function(selected_tab){
        $scope.tab_val = selected_tab;
    }

});


app.controller('dashboardController', function($scope){
    
    $scope.tab_val = 0;
    
    $scope.settabId = function(selected_tab){
        $scope.tab_val = selected_tab;
    }
});

app.controller('detailedController',function($scope){
    
 
});

app.config(['ChartJsProvider', function (ChartJsProvider) {
    
    // Configure all charts
    ChartJsProvider.setOptions({
      chartColors: ['#f20c2a', '#f1cf0b','#12cc46'],
      responsive: true
    });
    
    // Configure all line charts
    ChartJsProvider.setOptions('line', {
      showLines: false
    });
  }])

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
            },
            thickness: 5
        };
        console.log("Data mila"+ $scope.data);
    });
}]);