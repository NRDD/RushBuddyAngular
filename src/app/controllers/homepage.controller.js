/**
 * Created by Devon on 10/18/2015.
 */

var homepageController = function($scope, UserService){

    $scope.appName = "RushBuddy";

    $scope.user = UserService.name;
    $scope.school = UserService.school;
    $scope.fraternity = UserService.fraternity;

    $scope.init = function(){
        1+1;

    }

    $scope.init();

};



/* recommended */
angular
    .module('rushBuddy.homepage')
    .controller("homepageController", homepageController)
    .filter('unsafe', function($sce) {
        return function(val) {
            return $sce.trustAsHtml(val);
        };
    });;

homepageController.$inject = ['$scope', "UserService"];