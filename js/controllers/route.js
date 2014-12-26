angular.module('MyTabs',['ngRoute'])
.config(airrouter);
function airrouter($routeProvider)
{
$routeProvider
.when('/a',{templateUrl:'index.html',controller:'AppCtrl'});

}

