app.directive('bandWise',function(){
    return{
        restrict : 'E',
        templateUrl: 'templates/directives/band-wise.html'
    };                                                   
});

app.directive('ragStatus', function(){
    return{
        restrict: 'E',
        templateUrl:'templates/directives/rag-status.html'
    };
});


app.directive("responsePage", function() {
    return {
        restrict:"E",
        templateUrl: "templates/directives/response-page.html"
    };
});

app.directive('stageWise',function(){
    return{
        restrict : 'E',
        templateUrl: 'templates/directives/stage-wise.html'
    };                                                   
});


app.directive('stakeHolder',function(){
    return{
        restrict : 'E',
        templateUrl: 'templates/directives/stake-holder.html'
    };                                                   
});
