window.ENDPOINTS = window.ENDPOINTS || {};

ENDPOINTS.BASE_URL = 'http://del1-vm-kohls:8080/Survey';

app.service('getChartData',['$http', function($http){
        this.getInfo = function(){
            return $http.get('./../json/charts_data.json');  
        };
    }]);

app.factory('getChartsData',['$http', function($http){
    
    return {
        
        // for getting completion data(AKA First chart)
        getCompletionData: function(token){
            var getCompletionData = {
                method: 'GET',
                url: './../json/realcompletionData.json', // ENDPOINTS.BASE_URL.concat('stats/COMPLETION')
                headers:{
                    token: token
                }
            };
            
            return $http(getCompletionData);
        },
        
        // for getting Stage wise Data (Aka Second Chart dashboard)
        getStageWiseData: function(token){
            var getStageWiseData = {
                method: 'GET',
                url: './../json/realstageData.json', // ENDPOINTS.BASE_URL.concat('stats/STAGEWISE')
                headers: {
                    token: token
                }
            };
            
            return $http(getStageWiseData);
        },
        
         //for getting bandwise data (AKA third chart in dashboard)
        getBandWiseData: function(token){
            var getBandWiseData = {
                method: 'GET',
                url: './../json/realBandWiseData' , // ENDPOINTS.BASE_URL.concat()
            };
            
            return $http(getBandWiseData);
        }
        
    }
}]);