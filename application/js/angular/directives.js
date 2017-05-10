app.directive('dashboardPage', function(){
    return{
        restrict: 'E',
        templateUrl:'dashboard-page.html'
    };
});

app.directive('bandWise',function(){
    return{
        restrict : 'E',
        templateUrl: 'band-wise.html'
    };                                                   
});

app.directive('ragStatus', function(){
    return{
        restrict: 'E',
        templateUrl:'rag-status.html'
    };
});


app.directive("responsePage", function() {
    return {
        restrict:"E",
        templateUrl: "response-page.html"
    };
});

app.directive('stageWise',function(){
    return{
        restrict : 'E',
        templateUrl: 'stage-wise.html'
    };                                                   
});


app.directive('stakeHolder',function(){
    return{
        restrict : 'E',
        templateUrl: 'stake-holder.html'
    };                                                   
});
