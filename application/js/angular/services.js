app.service('getChartData',['$http', function($http){
        this.getInfo = function(){
            return $http.get('./../json/charts_data.json');  
        };
    }]);
