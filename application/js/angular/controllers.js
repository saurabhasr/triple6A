// main Controller on base page
app.controller('myCtrl',function($scope,$rootScope){

    //$scope.name = "Peter";
     $rootScope.token = 'M2U5MDI0YjMyMTg2ODIwMzk0Mzc1OWRkODg5NjMwMWZlOGNhNjAxYyxhYmhpc2hlay5nYW5nd2FyLGZhbHNlLDMxNDE2Mg==';
     
     $scope.value = 0;
     console.log($rootScope.token);
    
     $scope.setbuttonId = function(selected_value){
        $scope.value = selected_value;
    }
     $scope.settabId = function(selected_tab){
        $scope.tab_val = selected_tab;
    }

});

//some Default Configuration For Charts
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
  }]);


app.controller('dashboardController', function($scope){
    
});

app.controller('detailedController',function($scope){
    
 
});


app.controller('chartsCtrl', ['$scope','$rootScope','getChartData', function($scope, $rootScope, getChartData){
    
    //calling completion serivce 
    getChartData.getInfo().success(function(data){
        $scope.chartData = data[1];
        $scope.labels = $scope.chartData.labels;
        $scope.data = $scope.chartData.data;
        
        $scope.options = {
            scales: {
                xAxes: [{
                    barPercentage: 0.5,
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
        }     

    });
}]);

// Completion Chart Dashboard
app.controller('CompletionchartCtrl', ['$scope','$rootScope','getChartsData', function($scope, $rootScope, getChartsData){
    
    //calling completion serivce 
    getChartsData.getCompletionData($rootScope.token).success(function(data){
        $scope.chartData = data;
        $scope.completionData = $scope.chartData.stageScore;
        $scope.labels = ['6Days', '6Weeks', '6Months' ];
        $scope.data = [];
        $scope.options = {
            scales: {
                xAxes: [{
                    barPercentage: 0.5,
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
        }     
        
        // getting values of  CompletionChart
        angular.forEach($scope.completionData, function(key , value){
         
            //$scope.data.push(key.completionPercent);
            $scope.data.push(key.completionPercent);
        }); 
    });
}]);

// StageWise Chart (Dashboard)
app.controller('StageWiseController',['$scope','$rootScope','getChartsData',function($scope,$rootScope,getChartsData){
    
    
    $scope.tab_val = 0;
    
    // for selecting timing tabs
    $scope.settabId = function(selected_tab){
        $scope.tab_val = selected_tab;
    }
    
    //calling stage wise service
    getChartsData.getStageWiseData($rootScope.token).success(function(data){
       console.log("Stage Wise Working");
       $scope.chartData = data;
       $scope.stageWiseData = $scope.chartData.stageScore;
       
        //getting data specific to timing
       $scope.sixDays = $scope.stageWiseData['6 Days'];
       $scope.sixWeeks = $scope.stageWiseData['6 Weeks'];
       $scope.sixMonths = $scope.stageWiseData['6 Months'];
        
        //common labels for charts
        $scope.labels = ['6Days', '6Weeks', '6Months' ];
        
        //variables of data for specific charts
        $scope.sixDaysData = [];
        $scope.sixWeeksData = [];
        $scope.sixMonthsData = [];
       
        //chart data for 5th chart
       // $scope.ragdata = [];
        
        //getting data for 6 days
        angular.forEach($scope.sixDays, function(key , value){
            $scope.sixDaysData.push(key); 
        });
        $scope.sixDaysData.splice(0,1); // removing 6 hour value
        
        //getting data for 6 weeks
        angular.forEach($scope.sixWeeks, function(key , value){
           $scope.sixWeeksData.push(key);
        });
        $scope.sixWeeksData.splice(0,1); // removing 6 hour value
        
        //getting data from 6 months
        angular.forEach($scope.sixMonths, function(key , value){
           $scope.sixMonthsData.push(key);
        });
        $scope.sixMonthsData.splice(0,1); // removing 6 hour value
        
        //setting option values for 5th chart
        $scope.ragOptions = {
            scales: {
                xAxes: [{
                    barPercentage: 0.5,
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
        }
        // calculating heigher value in every stage wise data
//        $scope.ragdata.push(Math.max.apply(Math, $scope.sixDaysData.map(function(item){return item}))); // will return maximum value of red ,amber or green
//        $scope.ragdata.push(Math.max.apply(Math, $scope.sixWeeksData.map(function(item){return item})));// will return maximum value of red amber or green
//        $scope.ragdata.push(Math.max.apply(Math, $scope.sixMonthsData.map(function(item){return item})));// will return maximum value of red amber or green
//        $scope.ragOptions = {
//            scales: {
//                xAxes: [{
//                    barPercentage: 0.5,
//                    gridLines: {
//                        display: false
//                    }
//                    }],
//                yAxes: [{
//                    gridLines: {
//                        display: false
//                       
//                    },
//                     ticks: {
//                      beginAtZero:true
//                    }
//                    }],
//            },
//            chartColors: ['#f20c2a', '#f20c2a','#f1cf0b'] 
//        }
//        
    });
    
}]);

//BandWise Charts (Dashboard)
app.controller('BandWiseController',['$scope','$rootScope','getChartsData',function($scope,$rootScope,getChartsData){
    
}]);





