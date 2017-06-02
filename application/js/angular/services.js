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
                url: ENDPOINTS.BASE_URL.concat('/stats/COMPLETION'),
                headers: {
                    token: token
                }
            };
            
            return $http(getCompletionData);
        },
        
        // for getting Stage wise Data (Aka Second Chart dashboard)
        getStageWiseData: function(token){
            var getStageWiseData = {
                method: 'GET',
                url: ENDPOINTS.BASE_URL.concat('/stats/STAGEWISE'),
                headers: {
                    token: token
                }
            };
            
            return $http(getStageWiseData);
        },
        
         //for getting bandwise data (AKA third chart in dashboard)       **********************************************************************
        getBandWiseData: function(token, band){
            var getBandWiseData = {
                method: 'GET',
                url: 'ENDPOINTS.BASE_URL.concat()',
                params:{
                    band : band
                },
                headers:{
                    token: token  // authentication token and  
                }
            };
            
            return $http(getBandWiseData);
        },
        
        // ********* Caluculating Response Location Wise ********
        
        //Response for noida location
        getNoidaData: function(token){
            var getNoidaData = {
                method: 'GET',
                url: ENDPOINTS.BASE_URL.concat('/stats/COMPLETION'),
                params: {
                    location: 'Noida' 
                },
                headers:{
                    token: token
                }
            };
            return $http(getNoidaData);
        },
        
        //getting Response data from bangalore Location
        getBangaloreData: function(token){
            var getBangaloreData = {
                method: 'GET',
                url: ENDPOINTS.BASE_URL.concat('/stats/COMPLETION'),
                params: {
                    location: 'Bangalore' 
                },
                headers:{
                    token: token
                }
            };
            return $http(getBangaloreData);
        },
        
        //getting data from Chennai location
        getChennaiData: function(token){
            var getChennaiData = {
                method: 'GET',
                url: ENDPOINTS.BASE_URL.concat('/stats/COMPLETION'),
                params: {
                    location: 'Chennai' 
                },
                headers:{
                    token: token
                }
            };
            return $http(getChennaiData);
        },
        
        //getting data for gurgaon location
        getGurgaonData: function(token){
            var getGurgaonData = {
                method: 'GET',
                url: ENDPOINTS.BASE_URL.concat('/stats/COMPLETION'),
                params: {
                    location: 'Gurgaon' 
                },
                headers:{
                    token: token
                }
            };
            return $http(getGurgaonData);
        },
        
        //getting data for nagpur location
        getNagpurData: function(token){
            var getNagpurData = {
                method: 'GET',
                url: ENDPOINTS.BASE_URL.concat('/stats/COMPLETION'),
                params: {
                    location: 'Nagpur' 
                },
                headers:{
                    token: token
                }
            };
            return $http(getNagpurData);
        },
        
        //************** Getting stage Wise Data Location Wise *****************
        
        //getting stage data for noida location
        getNoidaStageData: function(token){
            var getNoidaStageData = {
                method: 'GET',
                url: ENDPOINTS.BASE_URL.concat('/stats/STAGEWISE'),
                params: {
                    location: 'Noida'
                },
                headers: {
                    token: token
                }
            };
            return $http(getNoidaStageData);
        },
        
        //getting stage data for Gurgaon location
        getGurgaonStageData: function(token){
            var getGurgaonStageData = {
                method: 'GET',
                url: ENDPOINTS.BASE_URL.concat('/stats/STAGEWISE'),
                params: {
                    location: 'Gurgaon'
                },
                headers: {
                    token: token
                }
            };
            return $http(getGurgaonStageData);
        },
        
        //getting stage data for Nagpur location
        getNagpurStageData: function(token){
            var getNagpurStageData = {
                method: 'GET',
                url: ENDPOINTS.BASE_URL.concat('/stats/STAGEWISE'),
                params: {
                    location: 'Nagpur'
                },
                headers: {
                    token: token
                }
            };
            return $http(getNagpurStageData);
        },
        
        //getting stage data for chennai location
        getChennaiStageData: function(token){
            var getChennaiStageData = {
                method: 'GET',
                url: ENDPOINTS.BASE_URL.concat('/stats/STAGEWISE'),
                params: {
                    location: 'Chennai'
                },
                headers: {
                    token: token
                }
            };
            return $http(getChennaiStageData);
        },
        
        //getting stage data for chennai location
        getBangaloreStageData: function(token){
            var getBangaloreStageData = {
                method: 'GET',
                url: ENDPOINTS.BASE_URL.concat('/stats/STAGEWISE'),
                params: {
                    location: 'Bangalore'
                },
                headers: {
                    token: token
                }
            };
            return $http(getBangaloreStageData);
        },
        
        // ************************ Getting Data for Band Wise Page ********************
        
        // noida band data
        getNoidaBandData :function(token, band){
            var getNoidaBandData = {
                method: 'GET',
                url: ENDPOINTS.BASE_URL.concat('/stats/STAGEWISE'),
                params: {
                    location: 'Noida',
                    band: band
                },
                 headers: {
                    token: token
                }
            };
            return $http(getNoidaBandData);
        },
        
        // gurgaon band data
        getGurgaonBandData :function(token, band){
            var getGurgaonBandData = {
                method: 'GET',
                url: ENDPOINTS.BASE_URL.concat('/stats/STAGEWISE'),
                params: {
                    location: 'Noida',
                    band: band
                },
                 headers: {
                    token: token
                }
            };
            return $http(getGurgaonBandData);
        },
        
        // Nagpur band data
        getNagpurBandData :function(token, band){
            var getNagpurBandData = {
                method: 'GET',
                url: ENDPOINTS.BASE_URL.concat('/stats/STAGEWISE'),
                params: {
                    location: 'Noida',
                    band: band
                },
                 headers: {
                    token: token
                }
            };
            return $http(getNagpurBandData);
        },
        // gurgaon band data
        getChennaiBandData :function(token, band){
            var getChennaiBandData = {
                method: 'GET',
                url: ENDPOINTS.BASE_URL.concat('/stats/STAGEWISE'),
                params: {
                    location: 'Noida',
                    band: band
                },
                 headers: {
                    token: token
                }
            };
            return $http(getChennaiBandData);
        },
        // gurgaon band data
        getBangaloreBandData :function(token, band){
            var getBangaloreBandData = {
                method: 'GET',
                url: ENDPOINTS.BASE_URL.concat('/stats/STAGEWISE'),
                params: {
                    location: 'Noida',
                    band: band
                },
                 headers: {
                    token: token
                }
            };
            return $http(getBangaloreBandData);
        },
    }
}]);