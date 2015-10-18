/**
 * Created by Devon on 10/18/2015.
 */

var homepageController = function($scope){

    $scope.appName = "RushBuddy";

};

/* recommended */
angular
    .module('rushBuddy.homepage')
    .controller("homepageController", homepageController);

homepageController.$inject = ['$scope'];