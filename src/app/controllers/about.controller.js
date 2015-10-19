/**
 * Created by djdapz on 10/19/15.
 */

var aboutController = function($scope, AboutService){

    $scope.name = AboutService.name;
    $scope.version = AboutService.version;
    $scope.owner = AboutService.owner;

};

/* recommended */
angular
    .module('rushBuddy.about')
    .controller("aboutController", aboutController);

aboutController.$inject = ['$scope', "AboutService"];