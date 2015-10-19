(function(angular) {

    angular.module("rushBuddy")
        .filter('urlEncode', function(){
            return window.encodeURIComponent;
        }).config(['$routeProvider', function($routeProvider) {
            $routeProvider.
                when('/about', {
                    templateUrl: 'partials/about.html',
                    controller: 'aboutController'}).
                when('/home', {
                    templateUrl: 'partials/home.html',
                    controller: 'homepageController'}).
                otherwise({
                    redirectTo: '/home'
                });

        }]);


}(angular));